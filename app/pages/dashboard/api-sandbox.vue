<template>
  <div class="space-y-8 max-w-6xl mx-auto">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-extrabold text-foreground tracking-tight">API & Sandbox</h1>
      <button class="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-medium shadow-sm hover:bg-primary/90 transition-colors">
        <Plus class="w-4 h-4" />
        Generate New Token
      </button>
    </div>

    <!-- API Tokens -->
    <div class="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
      <div class="p-6 border-b border-border">
        <h3 class="text-lg font-bold text-foreground">Active API Tokens</h3>
        <p class="text-sm text-muted-foreground mt-1">Manage your API tokens and access keys for integration.</p>
      </div>
      <div class="p-6">
        <div class="space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors gap-4">
            <div>
              <h4 class="font-medium text-foreground flex items-center gap-2">
                Production Key <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-gray-100 text-gray-600 uppercase tracking-wide">Live</span>
              </h4>
              <div class="mt-2 flex items-center gap-2 font-mono text-sm text-muted-foreground bg-gray-100 px-3 py-1.5 rounded-md">
                LF_PROD_***_8x9A
                <button class="text-primary hover:text-primary/80"><Copy class="w-3.5 h-3.5" /></button>
              </div>
            </div>
            <div class="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground">
              <span>Created: Sep 12, 2026</span>
              <span>Last Used: Today</span>
              <button class="text-red-500 hover:text-red-600 font-medium text-xs mt-1">Revoke</button>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors gap-4">
            <div>
              <h4 class="font-medium text-foreground flex items-center gap-2">
                Development Key <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 uppercase tracking-wide">Test</span>
              </h4>
              <div class="mt-2 flex items-center gap-2 font-mono text-sm text-muted-foreground bg-gray-100 px-3 py-1.5 rounded-md">
                LF_TEST_***_2mY1
                <button class="text-primary hover:text-primary/80"><Copy class="w-3.5 h-3.5" /></button>
              </div>
            </div>
            <div class="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground">
              <span>Created: Sep 12, 2026</span>
              <span>Last Used: Never</span>
              <button class="text-red-500 hover:text-red-600 font-medium text-xs mt-1">Revoke</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sandbox Testing Area -->
    <div class="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
      <div class="p-6 border-b border-border flex justify-between items-center">
        <div>
          <h3 class="text-lg font-bold text-foreground">Interactive Sandbox</h3>
          <p class="text-sm text-muted-foreground mt-1">Test the dangjai API directly from your browser.</p>
        </div>
        <div class="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
          <button class="px-3 py-1 text-sm font-medium rounded-md bg-white shadow-sm text-foreground">cURL</button>
          <button class="px-3 py-1 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground">Node.js</button>
          <button class="px-3 py-1 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground">Python</button>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
        <!-- Request -->
        <div class="p-6 flex flex-col items-start bg-[#1e1e1e]">
           <div class="flex items-center gap-2 mb-4 w-full">
             <span class="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded">POST</span>
             <span class="text-gray-300 font-mono text-sm">https://api.linguaflow.ai/v1/translate</span>
           </div>
           <div class="w-full relative group flex-1 min-h-[200px]">
             <pre class="text-gray-300 font-mono text-sm whitespace-pre-wrap"><code>{
  "source_language": "en",
  "target_language": "th",
  "text": "The next generation of artificial intelligence brings translation capabilities to the edge."
}</code></pre>
             <button class="absolute top-0 right-0 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
               <Copy class="w-4 h-4" />
             </button>
           </div>
           <div class="mt-4 pt-4 border-t border-gray-700 w-full flex justify-end">
             <button class="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm">
               <Play class="w-4 h-4" /> Run Test
             </button>
           </div>
        </div>

        <!-- Response -->
        <div class="p-6 flex flex-col bg-gray-50/50">
           <div class="flex items-center justify-between mb-4 w-full">
             <span class="text-sm font-bold text-gray-500 uppercase tracking-widest">Response</span>
             <span class="flex items-center gap-1.5 text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                <span class="w-1.5 h-1.5 rounded-full bg-green-600"></span> 200 OK
             </span>
           </div>
           <div class="w-full relative group flex-1">
             <pre class="text-gray-700 font-mono text-sm whitespace-pre-wrap leading-relaxed"><code>{
  "id": "tr_9a8b7c6d5e4f",
  "object": "translation",
  "created": 1709823465,
  "model": "linguaflow-[v2]-core",
  "result": {
    "text": "ปัญญาประดิษฐ์ยุคถัดไปนำความสามารถในการแปลภาษามาสู่ระดับสูงสุด...",
    "source_language": "en",
    "target_language": "th",
    "detected_source_language": "en",
    "tokens_used": 18
  }
}</code></pre>
             <button class="absolute top-0 right-0 p-2 text-gray-400 hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
               <Copy class="w-4 h-4" />
             </button>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Plus, Copy, Play } from 'lucide-vue-next'
definePageMeta({
  layout: 'dashboard'
})
</script>
