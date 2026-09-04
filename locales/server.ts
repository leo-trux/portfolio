import { createI18nServer, setStaticParamsLocale } from 'next-international/server'

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } = createI18nServer({
    en: () => import('./en'),
    fr: () => import('./fr')
})

export { setStaticParamsLocale }