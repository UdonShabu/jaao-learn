// src/app/[locale]/layout.tsx
import { NextIntlClientProvider } from "next-intl"
import { notFound } from "next/navigation"

const locales = ["en", "th"]

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!locales.includes(locale)) notFound()

  const messages = (await import(`@/messages/${locale}.json`)).default

  return (
   <div>

        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        </div>

  )
}