const choremowerNewAsset = (filename: string) => `/choremower-new/${filename}`;

export const CHOREMOWER_NEW_IMAGES = [
  choremowerNewAsset("chore-mower-isometric.jpeg"),
  choremowerNewAsset("chore-mower-side.jpeg"),
  choremowerNewAsset("chore-mower-top.jpeg"),
  choremowerNewAsset("chore-mower-showcase.jpeg"),
] as const;

export const MOWER_FEATURED_IMAGE = CHOREMOWER_NEW_IMAGES[0];
