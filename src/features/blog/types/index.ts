export interface ArticlePost {
  slug: string;              // lowercase hífens, regex: /^[a-z0-9-]+$/
  title: string;
  summary: string;           // 120–160 caracteres
  content: string;           // HTML string
  publishedAt: string;       // ISO 8601 date, ex: "2026-09-16"
  keywords: string[];
  coverImage?: string;
  readingTimeMinutes: number; // inteiro positivo
}
