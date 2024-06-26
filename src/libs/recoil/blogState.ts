import { atom } from "recoil";
import type { Blog } from "../../types/blogType";

export const blogListState = atom<Blog[]>({
  key: 'blogListState',
  default: []
});
