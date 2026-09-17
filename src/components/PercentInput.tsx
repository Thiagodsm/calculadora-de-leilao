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
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (!focused) setDisplay(format(value));
  }, [value, focused]);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    const raw = value === 0 ? "" : String(value).replace(".", ",");
    setDisplay(raw);
    setTimeout(() => e.target.select(), 0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9,]/g, "");
    const parts = raw.split(",");
    const cleaned = parts.length > 2 ? parts[0] + "," + parts.slice(1).join("") : raw;
    setDisplay(cleaned);
    const parsed = parseFloat(cleaned.replace(",", ".")) || 0;
    onChange(parsed);
  };

  const handleBlur = () => {
    setFocused(false);
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
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder="0,00"
    />
  );
}
