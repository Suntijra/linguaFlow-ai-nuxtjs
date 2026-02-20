<template>
  <header class="h-16 bg-white border-b border-border flex items-center justify-between px-6 shadow-sm sticky top-0 z-10 w-full transition-all duration-200">
    <div class="flex items-center gap-4">
      <slot name="left"></slot>
    </div>
    <div class="flex items-center gap-4">
      <button class="px-3 py-1.5 rounded-md border border-border text-sm font-medium hover:bg-gray-50 text-foreground transition-colors">
        TH / EN
      </button>
      <button class="p-2 rounded-full hover:bg-gray-100 text-muted-foreground transition-colors relative">
        <Bell class="w-5 h-5" />
        <span class="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
      </button>
      <div class="flex items-center gap-2 cursor-pointer ml-2">
        <div class="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium border border-primary/20">
          U
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Bell } from 'lucide-vue-next'
</script>
