import {references} from '../references'

export default function ReferencesList() {
    return (
        <section>
            <h2 id="references" className="heading-section scroll-mt-[120px]">References</h2>
            <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600 my-6">
                {references.map((ref) => (
                    <li key={ref.id} id={`ref-${ref.id}`} className="leading-relaxed scroll-mt-[120px]">
                        {ref.url && ref.url !== '#' ? (
                            <a
                                href={ref.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-asi-blue hover:underline"
                            >
                                <span dangerouslySetInnerHTML={{__html: ref.text}}/>
                            </a>
                        ) : (
                            <span dangerouslySetInnerHTML={{__html: ref.text}}/>
                        )}
                    </li>
                ))}
            </ol>
        </section>
    )
}
