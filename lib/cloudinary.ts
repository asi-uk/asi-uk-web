import { v2 as cloudinary } from "cloudinary";
import { unstable_cache } from "next/cache";

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export interface CloudinaryImage {
    public_id: string;
    url: string;
    width: number;
    height: number;
    format: string;
}

async function fetchFolderImages(folder: string): Promise<CloudinaryImage[]> {
    const images: CloudinaryImage[] = [];
    let nextCursor: string | undefined;

    do {
        const result = await cloudinary.search
            .expression(`folder:"${folder}" AND resource_type:image`)
            .sort_by("public_id", "asc")
            .max_results(100)
            .next_cursor(nextCursor || "")
            .execute();

        for (const resource of result.resources) {
            images.push({
                public_id: resource.public_id,
                url: resource.secure_url,
                width: resource.width,
                height: resource.height,
                format: resource.format,
            });
        }

        nextCursor = result.next_cursor;
    } while (nextCursor);

    return images;
}

export const getCloudinaryFolderImages = unstable_cache(
    fetchFolderImages,
    ["cloudinary-folder-images"],
    { revalidate: 3600 }
);
