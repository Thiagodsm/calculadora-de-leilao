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