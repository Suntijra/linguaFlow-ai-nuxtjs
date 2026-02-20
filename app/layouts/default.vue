<template>
  <div class="min-h-screen text-foreground font-sans">
    <Header>
      <template #left>
        <NuxtLink to="/" class="font-bold text-xl text-primary flex items-center gap-2">
           <div class="h-8 w-8 rounded bg-primary text-white flex items-center justify-center">D</div>
            dangjai
        </NuxtLink>
      </template>
    </Header>
    <main>
      <slot />
    </main>
  </div>
</template>
