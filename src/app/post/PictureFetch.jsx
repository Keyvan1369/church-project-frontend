import { useState, useEffect } from "react";

export const usePictureFetch = (limit = 6, width = 1200, height = 800) => {
    const [images, setImages] = useState([]);

  useEffect(() => {
    let mounted = true;

    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`https://picsum.photos/v2/list?limit=${limit}`, { signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        const formatted = data.map((item) => ({
          id: item.id,
          // stable sized URL for consistent layout
          src: `https://picsum.photos/id/${item.id}/${width}/${height}`,
          author: item.author,
          alt: `Photo by ${item.author} — Picsum`,
        }));
        setImages(formatted);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error("Failed to fetch Picsum images:", err);
        }
      });

    return () => {
      mounted = false;
      controller.abort();
    };
  }, [limit, width, height]);

  return images;
};