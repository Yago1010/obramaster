export type MidiaItem = { type: "image" | "video"; src: string };

/** Todas as fotos e vídeos em `public/obras` (uma pasta só). */
export const midiasObrasCompletas: MidiaItem[] = [
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => ({
    type: "image" as const,
    src: `/obras/fotos/${n}.jpeg`,
  })),
  ...Array.from({ length: 23 }, (_, i) => ({
    type: "video" as const,
    src: `/obras/videos/${i + 1}.mp4`,
  })),
];
