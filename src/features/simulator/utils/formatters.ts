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
    if (sufix)
        return valor.toFixed(precision) + sufix;
    return valor.toFixed(precision);
}