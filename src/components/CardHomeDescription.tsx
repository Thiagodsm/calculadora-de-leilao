import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"

interface CardHomeDescriptionProps
{
    title: string;
    description: string;
    text: string;
}

export const CardHomeDescription = ({title, description, text}: CardHomeDescriptionProps) =>
{
    return (
            <Card className="w-full max-w-full">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">
                    {text}
                </p>
            </CardContent>
            </Card>
    )
}
