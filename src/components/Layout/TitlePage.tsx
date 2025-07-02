type Props = {
    title: string
    description: string
}

export default function TitlePage({ title, description }: Props) {
    return (
        <>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-muted-foreground">{description}</p>
        </>
    )
}
