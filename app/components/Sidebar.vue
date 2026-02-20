<template>
  <aside class="w-64 bg-white border-r border-border flex flex-col p-4 shadow-sm h-screen sticky top-0">
    <div class="flex items-center gap-2 font-bold text-xl text-primary mb-10 mt-2 px-2">
      <div class="h-8 w-8 rounded bg-primary text-white flex items-center justify-center shadow-sm">L</div>
      LinguaFlow
    </div>
    
    <nav class="flex-1 space-y-1">
      <!-- Dashboard (requires login) -->
      <NuxtLink v-if="isLoggedIn" to="/dashboard" class="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-gray-50 text-foreground transition-all duration-200 font-medium" active-class="bg-primary/5 text-primary">
        <LayoutDashboard class="w-5 h-5 opacity-70" />
        Dashboard
      </NuxtLink>
      <span v-else class="flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-300 cursor-not-allowed select-none font-medium" title="Please login to access">
        <LayoutDashboard class="w-5 h-5 opacity-70" />
        Dashboard
        <Lock class="w-3.5 h-3.5 ml-auto" />
      </span>

      <!-- Translate Docx (accessible to all) -->
      <NuxtLink to="/dashboard/translate-docx" class="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-gray-50 text-foreground transition-all duration-200 font-medium" active-class="bg-primary/5 text-primary">
        <FileText class="w-5 h-5 opacity-70" />
        Translate Docx
      </NuxtLink>

      <!-- Translate Voice (accessible to all) -->
      <NuxtLink to="/dashboard/translate-voice" class="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-gray-50 text-foreground transition-all duration-200 font-medium" active-class="bg-primary/5 text-primary">
        <Mic class="w-5 h-5 opacity-70" />
        Translate Voice
      </NuxtLink>

      <!-- API Sandbox (requires login) -->
      <NuxtLink v-if="isLoggedIn" to="/dashboard/api-sandbox" class="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-gray-50 text-foreground transition-all duration-200 font-medium" active-class="bg-primary/5 text-primary">
        <Code class="w-5 h-5 opacity-70" />
        API &amp; Sandbox
      </NuxtLink>
      <span v-else class="flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-300 cursor-not-allowed select-none font-medium" title="Please login to access">
        <Code class="w-5 h-5 opacity-70" />
        API &amp; Sandbox
        <Lock class="w-3.5 h-3.5 ml-auto" />
      </span>

      <!-- Top-up Credits (requires login) -->
      <NuxtLink v-if="isLoggedIn" to="/dashboard/top-up" class="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-gray-50 text-foreground transition-all duration-200 font-medium" active-class="bg-primary/5 text-primary">
        <CreditCard class="w-5 h-5 opacity-70" />
        Top-up Credits
      </NuxtLink>
      <span v-else class="flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-300 cursor-not-allowed select-none font-medium" title="Please login to access">
        <CreditCard class="w-5 h-5 opacity-70" />
        Top-up Credits
        <Lock class="w-3.5 h-3.5 ml-auto" />
      </span>
    </nav>

    <!-- Bottom section -->
    <div class="mt-auto border-t border-border pt-4">
      <button v-if="isLoggedIn" @click="logout" class="flex items-center gap-3 px-3 py-2.5 w-full text-left rounded-md hover:bg-red-50 text-red-400 hover:text-red-600 transition-all duration-200 font-medium text-sm">
        <LogOut class="w-4 h-4" />
        Logout
      </button>
      <NuxtLink v-else to="/login" class="flex items-center justify-center gap-2 w-full py-2.5 bg-primary text-white rounded-md font-bold text-sm hover:bg-primary/90 transition-all shadow-sm">
        <Lock class="w-4 h-4" />
        Login to Unlock All
      </NuxtLink>
    </div>
  </aside>
</template>

<script setup>
import { LayoutDashboard, FileText, Mic, Code, CreditCard, Lock, LogOut } from 'lucide-vue-next'

const { isLoggedIn, logout } = useAuth()
</script>
