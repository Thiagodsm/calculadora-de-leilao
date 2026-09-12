export function formatCurrency(value: number) : string
{
    return value.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );
}

export function formatPrecision(valor: number, precision: number, sufix?: string) : string
{
    if (sufix && !Number.isNaN(valor))
        return valor.toFixed(precision) + sufix;
    if(Number.isNaN(valor))
        return "-";
    return valor.toFixed(precision);
}

export function formatPercent(value: number, decimals = 2): string
{
    return value.toLocaleString("pt-BR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }) + "%";
}

export function formatProfitClass(value: number): string
{
    if (value > 0) return "text-emerald-600 dark:text-emerald-400";
    if (value < 0) return "text-destructive";
    return "text-muted-foreground";
}