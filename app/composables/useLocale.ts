import { translations } from '~/utils/translations'

export const useLocale = () => {
  const locale = useState<'en' | 'th'>('app.locale', () => {
    if (import.meta.client) {
      return (localStorage.getItem('linguaflow_locale') as 'en' | 'th') || 'en'
    }
    return 'en'
  })

  const t = (key: string): string => {
    const keys = key.split('.')
    let result: any = translations[locale.value]
    for (const k of keys) {
      result = result?.[k]
    }
    return result ?? key
  }

  const toggleLocale = () => {
    locale.value = locale.value === 'en' ? 'th' : 'en'
    if (import.meta.client) {
      localStorage.setItem('linguaflow_locale', locale.value)
    }
  }

  const isEN = computed(() => locale.value === 'en')

  return { locale, t, toggleLocale, isEN }
}
