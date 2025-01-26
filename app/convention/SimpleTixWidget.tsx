'use client';

import Script from 'next/script';

declare global {
    interface Window {
        createSimpleTixEmbed: (
            element: HTMLElement,
            guid: string,
            eventId: string,
            eventSlug: string,
            eventName: string
        ) => void;
    }
}

const SimpleTixWidget = () => {
    return (
        <>
            <Script
                src="https://embed.prod.simpletix.com/assets/widget/widget.min.js?t=2024.12.10"
                strategy="beforeInteractive"
            />
            <link
                href="https://embed.prod.simpletix.com/assets/widget/widget.min.css?t=2024.05.08"
                rel="stylesheet"
            />
            <div>
                <a
                    className="simpletix-button-theme m-5"
                    onClick={(e) => {
                        window.createSimpleTixEmbed(
                            e.currentTarget,
                            '3385a14b-2841-4465-83c7-1ba8561bcc7d',
                            '199777',
                            '#asi-uk-convention-20',
                            'ASI UK'
                        );
                        return false;
                    }}
                    data-url="https://embed.prod.simpletix.com/"
                    data-enabledigitalwallets="true"
                    data-origin="11"
                    style={{
                        backgroundColor: '#223f99',
                        fontFamily: "'Inter', sans-serif"
                    }}
                >
                    Register to Attend
                </a>
            </div>
        </>
    );
};

export default SimpleTixWidget;