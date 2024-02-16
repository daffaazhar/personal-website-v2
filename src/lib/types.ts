export interface ArticleMetadata {
  title: string;
  date: string;
  tags: string[];
  slug: string;
  overview: string;
}

export interface ProjectMetadata {
  image: string;
  title: string;
  slug: string;
  overview: string;
  techStacks: string[];
}

export interface TechStack {
  [key: string]: string;
}
