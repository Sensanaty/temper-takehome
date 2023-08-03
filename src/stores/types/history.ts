import { PostItem } from "~/stores/types/post";

export type HistoryItem = {
  id: number;
  description: string;
  snapshot?: Array<PostItem>
}
