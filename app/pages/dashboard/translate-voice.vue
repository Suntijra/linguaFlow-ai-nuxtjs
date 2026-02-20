<template>
  <div class="space-y-8 max-w-6xl mx-auto w-full">
    <!-- Central Content -->
    <div class="px-4 lg:px-10 pb-10 mt-4">
      <div class="mb-10 text-center">
        <h2 class="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
            Voice &amp; File Translation
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
        <div
          @click="triggerFileInput"
          @dragover.prevent
          @drop.prevent="handleDrop"
          class="border-2 border-dashed border-gray-300 rounded-3xl bg-gray-50/50 p-12 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer group"
        >
          <input ref="fileInput" type="file" accept=".mp3,.wav,.m4a" class="hidden" @change="handleFileSelect" />
          <div class="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-primary">
            <UploadCloud class="w-10 h-10" />
          </div>
          <h3 class="text-xl font-bold text-foreground mb-2">
            {{ selectedFile ? selectedFile.name : 'Upload Audio File' }}
          </h3>
          <p class="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
            Drag and drop or click to browse recordings.<br>
            Supported formats: mp3, wav, m4a. Max 50MB.
          </p>
          <div class="flex gap-2 justify-center mb-8">
            <span class="px-3 py-1 bg-white border border-gray-200 text-gray-500 text-[10px] font-bold rounded-full uppercase tracking-wider">mp3</span>
            <span class="px-3 py-1 bg-white border border-gray-200 text-gray-500 text-[10px] font-bold rounded-full uppercase tracking-wider">wav</span>
            <span class="px-3 py-1 bg-white border border-gray-200 text-gray-500 text-[10px] font-bold rounded-full uppercase tracking-wider">m4a</span>
          </div>
          <button @click.stop="startFlow" class="bg-primary text-white px-8 py-3 rounded-full font-medium shadow-sm hover:bg-primary/90 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" :disabled="!selectedFile">
            Browse & Translate
          </button>
          <p v-if="showFileError" class="mt-3 text-sm text-red-500">Please upload an audio file first.</p>
        </div>
      </div>

      <!-- Translation Panels -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[300px]">
        <!-- Live Transcription -->
        <div class="bg-white rounded-2xl p-6 sm:p-8 flex flex-col relative overflow-hidden group shadow-sm border border-gray-200">
          <div class="flex items-center gap-2 mb-6">
            <span class="w-2 h-2 rounded-full" :class="isTranscribing ? 'bg-teal-500 animate-pulse' : 'bg-gray-300'"></span>
            <h3 class="text-xs font-bold uppercase tracking-widest text-gray-500">Live Transcription</h3>
          </div>
          <div class="text-xl lg:text-2xl font-light text-gray-800 leading-relaxed overflow-y-auto pr-4 flex-1">
            <span v-if="liveTranscript">{{ liveTranscript }}</span>
            <span v-else class="text-gray-300">Transcription will appear here after payment...</span>
            <span v-if="isTranscribing" class="inline-block w-[2px] h-6 bg-primary ml-1 animate-pulse align-middle"></span>
          </div>
          <div v-if="liveTranscript" class="mt-4 flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <button class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 border border-gray-200 hover:text-primary hover:border-primary hover:bg-white transition-all">
              <Copy class="w-4 h-4" />
            </button>
          </div>
        </div>

        <!-- Translation Output -->
        <div class="bg-primary/5 rounded-2xl p-6 sm:p-8 border border-primary/20 flex flex-col relative overflow-hidden group shadow-sm">
          <div class="flex items-center gap-2 mb-6">
            <span class="w-2 h-2 rounded-full" :class="isTranscribing ? 'bg-primary animate-pulse' : 'bg-gray-300'"></span>
            <h3 class="text-xs font-bold uppercase tracking-widest text-primary">Translation Output</h3>
          </div>
          <div class="text-xl lg:text-2xl font-light text-gray-900 leading-relaxed overflow-y-auto pr-4 flex-1 font-serif">
            <span v-if="liveTranslation">{{ liveTranslation }}</span>
            <span v-else class="text-gray-300">Translation will appear here...</span>
          </div>
          <div v-if="liveTranslation" class="mt-4 flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <button class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-500 border border-gray-200 hover:text-primary hover:border-primary transition-all shadow-sm">
              <Copy class="w-4 h-4" />
            </button>
            <button class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30 transition-all hover:scale-105">
              <Volume2 class="w-4 h-4" fill="currentColor" />
            </button>
          </div>
        </div>
      </div>

      <!-- Recent Audio Files -->
      <div class="bg-white rounded-xl shadow-sm border border-border overflow-hidden mt-8">
        <div class="p-6 border-b border-border">
          <h3 class="text-lg font-bold text-foreground">Recent Audio Files</h3>
        </div>
        <div class="p-6">
          <div class="space-y-4">
            <!-- New item from payment (mock progress) -->
            <div v-if="newDocState !== 'idle'" class="flex items-center justify-between p-4 border border-gray-100 rounded-lg transition-colors" :class="newDocState === 'done' ? 'bg-green-50/50 border-green-200' : ''">
              <div class="flex items-center gap-4 w-full">
                <div class="w-10 h-10 rounded-lg flex items-center justify-center" :class="newDocState === 'done' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-muted-foreground animate-pulse'">
                  <span class="material-symbols-outlined text-xl">graphic_eq</span>
                </div>
                <div class="flex-1">
                  <div class="flex justify-between items-center mb-1">
                    <h4 class="font-medium text-foreground">{{ selectedFile?.name ?? 'audio_recording.mp3' }}</h4>
                    <span v-if="newDocState === 'loading'" class="text-xs font-medium text-primary">Transcribing... {{ docProgress }}%</span>
                    <span v-if="newDocState === 'done'" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Completed</span>
                  </div>
                  <div v-if="newDocState === 'loading'" class="w-full bg-gray-200 rounded-full h-1.5">
                    <div class="bg-primary h-1.5 rounded-full transition-all duration-300" :style="{ width: docProgress + '%' }"></div>
                  </div>
                  <div v-if="newDocState === 'done'" class="flex items-center gap-3 mt-1">
                    <button class="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1">
                      <Download class="w-4 h-4" /> Download
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Item 1 (static) -->
            <div class="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-accent-teal">
                  <span class="material-symbols-outlined text-xl">graphic_eq</span>
                </div>
                <div>
                  <h4 class="font-medium text-foreground">Board_Meeting_Q1.mp3</h4>
                  <p class="text-xs text-muted-foreground mt-0.5">English → Thai • 42 min</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Completed</span>
                <button class="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1">
                  <Download class="w-4 h-4" /> Download
                </button>
              </div>
            </div>

            <!-- Item 2 (static processing) -->
            <div class="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
              <div class="flex items-center gap-4 w-full">
                <div class="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-muted-foreground animate-pulse">
                  <span class="material-symbols-outlined text-xl">graphic_eq</span>
                </div>
                <div class="flex-1">
                  <div class="flex justify-between items-center mb-1">
                    <h4 class="font-medium text-foreground">Conference_Call_Feb.wav</h4>
                    <span class="text-xs font-medium text-primary">Transcribing... 62%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-1.5">
                    <div class="bg-primary h-1.5 rounded-full" style="width: 62%"></div>
                  </div>
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
              <h3 class="text-xl font-bold text-foreground mb-2">Uploading Audio...</h3>
              <p class="text-muted-foreground text-sm">Analyzing your recording and preparing transcription.</p>
            </div>

            <!-- Step: Payment (LOGGED IN = Credits) -->
            <div v-if="overlayStep === 'payment' && isLoggedIn" class="flex flex-col items-center">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span class="material-symbols-outlined text-primary text-3xl">toll</span>
              </div>
              <h3 class="text-xl font-bold text-foreground mb-2">Confirm Payment</h3>
              <p class="text-muted-foreground text-sm mb-6">Your balance: <strong class="text-primary">{{ user.credits }} Credits</strong></p>
              <div class="w-full bg-gray-50 rounded-xl p-4 border border-gray-100 text-left mb-6">
                <p class="text-sm font-medium text-foreground">{{ selectedFile?.name ?? 'audio_recording.mp3' }}</p>
                <p class="text-xs text-muted-foreground mt-1">30 Credits &bull; ASR + AI Translation</p>
              </div>
              <button @click="confirmPayment" class="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                Confirm &amp; Pay 30 Credits
              </button>
              <button @click="cancelFlow" class="mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors">Cancel</button>
            </div>

            <!-- Step: Payment (GUEST = QR / Card) -->
            <div v-if="overlayStep === 'payment' && !isLoggedIn" class="flex flex-col items-center">
              <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-5">
                <span class="material-symbols-outlined text-slate-600 text-3xl">payment</span>
              </div>
              <h3 class="text-xl font-bold text-foreground mb-1">Choose Payment Method</h3>
              <p class="text-muted-foreground text-sm mb-6">{{ selectedFile?.name ?? 'audio_recording.mp3' }} &mdash; <strong>฿ 80 THB</strong></p>

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
                  <span class="text-xs font-bold text-primary">Login</span>
                  <span class="text-[10px] text-primary/70">Use Credits</span>
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
                <p class="text-sm text-muted-foreground mb-4">Scan with any banking app to pay <strong>฿80.00</strong></p>
                <button @click="confirmPayment" class="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">I've Paid</button>
                <button @click="guestPayMethod = null" class="mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors">← Back</button>
              </div>

              <!-- Credit Card View -->
              <div v-if="guestPayMethod === 'card'" class="flex flex-col w-full gap-3">
                <input type="text" placeholder="Card Number" class="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                <div class="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="MM / YY" class="px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  <input type="text" placeholder="CVV" class="px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <button @click="confirmPayment" class="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 mt-1">Pay ฿80.00</button>
                <button @click="guestPayMethod = null" class="text-sm text-muted-foreground hover:text-foreground transition-colors">← Back</button>
              </div>

              <button @click="cancelFlow" class="mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors">Cancel</button>
            </div>

            <!-- Step: Success -->
            <div v-if="overlayStep === 'success'" class="flex flex-col items-center">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span class="material-symbols-outlined text-green-600 text-3xl">check_circle</span>
              </div>
              <h3 class="text-xl font-bold text-foreground mb-2">Payment Successful!</h3>
              <p class="text-muted-foreground text-sm mb-6">Your audio transcription is starting now.</p>
              <button @click="closeSuccessAndStartProgress" class="w-full py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-all shadow-lg shadow-green-500/20">Close</button>
            </div>

          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ChevronDown, Copy, Volume2, ArrowRightLeft, UploadCloud, Download } from 'lucide-vue-next'
