export interface Story {
  id: number;
  title: string;
  by: string;
  time: number;
  url: string;
  score: number;
  descendants: number;
  type: string;
}

export type Tab = "top" | "new" | "best";
