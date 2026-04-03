export interface Section {
  question: string;
  context: string | null;
  image?: string;
  body: string;
}

export interface Article {
  id: number;
  meta: { source: string; date: string };
  title: string;
  brief: string;
  sections: Section[];
  takeaway: string;
}
