import { Post } from "~/stores/types/post";

export type HistoryItem = {
  description: string;
  snapshot: Array<Post>
}
