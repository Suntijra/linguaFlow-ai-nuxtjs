<template>
  <div class="flex flex-col h-full relative font-sans max-w-6xl mx-auto w-full">
    <!-- Central Content -->
    <div class="flex-1 px-4 lg:px-10 pb-10 flex flex-col mt-4">
      <div class="mb-10 text-center">
        <h2 class="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
            Voice & File Translation
        </h2>
        <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
            Upload your recordings for high-fidelity AI translation.
        </p>
      </div>

      <!-- Configuration Dropdowns -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
        <div class="flex flex-col gap-2 w-full sm:w-64">
          <label class="text-[10px] uppercase tracking-widest text-muted-foreground font-bold ml-4">Speak In</label>
          <div class="relative group">
            <select class="w-full bg-white border border-gray-200 group-hover:border-primary/50 text-foreground rounded-xl px-5 py-4 appearance-none focus:ring-2 focus:ring-primary focus:outline-none transition-all shadow-sm font-medium">
              <option>English (US)</option>
              <option>Spanish (ES)</option>
              <option>Thai (TH)</option>
            </select>
            <ChevronDown class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
          </div>
        </div>
        
        <div class="flex items-center pt-0 sm:pt-6 text-primary">
          <ArrowRightLeft class="w-6 h-6 rotate-90 sm:rotate-0" />
        </div>
        
        <div class="flex flex-col gap-2 w-full sm:w-64">
          <label class="text-[10px] uppercase tracking-widest text-muted-foreground font-bold ml-4">Translate To</label>
          <div class="relative group">
            <select class="w-full bg-white border border-gray-200 group-hover:border-primary/50 text-foreground rounded-xl px-5 py-4 appearance-none focus:ring-2 focus:ring-primary focus:outline-none transition-all shadow-sm font-medium">
              <option>Thai (TH)</option>
              <option>Japanese (JP)</option>
              <option>French (FR)</option>
            </select>
            <ChevronDown class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
          </div>
        </div>
      </div>

      <!-- Upload Audio Area Only (No Mic) -->
      <div class="w-full max-w-3xl mx-auto mb-12 sm:mb-16">
        <div class="border-2 border-dashed border-gray-300 rounded-3xl bg-gray-50/50 p-12 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer group">
          <div class="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-primary">
            <UploadCloud class="w-10 h-10" />
          </div>
          <h3 class="text-xl font-bold text-foreground mb-2">Upload Audio File</h3>
          <p class="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
            Drag and drop or click to browse recordings.<br>
            Supported formats: mp3, wav, m4a. Max 50MB.
          </p>
          <div class="flex gap-2 justify-center mb-8">
            <span class="px-3 py-1 bg-white border border-gray-200 text-gray-500 text-[10px] font-bold rounded-full uppercase tracking-wider">mp3</span>
            <span class="px-3 py-1 bg-white border border-gray-200 text-gray-500 text-[10px] font-bold rounded-full uppercase tracking-wider">wav</span>
            <span class="px-3 py-1 bg-white border border-gray-200 text-gray-500 text-[10px] font-bold rounded-full uppercase tracking-wider">m4a</span>
          </div>
          <button class="bg-primary text-white px-8 py-3 rounded-full font-medium shadow-sm hover:bg-primary/90 transition-colors flex items-center gap-2">
            Browse Files
          </button>
        </div>
      </div>

      <!-- Translation Panels -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full min-h-[300px]">
        <!-- Live Transcription -->
        <div class="bg-white rounded-2xl p-6 sm:p-8 flex flex-col relative overflow-hidden group shadow-sm border border-gray-200">
          <div class="flex items-center gap-2 mb-6">
            <span class="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
            <h3 class="text-xs font-bold uppercase tracking-widest text-gray-500">Live Transcription</h3>
          </div>
          <div class="text-xl lg:text-2xl font-light text-gray-800 leading-relaxed overflow-y-auto pr-4 flex-1">
            Hello, I am delighted to be here today to discuss our latest advancements in artificial intelligence. We believe that technology should serve humanity by bridging the gap between...
            <span class="inline-block w-[2px] h-6 bg-primary ml-1 animate-pulse align-middle"></span>
          </div>
          <div class="mt-4 flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <button class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 border border-gray-200 hover:text-primary hover:border-primary hover:bg-white transition-all">
              <Copy class="w-4 h-4" />
            </button>
          </div>
        </div>

        <!-- Translation Output -->
        <div class="bg-primary/5 rounded-2xl p-6 sm:p-8 border border-primary/20 flex flex-col relative overflow-hidden group shadow-sm">
          <div class="flex items-center gap-2 mb-6">
            <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <h3 class="text-xs font-bold uppercase tracking-widest text-primary">Translation Output</h3>
          </div>
          <div class="text-xl lg:text-2xl font-light text-gray-900 leading-relaxed overflow-y-auto pr-4 flex-1 font-serif">
            สวัสดีครับ ผมดีใจมากที่ได้มาอยู่ที่นี่ในวันนี้เพื่อหารือเกี่ยวกับความก้าวหน้าล่าสุดของเราในด้านปัญญาประดิษฐ์ เราเชื่อว่าเทคโนโลยีควรรับใช้มนุษยชาติโดยการเชื่อมช่องว่างระหว่าง...
          </div>
          <div class="mt-4 flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <button class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-500 border border-gray-200 hover:text-primary hover:border-primary transition-all shadow-sm">
              <Copy class="w-4 h-4" />
            </button>
            <button class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30 transition-all hover:scale-105">
              <Volume2 class="w-4 h-4" fill="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Mic, ChevronDown, Copy, Volume2, ArrowRightLeft, UploadCloud } from 'lucide-vue-next'
definePageMeta({
  layout: 'dashboard'
})

// Generate an array of heights resembling the equalizer in the original design
const equalizerHeights = [
  10, 30, 60, 90, 40, 75, 35, 55, 95, 80, 45, 100, 80, 45, 95, 55, 75, 90, 60, 30, 10
]
</script>
