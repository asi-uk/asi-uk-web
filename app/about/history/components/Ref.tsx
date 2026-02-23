type RefProps = {
    n: number
}

export default function Ref({n}: RefProps) {
    return (
        <a
            href={`#ref-${n}`}
            className="text-asi-blue hover:text-asi-darkBlue text-[0.65em] align-super font-semibold no-underline ml-[1px]"
            title={`Reference ${n}`}
        >
            [{n}]
        </a>
    )
}
