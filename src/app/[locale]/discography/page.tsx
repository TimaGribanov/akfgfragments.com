import React, {use} from 'react'
import {setRequestLocale} from 'next-intl/server'
import Header from '@/app/components/Header'
import MainBlock from '@/app/components/MainBlock'
import Footer from '@/app/components/Footer'

type Props = {
    params: Promise<{ locale: string }>;
}

export default function DiscographyPage({params}: Props) {
    const {locale} = use(params)

    setRequestLocale(locale)

    return (
        <div className="content flex flex-col">
            <Header />
            <MainBlock />
            <Footer locale={locale} />
        </div>
    )
}