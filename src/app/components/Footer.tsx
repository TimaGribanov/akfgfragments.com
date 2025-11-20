'use client'

import {useTranslations} from 'use-intl'
import {Link} from '@/i18n/navigation'

const FooterLink = ({href, title}: { href: string, title: string }) => (
    <Link className="block" href={href}>{title}</Link>
)

const Footer = ({locale}: { locale: string }) => {
    const t = useTranslations('Footer')

    return (
        <footer className="h-[320] p-3 grid grid-flow-row grid-rows-2 border-t border-t-(--text-colour) dark:border-t-(--text-colour-dark) font-noto-serif">
            <div className="grid grid-flow-col grid-cols-2">
                <div>
                    <p>akfgfragments.com</p>
                    <p>{t.rich('tag-line', {
                        crossed: (chunks) => <s>{chunks}</s>
                    })}</p>
                </div>
                <div className="grid grid-flow-col grid-cols-2">
                    <div className="flow">
                        <FooterLink href="/about-us" title={t('about-us')} />
                        <FooterLink href="/our-team" title={t('team')} />
                        <FooterLink href="/thanks" title={t('thanks')} />
                    </div>
                    <div>
                        <FooterLink href="https://www.instagram.com/akfgfragments_com/" title="Instagram" />
                        <FooterLink href={locale === "ru" ? "https://twitter.com/akfgfragmentsRu" : "https://twitter.com/AkfgfragmentsEn"} title="Twitter" />
                        <FooterLink href="https://bsky.app/profile/akfgfragments.bsky.social" title="Bluesky" />
                        <FooterLink href="https://facebook.com/akfgfragmentscom" title="Facebook" />
                        <FooterLink href={locale === "ru" ? "https://t.me/akfgfragments_ru" : "https://t.me/akfgfragments"} title="Telegram" />
                        <FooterLink href="https://discord.gg/mQJ4TcjM3h" title="Discord" />
                        <FooterLink href="https://www.tiktok.com/@akfgfragments" title="Tiktok" />
                        <FooterLink href="https://www.youtube.com/@akfgfragmentscom" title="Youtube" />
                        <FooterLink href="https://www.reddit.com/r/AsianKungFuGeneration" title="Reddit" />
                    </div>
                </div>
            </div>
            <div className="">
                akfgfragments © {new Date().getFullYear()}
            </div>
        </footer>
    )
}

export default Footer