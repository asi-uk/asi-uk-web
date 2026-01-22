'use client';

import React, {useState} from 'react';
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
import {
    Sheet,
    SheetContent, SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {Home, Calendar, Hammer, Info, Merge, Menu, Heart} from "lucide-react";
import {Button} from "@/components/ui/button";
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const MainHeader: React.FC = () => {
    const [open, setOpen] = useState(false);

    // Mobile navigation items
    const MobileNavItem = ({href, icon, children}: {
        href: string,
        icon: React.ReactNode,
        children: React.ReactNode
    }) => (
        <Link
            href={href}
            onClick={() => setOpen(false)}
            className="flex items-center py-2 px-3 text-sm rounded-md hover:bg-accent"
        >
            {icon}
            <span className="ml-2">{children}</span>
        </Link>
    );

    return (
        <div className="fixed top-0 z-50 w-full print:hidden bg-white border-b shadow-sm">
                <div
                    className="px-3 py-3 flex items-center justify-between w-full my-2 md:my-0 md:container md:mx-auto md:max-w-5xl">

                    {/* Left side - empty placeholder on mobile, logo on desktop */}
                    <div className="w-8 h-8 md:w-auto md:h-auto z-10">
                        {/* Desktop logo - visible only on md+ screens */}
                        <div className="hidden md:block">
                            <Link href="/">
                                <Image
                                    src="/asiLogo.svg"
                                    alt="ASI Logo"
                                    width={120}
                                    height={120}
                                    priority
                                    className="h-[80px] object-contain cursor-pointer"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Centered logo for mobile */}
                    <div className="absolute left-0 right-0 mx-auto flex justify-center md:hidden">
                        <Link href="/">
                            <Image
                                src="/asiLogo.svg"
                                alt="ASI Logo"
                                width={80}
                                height={80}
                                priority
                                className="h-[60px] object-contain cursor-pointer"
                            />
                        </Link>
                    </div>

                    <div className="flex items-center gap-2 z-10">
                        {/* Desktop Navigation - hide on mobile */}
                        <div className="hidden md:block z-50">
                            <NavigationMenu>
                                <NavigationMenuList className="flex items-center gap-1">
                                    {/* Home link */}
                                    <NavigationMenuItem>
                                        <Link href="/" legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                <Home className="mr-2 h-4 w-4"/> Home
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>

                                    {/* About dropdown */}
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger><Info
                                            className="mr-2 h-4 w-4"/> About</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid gap-3 p-4 w-[280px] md:w-[500px] lg:w-[600px] md:grid-cols-2">
                                                <li>
                                                    <Link href="/about" passHref legacyBehavior>
                                                        <NavigationMenuLink
                                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                            <div className="text-sm font-medium leading-none">About
                                                                ASI
                                                            </div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                Learn more about the history and mission of ASI
                                                            </p>
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/leadership" passHref legacyBehavior>
                                                        <NavigationMenuLink
                                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                            <div
                                                                className="text-sm font-medium leading-none">Leadership
                                                            </div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                Executive Committee and leadership team
                                                            </p>
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/constitution" passHref legacyBehavior>
                                                        <NavigationMenuLink
                                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                            <div
                                                                className="text-sm font-medium leading-none">Constitution
                                                            </div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                Governing document of ASI UK
                                                            </p>
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/contact-us" passHref legacyBehavior>
                                                        <NavigationMenuLink
                                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                            <div className="text-sm font-medium leading-none">Contact
                                                                Us
                                                            </div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                Get in touch with ASI UK
                                                            </p>
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                    {/* Join dropdown */}
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger><Merge
                                            className="mr-2 h-4 w-4"/> Join</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid gap-3 p-4 w-[280px] md:w-[500px] lg:w-[600px] md:grid-cols-2">
                                                <li>
                                                    <Link href="/membership" passHref legacyBehavior>
                                                        <NavigationMenuLink
                                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                            <div className="text-sm font-medium leading-none">Membership
                                                                Information
                                                            </div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                Learn how you can join the mission of sharing Christ in
                                                                the marketplace
                                                            </p>
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <NavigationMenuLink asChild
                                                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                        <Link
                                                            href="https://forms.gle/WYLiMMsVrP8qjYdj6"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <div className="text-sm font-medium leading-none">Apply to
                                                                be an ASI member
                                                            </div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                Application form to join as a member of ASI UK
                                                            </p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                    {/* Projects link */}
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

                        {/* Desktop Donation Button - visible only on md+ screens */}
                        <div className="hidden md:block">
                            <Button variant="outline" size="sm" className="ml-4 bg-white border-primary text-primary hover:bg-asi-blue hover:text-white">
                                <Link href="/donate"
                                      className="flex items-center gap-1">
                                    <Heart className="h-4 w-4" /> Donate
                                </Link>
                            </Button>
                        </div>

                        {/* Mobile Navigation - show on mobile only */}
                        <div className="block md:hidden">
                            <Sheet open={open} onOpenChange={setOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                        <span className="sr-only">Toggle menu</span>
                                        <Menu className="h-5 w-5"/>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="w-[280px] sm:max-w-xs p-0">
                                    <VisuallyHidden>
                                        <SheetTitle>
                                            Menu
                                        </SheetTitle>
                                    </VisuallyHidden>
                                    <div className="flex flex-col h-full py-4">
                                        <div className="px-4 py-2 border-b">
                                            <h2 className="text-lg font-semibold">Menu</h2>
                                        </div>
                                        <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-2">
                                            <MobileNavItem href="/"
                                                           icon={<Home className="h-4 w-4"/>}>Home</MobileNavItem>

                                            <Accordion type="single" collapsible className="w-full">
                                                <AccordionItem value="about" className="border-b-0">
                                                    <AccordionTrigger
                                                        className="py-2 px-3 text-sm font-normal rounded-md hover:bg-accent">
                                                        <div className="flex items-center">
                                                            <Info className="h-4 w-4 mr-2"/>
                                                            About
                                                        </div>
                                                    </AccordionTrigger>
                                                    <AccordionContent>
                                                        <div className="flex flex-col gap-1 pl-6">
                                                            <Link href="/about" className="py-2 text-sm hover:underline"
                                                                  onClick={() => setOpen(false)}>
                                                                About ASI
                                                            </Link>
                                                            <Link href="/leadership"
                                                                  className="py-2 text-sm hover:underline"
                                                                  onClick={() => setOpen(false)}>
                                                                Leadership
                                                            </Link>
                                                            <Link href="/constitution"
                                                                  className="py-2 text-sm hover:underline"
                                                                  onClick={() => setOpen(false)}>
                                                                Constitution
                                                            </Link>
                                                            <Link href="/contact-us"
                                                                  className="py-2 text-sm hover:underline"
                                                                  onClick={() => setOpen(false)}>
                                                                Contact Us
                                                            </Link>
                                                        </div>
                                                    </AccordionContent>
                                                </AccordionItem>

                                                <AccordionItem value="join" className="border-b-0">
                                                    <AccordionTrigger
                                                        className="py-2 px-3 text-sm font-normal rounded-md hover:bg-accent">
                                                        <div className="flex items-center">
                                                            <Merge className="h-4 w-4 mr-2"/>
                                                            Join
                                                        </div>
                                                    </AccordionTrigger>
                                                    <AccordionContent>
                                                        <div className="flex flex-col gap-1 pl-6">
                                                            <Link href="/membership"
                                                                  className="py-2 text-sm hover:underline"
                                                                  onClick={() => setOpen(false)}>
                                                                Membership Information
                                                            </Link>
                                                            <Link
                                                                href="https://forms.gle/WYLiMMsVrP8qjYdj6"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="py-2 text-sm hover:underline"
                                                                onClick={() => setOpen(false)}
                                                            >
                                                                Apply to be an ASI member
                                                            </Link>
                                                        </div>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                            <MobileNavItem href="/projects"
                                                           icon={<Hammer className="h-4 w-4"/>}>Projects</MobileNavItem>
                                        </div>

                                        {/* Mobile Donation Button - at the bottom of menu */}
                                        <div className="mt-auto px-4 py-3 border-t">
                                            <Button className="w-full flex items-center justify-center gap-2" variant="outline">
                                                <Link
                                                    href="/donate"
                                                    className="flex items-center gap-2 w-full justify-center"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <Heart className="h-4 w-4" /> Donate to ASI
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>

                </div>

                    </div>
    );
};

export default MainHeader;