import {defineRouting} from 'next-intl/routing'

export const routing = defineRouting({
    locales: ['en', 'ja', 'de', 'id', 'it', 'ru', 'uk', 'be'],
    defaultLocale: 'en',
    localePrefix: 'as-needed',
    localeDetection: false
})