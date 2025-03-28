import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {Home, Calendar, Hammer, Info, Merge} from "lucide-react";

const MainHeader: React.FC = () => {
    return (
        <div>
            {/* Fixed navigation section */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b">
                <div className="container mx-auto px-5 py-3 flex items-center justify-between max-w-5xl">
                    <div className="flex items-center mr-6">
                        <Image
                            src="/asiLogo.svg"
                            alt="ASI Logo"
                            width={120}
                            height={120}
                            priority
                            className="object-contain"
                        />
                    </div>
                    <NavigationMenu>
                        <NavigationMenuList>
                            {/* Home link - FIXED */}
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        <Home className="mr-2 h-4 w-4"/> Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            {/* About dropdown - FIXED */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger><Info className="mr-2 h-4 w-4"/> About</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        <li>
                                            <Link href="/about" passHref legacyBehavior>
                                                <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                    <div className="text-sm font-medium leading-none">About ASI</div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Learn more about the history and mission of ASI
                                                    </p>
                                                </NavigationMenuLink>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/leadership" passHref legacyBehavior>
                                                <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                    <div className="text-sm font-medium leading-none">Leadership</div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Executive Committee and leadership team
                                                    </p>
                                                </NavigationMenuLink>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/constitution" passHref legacyBehavior>
                                                <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                    <div className="text-sm font-medium leading-none">Constitution</div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Governing document of ASI UK
                                                    </p>
                                                </NavigationMenuLink>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact-us" passHref legacyBehavior>
                                                <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                    <div className="text-sm font-medium leading-none">Contact Us</div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Get in touch with ASI UK
                                                    </p>
                                                </NavigationMenuLink>
                                            </Link>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Join dropdown - FIXED */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger><Merge className="mr-2 h-4 w-4"/> Join</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        <li>
                                            <Link href="/membership" passHref legacyBehavior>
                                                <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                    <div className="text-sm font-medium leading-none">Membership Information</div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Learn how you can join the mission of sharing Christ in the marketplace
                                                    </p>
                                                </NavigationMenuLink>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"https://forms.gle/WYLiMMsVrP8qjYdj6"}
                                                  target="_blank"
                                                  rel="noopener noreferrer">
                                                <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                    <div className="text-sm font-medium leading-none">Apply to be an ASI member</div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Application form to join as a member of ASI UK
                                                    </p>
                                                </NavigationMenuLink>
                                            </Link>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Convention link - FIXED */}
                            <NavigationMenuItem>
                                <Link href="/convention" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        <Calendar className="mr-2 h-4 w-4"/> Convention
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            {/* Projects link - FIXED */}
                            <NavigationMenuItem>
                                <Link href="/projects" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        <Hammer className="mr-2 h-4 w-4"/> Projects
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>

            {/* This pushes content below the fixed navigation */}
            <div className="h-32"></div>
        </div>
    );
};

export default MainHeader;