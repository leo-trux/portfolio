const R2_URL: string | undefined = process.env.NEXT_PUBLIC_R2_URL;

export const getR2ImageUrl = (path: string): string => {
    if (R2_URL == null) return "";
    const cleanPath: string = path.startsWith("/") ? path.slice(1) : path;
    return `${R2_URL}/${cleanPath}`;
};
