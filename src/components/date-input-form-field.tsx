export interface DateInputFormFieldProps extends React.HTMLProps<HTMLInputElement> {
}

export function DateInputFormField({
  ...props
}: DateInputFormFieldProps) {
  return (
    <input
      type="date"
      {...props}
    />
  );
}
