<template>
  <div class="min-h-screen bg-[#F8FAFC] text-foreground flex font-sans">
    <Sidebar />
    <div class="flex-1 flex flex-col h-screen overflow-hidden">
      <Header />
      <main class="flex-1 overflow-y-auto p-6 lg:p-10">
        <slot />
      </main>
    </div>
  </div>
</template>
