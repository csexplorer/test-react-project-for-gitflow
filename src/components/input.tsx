export interface InputProps {
  value?: string | number;
  onChange?: (value: string | number) => void;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <input
      style={{ border: "1px solid #ccc", padding: "8px", borderRadius: "4px" }}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};
