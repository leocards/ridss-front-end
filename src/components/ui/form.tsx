"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
	Controller,
	FormProvider,
	Path,
	useFormContext,
	UseFormReturn,
	useFormState,
	type ControllerProps,
	type FieldPath,
	type FieldValues,
} from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Checkbox } from "./checkbox";
import { Button } from "./button";
import { Eye, EyeClosed } from "lucide-react";

const Form = FormProvider;

type FormFieldContextValue<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
	name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
	{} as FormFieldContextValue
);

const FormField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
	...props
}: ControllerProps<TFieldValues, TName>) => {
	return (
		<FormFieldContext.Provider value={{ name: props.name }}>
			<Controller {...props} />
		</FormFieldContext.Provider>
	);
};

const useFormField = () => {
	const fieldContext = React.useContext(FormFieldContext);
	const itemContext = React.useContext(FormItemContext);
	const { getFieldState } = useFormContext();
	const formState = useFormState({ name: fieldContext.name });
	const fieldState = getFieldState(fieldContext.name, formState);

	if (!fieldContext) {
		throw new Error("useFormField should be used within <FormField>");
	}

	const { id } = itemContext;

	return {
		id,
		name: fieldContext.name,
		formItemId: `${id}-form-item`,
		formDescriptionId: `${id}-form-item-description`,
		formMessageId: `${id}-form-item-message`,
		...fieldState,
	};
};

type FormItemContextValue = {
	id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
	{} as FormItemContextValue
);

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
	const id = React.useId();

	return (
		<FormItemContext.Provider value={{ id }}>
			<div
				data-slot="form-item"
				className={cn("grid gap-2", className)}
				{...props}
			/>
		</FormItemContext.Provider>
	);
}

function FormLabel({
	className,
	...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
	const { error, formItemId } = useFormField();

	return (
		<Label
			data-slot="form-label"
			data-error={!!error}
			className={cn("data-[error=true]:text-destructive", className)}
			htmlFor={formItemId}
			{...props}
		/>
	);
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
	const { error, formItemId, formDescriptionId, formMessageId } =
		useFormField();

	return (
		<Slot
			data-slot="form-control"
			id={formItemId}
			aria-describedby={
				!error
					? `${formDescriptionId}`
					: `${formDescriptionId} ${formMessageId}`
			}
			aria-invalid={!!error}
			{...props}
		/>
	);
}

function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
	const { formDescriptionId } = useFormField();

	return (
		<p
			data-slot="form-description"
			id={formDescriptionId}
			className={cn("text-muted-foreground text-sm", className)}
			{...props}
		/>
	);
}

function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
	const { error, formMessageId } = useFormField();
	const body = error ? String(error?.message ?? "") : props.children;

	if (!body) {
		return null;
	}

	return (
		<p
			data-slot="form-message"
			id={formMessageId}
			className={cn("text-destructive text-xs", className)}
			{...props}
		>
			{body}
		</p>
	);
}

const FormContainer = <T extends FieldValues>({
	form,
	children,
	onSubmit,
	...props
}: {
	form: UseFormReturn<T>;
	children: React.ReactNode;
	onSubmit: () => void;
} & React.ComponentProps<"form">) => {
	return (
		<Form {...form}>
			<form onSubmit={onSubmit} {...props}>
				{children}
			</form>
		</Form>
	);
};

type FormProps<T extends FieldValues> = {
	form: UseFormReturn<T>;
	name: Path<T>;
	label?: string | React.ReactNode;
	disabled?: boolean;
	itemClass?: string;
    addOn?: React.ReactNode;
};

type InputFormProps<T extends FieldValues> = Omit<
	React.ComponentProps<"input">,
	"form"
> &
	FormProps<T>;

