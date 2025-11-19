'use client'

import {useTranslations} from 'use-intl'
import {LOCALES} from '@/constants'
import {useRouter, usePathname} from '@/i18n/navigation'
import {useLocale} from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/16/solid'
import React from 'react'

const LanguagePicker = () => {
    const router = useRouter()
    const pathname = usePathname()
    const locale = useLocale()



    const handleLanguages = ({event, code}:
                             { event: React.MouseEvent<HTMLButtonElement, MouseEvent>, code: string }) => {
        event.preventDefault()
        router.replace(pathname, {locale: code})
    }

    return (
        <div className="flex items-center">
            <Menu>
                <MenuButton className="flex items-center">
                    {LOCALES.filter(lang => lang.code === locale).map(lang => (lang.label))}
                    <ChevronDownIcon className="size-4" />
                </MenuButton>
                <MenuItems transition anchor="bottom end">
                    {LOCALES.map((lang) =>
                        <MenuItem key={lang.code}>
                            <Link href={`/${lang.code}`} className="block">
                                {lang.label}
                            </Link>
                        </MenuItem>
                    )}
                </MenuItems>
            </Menu>
        </div>
    )
}

const Logo = () => (
    <Link href="/" className="flex items-center">
        <Image className="block dark:hidden" src="/images/logo.png" alt="Site logo" width={50} height={50} />
        <Image className="hidden dark:block" src="/images/logo-dark.png" alt="Site logo" width={50} height={50} />
        <span>akfgfragments</span>
    </Link>
)

type MenuElementProps = {
    path: string,
    name: string
}

const MenuElement = ({path, name}: MenuElementProps) => (
    <li><Link href={`/${path}`} className="block uppercase">{name}</Link></li>
)

const MenuBlock = () => {
    const t = useTranslations('Header.Menu')

    const MENU_ELEMENTS = [
        'discography', 'music-videos', 'lyrics', 'tablatures', 'interviews', 'stuff', 'side-projects', 'the-band'
    ]

    return (
        <ul className="flex flex-row gap-4">
            {MENU_ELEMENTS.map((element, index) =>
                <MenuElement key={index} path={element} name={t(element)} />)}
        </ul>
    )
}

const Header = () => {
    return (
        <header>
            <nav className="fixed w-full top-0 start-0 font-nunito p-5">
                <div className="flex flex-wrap items-center justify-between">
                    <Logo />
                    <MenuBlock />
                    <LanguagePicker />
                </div>
            </nav>
        </header>
    )
}

export default Header