<template>
  <div class="p-6">
    <div class="max-w-4xl mx-auto">
      <!-- 头部介绍 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">紫微斗数宫位系统</h1>
        <p class="text-lg text-gray-600">
          解读人生的十二个维度
        </p>
      </div>

      <!-- 前言部分 -->
      <section class="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 class="text-2xl font-bold mb-4 text-indigo-700">前言</h2>
        <div class="prose max-w-none text-gray-700">
          <p class="mb-4">
            宫又叫"垣"，是指紫微斗数星盘上周围按照地支排列出来的十二个方格。"宫"和"位"其实是两个概念，其中"宫"是一个绝对概念，而"位"是一个相对概念。
          </p>
          <p class="mb-4">
            比如说以你为参照，你的"爸爸"，你的"爷爷"，这些对你来说都是"绝对称呼"，所以你的爸爸叫做你的"父母宫"，你的爷爷除了是你的"福德宫"以外，还是你"父母宫"的"父母位"。
          </p>
        </div>
      </section>

      <!-- 宫位排列图 -->
      <section class="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 class="text-2xl font-bold mb-6 text-indigo-700">宫位排列</h2>
        <div class="grid grid-cols-4 gap-4 aspect-square">
          <!-- 第一行 -->
          <div class="bg-indigo-50 p-4 rounded-lg flex flex-col items-center justify-center">
            <div class="text-lg font-bold text-indigo-800">巳</div>
            <div class="text-sm text-indigo-600">田宅</div>
          </div>
          <div class="bg-indigo-50 p-4 rounded-lg flex flex-col items-center justify-center">
            <div class="text-lg font-bold text-indigo-800">午</div>
            <div class="text-sm text-indigo-600">官禄</div>
          </div>
          <div class="bg-indigo-50 p-4 rounded-lg flex flex-col items-center justify-center">
            <div class="text-lg font-bold text-indigo-800">未</div>
            <div class="text-sm text-indigo-600">仆役</div>
          </div>
          <div class="bg-indigo-50 p-4 rounded-lg flex flex-col items-center justify-center">
            <div class="text-lg font-bold text-indigo-800">申</div>
            <div class="text-sm text-indigo-600">迁移</div>
          </div>

          <!-- 第二行 -->
          <div class="bg-indigo-50 p-4 rounded-lg flex flex-col items-center justify-center">
            <div class="text-lg font-bold text-indigo-800">辰</div>
            <div class="text-sm text-indigo-600">福德</div>
          </div>
          <!-- 中宫开始 -->
          <div class="bg-purple-100 p-4 rounded-lg col-span-2 row-span-2 flex flex-col items-center justify-center">
            <div class="text-2xl font-bold text-purple-800">中宫</div>
          </div>
          <div class="bg-indigo-50 p-4 rounded-lg flex flex-col items-center justify-center">
            <div class="text-lg font-bold text-indigo-800">酉</div>
            <div class="text-sm text-indigo-600">疾厄</div>
          </div>

          <!-- 第三行 -->
          <div class="bg-indigo-50 p-4 rounded-lg flex flex-col items-center justify-center">
            <div class="text-lg font-bold text-indigo-800">卯</div>
            <div class="text-sm text-indigo-600">父母</div>
          </div>
          <div class="bg-indigo-50 p-4 rounded-lg flex flex-col items-center justify-center">
            <div class="text-lg font-bold text-indigo-800">戌</div>
            <div class="text-sm text-indigo-600">财帛</div>
          </div>

          <!-- 第四行 -->
          <div class="bg-indigo-50 p-4 rounded-lg flex flex-col items-center justify-center">
            <div class="text-lg font-bold text-indigo-800">寅</div>
            <div class="text-sm text-indigo-600">命宫</div>
          </div>
          <div class="bg-indigo-50 p-4 rounded-lg flex flex-col items-center justify-center">
            <div class="text-lg font-bold text-indigo-800">丑</div>
            <div class="text-sm text-indigo-600">兄弟</div>
          </div>
          <div class="bg-indigo-50 p-4 rounded-lg flex flex-col items-center justify-center">
            <div class="text-lg font-bold text-indigo-800">子</div>
            <div class="text-sm text-indigo-600">夫妻</div>
          </div>
          <div class="bg-indigo-50 p-4 rounded-lg flex flex-col items-center justify-center">
            <div class="text-lg font-bold text-indigo-800">亥</div>
            <div class="text-sm text-indigo-600">子女</div>
          </div>
        </div>

        <!-- 添加图例说明 -->
        <div class="mt-6 flex justify-center space-x-8">
          <div class="flex items-center">
            <div class="w-4 h-4 bg-indigo-50 rounded mr-2"></div>
            <span class="text-sm text-gray-600">宫位</span>
          </div>
          <div class="flex items-center">
            <div class="w-4 h-4 bg-purple-100 rounded mr-2"></div>
            <span class="text-sm text-gray-600">中宫</span>
          </div>
          <div class="flex items-center">
            <span class="text-sm text-gray-600">← 逆时针方向</span>
          </div>
        </div>
      </section>

      <!-- 十二宫位详解 -->
      <div class="space-y-8">
        <!-- 命宫 -->
        <section class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-indigo-700">命宫</h3>
            <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">本命属性</span>
          </div>
          <div class="prose max-w-none text-gray-700">
            <p class="mb-4">
              命宫是决定星盘主人属性的宫位，就类似于游戏中的职业，它显示了你的个性偏向。但是，人的性格是立体的，命宫的个性只能说是星盘主人的"本质"。
            </p>
            <p class="mb-4">
              大家肯定听说过"性格决定命运"这句话，其实决定命运的从来都不是性格，而是"认知"。同一个类型性格的人，会因为自身认知的不同，而对同一件事情产生完全不同的想法。
            </p>
            <div class="bg-gray-50 p-4 rounded-lg mt-4">
              <h4 class="font-semibold mb-2">重要提示</h4>
              <p class="text-sm">
                现代社会不能用老传统的"好"和"差"，"吉"和"凶"来武断的将一张盘是好是坏。虽然命宫是人个性特质的展现，但对于大多数人而言，别人最先接触到的个性特质，往往不是命宫展现出来的，而是迁移宫。
              </p>
            </div>
          </div>
        </section>

        <!-- 父母宫 -->
        <section class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-indigo-700">父母宫</h3>
            <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">家庭关系</span>
          </div>
          <div class="prose max-w-none text-gray-700">
            <p class="mb-4">
              父母宫主要反映的是星盘主人和父母之间的关系，以及家庭环境。这里的父母不仅仅指亲生父母，还包括养父母、继父母等。
            </p>
            <div class="bg-gray-50 p-4 rounded-lg mt-4">
              <h4 class="font-semibold mb-2">延伸解释</h4>
              <p class="text-sm">
                父母宫还可以反映出星盘主人对于"权威"的态度。比如说，在工作中如何和领导相处，在生活中如何面对各种规则和制度等。
              </p>
            </div>
          </div>
        </section>

        <!-- 福德宫 -->
        <section class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-indigo-700">福德宫</h3>
            <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">内在性格</span>
          </div>
          <div class="prose max-w-none text-gray-700">
            <p class="mb-4">
              福德宫代表的是一个人的内在性格，也就是那个最真实的自己。它反映了一个人在没有外界压力的情况下会呈现出什么样的状态。
            </p>
            <p class="mb-4">
              这个宫位还和兴趣爱好有关，同时也主管"福气"。所谓的福气，就是一个人在顺其自然的状态下能获得的东西。
            </p>
          </div>
        </section>

        <!-- 田宅宫 -->
        <section class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-indigo-700">田宅宫</h3>
            <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">居住环境</span>
          </div>
          <div class="prose max-w-none text-gray-700">
            <p class="mb-4">
              田宅宫主管房地产，但不仅限于房子本身，还包括居住环境、生活环境等。在现代社会，这个宫位还可以延伸到工作环境。
            </p>
            <div class="bg-gray-50 p-4 rounded-lg mt-4">
              <h4 class="font-semibold mb-2">现代意义</h4>
              <p class="text-sm">
                田宅宫还反映了一个人对于"安全感"的需求程度，以及如何通过环境来获得安全感。
              </p>
            </div>
          </div>
        </section>

        <!-- 官禄宫 -->
        <section class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-indigo-700">官禄宫</h3>
            <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">事业发展</span>
          </div>
          <div class="prose max-w-none text-gray-700">
            <p class="mb-4">
              官禄宫主管事业和工作，反映了一个人在职场上的发展状况。这个宫位不仅显示了适合从事的职业类型，还能看出事业发展的特点。
            </p>
            <p class="mb-4">
              在现代社会，官禄宫更多地体现为一个人的职业发展路径和工作态度。它显示了你会以什么样的方式来实现自己的职业目标。
            </p>
          </div>
        </section>

        <!-- 仆役宫 -->
        <section class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-indigo-700">仆役宫</h3>
            <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">人际关系</span>
          </div>
          <div class="prose max-w-none text-gray-700">
            <p class="mb-4">
              仆役宫在古代主要指下人、佣人等，但在现代社会更多地表现为同事关系、上下级关系等。这个宫位反映了一个人在团队中的角色定位。
            </p>
            <div class="bg-gray-50 p-4 rounded-lg mt-4">
              <h4 class="font-semibold mb-2">现代诠释</h4>
              <p class="text-sm">
                仆役宫还可以反映出一个人的服务意识，以及在工作中的协作能力。
              </p>
            </div>
          </div>
        </section>

        <!-- 迁移宫 -->
        <section class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-indigo-700">迁移宫</h3>
            <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">社交表现</span>
          </div>
          <div class="prose max-w-none text-gray-700">
            <p class="mb-4">
              迁移宫主管出行、变动，同时也反映了一个人在社交场合中的表现。这个宫位显示了你给别人的第一印象是什么样的。
            </p>
            <p class="mb-4">
              在现代社会，迁移宫还可以解释为一个人对于改变的态度，以及在面对新环境时的适应能力。
            </p>
          </div>
        </section>

        <!-- 疾厄宫 -->
        <section class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-indigo-700">疾厄宫</h3>
            <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">健康状况</span>
          </div>
          <div class="prose max-w-none text-gray-700">
            <p class="mb-4">
              疾厄宫主管健康，但不仅限于生理健康，还包括心理健康。这个宫位反映了一个人如何面对压力和困难。
            </p>
            <div class="bg-gray-50 p-4 rounded-lg mt-4">
              <h4 class="font-semibold mb-2">心理层面</h4>
              <p class="text-sm">
                疾厄宫还显示了一个人的抗压能力和自我调节能力，以及在遇到困难时的应对方式。
              </p>
            </div>
          </div>
        </section>

        <!-- 财帛宫 -->
        <section class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-indigo-700">财帛宫</h3>
            <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">财富观念</span>
          </div>
          <div class="prose max-w-none text-gray-700">
            <p class="mb-4">
              财帛宫主管财运，反映了一个人的理财能力和赚钱方式。这个宫位不仅显示了获取财富的途径，还反映了对待金钱的态度。
            </p>
            <p class="mb-4">
              在现代社会，财帛宫更多地体现为一个人的价值观和消费观，以及如何平衡收入与支出的关系。
            </p>
          </div>
        </section>

        <!-- 子女宫 -->
        <section class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-indigo-700">子女宫</h3>
            <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">创造力</span>
          </div>
          <div class="prose max-w-none text-gray-700">
            <p class="mb-4">
              子女宫除了反映与子女的关系外，还代表了一个人的创造力和生命力。这个宫位显示了你如何看待新生事物。
            </p>
            <div class="bg-gray-50 p-4 rounded-lg mt-4">
              <h4 class="font-semibold mb-2">延伸含义</h4>
              <p class="text-sm">
                子女宫还可以反映出一个人对于创新的态度，以及在工作中的创造性思维能力。
              </p>
            </div>
          </div>
        </section>

        <!-- 夫妻宫 -->
        <section class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-indigo-700">夫妻宫</h3>
            <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">感情关系</span>
          </div>
          <div class="prose max-w-none text-gray-700">
            <p class="mb-4">
              夫妻宫主管婚姻和感情，反映了一个人在感情中的表现和态度。这个宫位不仅显示了理想伴侣的类型，还反映了处理感情的方式。
            </p>
            <p class="mb-4">
              在现代诠释中，夫妻宫更多地体现为一个人对于亲密关系的态度和处理方式。
            </p>
          </div>
        </section>

        <!-- 兄弟宫 -->
        <section class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-indigo-700">兄弟宫</h3>
            <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">平辈关系</span>
          </div>
          <div class="prose max-w-none text-gray-700">
            <p class="mb-4">
              兄弟宫主管与平辈之间的关系，不仅包括兄弟姐妹，还包括朋友、同学等平级关系。这个宫位反映了你如何处理同级之间的关系。
            </p>
            <div class="bg-gray-50 p-4 rounded-lg mt-4">
              <h4 class="font-semibold mb-2">现代意义</h4>
              <p class="text-sm">
                兄弟宫还可以反映出一个人的竞争意识，以及在同辈群体中的地位和表现。
              </p>
            </div>
          </div>
        </section>

      </div>

      <!-- 特殊宫位 -->
      <section class="bg-white rounded-lg shadow-lg p-8 mt-8">
        <h2 class="text-2xl font-bold mb-6 text-indigo-700">特殊宫位</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold mb-3 text-indigo-600">身宫</h3>
            <p class="text-gray-700">
              身宫是星盘主人个性的"变化趋势"，它会对"命宫"的特质有一定影响力。命宫的特质属于"先天特质"，而"身宫"的特质就是"后天特质"。
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-3 text-indigo-600">暗合宫</h3>
            <p class="text-gray-700">
              暗合宫是由十二地支的地支六合衍生而来。其实大家不需要背诵这个地支六合，只需要把紫微斗数星盘从中间纵向分开，左右镜像宫位即是暗合宫位。
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-3 text-indigo-600">来因宫</h3>
            <p class="text-gray-700">
              来因宫顾名思义就是看星盘主人"为何而来"。这个作为参考就好，在实际应用中用得比较少。
            </p>
          </div>
        </div>
      </section>

      <!-- 提示说明 -->
      <div class="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm text-yellow-700">
              本文介绍的宫位均是"本命盘"上的解释，本命盘体现的是一种"态度"，或者说某种"观念"。而观念并没有好坏之分，因为和你观念一致的，你就会认为是好的，和你观念背离的，你就会认为是坏的。
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