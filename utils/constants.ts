const R2_URL: string | undefined = process.env.NEXT_PUBLIC_R2_URL

export const getR2ImageUrl: (path: string) => string = (path: string) => {
    if (R2_URL == null) return ''
    const base: string = R2_URL.startsWith('http://') || R2_URL.startsWith('https://')
        ? R2_URL
        : `https://${R2_URL}`
    const cleanBase: string = base.endsWith('/') ? base.slice(0, -1) : base
    const cleanPath: string = path.startsWith('/') ? path.slice(1) : path
    return `${cleanBase}/${cleanPath}`
}
