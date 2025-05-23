export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export type PageProps<T extends Record<string, string>> = {
  params: T;
  searchParams?: Record<string, string | string[] | undefined>;
};