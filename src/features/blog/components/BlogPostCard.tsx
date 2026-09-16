import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import type { ArticlePost } from "../types";

interface BlogPostCardProps {
  post: ArticlePost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
      {post.coverImage ? (
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-40 object-cover rounded-t-lg"
        />
      ) : (
        <div className="w-full h-40 rounded-t-lg bg-primary/10 flex items-center justify-center">
          <span className="text-3xl">🏠</span>
        </div>
      )}

      <CardHeader className="pb-2">
        <CardTitle className="text-base line-clamp-2 leading-snug">{post.title}</CardTitle>
        <CardDescription className="text-xs">
          {formattedDate} · {post.readingTimeMinutes} min de leitura
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3">{post.summary}</p>
      </CardContent>

      <CardFooter>
        <Button variant="outline" size="sm" asChild>
          <Link to={`/blog/${post.slug}`}>Ler artigo completo →</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
