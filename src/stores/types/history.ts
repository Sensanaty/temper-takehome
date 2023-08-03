import { PostItem } from "~/stores/types/post";

export type HistoryItem = {
  id: string;
  description: string;
  snapshot: Array<PostItem>
}
