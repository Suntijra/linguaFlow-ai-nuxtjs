<template>
  <div class="min-h-screen bg-background-light text-charcoal selection:bg-primary/10 selection:text-primary">
    <nav class="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] z-50">
      <div class="nav-blur rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
        <div class="flex items-center gap-3">
          <div class="bg-primary p-2 rounded-xl flex items-center justify-center">
            <span class="material-symbols-outlined text-white text-xl">translate</span>
          </div>
          <span class="text-xl font-bold tracking-tight text-secondary">LinguaFlow AI</span>
        </div>
        <div class="hidden md:flex items-center gap-8 text-sm font-semibold">
          <a class="text-slate-600 hover:text-primary transition-colors" href="#features">Features</a>
          <a class="text-slate-600 hover:text-primary transition-colors" href="#api">API</a>
          <a class="text-slate-600 hover:text-primary transition-colors" href="#pricing">Pricing</a>
          <div class="flex items-center bg-slate-100 rounded-full p-1 border border-slate-200">
            <button class="px-3 py-1 rounded-full text-xs bg-white text-primary shadow-sm font-bold">EN</button>
            <button class="px-3 py-1 rounded-full text-xs text-slate-400">TH</button>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <NuxtLink to="/login" class="text-sm font-semibold px-5 py-2 text-slate-600 hover:text-primary transition-colors">Login</NuxtLink>
          <NuxtLink to="/login" class="bg-secondary text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-primary transition-all shadow-md">Sign up</NuxtLink>
        </div>
      </div>
    </nav>
    <main class="pt-32">
      <section class="text-center py-24 px-6 max-w-[1200px] mx-auto">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-8">
          <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Corporate Enterprise V2.0</span>
        </div>
        <h1 class="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 max-w-4xl mx-auto gradient-text">
            Next-generation AI Document &amp; Voice Translation
        </h1>
        <p class="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12">
            Experience precision and context-aware accuracy for professional global communication. Supporting over 100+ languages with SOC2-compliant security.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink to="/dashboard/translate-docx" class="w-full sm:w-auto px-10 py-5 bg-primary text-white rounded-full font-bold text-lg hover:bg-blue-700 hover:-translate-y-1 active:translate-y-0 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3">
            <span class="material-symbols-outlined">description</span>
            Translate Docx
          </NuxtLink>
          <NuxtLink to="/dashboard/translate-voice" class="w-full sm:w-auto px-10 py-5 bg-white text-secondary border border-slate-200 rounded-full font-bold text-lg hover:border-primary hover:text-primary hover:-translate-y-1 active:translate-y-0 transition-all shadow-sm flex items-center justify-center gap-3">
            <span class="material-symbols-outlined">mic</span>
            Translate Voice Now
          </NuxtLink>
        </div>
      </section>
      <section class="py-24 bg-background-alt" id="features">
        <div class="max-w-[1200px] mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold mb-4">Powerful Features for Global Teams</h2>
            <div class="h-1.5 w-12 bg-primary mx-auto rounded-full"></div>
          </div>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="group p-10 rounded-2xl premium-card">
              <div class="flex flex-col h-full">
                <div class="mb-8 w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-primary">
                  <span class="material-symbols-outlined text-3xl">upload_file</span>
                </div>
                <h3 class="text-2xl font-bold mb-4">Document Translation</h3>
                <p class="text-slate-500 mb-8 grow">
                  Professional drag-and-drop support for .docx, .pdf, and .xlsx files. Preserves complex layouts and enterprise formatting.
                </p>
                <div class="border-2 border-dashed border-slate-200 rounded-xl p-12 flex flex-col items-center justify-center bg-white group-hover:bg-blue-50/30 group-hover:border-primary/30 transition-all">
                  <span class="material-symbols-outlined text-slate-300 group-hover:text-primary text-5xl mb-3">cloud_upload</span>
                  <span class="text-sm font-semibold text-slate-400 group-hover:text-primary">Drop professional documents here</span>
                </div>
              </div>
            </div>
            <div class="group p-10 rounded-2xl premium-card">
              <div class="flex flex-col h-full">
                <div class="mb-8 w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center text-accent-teal">
                  <span class="material-symbols-outlined text-3xl">graphic_eq</span>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-charcoal">Real-time Voice (ASR)</h3>
                <p class="text-slate-500 mb-8 grow">
                  Instant voice-to-text translation with neural context awareness. Optimized for board meetings and live global events.
                </p>
                <div class="h-32 flex items-center justify-center gap-2 px-8 rounded-xl bg-slate-50 border border-slate-200 overflow-hidden relative group-hover:bg-teal-50/30 transition-all">
                  <div class="h-8 w-2 bg-accent-teal rounded-full animate-pulse opacity-40"></div>
                  <div class="h-16 w-2 bg-accent-teal rounded-full animate-pulse opacity-60"></div>
                  <div class="h-24 w-2 bg-accent-teal rounded-full animate-pulse opacity-80"></div>
                  <div class="h-14 w-2 bg-accent-teal rounded-full animate-pulse opacity-100"></div>
                  <div class="h-20 w-2 bg-accent-teal rounded-full animate-pulse opacity-80"></div>
                  <div class="h-28 w-2 bg-accent-teal rounded-full animate-pulse opacity-60"></div>
                  <div class="h-10 w-2 bg-accent-teal rounded-full animate-pulse opacity-40"></div>
                  <div class="absolute bottom-4 left-6 right-6 flex justify-between text-[10px] font-bold text-accent-teal uppercase tracking-widest opacity-80">
                    <span>Stream: Active</span>
                    <span>Format: Secure JSON</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-32 bg-white" id="api">
        <div class="max-w-[1200px] mx-auto px-6">
          <div class="flex flex-col lg:flex-row items-center gap-16">
            <div class="lg:w-1/2">
              <h2 class="text-4xl font-bold mb-6 text-secondary">B2B Integration &amp; API</h2>
              <p class="text-slate-600 text-lg mb-8 leading-relaxed">
                Connect our high-performance AI translation engine directly into your enterprise workflow. Our REST API handles massive batches and streaming voice data with millisecond latency.
              </p>
              <div class="space-y-6 mb-10">
                <div class="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div class="mt-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
                    <span class="material-symbols-outlined text-sm">lock</span>
                  </div>
                  <div>
                    <h4 class="font-bold">Enterprise Encryption</h4>
                    <p class="text-sm text-slate-500">Industry-standard AES-256 encryption. Your data is never used for training models.</p>
                  </div>
                </div>
                <div class="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div class="mt-1 w-6 h-6 rounded-full bg-accent-teal flex items-center justify-center text-white">
                    <span class="material-symbols-outlined text-sm">verified</span>
                  </div>
                  <div>
                    <h4 class="font-bold">99.99% Uptime SLA</h4>
                    <p class="text-sm text-slate-500">Tier-4 data center infrastructure for mission-critical applications.</p>
                  </div>
                </div>
              </div>
              <button class="bg-secondary text-white font-bold px-10 py-4 rounded-full hover:bg-primary transition-all flex items-center gap-3 shadow-lg">
                <span class="material-symbols-outlined">developer_mode</span>
                Get API Credentials
              </button>
            </div>
            <div class="lg:w-1/2 w-full">
              <div class="bg-charcoal rounded-2xl shadow-2xl overflow-hidden font-mono text-[13px]">
                <div class="bg-secondary px-6 py-4 flex items-center justify-between">
                  <div class="flex gap-2">
                    <div class="w-3 h-3 rounded-full bg-red-400"></div>
                    <div class="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div class="w-3 h-3 rounded-full bg-emerald-400"></div>
                  </div>
                  <span class="text-slate-500 text-[10px] uppercase font-bold tracking-widest">translate_v1.sh</span>
                </div>
                <div class="p-8 text-slate-300">
                  <pre><code><span class="text-blue-400">POST</span> /api/v1/translate
