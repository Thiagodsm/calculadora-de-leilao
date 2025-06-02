import { formatCurrency } from "../utils/formatters";

interface ResultItemProps
{
    label: string;
    value: number | string;
    isCurrency: boolean;
    sufix?: string;
}

export const ResultItem = ({label, value, sufix, isCurrency}: ResultItemProps) =>
{
    return(
        <div className="flex justify-between text-sm py-1">
            <span className="text-muted-foreground">{ label }</span>
            <span className="font-medium">
                {typeof value === "number" && isCurrency ? formatCurrency(value) : value}
                {sufix ?  ` ${sufix}` : ""}
            </span>
        </div>
    );
};