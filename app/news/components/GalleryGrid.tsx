"use client";

import { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import type { CloudinaryImage } from "@/lib/cloudinary";

import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface GalleryGridProps {
    images: CloudinaryImage[];
    maxImages?: number;
}

export default function GalleryGrid({ images, maxImages }: GalleryGridProps) {
    const [lightboxIndex, setLightboxIndex] = useState(-1);

    const displayImages = maxImages ? images.slice(0, maxImages) : images;

    const photos = displayImages.map((img) => ({
        src: img.url,
        width: img.width,
        height: img.height,
        key: img.public_id,
    }));

    const lightboxSlides = images.map((img) => ({
        src: img.url,
        width: img.width,
        height: img.height,
    }));

    return (
        <div>
            <RowsPhotoAlbum
                photos={photos}
                targetRowHeight={250}
                onClick={({ index }) => setLightboxIndex(index)}
            />

            <Lightbox
                slides={lightboxSlides}
                open={lightboxIndex >= 0}
                index={lightboxIndex}
                close={() => setLightboxIndex(-1)}
                plugins={[Zoom, Thumbnails]}
            />
        </div>
    );
}
