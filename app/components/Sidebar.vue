<template>
  <aside class="w-64 bg-white border-r border-border flex flex-col p-4 shadow-sm h-screen sticky top-0">
    <div class="flex items-center gap-2 font-bold text-xl text-primary mb-10 mt-2 px-2">
      <div class="h-8 w-8 rounded bg-primary text-white flex items-center justify-center shadow-sm">L</div>
      LinguaFlow
    </div>
    
    <nav class="flex-1 space-y-1">
      <NuxtLink to="/dashboard" class="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-gray-50 text-foreground transition-all duration-200 font-medium" active-class="bg-primary/5 text-primary">
        <LayoutDashboard class="w-5 h-5 opacity-70" />
        Dashboard
      </NuxtLink>
      <NuxtLink to="/dashboard/translate-docx" class="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-gray-50 text-foreground transition-all duration-200 font-medium" active-class="bg-primary/5 text-primary">
        <FileText class="w-5 h-5 opacity-70" />
        Translate Docx
      </NuxtLink>
      <NuxtLink to="/dashboard/translate-voice" class="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-gray-50 text-foreground transition-all duration-200 font-medium" active-class="bg-primary/5 text-primary">
        <Mic class="w-5 h-5 opacity-70" />
        Translate Voice
      </NuxtLink>
      <NuxtLink to="/dashboard/api-sandbox" class="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-gray-50 text-foreground transition-all duration-200 font-medium" active-class="bg-primary/5 text-primary">
        <Code class="w-5 h-5 opacity-70" />
        API & Sandbox
      </NuxtLink>
      <NuxtLink to="/dashboard/top-up" class="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-gray-50 text-foreground transition-all duration-200 font-medium" active-class="bg-primary/5 text-primary">
        <CreditCard class="w-5 h-5 opacity-70" />
        Top-up Credits
      </NuxtLink>
    </nav>
    
    <div class="mt-auto border-t border-border pt-4">
      <button class="flex items-center gap-3 px-3 py-2.5 w-full text-left rounded-md hover:bg-gray-50 text-muted-foreground transition-all duration-200 font-medium">
        <Settings class="w-5 h-5 opacity-70" />
        User Settings
      </button>
    </div>
  </aside>
</template>

<script setup>
import { LayoutDashboard, FileText, Mic, Code, CreditCard, Settings } from 'lucide-vue-next'
</script>