<span class="text-slate-500">Host: api.linguaflow.ai</span>
<span class="text-slate-500">Authorization: Bearer KEY_****</span>
{
  <span class="text-teal-400">"input"</span>: {
    <span class="text-teal-400">"text"</span>: "Professional AI solution",
    <span class="text-teal-400">"target"</span>: "th"
  },
  <span class="text-teal-400">"settings"</span>: {
    <span class="text-teal-400">"tone"</span>: "formal",
    <span class="text-teal-400">"industry"</span>: "legal"
  }
}</code></pre>
                  <div class="mt-10 pt-6 border-t border-slate-700 flex justify-between items-center text-slate-500">
                    <span class="flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                      200 Success (28ms)
                    </span>
                    <button class="flex items-center gap-2 hover:text-white transition-colors">
                      <span class="material-symbols-outlined text-lg">content_copy</span>
                      <span>Copy Snippet</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-32 bg-background-alt border-y border-slate-200" id="pricing">
        <div class="max-w-[1200px] mx-auto px-6">
          <div class="text-center mb-20">
            <h2 class="text-4xl font-bold mb-4">Scalable Enterprise Pricing</h2>
            <p class="text-slate-500 text-lg">Choose a plan that grows with your international presence.</p>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-10 rounded-2xl border border-slate-200 flex flex-col items-center text-center premium-shadow">
              <h3 class="text-lg font-bold text-slate-400 mb-2 uppercase tracking-widest">Starter</h3>
              <div class="flex items-baseline gap-1 mb-8">
                <span class="text-5xl font-bold text-secondary">$29</span>
                <span class="text-slate-400 font-medium">/ 1k units</span>
              </div>
              <ul class="space-y-4 mb-10 text-slate-500 text-sm text-left w-full border-t border-slate-100 pt-8">
                <li class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-primary text-xl">check</span>
                  Standard AI Models
                </li>
                <li class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-primary text-xl">check</span>
                  Docx and PDF support
                </li>
                <li class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-primary text-xl">check</span>
                  Standard Support
                </li>
              </ul>
              <button class="w-full py-4 rounded-full border border-slate-300 text-secondary font-bold hover:bg-slate-50 transition-colors">Get Started</button>
            </div>
            <div class="bg-white p-10 rounded-2xl border-2 border-primary flex flex-col items-center text-center relative shadow-2xl -translate-y-4">
              <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2 rounded-full">Most Popular</div>
              <h3 class="text-lg font-bold text-primary mb-2 uppercase tracking-widest">Business Pro</h3>
              <div class="flex items-baseline gap-1 mb-8">
                <span class="text-5xl font-bold text-secondary">$99</span>
                <span class="text-slate-400 font-medium">/ 5k units</span>
              </div>
              <ul class="space-y-4 mb-10 text-slate-600 text-sm text-left w-full border-t border-slate-100 pt-8">
                <li class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span class="font-semibold text-secondary">Advanced Neural Engines</span>
                </li>
                <li class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-primary text-xl">check_circle</span>
                  All Enterprise Formats
                </li>
                <li class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-primary text-xl">check_circle</span>
                  Priority API Access
                </li>
                <li class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-primary text-xl">check_circle</span>
                  Custom Glossaries
                </li>
              </ul>
              <button class="w-full py-4 rounded-full bg-primary text-white font-bold hover:bg-blue-700 transition-all shadow-lg shadow-primary/20">Upgrade Now</button>
            </div>
            <div class="bg-white p-10 rounded-2xl border border-slate-200 flex flex-col items-center text-center premium-shadow">
              <h3 class="text-lg font-bold text-slate-400 mb-2 uppercase tracking-widest">Enterprise</h3>
              <div class="flex items-baseline gap-1 mb-8">
                <span class="text-4xl font-bold text-secondary">Contact</span>
              </div>
              <ul class="space-y-4 mb-10 text-slate-500 text-sm text-left w-full border-t border-slate-100 pt-8">
                <li class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-primary text-xl">check</span>
                  Private Model Training
                </li>
                <li class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-primary text-xl">check</span>
                  Dedicated TAM
                </li>
                <li class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-primary text-xl">check</span>
                  Unlimited Volume
                </li>
                <li class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-primary text-xl">check</span>
                  On-premise Deployment
                </li>
              </ul>
              <button class="w-full py-4 rounded-full border border-slate-300 text-secondary font-bold hover:bg-slate-50 transition-colors">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="bg-white pt-24 pb-12 px-6">
      <div class="max-w-[1200px] mx-auto">
        <div class="grid md:grid-cols-4 gap-12 mb-20">
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center gap-3 mb-8">
              <div class="bg-primary p-2 rounded-xl flex items-center justify-center">
                <span class="material-symbols-outlined text-white text-xl">translate</span>
              </div>
              <span class="text-xl font-bold tracking-tight text-secondary">LinguaFlow AI</span>
            </div>
            <p class="text-slate-500 max-w-sm leading-relaxed">
              Global communication powered by enterprise AI. Context-aware, high-performance, and ISO-certified secure translation for the world's leading brands.
            </p>
          </div>
          <div>
            <h4 class="font-bold mb-8 text-secondary uppercase tracking-widest text-xs">Product</h4>
            <ul class="space-y-4 text-sm text-slate-500 font-medium">
              <li><a class="hover:text-primary transition-colors" href="#">Document API</a></li>
              <li><a class="hover:text-primary transition-colors" href="#">Voice Streaming</a></li>
              <li><a class="hover:text-primary transition-colors" href="#">Security &amp; Privacy</a></li>
              <li><a class="hover:text-primary transition-colors" href="#">Developer Docs</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-8 text-secondary uppercase tracking-widest text-xs">Company</h4>
            <ul class="space-y-4 text-sm text-slate-500 font-medium">
              <li><a class="hover:text-primary transition-colors" href="#">About LinguaFlow</a></li>
              <li><a class="hover:text-primary transition-colors" href="#">Privacy Center</a></li>
              <li><a class="hover:text-primary transition-colors" href="#">Enterprise Terms</a></li>
              <li><a class="hover:text-primary transition-colors" href="#">Expert Support</a></li>
            </ul>
          </div>
        </div>
        <div class="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p class="text-xs text-slate-400 font-medium">© 2024 LinguaFlow AI Technologies Inc. All rights reserved.</p>
          <div class="flex items-center gap-8">
            <a class="text-slate-300 hover:text-primary transition-colors" href="#">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
            </a>
            <a class="text-slate-300 hover:text-primary transition-colors" href="#">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})
</script>

