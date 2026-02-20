<template>
  <div class="space-y-8 max-w-5xl mx-auto">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-extrabold text-foreground tracking-tight mb-4">Top Up Credits</h1>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        Choose a package that fits your translation needs. Credits never expire and can be used across all LinguaFlow services.
      </p>
    </div>

    <!-- Pricing Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Basic Plan -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col relative hover:shadow-md transition-shadow">
        <h3 class="text-xl font-bold text-gray-900 mb-2">Basic</h3>
        <p class="text-sm text-gray-500 mb-6 flex-1">Perfect for individuals and occasional use.</p>
        <div class="flex items-baseline gap-2 mb-8">
          <span class="text-4xl font-extrabold text-gray-900">$10</span>
        </div>
        <div class="bg-primary/5 rounded-lg p-4 mb-8 text-center border border-primary/10">
           <span class="text-2xl font-bold text-primary block">1,000</span>
           <span class="text-xs font-medium text-primary/80 uppercase tracking-wider">Credits</span>
        </div>
        <ul class="space-y-4 mb-8">
          <li class="flex items-center gap-3 text-sm text-gray-600">
            <Check class="w-5 h-5 text-primary shrink-0" />
            Basic document formats
          </li>
          <li class="flex items-center gap-3 text-sm text-gray-600">
            <Check class="w-5 h-5 text-primary shrink-0" />
            Standard voice translation
          </li>
          <li class="flex items-center gap-3 text-sm text-gray-600">
            <Check class="w-5 h-5 text-primary shrink-0" />
            Email support
          </li>
        </ul>
        <button class="w-full mt-auto py-3 px-4 rounded-lg font-semibold text-primary bg-primary/10 hover:bg-primary/20 transition-colors border border-primary/20">
          Purchase
        </button>
      </div>

      <!-- Pro Plan -->
      <div class="bg-primary rounded-2xl shadow-lg shadow-primary/20 border border-primary p-8 flex flex-col relative text-white transform md:-translate-y-4 z-10">
        <div class="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-white text-primary text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-sm border border-primary/20">
          Most Popular
        </div>
        <h3 class="text-xl font-bold text-white mb-2">Professional</h3>
        <p class="text-sm text-primary-foreground/80 mb-6 flex-1">For freelancers and small teams.</p>
        <div class="flex items-baseline gap-2 mb-8">
          <span class="text-4xl font-extrabold text-white">$45</span>
        </div>
        <div class="bg-white/10 rounded-lg p-4 mb-8 text-center border border-white/20">
           <span class="text-2xl font-bold text-white block">5,000</span>
           <span class="text-xs font-medium text-white/80 uppercase tracking-wider">Credits</span>
        </div>
        <ul class="space-y-4 mb-8">
          <li class="flex items-center gap-3 text-sm text-white/90">
            <Check class="w-5 h-5 text-white shrink-0" />
            Advanced document formats (PDF)
          </li>
          <li class="flex items-center gap-3 text-sm text-white/90">
            <Check class="w-5 h-5 text-white shrink-0" />
            Premium voice models
          </li>
          <li class="flex items-center gap-3 text-sm text-white/90">
            <Check class="w-5 h-5 text-white shrink-0" />
            Priority 24/7 support
          </li>
           <li class="flex items-center gap-3 text-sm text-white/90">
            <Check class="w-5 h-5 text-white shrink-0" />
            API Access
          </li>
        </ul>
        <button class="w-full mt-auto py-3 px-4 rounded-lg font-bold text-primary bg-white hover:bg-gray-50 transition-colors shadow-sm">
          Purchase Pro
        </button>
      </div>

      <!-- Enterprise Plan -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col relative hover:shadow-md transition-shadow">
        <h3 class="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
        <p class="text-sm text-gray-500 mb-6 flex-1">High volume for large organizations.</p>
        <div class="flex items-baseline gap-2 mb-8">
          <span class="text-4xl font-extrabold text-gray-900">$180</span>
        </div>
        <div class="bg-primary/5 rounded-lg p-4 mb-8 text-center border border-primary/10">
           <span class="text-2xl font-bold text-primary block">25,000</span>
           <span class="text-xs font-medium text-primary/80 uppercase tracking-wider">Credits</span>
        </div>
        <ul class="space-y-4 mb-8">
          <li class="flex items-center gap-3 text-sm text-gray-600">
            <Check class="w-5 h-5 text-primary shrink-0" />
            Everything in Pro
          </li>
          <li class="flex items-center gap-3 text-sm text-gray-600">
            <Check class="w-5 h-5 text-primary shrink-0" />
            Custom models fine-tuning
          </li>
          <li class="flex items-center gap-3 text-sm text-gray-600">
            <Check class="w-5 h-5 text-primary shrink-0" />
            Dedicated account manager
          </li>
           <li class="flex items-center gap-3 text-sm text-gray-600">
            <Check class="w-5 h-5 text-primary shrink-0" />
            Volume discount
          </li>
        </ul>
        <button class="w-full mt-auto py-3 px-4 rounded-lg font-semibold text-primary bg-primary/10 hover:bg-primary/20 transition-colors border border-primary/20">
          Contact Sales
        </button>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { Check } from 'lucide-vue-next'
definePageMeta({
  layout: 'dashboard'
})
</script>
