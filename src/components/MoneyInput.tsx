import { Input } from "./ui/input";
import { useState, useEffect } from "react";

interface MoneyInputProps {
  value: number;
  onChange: (value: number) => void;
}

export default function MoneyInput({ value, onChange, ...props }: MoneyInputProps) {
  const format = (value: number) => {
    return (value ?? 0).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const [inputValue, setInputValue] = useState(() => format(value ?? 0));

  useEffect(() => {
    setInputValue(format(value));
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "");
    const numeric = digits ? parseInt(digits, 10) / 100 : 0;
    setInputValue(format(numeric));
    onChange(numeric);
  };

  return (
    <Input
      {...props}
      inputMode="numeric"
      value={inputValue}
      onChange={handleChange}
      placeholder="R$ 0,00"
    />
  );
}