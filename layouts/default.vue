<template>
  <div class="min-h-screen">
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <!-- Hamburger menu for mobile and tablet -->
          <div class="md:hidden">
            <button
                @click="isSidebarOpen = true"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <Bars3Icon class="h-6 w-6"/>
              <span class="sr-only">Open menu</span>
            </button>
          </div>

          <!-- Logo - centered for both mobile and desktop -->
          <div class="absolute left-1/2 transform -translate-x-1/2">
            <a href="/" class="flex items-center">
              <img src="/logo.webp" alt="logo" class="h-24 mt-12 lg:h-32 lg:mt-16">
            </a>
          </div>

          <!-- Desktop navigation -->
          <nav class="hidden md:flex md:w-full md:justify-between">
            <div class="flex space-x-4">
              <a
                  v-for="item in leftNavItems"
                  :key="item.name"
                  :href="item.href"
                  class="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {{ item.name }}
              </a>
            </div>
            <div class="flex space-x-4">
              <a
                  v-for="item in rightNavItems"
                  :key="item.name"
                  :href="item.href"
                  class="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {{ item.name }}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main class="container mx-auto p-4 mt-8">
      <slot/>
    </main>

    <!-- Mobile sidebar -->
    <Transition name="fade" appear>
      <div v-if="isSidebarOpen" class="fixed inset-0 z-40 flex">
        <!-- Overlay -->
        <div
            class="fixed inset-0 bg-gray-600 bg-opacity-75"
            @click="isSidebarOpen = false"
        ></div>

        <!-- Sidebar panel -->
        <Transition name="slide" appear>
          <div v-if="isSidebarOpen" class="relative flex-1 flex flex-col max-w-xs w-full bg-white">
            <div class="absolute top-0 right-0 mr-2 pt-2">
              <button
                  @click="isSidebarOpen = false"
                  class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span class="sr-only">Close sidebar</span>
                <XMarkIcon class="h-6 w-6 text-gray-600"/>
              </button>
            </div>
            <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <nav class="mt-5 px-2 space-y-1">
                <a
                    v-for="item in navItems"
                    :key="item.name"
                    :href="item.href"
                    class="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  {{ item.name }}
                </a>
              </nav>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import {Bars3Icon, XMarkIcon} from "@heroicons/vue/24/solid/index.js"

const isSidebarOpen = ref(false)

const navItems = [
  {name: 'Home', href: '/'},
  {name: 'Blog', href: '/blog'},
  {name: 'Pferde', href: '/pferde'},
  {name: 'Galerie', href: '/galerie'},
  {name: 'Über uns', href: '/über-uns'},
  {name: 'Facebook', href: 'https://facebook.com/gestuetpichl'},
  {name: 'Instagram', href: 'https://instagram.com/trakehner_gestuet_pichl'},
]

const leftNavItems = computed(() => navItems.slice(0, Math.ceil(navItems.length / 2)))
const rightNavItems = computed(() => navItems.slice(Math.ceil(navItems.length / 2)))
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>