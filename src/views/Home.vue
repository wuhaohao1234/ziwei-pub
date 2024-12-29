<template>
  <div class="p-6">
    <div class="max-w-4xl mx-auto">
      <!-- 头部介绍 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">紫微斗数基础</h1>
        <p class="text-lg text-gray-600">
          探索东方古老的智慧，解读人生的密码
        </p>
      </div>

      <!-- 前言部分 -->
      <section class="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 class="text-2xl font-bold mb-4 text-indigo-700">前言</h2>
        <div class="prose max-w-none text-gray-700">
          <p class="mb-4">
            紫微斗数是一门研究"人"和"外部环境"之间关系的学问。本站研究方向可能和传统紫微斗数的学习方向不大一样。如果你以前对紫微斗数已经有一些过学习和研究，本站分享的内容后可能会与你以往学习过的知识产生一些分歧，为了不影响你的知识体系，请谨慎阅读本站所分享的知识。
          </p>
        </div>
      </section>

      <!-- 紫微斗数能干嘛 -->
      <section class="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 class="text-2xl font-bold mb-6 text-indigo-700">紫微斗数能干嘛？</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-3 text-indigo-600">性格推演</h3>
            <p class="text-gray-700">
              通过十二个宫位将一个人的个性全方位分析归类，可以分析出非常细致的性格特征。紫微斗数能够展现人在不同场合下的多面性格特征。
            </p>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-3 text-indigo-600">子女教育</h3>
            <p class="text-gray-700">
              通过分析孩子的星盘，了解孩子在不同环境下的表现，帮助家长更好地进行因材施教。
            </p>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-3 text-indigo-600">职业规划</h3>
            <p class="text-gray-700">
              对于不知道自己适合从事什么工作的人来说，可以通过紫微斗数了解自己的特质和优势，为职业选择提供参考。
            </p>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-3 text-indigo-600">社交谈资</h3>
            <p class="text-gray-700">
              像星座和MBTI一样，紫微斗数也可以作为社交话题，帮助快速拉近人与人之间的距离。
            </p>
          </div>
        </div>
      </section>

      <!-- 基础知识 -->
      <section class="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 class="text-2xl font-bold mb-6 text-indigo-700">基础知识</h2>
        
        <!-- 十二时辰 -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-4 text-indigo-600">十二时辰</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-gray-50 p-3 rounded-lg text-center">
              <div class="font-bold">子时</div>
              <div class="text-sm text-gray-600">23:00-01:00</div>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg text-center">
              <div class="font-bold">丑时</div>
              <div class="text-sm text-gray-600">01:00-03:00</div>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg text-center">
              <div class="font-bold">寅时</div>
              <div class="text-sm text-gray-600">03:00-05:00</div>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg text-center">
              <div class="font-bold">卯时</div>
              <div class="text-sm text-gray-600">05:00-07:00</div>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg text-center">
              <div class="font-bold">辰时</div>
              <div class="text-sm text-gray-600">07:00-09:00</div>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg text-center">
              <div class="font-bold">巳时</div>
              <div class="text-sm text-gray-600">09:00-11:00</div>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg text-center">
              <div class="font-bold">午时</div>
              <div class="text-sm text-gray-600">11:00-13:00</div>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg text-center">
              <div class="font-bold">未时</div>
              <div class="text-sm text-gray-600">13:00-15:00</div>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg text-center">
              <div class="font-bold">申时</div>
              <div class="text-sm text-gray-600">15:00-17:00</div>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg text-center">
              <div class="font-bold">酉时</div>
              <div class="text-sm text-gray-600">17:00-19:00</div>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg text-center">
              <div class="font-bold">戌时</div>
              <div class="text-sm text-gray-600">19:00-21:00</div>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg text-center">
              <div class="font-bold">亥时</div>
              <div class="text-sm text-gray-600">21:00-23:00</div>
            </div>
          </div>
        </div>

        <!-- 五行局 -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-4 text-indigo-600">五行局</h3>
          <p class="text-gray-700 mb-4">
            五行局是紫微斗数里决定几岁开始起运的依据，它来自于六十甲子纳音。五行局的数字代表起运年龄。
          </p>
          <div class="grid grid-cols-5 gap-4">
            <div class="bg-blue-50 p-4 rounded-lg text-center">
              <div class="font-bold">水二局</div>
              <div class="text-sm text-gray-600">2岁起运</div>
            </div>
            <div class="bg-green-50 p-4 rounded-lg text-center">
              <div class="font-bold">木三局</div>
              <div class="text-sm text-gray-600">3岁起运</div>
            </div>
            <div class="bg-yellow-50 p-4 rounded-lg text-center">
              <div class="font-bold">金四局</div>
              <div class="text-sm text-gray-600">4岁起运</div>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg text-center">
              <div class="font-bold">土五局</div>
              <div class="text-sm text-gray-600">5岁起运</div>
            </div>
            <div class="bg-red-50 p-4 rounded-lg text-center">
              <div class="font-bold">火六局</div>
              <div class="text-sm text-gray-600">6岁起运</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 提示说明 -->
      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm text-yellow-700">
              本站内容以逻辑推理为主，玄学爱好者请酌情阅读。如有偏差，欢迎指正。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 如果需要添加交互功能可以在这里编写
</script>

<style scoped>
.transform {
  transition: all 0.3s ease;
}
</style> 