export interface ParagraphType {
  id: number;
  description: string;
  title: string;
}

// export interface Article {
//   title: string;
//   image: string;
//   paragraph: ParagraphType[];
//   author: {
//     name: string;
//     surname: string;
//     id: string;
//   };
// }

export interface Data {
  article: Article;
  error: null | string;
  loading: boolean;
}

export interface Paragraph {
  description: string;
  title: string;
  _id: number;
}

export interface Article {
  _id: string;
  title: string;
  image: string;
  paragraph: Paragraph[];
  author: {
    name: string;
    surname: string;
    id: string;
  };
}

export interface initialStateArticleList {
  article: Article[];
  loading: boolean;
  error: null | string;
}

export interface initialStateArticles {
  article: Article | null;
  loading: boolean;
  error: null | string;
}

export interface ImageUploadArticleResult {
  url: string;
  // id?: number;
}
