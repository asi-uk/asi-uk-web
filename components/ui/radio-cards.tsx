import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { useId } from "react"

interface RadioCardProps {
    options: {
        value: string
        label: string
        description?: string
        icon?: LucideIcon
        annualFee?: string | number
    }[]
    defaultValue?: string
    value?: string
    onChange?: (value: string) => void
    className?: string
    layout?: "vertical" | "horizontal" | "inline"
}

const RadioCards = ({
                        options,
                        defaultValue,
                        value,
                        onChange,
                        className,
                        layout = "vertical"
                    }: RadioCardProps) => {
    const uniqueId = useId()
    return (
        <RadioGroup
            defaultValue={defaultValue}
            value={value ?? ""}
            onValueChange={onChange}
            className={cn(
                "gap-4",
                layout === "vertical" ? "flex flex-col" : "grid grid-cols-3",
                className
            )}
        >
            {options.map((option) => (
                <div
                    key={option.value}
                >
                    <RadioGroupItem
                        value={option.value}
                        id={`${uniqueId}-${option.value}`}
                        className="peer sr-only"
                    />
                    <Label
                        htmlFor={`${uniqueId}-${option.value}`}
                        className={cn(
                            "flex rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-asi-blue [&:has([data-state=checked])]:border-asi-blue cursor-pointer w-full h-full",
                            layout === "inline" ? "items-center justify-center" : "flex-col"
                        )}
                    >
                        <div className={cn(
                            "flex justify-between",
                            layout === "horizontal" ? "flex-col items-center text-center h-full" : "flex-row items-center"
                        )}>
                            <div className={cn(
                                "flex gap-4",
                                layout === "horizontal" ? "flex-col items-center" : "flex-row items-center"
                            )}>
                                {option.icon && (
                                    <div className="text-asi-blue">
                                        <option.icon size={24} />
                                    </div>
                                )}
                                <div>
                                    <div className="font-semibold">{option.label}</div>
                                    {option.description && (
                                        <div className="text-sm text-muted-foreground mt-1">
                                            {option.description}
                                        </div>
                                    )}
                                </div>
                            </div>
                            {option.annualFee && (
                                <div className={cn(
                                    layout === "horizontal" ? "mt-4" : "text-right"
                                )}>
                                    <div className="font-semibold">£{option.annualFee}</div>
                                    <div className="text-sm text-muted-foreground">per year</div>
                                </div>
                            )}
                        </div>
                    </Label>
                </div>
            ))}
        </RadioGroup>
    )
}

export default RadioCards;