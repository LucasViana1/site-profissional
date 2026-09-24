import { getContent } from "@/content";
import { openGraphImage, OPEN_GRAPH_SIZE } from "@/utils/openGraphImage";

export const dynamic = "force-static";
export const size = OPEN_GRAPH_SIZE;
export const contentType = "image/png";
export const alt = getContent("pt").meta.title;

export default function OpenGraphImage() {
  return openGraphImage("pt");
}
