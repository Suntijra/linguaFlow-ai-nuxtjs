<template>
  <div class="space-y-8 max-w-5xl mx-auto">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-extrabold text-foreground tracking-tight">{{ t('docx.title') }}</h1>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-border p-6 sm:p-8">
      <!-- Upload Zone -->
      <div
        @click="triggerFileInput"
        @dragover.prevent
        @drop.prevent="handleDrop"
        class="border-2 border-dashed border-primary/30 rounded-xl bg-primary/5 p-12 flex flex-col items-center justify-center text-center hover:bg-primary/10 transition-colors cursor-pointer group"
      >
        <input ref="fileInput" type="file" accept=".docx,.doc" class="hidden" @change="handleFileSelect" />
        <div class="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <UploadCloud class="w-8 h-8 text-primary" />
        </div>
        <h3 class="text-lg font-bold text-foreground mb-2">
          {{ selectedFile ? selectedFile.name : t('docx.uploadTitle') }}
        </h3>
        <p class="text-sm text-muted-foreground max-w-md mx-auto">
          {{ t('docx.uploadDesc') }}
          <br/> {{ t('docx.uploadSub') }}
        </p>
      </div>

      <!-- Configuration -->
      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('docx.sourceLabel') }}</label>
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
          <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('docx.targetLabel') }}</label>
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
        <button @click="startFlow" class="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-md shadow-primary/20 text-base font-bold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed" :disabled="!selectedFile">
          {{ t('docx.translateBtn') }}
        </button>
        <p v-if="showFileError" class="mt-2 text-sm text-red-500 text-center">{{ t('docx.fileError') }}</p>
      </div>
    </div>

    <!-- Results Panel -->
    <div class="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
      <div class="p-6 border-b border-border">
        <h3 class="text-lg font-bold text-foreground">{{ t('docx.recentTitle') }}</h3>
      </div>
      <div class="p-6">
        <div class="space-y-4">
          <!-- New item from payment (mock progress) -->
          <div v-if="newDocState !== 'idle'" class="flex items-center justify-between p-4 border border-gray-100 rounded-lg transition-colors" :class="newDocState === 'done' ? 'bg-green-50/50 border-green-200' : ''">
            <div class="flex items-center gap-4 w-full">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center" :class="newDocState === 'done' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-muted-foreground animate-pulse'">
                <FileText class="w-5 h-5" />
              </div>
              <div class="flex-1">
                <div class="flex justify-between items-center mb-1">
                  <h4 class="font-medium text-foreground">{{ selectedFile?.name ?? 'document.docx' }}</h4>
                  <span v-if="newDocState === 'loading'" class="text-xs font-medium text-primary">{{ t('docx.translating') }} {{ docProgress }}%</span>
                  <span v-if="newDocState === 'done'" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">{{ t('docx.completed') }}</span>
                </div>
                <div v-if="newDocState === 'loading'" class="w-full bg-gray-200 rounded-full h-1.5">
                  <div class="bg-primary h-1.5 rounded-full transition-all duration-300" :style="{ width: docProgress + '%' }"></div>
                </div>
                <div v-if="newDocState === 'done'" class="flex items-center gap-3 mt-1">
                  <button class="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1">
                    <Download class="w-4 h-4" /> {{ t('docx.download') }}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Item 1 (static) -->
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
               <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">{{ t('docx.completed') }}</span>
               <button class="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1">
                 <Download class="w-4 h-4" /> {{ t('docx.download') }}
               </button>
            </div>
          </div>

          <!-- Item 2 (static processing) -->
          <div class="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
            <div class="flex items-center gap-4 w-full">
              <div class="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-muted-foreground animate-pulse">
                <FileText class="w-5 h-5" />
              </div>
              <div class="flex-1">
                <div class="flex justify-between items-center mb-1">
                  <h4 class="font-medium text-foreground">Marketing_Plan_V3.docx</h4>
                  <span class="text-xs font-medium text-primary">{{ t('docx.translating') }} 45%</span>
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

    <!-- ===== OVERLAY MODAL ===== -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="showOverlay" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 text-center">

            <!-- Step: Loading -->
            <div v-if="overlayStep === 'loading'" class="flex flex-col items-center">
              <div class="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-6"></div>
              <h3 class="text-xl font-bold text-foreground mb-2">{{ t('docx.uploading') }}</h3>
              <p class="text-muted-foreground text-sm">{{ t('docx.uploadingDesc') }}</p>
            </div>

            <!-- Step: Payment (LOGGED IN = Credits) -->
            <div v-if="overlayStep === 'payment' && isLoggedIn" class="flex flex-col items-center">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span class="material-symbols-outlined text-primary text-3xl">toll</span>
              </div>
              <h3 class="text-xl font-bold text-foreground mb-2">{{ t('docx.confirmPay') }}</h3>
              <p class="text-muted-foreground text-sm mb-6">{{ t('docx.yourBalance') }} <strong class="text-primary">{{ user.credits }} {{ t('docx.credits') }}</strong></p>
              <div class="w-full bg-gray-50 rounded-xl p-4 border border-gray-100 text-left mb-6">
                <p class="text-sm font-medium text-foreground">{{ selectedFile?.name ?? 'document.docx' }}</p>
                <p class="text-xs text-muted-foreground mt-1">{{ t('docx.payCredits') }}</p>
              </div>
              <button @click="confirmPayment" class="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                {{ t('docx.confirmBtn') }}
              </button>
              <button @click="cancelFlow" class="mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors">{{ t('docx.cancel') }}</button>
            </div>

            <!-- Step: Payment (GUEST = QR / Card) -->
            <div v-if="overlayStep === 'payment' && !isLoggedIn" class="flex flex-col items-center">
              <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-5">
                <span class="material-symbols-outlined text-slate-600 text-3xl">payment</span>
              </div>
              <h3 class="text-xl font-bold text-foreground mb-1">{{ t('docx.chooseMethod') }}</h3>
              <p class="text-muted-foreground text-sm mb-6">{{ selectedFile?.name ?? 'document.docx' }} — <strong>฿ 150 THB</strong></p>

              <!-- Method Selector -->
              <div v-if="!guestPayMethod" class="grid grid-cols-3 gap-3 w-full mb-2">
                <button @click="guestPayMethod = 'qr'" class="flex flex-col items-center gap-2 p-4 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-all">
                  <span class="material-symbols-outlined text-3xl text-slate-600">qr_code_2</span>
                  <span class="text-xs font-bold text-foreground">QR Code</span>
                  <span class="text-[10px] text-muted-foreground">PromptPay</span>
                </button>
                <button @click="guestPayMethod = 'card'" class="flex flex-col items-center gap-2 p-4 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-all">
                  <span class="material-symbols-outlined text-3xl text-slate-600">credit_card</span>
                  <span class="text-xs font-bold text-foreground">Credit Card</span>
                  <span class="text-[10px] text-muted-foreground">Visa / MC</span>
                </button>
                <NuxtLink to="/login" @click="cancelFlow" class="flex flex-col items-center gap-2 p-4 border-2 border-primary/30 bg-primary/5 rounded-xl hover:border-primary hover:bg-primary/10 transition-all">
                  <span class="material-symbols-outlined text-3xl text-primary">toll</span>
                  <span class="text-xs font-bold text-primary">{{ t('landing.login') }}</span>
                  <span class="text-[10px] text-primary/70">{{ t('docx.loginUseCredits') }}</span>
                </NuxtLink>
              </div>

              <!-- QR Code View -->
              <div v-if="guestPayMethod === 'qr'" class="flex flex-col items-center w-full">
                <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
                  <div class="w-48 h-48 bg-white flex items-center justify-center rounded-lg border border-gray-200 relative">
                    <span class="material-symbols-outlined text-7xl text-gray-300">qr_code_2</span>
                    <span class="absolute bottom-2 text-[10px] font-bold text-muted-foreground tracking-widest">PROMPTPAY</span>
                  </div>
                </div>
                <p class="text-sm text-muted-foreground mb-4">{{ t('docx.scanPay') }} <strong>฿150.00</strong></p>
                <button @click="confirmPayment" class="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">{{ t('docx.ivePaid') }}</button>
                <button @click="guestPayMethod = null" class="mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors">{{ t('docx.back') }}</button>
              </div>

              <!-- Credit Card View -->
              <div v-if="guestPayMethod === 'card'" class="flex flex-col w-full gap-3">
                <input type="text" placeholder="Card Number" class="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                <div class="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="MM / YY" class="px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  <input type="text" placeholder="CVV" class="px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <button @click="confirmPayment" class="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 mt-1">{{ t('docx.payBtn') }} ฿150.00</button>
                <button @click="guestPayMethod = null" class="text-sm text-muted-foreground hover:text-foreground transition-colors">{{ t('docx.back') }}</button>
              </div>

              <button @click="cancelFlow" class="mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors">{{ t('docx.cancel') }}</button>
            </div>

            <!-- Step: Success -->
            <div v-if="overlayStep === 'success'" class="flex flex-col items-center">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span class="material-symbols-outlined text-green-600 text-3xl">check_circle</span>
              </div>
              <h3 class="text-xl font-bold text-foreground mb-2">{{ t('docx.paySuccess') }}</h3>
              <p class="text-muted-foreground text-sm mb-6">{{ t('docx.paySuccessDesc') }}</p>
              <button @click="closeSuccessAndStartProgress" class="w-full py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-all shadow-lg shadow-green-500/20">{{ t('docx.close') }}</button>
            </div>

          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { UploadCloud, ChevronDown, FileText, Download } from 'lucide-vue-next'
