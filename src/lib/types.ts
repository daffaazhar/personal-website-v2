export interface ArticleMetadata {
  title: string;
  date: string;
  tags: string[];
  overview: string;
  slug: string;
}

export interface ProjectMetadata {
  image: string;
  title: string;
  overview: string;
  techStacks: string[];
  slug: string;
}

export interface TechStack {
  [key: string]: string;
}
