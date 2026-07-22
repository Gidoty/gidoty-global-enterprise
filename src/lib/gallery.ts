export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

// Add photos by dropping the file in public/gallery/ and adding an entry
// here with its path, a descriptive alt, and an optional caption.
export const GALLERY_IMAGES: GalleryImage[] = [];
