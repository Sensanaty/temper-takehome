import { PostItem } from "~/stores/types/post";

export type HistoryItem = {
  description: string;
  snapshot: Array<PostItem>
}
