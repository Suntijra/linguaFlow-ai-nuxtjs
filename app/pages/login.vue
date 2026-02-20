<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
    <!-- Subtle Background Accents -->
    <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
    <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl"></div>
    
    <!-- Top Right Language Toggle -->
    <div class="absolute top-6 right-6 lg:top-10 lg:right-10">
      <button @click="toggleLocale" class="px-4 py-2 rounded-md border border-gray-200 text-sm font-medium hover:bg-white bg-white/50 backdrop-blur-sm transition-colors shadow-sm flex items-center gap-1.5">
        <span :class="locale === 'th' ? 'text-primary font-bold' : 'text-muted-foreground'">TH</span>
        <span class="text-gray-300">/</span>
        <span :class="locale === 'en' ? 'text-primary font-bold' : 'text-muted-foreground'">EN</span>
      </button>
    </div>

    <div class="sm:mx-auto sm:w-full sm:max-w-md relative z-10 text-center">
      <NuxtLink to="/" class="inline-flex items-center gap-2 font-bold text-3xl text-primary justify-center mb-2">
        <div class="h-10 w-10 rounded-lg bg-primary text-white flex items-center justify-center shadow-md">D</div>
        dangjai
      </NuxtLink>
      <h2 class="mt-4 text-center text-3xl font-extrabold text-gray-900 tracking-tight">
        {{ t('login.welcome') }}
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        {{ t('login.subtitle') }}
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
      <div class="bg-white py-10 px-6 shadow-xl shadow-gray-200/50 sm:rounded-2xl sm:px-10 border border-gray-100">
        <form class="space-y-6" @submit.prevent="handleLogin">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              {{ t('login.email') }}
            </label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow sm:text-sm" placeholder="you@example.com" />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">
              {{ t('login.password') }}
            </label>
            <div class="mt-2 text-right">
              <a href="#" class="text-xs font-semibold text-primary hover:text-primary/80">{{ t('login.forgot') }}</a>
            </div>
            <div class="mt-1">
              <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow sm:text-sm" placeholder="••••••••" />
            </div>
          </div>

          <div>
            <button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md shadow-primary/20 text-sm font-semibold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all">
              {{ t('login.signIn') }}
            </button>
          </div>
        </form>

        <div class="mt-8">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-200"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-3 bg-white text-gray-500 font-medium">{{ t('login.or') }}</span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-2 gap-4">
            <div>
              <button class="w-full inline-flex justify-center py-2.5 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                Google
              </button>
            </div>
            <div>
              <button class="w-full inline-flex justify-center py-2.5 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                GitHub
              </button>
            </div>
          </div>
        </div>
        
        <div class="mt-8 text-center text-sm text-gray-600">
          {{ t('login.noAccount') }}
          <a href="#" class="font-semibold text-primary hover:text-primary/80">{{ t('login.signUp') }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})
const router = useRouter()
const { login } = useAuth()
const { locale, t, toggleLocale } = useLocale()

const handleLogin = () => {
  login()
  router.push('/dashboard')
}
</script>
