export interface Article {
  id: string;
  name: string;
  price: number;
  qty: number;
}

export type Articles = Article[];

export type NewArticle = Omit<Article, 'id'>;
