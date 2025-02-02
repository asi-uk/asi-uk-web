import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";

interface DateInputProps {
    value?: Date;
    onChange: (date?: Date) => void;
    error?: boolean;
}

const DateInput: React.FC<DateInputProps> = ({ value, onChange, error }) => {
    const [inputValue, setInputValue] = useState('');

    // Convert Date to formatted string on initial load and value changes
    useEffect(() => {
        if (value) {
            const day = value.getDate().toString().padStart(2, '0');
            const month = (value.getMonth() + 1).toString().padStart(2, '0');
            const year = value.getFullYear().toString();
            setInputValue(`${day}/${month}/${year}`);
        }
    }, [value]);

    const formatDateInput = (input: string) => {
        // Remove all non-digits
        const digits = input.replace(/\D/g, '');

        // Add slashes as the user types
        let formatted = '';
        if (digits.length > 0) formatted += digits.slice(0, 2);
        if (digits.length > 2) formatted += '/' + digits.slice(2, 4);
        if (digits.length > 4) formatted += '/' + digits.slice(4, 8);

        return formatted;
    };

    const isValidDate = (day: number, month: number, year: number) => {
        const date = new Date(year, month - 1, day);
        return date.getDate() === day &&
            date.getMonth() === month - 1 &&
            date.getFullYear() === year &&
            year >= 1900 &&
            year <= new Date().getFullYear();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        const formatted = formatDateInput(input);
        setInputValue(formatted);

        // Parse the date when we have enough digits
        const digits = input.replace(/\D/g, '');
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
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="DD/MM/YYYY"
            maxLength={10}
            className={error ? "border-red-500" : ""}
        />
    );
};

export default DateInput;