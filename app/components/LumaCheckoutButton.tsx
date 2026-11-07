'use client';

import Script from 'next/script';
import type { ReactNode } from 'react';

interface LumaCheckoutButtonProps {
    eventId: string; // "evt-..."
    eventUrl: string; // Luma event page, used if the script hasn't loaded
    className?: string;
    children: ReactNode;
}

// Opens Luma's registration popup over the current page. Luma's embed script
// turns any `.luma-checkout--button` into a popup trigger; next/script dedupes
// the script by id, so several buttons on one page load it once.
export default function LumaCheckoutButton({ eventId, eventUrl, className, children }: LumaCheckoutButtonProps) {
    return (
        <>
            <a
                href={eventUrl}
                className={`luma-checkout--button ${className ?? ''}`}
                data-luma-action="checkout"
                data-luma-event-id={eventId}
            >
                {children}
            </a>
            <Script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js" strategy="lazyOnload" />
        </>
    );
}
