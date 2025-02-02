import {
    FieldError,
    UseFormRegisterReturn
} from 'react-hook-form';
import {required} from "valibot";
import {className} from "postcss-selector-parser";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {ReactNode} from "react";

const FORM_INPUT_STYLE = "w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition duration-200 ease-in-out my-1"

interface FormComponentProps {
    label?: string;
    id: string;
    required?: boolean;
    className?: string;
    error?: FieldError;
    children: ReactNode;
}

export const FormComponent: React.FC<FormComponentProps> = ({
                                                                label,
                                                                id,
                                                                required = false,
                                                                className = '',
                                                                error,
                                                                children

                                                            }) => {
    return (
        <div className={`my-3`}>
            {label && (
                <label
                    htmlFor={id}
                    className="block text-sm font-medium text-gray-700"
                >
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}

            {children} {/* Render the child component */}

            {error && (
                <p className="text-sm text-red-500 mt-1">
                    {error.message}
                </p>
            )}
        </div>
    )
}

interface FormInputProps {
    label?: string;
    id: string;
    type?: string;
    register: UseFormRegisterReturn;
    required?: boolean;
    error?: FieldError;
    className?: string;
    placeholder?: string;
}

export const FormInput: React.FC<FormInputProps> =
    ({
         label,
         id,
         type = 'text',
         register,
         required = false,
         error,
         className = '',
         placeholder,
     }) => {
        return (
            <FormComponent
                label={label}
                id={id}
                required={required}>
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    {...register}
                    className={`${FORM_INPUT_STYLE} ${className}`}
                />
            </FormComponent>
        )
    }

interface Option {
    value: string;
    label: string;
}

interface FormSelectProps {
    options: Option[];
    label?: string;
    id: string;
    register: UseFormRegisterReturn;
    required?: boolean;
    error?: FieldError;
    className?: string;
}

export const FormSelect: React.FC<FormSelectProps> =
    ({
         label,
         options,
         id,
         register,
         required = false,
         error,
         className = '',
     }) => {
        return (
            <FormComponent label={label} id={id} required={required}>
                <select
                    id={id}
                    {...register}
                    className={`${FORM_INPUT_STYLE} ${className}`}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </FormComponent>
        )
    }

interface FormDateInputProps {
    id: string;
    register: UseFormRegisterReturn;
    required?: boolean;
    label?: string;
    className?: string;
    validation?: Object;
    min?: string;    // Format: YYYY-MM-DD
    max?: string;    // Format: YYYY-MM-DD
    defaultValue?: string;
}

export const FormDateInput: React.FC<FormDateInputProps> =
    ({
         id,
         register,
         required = false,
         label,
         className = '',
         validation = {},
         min,
         max,
         defaultValue
     }) => {
        return (
            <FormComponent label={label} id={id} required={required}>
                <input
                    type="date"
                    id={id}
                    {...register}
                    min={min}
                    max={max}
                    defaultValue={defaultValue}
                    className={`${FORM_INPUT_STYLE} ${className}`}
                />
            </FormComponent>
        );
    };