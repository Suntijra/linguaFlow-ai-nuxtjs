<template>
  <div class="space-y-8 max-w-5xl mx-auto">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-extrabold text-foreground tracking-tight">AI Document Translation</h1>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-border p-6 sm:p-8">
      <!-- Upload Zone -->
      <div class="border-2 border-dashed border-primary/30 rounded-xl bg-primary/5 p-12 flex flex-col items-center justify-center text-center hover:bg-primary/10 transition-colors cursor-pointer group">
        <div class="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <UploadCloud class="w-8 h-8 text-primary" />
        </div>
        <h3 class="text-lg font-bold text-foreground mb-2">Click or drag document to upload</h3>
        <p class="text-sm text-muted-foreground max-w-md mx-auto">
          Supported formats: .docx, .doc. Max file size: 50MB.
          <br/> AI will preserve the original formatting of your document.
        </p>
      </div>

      <!-- Configuration -->
      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Speak In (Source Language)</label>
          <div class="relative">
            <select class="block w-full pl-3 pr-10 py-3 text-base border-gray-200 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-lg border appearance-none bg-white shadow-sm">
              <option>Auto-Detect</option>
              <option>English</option>
              <option>Thai</option>
              <option>Japanese</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
              <ChevronDown class="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Translate To</label>
          <div class="relative">
            <select class="block w-full pl-3 pr-10 py-3 text-base border-gray-200 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-lg border appearance-none bg-white shadow-sm">
              <option>English</option>
              <option selected>Thai</option>
              <option>Japanese</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
              <ChevronDown class="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <!-- Action -->
      <div class="mt-8">
        <button class="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-md shadow-primary/20 text-base font-bold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all">
          Translate Document — 50 Credits
        </button>
      </div>
    </div>

    <!-- Results Panel -->
    <div class="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
      <div class="p-6 border-b border-border">
        <h3 class="text-lg font-bold text-foreground">Recent Documents</h3>
      </div>
      <div class="p-6">
        <div class="space-y-4">
          <!-- Item 1 -->
          <div class="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <FileText class="w-5 h-5" />
              </div>
              <div>
                <h4 class="font-medium text-foreground">Annual_Report_2026.docx</h4>
                <p class="text-xs text-muted-foreground mt-0.5">Auto-Detect → Thai • 2.4 MB</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
               <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Completed
               </span>
               <button class="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1">
                 <Download class="w-4 h-4" /> Download
               </button>
            </div>
          </div>
          
          <!-- Item 2 (Processing) -->
          <div class="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
            <div class="flex items-center gap-4 w-full">
              <div class="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-muted-foreground animate-pulse">
                <FileText class="w-5 h-5" />
              </div>
              <div class="flex-1">
                <div class="flex justify-between items-center mb-1">
                  <h4 class="font-medium text-foreground">Marketing_Plan_V3.docx</h4>
                  <span class="text-xs font-medium text-primary">Translating... 45%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-1.5">
                  <div class="bg-primary h-1.5 rounded-full" style="width: 45%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { UploadCloud, ChevronDown, FileText, Download } from 'lucide-vue-next'
definePageMeta({
  layout: 'dashboard'
})
</script>