import { ref, onUnmounted } from 'vue'

definePageMeta({
  layout: 'dashboard'
})

const { isLoggedIn, user, logout } = useAuth()

const fileInput = ref(null)
const selectedFile = ref(null)
const showOverlay = ref(false)
const overlayStep = ref('loading') // 'loading' | 'payment' | 'success'
const guestPayMethod = ref(null) // null | 'qr' | 'card'

// Mock progress state
const newDocState = ref('idle') // 'idle' | 'loading' | 'done'
const docProgress = ref(0)
let progressInterval = null

// Mock live transcription state
const isTranscribing = ref(false)
const liveTranscript = ref('')
const liveTranslation = ref('')
let transcriptInterval = null

const mockEnText = "Hello, I am delighted to be here today to discuss our latest advancements in artificial intelligence. We believe that technology should serve humanity by bridging the gap between cultures and languages. Our new AI model can translate speech in real-time with remarkable accuracy."
const mockThText = "สวัสดีครับ ผมดีใจมากที่ได้มาอยู่ที่นี่ในวันนี้เพื่อหารือเกี่ยวกับความก้าวหน้าล่าสุดของเราในด้านปัญญาประดิษฐ์ เราเชื่อว่าเทคโนโลยีควรรับใช้มนุษยชาติโดยการเชื่อมช่องว่างระหว่างวัฒนธรรมและภาษา โมเดล AI ใหม่ของเราสามารถแปลเสียงพูดแบบเรียลไทม์ได้อย่างแม่นยำ"

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
    if (isLoggedIn.value) user.value.credits -= 30
  }, 2000)
}

