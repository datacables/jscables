"use client";

export type SearchInputFieldProps = JSX.IntrinsicElements["input"] & {
};

export function SearchInputField({
  ...props
}: SearchInputFieldProps) {
  return <input {...props} type="search" />;
}
