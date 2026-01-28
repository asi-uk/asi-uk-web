import React, { useState, useEffect, useRef } from 'react';
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface DateInputProps {
    value?: Date;
    onChange: (date?: Date) => void;
    error?: boolean;
}

const DateInput: React.FC<DateInputProps> = ({ value, onChange, error }) => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    // Convert Date to formatted string on initial load and value changes
    useEffect(() => {
        if (value) {
            const day = value.getDate().toString().padStart(2, '0');
            const month = (value.getMonth() + 1).toString().padStart(2, '0');
            const year = value.getFullYear().toString();
            setInputValue(`${day}/${month}/${year}`);
        } else {
            setInputValue('');
        }
    }, [value]);

    const isValidDate = (day: number, month: number, year: number) => {
        // Check basic ranges first
        if (month < 1 || month > 12) return false;
        if (day < 1 || day > 31) return false;
        if (year < 1900 || year > new Date().getFullYear()) return false;

        // Check days in month
        const daysInMonth = new Date(year, month, 0).getDate();
        if (day > daysInMonth) return false;

        return true;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let input = e.target.value;

        // Remove any non-digits
        const digits = input.replace(/\D/g, '');

        // Format the input with slashes
        let formatted = '';
        if (digits.length > 0) formatted += digits.slice(0, 2);
        if (digits.length > 2) formatted += '/' + digits.slice(2, 4);
        if (digits.length > 4) formatted += '/' + digits.slice(4, 8);

        setInputValue(formatted);

        // Parse and validate the date if we have all digits
        if (digits.length === 8) {
            const day = parseInt(digits.slice(0, 2));
            const month = parseInt(digits.slice(2, 4));
            const year = parseInt(digits.slice(4, 8));

            if (isValidDate(day, month, year)) {
                onChange(new Date(year, month - 1, day));
            } else {
                onChange(undefined);
            }
        } else {
            onChange(undefined);
        }
    };

    return (
        <Input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="DD/MM/YYYY"
            maxLength={10}
            className={cn(
                error ? "border-red-500" : ""
            )}
        />
    );
};

export default DateInput;