// app/components/ProfileCard.tsx
'use client'

import { CldImage } from 'next-cloudinary';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

interface ProfileProps {
    imageSrc: string;
    name: string;
    title: string;
    email: string;
    bio: string;
}

const Profile = ({ imageSrc, name, title, email, bio }: ProfileProps) => {
    return (
        <Dialog>
            <DialogTrigger>
                <div className="w-full max-w-[300px] h-full p-3 cursor-pointer transition ease-out duration-300 hover:bg-accent rounded-2xl">
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex-shrink-0 w-[200px] h-[200px]">
                            <CldImage
                                src={imageSrc}
                                width="200"
                                height="200"
                                crop={{
                                    type: 'auto',
                                    source: true
                                }}
                                alt={name}
                                className="rounded-full"
                            />
                        </div>
                        <div className="text-center w-full">
                            <h1 className="text-asi-blue font-bold text-base md:text-lg">{name}</h1>
                            <h2 className="text-gray-700 text-base">{title}</h2>
                        </div>
                    </div>
                </div>
            </DialogTrigger>

            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <VisuallyHidden.Root>
                    <DialogTitle>
                        {name}
                    </DialogTitle>
                </VisuallyHidden.Root>
                <div className="flex flex-col items-center gap-6 p-4">
                    <div className="flex-shrink-0 w-[150px] h-[150px] md:w-[200px] md:h-[200px]">
                        <CldImage
                            src={imageSrc}
                            width="200"
                            height="200"
                            crop={{
                                type: 'auto',
                                source: true
                            }}
                            alt={name}
                            className="rounded-full"
                        />
                    </div>
                    <div className="w-full max-w-xl">
                        <div className="text-center mb-4">
                            <h1 className="text-asi-blue font-bold text-lg md:text-xl">{name}</h1>
                            <h2 className="font-medium text-base md:text-lg">{title}</h2>
                            {/*<h3 className="font-light text-base">{email}</h3>*/}
                        </div>
                        <p className="text-gray-700 text-sm md:text-base whitespace-pre-wrap">{bio}</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default Profile;