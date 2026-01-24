<<<<<<< HEAD
export const basePath =   typeof window !== "undefined" &&
  window.location.pathname.startsWith("/JLConstrucao")
    ? "/JLConstrucao"
    : "";
=======
export const basePath =   process.env.NODE_ENV === "production"
    ? "/JLConstrucao"
    : "";
>>>>>>> f3ab5dfb9d7917b999d1cf1ae02d036420fc84b1
