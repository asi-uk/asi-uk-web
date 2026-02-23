import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQItem } from '@/data/convention';

interface FAQSectionProps {
    items: readonly FAQItem[];
}

export default function FAQSection({ items }: FAQSectionProps) {
    return (
        <div className="mt-12 mb-6">
            <h3 className="text-xl font-medium text-asi-blue mb-4 text-center">Frequently Asked Questions</h3>

            <Accordion type="single" collapsible className="w-full">
                {items.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger
                            className="text-left text-base font-medium text-asi-blue hover:text-asi-blue hover:no-underline">
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm text-slate-600">
                                {item.linkHref && item.linkText
                                    ? <>
                                        {item.answer.split(item.linkText)[0]}
                                        <a href={item.linkHref} className="text-asi-blue underline">{item.linkText}</a>
                                        {item.answer.split(item.linkText)[1]}
                                      </>
                                    : item.answer
                                }
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