const startLiveTranscription = () => {
  isTranscribing.value = true
  liveTranscript.value = ''
  liveTranslation.value = ''
  let enIdx = 0
  let thIdx = 0
  const enWords = mockEnText.split(' ')
  const thWords = mockThText.split(' ')

  transcriptInterval = setInterval(() => {
    if (enIdx < enWords.length) {
      liveTranscript.value += (enIdx > 0 ? ' ' : '') + enWords[enIdx]
      enIdx++
    }
    // Translation follows a bit behind
    if (enIdx > 3 && thIdx < thWords.length) {
      liveTranslation.value += (thIdx > 0 ? ' ' : '') + thWords[thIdx]
      thIdx++
    }
    if (enIdx >= enWords.length && thIdx >= thWords.length) {
      clearInterval(transcriptInterval)
      isTranscribing.value = false
    }
  }, 150)
}

const closeSuccessAndStartProgress = () => {
  showOverlay.value = false
  // Start mock progress in Recent Audio Files
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
  // Also start live transcription mock
  startLiveTranscription()
}

const cancelFlow = () => {
  showOverlay.value = false
}

onUnmounted(() => {
  if (progressInterval) clearInterval(progressInterval)
  if (transcriptInterval) clearInterval(transcriptInterval)
})

// Generate an array of heights resembling the equalizer in the original design
const equalizerHeights = [
  10, 30, 60, 90, 40, 75, 35, 55, 95, 80, 45, 100, 80, 45, 95, 55, 75, 90, 60, 30, 10
]
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
