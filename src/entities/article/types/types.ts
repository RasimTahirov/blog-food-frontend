export interface Paragraph {
  _id?: string;
  description: string;
  title: string;
  id: number;
}

export interface Article {
  _id?: string;
  title: string;
  image: string;
  paragraph: Paragraph[];
  author: {
    name: string;
    surname: string;
    id: string;
  };
}

export interface ImageUploadArticleResult {
  url: string;
}

export interface initialStateArticle {
  article: null | Article;
  loading: boolean;
  error: string | null;
}

export interface initialStateCreateArticle {
  article: Article;
  error: null | string;
  loading: boolean;
}

export interface initialStateArticleList {
  article: Article[];
  loading: boolean;
  error: null | string;
}