const InputForm = <T extends FieldValues>({
	form,
	name,
	label,
	disabled,
	itemClass,
    addOn,
	...props
}: InputFormProps<T>) => {
	return (
		<FormField
			control={form.control}
			name={name}
			disabled={disabled}
			render={({ field }) => (
				<FormItem className={cn(itemClass)}>
					{label && <FormLabel>{label}</FormLabel>}
					<div className="relative">
                        <FormControl>
                            <Input {...field} disabled={disabled} {...props} />
                        </FormControl>
                        {addOn}
                    </div>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

const PasswordInputForm = <T extends FieldValues>({
	form,
	name,
	label,
	disabled,
	itemClass,
	...props
}: Omit<InputFormProps<T>, "type">) => {
	const [passwordState, setPasswordState] = React.useState("password");

	return (
		<FormField
			control={form.control}
			name={name}
			disabled={disabled}
			render={({ field }) => (
				<FormItem className={cn(itemClass)}>
					{label && <FormLabel>{label}</FormLabel>}
					<div className="relative group">
						<FormControl>
							<Input
								{...field}
								type={passwordState}
								disabled={disabled}
								{...props}
							/>
						</FormControl>
						<Button
							type="button"
							className="absolute top-1/2 right-px h-[calc(100%-1.5px)] w-10 -translate-y-1/2 rounded-l-none border-l"
							variant={"ghost"}
							onClick={() => {
								if (passwordState === "password")
									setPasswordState("text");
								else setPasswordState("password");
							}}
						>
							<Eye
								data-type={passwordState}
								className="absolute scale-0 transition duration-250 data-[type=text]:scale-100"
							/>
							<EyeClosed
								data-type={passwordState}
								className="absolute scale-100 transition duration-250 data-[type=text]:scale-0"
							/>
						</Button>
					</div>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

const NumberInputForm = <T extends FieldValues>({
	form,
	name,
	label,
	disabled,
	itemClass,
    addOn,
	...props
}: InputFormProps<T>) => {
	// Format phone number as XXX XXX XXXX
	const formatPhoneNumber = (value: string) => {
		const digits = value.replace(/\D/g, '');
		const limitedDigits = digits.slice(0, 10);
		
		if (limitedDigits.length >= 6) {
			return `${limitedDigits.slice(0, 3)} ${limitedDigits.slice(3, 6)} ${limitedDigits.slice(6)}`;
		} else if (limitedDigits.length >= 3) {
			return `${limitedDigits.slice(0, 3)} ${limitedDigits.slice(3)}`;
		}
		
		return limitedDigits;
	};

	// Get only digits for form value
	const getDigitsOnly = (value: string) => {
		return value.replace(/\D/g, '');
	};

	// Handle cursor position after formatting
	const getCursorPosition = (prevValue: string, newValue: string, prevCursor: number) => {
		const digitsBeforeCursor = getDigitsOnly(prevValue.slice(0, prevCursor)).length;
		
		let digitCount = 0;
		let newCursorPos = 0;
		
		for (let i = 0; i < newValue.length && digitCount < digitsBeforeCursor; i++) {
			if (/\d/.test(newValue[i])) {
				digitCount++;
			}
			newCursorPos = i + 1;
		}
		
		return newCursorPos;
	};

	// Phone-specific handlers
	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const target = e.target;
		const prevValue = target.value;
		const prevCursor = target.selectionStart || 0;
		
		const formattedValue = formatPhoneNumber(e.target.value);
		const digitsOnly = getDigitsOnly(formattedValue);
		
		form.setValue(name, digitsOnly as any);
		
		setTimeout(() => {
			const newCursorPos = getCursorPosition(prevValue, formattedValue, prevCursor);
			target.setSelectionRange(newCursorPos, newCursorPos);
		}, 0);
	};

	const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement;
		const cursorPos = target.selectionStart || 0;
		const value = target.value;
		
		// Handle backspace specially
		if (e.key === 'Backspace') {
			if (cursorPos > 0 && value[cursorPos - 1] === ' ') {
				e.preventDefault();
				const newCursor = cursorPos - 1;
				target.setSelectionRange(newCursor, newCursor);
				
				const newValue = value.slice(0, newCursor - 1) + value.slice(newCursor);
				const formattedValue = formatPhoneNumber(newValue);
				const digitsOnly = getDigitsOnly(formattedValue);
				
				form.setValue(name, digitsOnly as any);
				
				setTimeout(() => {
					const finalCursorPos = getCursorPosition(value, formattedValue, newCursor - 1);
					target.setSelectionRange(finalCursorPos, finalCursorPos);
				}, 0);
				return;
			}
		}
		
		// Allow navigation and control keys
		const allowedKeys = [
			'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
			'Home', 'End', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'
		];
		
		const isCtrlKey = e.ctrlKey && ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase());
		const isCmdKey = e.metaKey && ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase());
		
		if (allowedKeys.includes(e.key) || isCtrlKey || isCmdKey) {
			return;
		}
		
		// Only allow numbers (0-9)
		if (!/^[0-9]$/.test(e.key)) {
			e.preventDefault();
		}
	};

	return (
		<FormField
			control={form.control}
			name={name}
			disabled={disabled}
			render={({ field }) => (
				<FormItem className={cn(itemClass)}>
					{label && <FormLabel>{label}</FormLabel>}
					<div className="relative">
						<FormControl>
							<Input 
								{...field}
								disabled={disabled}
								value={formatPhoneNumber(field.value || '')}
                                onChange={handlePhoneChange}
                                onKeyDown={handlePhoneKeyDown}
                                placeholder="XXX XXX XXXX"
                                maxLength={12}
                                {...props}
							/>
						</FormControl>
						{addOn}
					</div>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

type TextareaFormProps<T extends FieldValues> = Omit<
	React.ComponentProps<"textarea">,
	"form"
> &
	FormProps<T>;

const TextareaForm = <T extends FieldValues>({
	form,
	name,
	label,
	disabled,
	itemClass,
	...props
}: TextareaFormProps<T>) => {
	return (
		<FormField
			control={form.control}
			name={name}
			disabled={disabled}
			render={({ field }) => (
				<FormItem className={cn(itemClass)}>
					{label && <FormLabel>{label}</FormLabel>}
					<FormControl>
						<Textarea {...field} disabled={disabled} {...props} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

const CheckboxForm = <T extends FieldValues>({
	form,
	name,
	label,
	disabled,
	itemClass,
	className,
}: FormProps<T> & { className?: string }) => {
	return (
		<FormField
			control={form.control}
			name={name}
			disabled={disabled}
			render={({ field }) => (
				<FormItem className={cn(itemClass)}>
					<div className="flex flex-row gap-2 items-center">
						<FormControl>
							<Checkbox
								checked={field.value}
								onCheckedChange={field.onChange}
								className={cn(className)}
							/>
						</FormControl>
						{label && <FormLabel>{label}</FormLabel>}
					</div>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export {
	useFormField,
	Form,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage,
	FormField,
	FormContainer,
	InputForm,
    NumberInputForm,
	TextareaForm,
	CheckboxForm,
	PasswordInputForm,
};
