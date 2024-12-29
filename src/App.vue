<template>
  <a-layout class="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
    <!-- 头部导航 -->
    <a-layout-header class="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-col md:flex-row md:items-center justify-between h-auto md:h-16 py-3 md:py-0">
          <!-- Logo部分 -->
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <svg class="h-8 w-8 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                <!-- 这里可以放一个简单的logo图标 -->
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <h1 class="ml-2 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                紫薇斗数
              </h1>
            </div>
            <!-- 移动端菜单按钮 -->
            <button 
              @click="isMenuOpen = !isMenuOpen"
              class="md:hidden rounded-lg p-2 hover:bg-gray-100 focus:outline-none"
            >
              <svg 
                class="h-6 w-6 text-gray-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  v-if="!isMenuOpen" 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path 
                  v-else 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <!-- 导航菜单 -->
          <nav 
            :class="[
              'md:flex md:space-x-8',
              isMenuOpen ? 'block' : 'hidden'
            ]"
          >
            <router-link 
              v-for="(item, index) in menuItems"
              :key="index"
              :to="item.path"
              class="block py-2 md:py-0 px-3 md:px-0 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 md:hover:bg-transparent transition-colors"
              :class="{ 'text-indigo-600 font-medium': $route.path === item.path }"
            >
              {{ item.name }}
            </router-link>
          </nav>
        </div>
      </div>
    </a-layout-header>

    <!-- 主要内容区 -->
    <a-layout-content class="flex-grow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <router-view v-slot="{ Component }">
          <transition 
            name="fade" 
            mode="out-in"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </a-layout-content>

    <!-- 页脚 -->
    <a-layout-footer class="bg-white/80 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600">
        <p class="text-sm">
          紫薇斗数 ©{{ new Date().getFullYear() }} 
          <span class="mx-1">|</span> 
          <a 
            href="https://github.com/yourusername" 
            target="_blank"
            class="hover:text-indigo-600 transition-colors"
          >
            GitHub
          </a>
        </p>
      </div>
    </a-layout-footer>
  </a-layout>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const menuItems = [
  { name: '首页', path: '/' },
  { name: '十二宫位', path: '/palace' },
  { name: '十四主星', path: '/major-stars' },
  { name: '十四辅星', path: '/minor-stars' },
  { name: '四化', path: '/mutagen' }
]
</script>

<style scoped>
/* 页面切换动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 确保内容区域最小高度 */
.ant-layout {
  min-height: 100vh;
}

/* 移动端菜单过渡效果 */
@media (max-width: 768px) {
  nav {
    @apply mt-4 space-y-2;
  }
}

/* 活跃链接样式 */
.router-link-active {
  @apply text-indigo-600 font-medium;
}
</style>
