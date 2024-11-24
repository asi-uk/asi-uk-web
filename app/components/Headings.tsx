import React from 'react';

export function Heading({
    text = "Heading Text",
    containerClass = "",
    id = "",
        }) {
    return (
        <h1 id={id}
            className={`text-asi-blue font-bold mb-6 text-center md:text-left ${containerClass}`}>
            {text}
        </h1>
    )
}

export function Heading1({text}) {
    return (
        <Heading
            text={text}
            containerClass={"text-3xl md:text-4xl"}
        />
    )
}

export function Heading2({text}) {
    return (
        <Heading
            text={text}
            containerClass={"text-2xl md:text-3xl"}
        />
    )
}

export function Heading3({text}) {
    return (
        <Heading
            text={text}
            containerClass={"text-xl md:text-2xl"}
        />
    )
}

export function Heading4({text}) {
    return (
        <Heading
            text={text}
            containerClass={"text-lg md:text-xl"}
        />
    )
}