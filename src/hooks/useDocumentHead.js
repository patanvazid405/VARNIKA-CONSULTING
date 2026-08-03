import { useEffect } from "react";

/* Lightweight per-page <title>/meta-description setter — avoids pulling in
   react-helmet-async for something this simple. Runs on every route change. */
export default function useDocumentHead(title, description) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);
}