import { ref, onUnmounted } from 'vue'

definePageMeta({
  layout: 'dashboard'
})

const { isLoggedIn, user, logout } = useAuth()
const { t } = useLocale()

const fileInput = ref(null)
const selectedFile = ref(null)
const showOverlay = ref(false)
const overlayStep = ref('loading') // 'loading' | 'payment' | 'success'
const guestPayMethod = ref(null) // null | 'qr' | 'card'

// Mock progress state for Recent Documents
const newDocState = ref('idle') // 'idle' | 'loading' | 'done'
const docProgress = ref(0)
let progressInterval = null

const triggerFileInput = () => fileInput.value?.click()

const handleFileSelect = (e) => {
  const file = e.target.files?.[0]
  if (file) selectedFile.value = file
}

const handleDrop = (e) => {
  const file = e.dataTransfer.files?.[0]
  if (file) selectedFile.value = file
}

const showFileError = ref(false)

const startFlow = () => {
  if (!selectedFile.value) {
    showFileError.value = true
    setTimeout(() => showFileError.value = false, 3000)
    return
  }
  showFileError.value = false
  guestPayMethod.value = null
  overlayStep.value = 'loading'
  showOverlay.value = true
  setTimeout(() => {
    overlayStep.value = 'payment'
  }, 1500)
}

const confirmPayment = () => {
  overlayStep.value = 'loading'
  setTimeout(() => {
    overlayStep.value = 'success'
    if (isLoggedIn.value) user.value.credits -= 50
  }, 2000)
}

const closeSuccessAndStartProgress = () => {
  showOverlay.value = false
  // Start mock progress in Recent Documents
  newDocState.value = 'loading'
  docProgress.value = 0
  progressInterval = setInterval(() => {
    docProgress.value += Math.floor(Math.random() * 8) + 3
    if (docProgress.value >= 100) {
      docProgress.value = 100
      clearInterval(progressInterval)
      setTimeout(() => {
        newDocState.value = 'done'
      }, 500)
    }
  }, 300)
}

const cancelFlow = () => {
  showOverlay.value = false
}

onUnmounted(() => {
  if (progressInterval) clearInterval(progressInterval)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
