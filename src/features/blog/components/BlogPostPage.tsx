import { Link, useParams } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";
import PageMeta from "../../seo/components/PageMeta";
import { posts } from "../data/posts";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-4">
        <h1 className="text-2xl font-bold">Artigo não encontrado</h1>
        <p className="text-muted-foreground">
          O artigo que você procura não existe ou foi removido.
        </p>
        <Button asChild variant="outline">
          <Link to="/blog">← Voltar ao Blog</Link>
        </Button>
      </div>
    );
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: "Thiago da Silva Moreira",
    },
  };

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="max-w-2xl mx-auto px-4 py-8">
      <PageMeta
        title={`${post.title} | T.SM`}
        description={post.summary}
        keywords={post.keywords}
        ogImage={post.coverImage ?? "/og-image.svg"}
        jsonLd={articleJsonLd}
      />

      <div className="mb-2">
        <Button variant="ghost" size="sm" asChild className="text-muted-foreground -ml-2 mb-4">
          <Link to="/blog">← Blog</Link>
        </Button>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-3">{post.title}</h1>

      <p className="text-sm text-muted-foreground mb-8">
        {formattedDate} · {post.readingTimeMinutes} min de leitura
      </p>

      <div
        className="prose-content text-sm sm:text-base text-foreground leading-relaxed space-y-4
          [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-foreground
          [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-5 [&_h3]:mb-2 [&_h3]:text-foreground
          [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-3
          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ul]:text-muted-foreground
          [&_li]:leading-relaxed
          [&_strong]:text-foreground [&_strong]:font-semibold"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <Separator className="my-8" />

      <div className="rounded-lg bg-primary/5 border border-primary/20 p-6 text-center space-y-3">
        <h2 className="text-lg font-semibold">Calcule o Lucro do Seu Leilão</h2>
        <p className="text-sm text-muted-foreground">
          Use nossa calculadora gratuita para simular todos os custos e o lucro real da sua operação.
        </p>
        <Button asChild size="lg">
          <Link to="/simulador">Simular agora →</Link>
        </Button>
      </div>
    </article>
  );
}
