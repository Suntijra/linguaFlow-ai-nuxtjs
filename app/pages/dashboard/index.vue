<template>
  <div class="space-y-8">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-extrabold text-foreground tracking-tight">Dashboard</h1>
    </div>

    <!-- Top Stats / Credits -->
    <div class="bg-white rounded-xl shadow-sm border border-border p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
      <div>
        <h2 class="text-lg font-semibold text-foreground mb-1">Available Credits</h2>
        <div class="text-4xl font-extrabold text-primary flex items-baseline gap-2">
          1,250 <span class="text-sm font-medium text-muted-foreground">Credits</span>
        </div>
      </div>
      <div>
        <NuxtLink to="/dashboard/top-up" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-primary hover:bg-primary/90 transition-colors">
          Top Up Credits
        </NuxtLink>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <NuxtLink to="/dashboard/translate-docx" class="group bg-white rounded-xl shadow-sm border border-border p-6 flex items-start gap-4 hover:border-primary/50 hover:shadow-md transition-all">
        <div class="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
          <FileText class="w-6 h-6" />
        </div>
        <div>
          <h3 class="text-lg font-bold text-foreground group-hover:text-primary transition-colors">Translate Docx</h3>
          <p class="text-sm text-muted-foreground mt-1">Upload Microsoft Word documents for highly accurate AI translation preserving format.</p>
        </div>
      </NuxtLink>
      
      <NuxtLink to="/dashboard/translate-voice" class="group bg-white rounded-xl shadow-sm border border-border p-6 flex items-start gap-4 hover:border-primary/50 hover:shadow-md transition-all">
        <div class="w-12 h-12 rounded-lg bg-teal-500/10 text-teal-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
          <Mic class="w-6 h-6" />
        </div>
        <div>
          <h3 class="text-lg font-bold text-foreground group-hover:text-teal-600 transition-colors">Translate Voice</h3>
          <p class="text-sm text-muted-foreground mt-1">Real-time voice translation (ASR) via microphone. Speak naturally and get immediate results.</p>
        </div>
      </NuxtLink>
    </div>

    <!-- Chart Placeholder -->
    <div class="bg-white rounded-xl shadow-sm border border-border p-6">
      <h3 class="text-lg font-bold text-foreground mb-6">Usage Statistics</h3>
      <div class="h-64 w-full bg-gray-50 rounded-lg border border-dashed border-gray-200 flex flex-col items-center justify-center text-muted-foreground">
         <BarChart3 class="w-10 h-10 mb-2 opacity-50" />
         <p class="text-sm">Usage chart (30 Days)</p>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
      <div class="p-6 border-b border-border">
        <h3 class="text-lg font-bold text-foreground">Recent Translations</h3>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Name / Type</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Date</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
              <th scope="col" class="relative px-6 py-3"><span class="sr-only">Action</span></th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <FileText class="w-5 h-5 text-gray-400 mr-3" />
                  <div class="text-sm font-medium text-foreground">Q3_Report_Final.docx</div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">Today, 10:45 AM</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-primary hover:text-primary/80">Download</a>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <Mic class="w-5 h-5 text-gray-400 mr-3" />
                  <div class="text-sm font-medium text-foreground">Voice Session #402</div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">Yesterday, 14:20 PM</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-primary hover:text-primary/80">View</a>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <FileText class="w-5 h-5 text-gray-400 mr-3" />
                  <div class="text-sm font-medium text-foreground">contract_draft_v2.docx</div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">Oct 24, 2026</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Failed</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-muted-foreground hover:text-gray-900">Retry</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FileText, Mic, BarChart3 } from 'lucide-vue-next'
definePageMeta({
  layout: 'dashboard'
})
</script>
