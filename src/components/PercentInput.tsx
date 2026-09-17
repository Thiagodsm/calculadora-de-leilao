import { Input } from "./ui/input";
import { useState, useEffect } from "react";

interface PercentInputProps {
  value: number;
  onChange: (value: number) => void;
}

export default function PercentInput({ value, onChange, ...props }: PercentInputProps) {
  const format = (v: number) =>
    (v ?? 0).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const [display, setDisplay] = useState(() => format(value ?? 0));

  useEffect(() => {
    setDisplay(format(value));
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9,]/g, "");
    setDisplay(raw);
    const parsed = parseFloat(raw.replace(",", "."));
    if (!isNaN(parsed)) onChange(parsed);
  };

  const handleBlur = () => {
    const parsed = parseFloat(display.replace(",", ".")) || 0;
    setDisplay(format(parsed));
    onChange(parsed);
  };

  return (
    <Input
      {...props}
      inputMode="decimal"
      value={display}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder="0,00"
    />
  );
}
