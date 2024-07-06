import { ChangeEvent, ReactNode } from "react";

interface IFormInput {
	label: string;
	type?: string;
	placeholder?: string;
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
	errors: string[];
	id?: string;
	children?: ReactNode;
}
export const PrimaryInput = ({
	label,
	type = "text",
	placeholder,
	errors,
	onChange,
	id,
}: IFormInput) => {
	return (
		<div className="form-box">
			<label htmlFor={label} className="form-label">
				{label}
			</label>
			<input
				type={type}
				className="form-input"
				placeholder={placeholder}
				onChange={onChange}
			/>
			{errors?.find((x) => x == id) && (
				<div className="error">{label} is required</div>
			)}
		</div>
	);
};
export const PrimarySelect = ({
	label,
	children,
	errors,
	onChange,
	id,
}: IFormInput) => {
	return (
		<div className="form-box">
			<label htmlFor={label} className="form-label">
				{label}
			</label>
			<select className="select-input" onChange={onChange}>
				{children}
			</select>
			{errors?.find((x) => x == id) && (
				<div className="error">{label} is required</div>
			)}
		</div>
	);
};
