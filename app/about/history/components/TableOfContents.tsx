'use client'

import {useEffect, useState} from 'react'
import {ChevronDown, List} from 'lucide-react'
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from '@/components/ui/collapsible'

type Section = {
    id: string
    label: string
    level: 'section' | 'subsection'
}

export default function TableOfContents({sections}: { sections: Section[] }) {
    const [activeId, setActiveId] = useState<string>('')
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const headings = sections
            .map(s => document.getElementById(s.id))
            .filter(Boolean) as HTMLElement[]

        if (headings.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter(e => e.isIntersecting)
                if (visible.length > 0) {
                    setActiveId(visible[0].target.id)
                }
            },
            {rootMargin: '-120px 0px -60% 0px', threshold: 0}
        )

        headings.forEach(h => observer.observe(h))
        return () => observer.disconnect()
    }, [sections])

    function handleClick(id: string) {
        setMobileOpen(false)
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({behavior: 'smooth'})
        }
    }

    const linkClasses = (id: string, level: 'section' | 'subsection') =>
        `block py-1.5 border-l-2 transition-colors ${
            level === 'subsection' ? 'pl-6' : 'pl-4'
        } ${
            activeId === id
                ? 'border-asi-blue text-asi-blue font-semibold'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
        }`

    return (
        <>
            {/* Desktop sidebar */}
            <nav className="hidden lg:block w-64 shrink-0">
                <div className="sticky top-[120px]">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 pl-4">
                        On this page
                    </p>
                    <ul className="text-sm space-y-0.5">
                        {sections.map(s => (
                            <li key={s.id}>
                                <button
                                    onClick={() => handleClick(s.id)}
                                    className={linkClasses(s.id, s.level) + ' w-full text-left cursor-pointer'}
                                >
                                    {s.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Mobile collapsible */}
            <div className="lg:hidden sticky top-[100px] z-30 -mx-4">
                <Collapsible open={mobileOpen} onOpenChange={setMobileOpen}>
                    <CollapsibleTrigger
                        className="flex items-center justify-between w-full px-4 py-3 bg-white/95 backdrop-blur border-b border-slate-200 text-sm font-medium text-slate-700 cursor-pointer">
                        <span className="flex items-center gap-2">
                            <List className="h-4 w-4"/>
                            On this page
                        </span>
                        <ChevronDown
                            className={`h-4 w-4 text-slate-400 transition-transform ${mobileOpen ? 'rotate-180' : ''}`}/>
                    </CollapsibleTrigger>
                    <CollapsibleContent
                        className="bg-white/95 backdrop-blur border-b border-slate-200 px-4 pb-3">
                        <ul className="text-sm space-y-0.5 pt-1">
                            {sections.map(s => (
                                <li key={s.id}>
                                    <button
                                        onClick={() => handleClick(s.id)}
                                        className={linkClasses(s.id, s.level) + ' w-full text-left cursor-pointer'}
                                    >
                                        {s.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </CollapsibleContent>
                </Collapsible>
            </div>
        </>
    )
}
