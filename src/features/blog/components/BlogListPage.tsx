import PageMeta from "../../seo/components/PageMeta";
import BlogPostCard from "./BlogPostCard";
import { posts } from "../data/posts";

export default function BlogListPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <PageMeta
        title="Blog – Tutoriais de Leilão Imobiliário | T.SM"
        description="Artigos e tutoriais gratuitos sobre leilões extrajudiciais da Caixa: ITBI, SAC, PRICE, due diligence e muito mais."
        keywords={["blog leilão imobiliário", "tutoriais leilão caixa", "aprender leilão extrajudicial"]}
        ogImage="/og-image.svg"
      />

      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Blog</h1>
        <p className="text-muted-foreground">
          Tutoriais e guias práticos para investidores em leilão imobiliário.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
