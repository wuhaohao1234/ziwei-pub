<template>
  <div class="p-6">
    <div class="max-w-4xl mx-auto">
      <!-- 头部介绍 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">十四主星</h1>
        <p class="text-lg text-gray-600">
          紫微斗数的"班主任" - 决定人生基调的十四颗主星
        </p>
      </div>

      <!-- 前言部分 -->
      <section class="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 class="text-2xl font-bold mb-4 text-indigo-700">前言</h2>
        <div class="prose max-w-none text-gray-700">
          <p class="mb-4">
            十四主星在紫微斗数里起着"定调"的作用，可以将他们理解为一个人的"初始属性值"。当一个宫位内没有主星的时候，我们将这个宫位叫做空宫。空宫需要借"对宫"的主星来定调。
          </p>
          <p class="mb-4">
            空宫本身会给人一种"迷茫"、"没有主心骨"的感觉。但其实空宫是一种"海纳百川"的概念。空宫受到"三方四正"和"暗合宫"的影响会比非空宫要大。其中空宫率大概≈16.44%。
          </p>
        </div>
      </section>

      <!-- 主星列表 -->
      <div class="space-y-6">
        <!-- 紫微星 -->
        <section class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-indigo-700">紫微星</h3>
            <span class="text-sm text-gray-500">命宫出现概率≈1.28%</span>
          </div>
          
          <!-- 星耀属性表 -->
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">基本属性</h4>
              <ul class="space-y-1 text-gray-700">
                <li>阴阳：阴 🌑</li>
                <li>五行：己土 ⛰️</li>
                <li>化气：尊贵</li>
                <li>斗分：中天星系</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">职业特征</h4>
              <ul class="space-y-1 text-gray-700">
                <li>职业：官禄主</li>
                <li>职务：众星枢纽，长五行，孕万物</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">别号</h4>
              <ul class="space-y-1 text-gray-700">
                <li>帝王星</li>
                <li>老板星</li>
                <li>俸禄星</li>
              </ul>
            </div>
          </div>

          <!-- 星耀特性 -->
          <div class="space-y-4">
            <h4 class="text-xl font-semibold text-indigo-600">紫微星特性</h4>
            <div class="prose max-w-none text-gray-700">
              <p>
                紫微星人的个性具有"王者"的特质，比如说控制欲、占有欲较强，比较喜欢一些华而不实的物品和称赞，典型的要面子不要里子的类型。也正因为如此，紫微星会给人比较强的距离感。
              </p>
              <p>
                这是一颗非常"吃资源"的星曜，如果给予足够的支持和条件去培养这颗星，让紫微星具有和自身气场所匹配的能力，紫微星就会发挥出他强大的控场和规划能力。
              </p>
            </div>
          </div>
        </section>

        <!-- 天机星 -->
        <section class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-indigo-700">天机星</h3>
            <span class="text-sm text-gray-500">命宫出现概率≈4.13%</span>
          </div>
          
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">基本属性</h4>
              <ul class="space-y-1 text-gray-700">
                <li>阴阳：阴 🌑</li>
                <li>五行：乙木 🪵</li>
                <li>化气：善</li>
                <li>斗分：南斗第三星</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">职业特征</h4>
              <ul class="space-y-1 text-gray-700">
                <li>职业：兄弟主</li>
                <li>职务：掌管智慧，精神</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">别号</h4>
              <ul class="space-y-1 text-gray-700">
                <li>驿马星</li>
                <li>宗教星</li>
                <li>定轴星</li>
                <li>智慧星</li>
                <li>益寿星</li>
              </ul>
            </div>
          </div>

          <div class="space-y-4">
            <h4 class="text-xl font-semibold text-indigo-600">天机星特性</h4>
            <div class="prose max-w-none text-gray-700">
              <p>
                天机星是一颗"策划型"的星曜，也是"第六感"的来源。他思维非常活跃，能够以常人难以发现的角度去看待人、事、物。
              </p>
              <p>
                天机星的号召力和社交能力非常强，有天机星在的地方一般不会冷场。他能很恰如其分的带动现场气氛，所以才叫他"定轴星"。
              </p>
            </div>
          </div>
        </section>

        <!-- 太阳星 -->
        <section class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-indigo-700">太阳星</h3>
            <span class="text-sm text-gray-500">命宫出现概率≈8.33%</span>
          </div>
          
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">基本属性</h4>
              <ul class="space-y-1 text-gray-700">
                <li>阴阳：阳 ☀️</li>
                <li>五行：丙火 🔥</li>
                <li>化气：权</li>
                <li>斗分：南斗第四星</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">职业特征</h4>
              <ul class="space-y-1 text-gray-700">
                <li>职业：父母主</li>
                <li>职务：掌管权力，名声</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">别号</h4>
              <ul class="space-y-1 text-gray-700">
                <li>权力星</li>
                <li>名誉星</li>
                <li>光明星</li>
              </ul>
            </div>
          </div>

          <div class="space-y-4">
            <h4 class="text-xl font-semibold text-indigo-600">太阳星特性</h4>
            <div class="prose max-w-none text-gray-700">
              <p>
                太阳星主外在形象，性格开朗，乐观向上。为人正直，光明磊落，具有领导才能。
              </p>
              <p>
                太阳星人往往能得到长辈的提携，也容易获得权力和地位。但也要注意过于刚强可能带来的人际关系问题。
              </p>
            </div>
          </div>
        </section>

        <!-- 武曲星 -->
        <section class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-indigo-700">武曲星</h3>
            <span class="text-sm text-gray-500">命宫出现概率≈8.33%</span>
          </div>
          
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">基本属性</h4>
              <ul class="space-y-1 text-gray-700">
                <li>阴阳：阳 ☀️</li>
                <li>五行：庚金 ⚔️</li>
                <li>化气：科</li>
                <li>斗分：北斗第六星</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">职业特征</h4>
              <ul class="space-y-1 text-gray-700">
                <li>职业：财帛主</li>
                <li>职务：掌管财富，权力</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">别号</h4>
              <ul class="space-y-1 text-gray-700">
                <li>财星</li>
                <li>武将星</li>
                <li>执行星</li>
              </ul>
            </div>
          </div>

          <div class="space-y-4">
            <h4 class="text-xl font-semibold text-indigo-600">武曲星特性</h4>
            <div class="prose max-w-none text-gray-700">
              <p>
                武曲星人具有极强的执行力和规划能力，做事雷厉风行，善于理财和管理。
              </p>
              <p>
                这是一颗财富星，主管钱财，但也意味着需要通过自己的努力才能获得财富。性格较为固执，做事认真负责。
              </p>
            </div>
          </div>
        </section>

        <!-- 天同星 -->
        <section class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-indigo-700">天同星</h3>
            <span class="text-sm text-gray-500">命宫出现概率≈8.33%</span>
          </div>
          
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">基本属性</h4>
              <ul class="space-y-1 text-gray-700">
                <li>阴阳：阴 🌑</li>
                <li>五行：壬水 💧</li>
                <li>化气：忧</li>
                <li>斗分：南斗第一星</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">职业特征</h4>
              <ul class="space-y-1 text-gray-700">
                <li>职业：疾厄主</li>
                <li>职务：掌管情感，艺术</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">别号</h4>
              <ul class="space-y-1 text-gray-700">
                <li>慈悲星</li>
                <li>艺术星</li>
                <li>感情星</li>
              </ul>
            </div>
          </div>

          <div class="space-y-4">
            <h4 class="text-xl font-semibold text-indigo-600">天同星特性</h4>
            <div class="prose max-w-none text-gray-700">
              <p>
                天同星人性格温和，富有同情心，对艺术特别敏感。往往具有艺术天赋，在音乐、绘画等领域有特殊的造诣。
              </p>
              <p>
                感情丰富，容易共情，但也因此容易陷入忧郁。需要注意情绪管理，避免过分感性。
              </p>
            </div>
          </div>
        </section>

        <!-- 廉贞星 -->
        <section class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-indigo-700">廉贞星</h3>
            <span class="text-sm text-gray-500">命宫出现概率≈8.33%</span>
          </div>
          
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">基本属性</h4>
              <ul class="space-y-1 text-gray-700">
                <li>阴阳：阳 ☀️</li>
                <li>五行：丙火 🔥</li>
                <li>化气：忌</li>
                <li>斗分：北斗第七星</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">职业特征</h4>
              <ul class="space-y-1 text-gray-700">
                <li>职业：田宅主</li>
                <li>职务：掌管正义，清廉</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">别号</h4>
              <ul class="space-y-1 text-gray-700">
                <li>清廉星</li>
                <li>正义星</li>
                <li>革命星</li>
              </ul>
            </div>
          </div>

          <div class="space-y-4">
            <h4 class="text-xl font-semibold text-indigo-600">廉贞星特性</h4>
            <div class="prose max-w-none text-gray-700">
              <p>
                廉贞星人性格刚直不阿，有强烈的正义感，对不公平的事物会采取行动。具有革新意识，敢于打破常规。
              </p>
              <p>
                这颗星主管清廉，也主管革命和改革。性格较为偏激，容易走极端，需要注意处事方式的圆融。
              </p>
            </div>
          </div>
        </section>

        <!-- 天府星 -->
        <section class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-indigo-700">天府星</h3>
            <span class="text-sm text-gray-500">命宫出现概率≈8.33%</span>
          </div>
          
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">基本属性</h4>
              <ul class="space-y-1 text-gray-700">
                <li>阴阳：阴 🌑</li>
                <li>五行：己土 ⛰️</li>
                <li>化气：禄</li>
                <li>斗分：天府星系</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">职业特征</h4>
              <ul class="space-y-1 text-gray-700">
                <li>职业：福德主</li>
                <li>职务：掌管福禄，财富</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">别号</h4>
              <ul class="space-y-1 text-gray-700">
                <li>福禄星</li>
                <li>富贵星</li>
                <li>福德星</li>
              </ul>
            </div>
          </div>

          <div class="space-y-4">
            <h4 class="text-xl font-semibold text-indigo-600">天府星特性</h4>
            <div class="prose max-w-none text-gray-700">
              <p>
                天府星人性格温和，为人谦逊，具有很强的亲和力。善于经营人际关系，容易得到他人帮助。
              </p>
              <p>
                这是一颗主管福禄的吉星，代表着富贵和福气。但也要注意不要过于依赖他人，需要培养独立能力。
              </p>
            </div>
          </div>
        </section>

        <!-- 太阴星 -->
        <section class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-indigo-700">太阴星</h3>
            <span class="text-sm text-gray-500">命宫出现概率≈8.33%</span>
          </div>
          
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">基本属性</h4>
              <ul class="space-y-1 text-gray-700">
                <li>阴阳：阴 🌑</li>
                <li>五行：庚金 ⚔️</li>
                <li>化气：文</li>
                <li>斗分：太阴星系</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">职业特征</h4>
              <ul class="space-y-1 text-gray-700">
                <li>职业：夫妻主</li>
                <li>职务：掌管文艺，美貌</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">别号</h4>
              <ul class="space-y-1 text-gray-700">
                <li>美貌星</li>
                <li>文艺星</li>
                <li>阴柔星</li>
              </ul>
            </div>
          </div>

          <div class="space-y-4">
            <h4 class="text-xl font-semibold text-indigo-600">太阴星特性</h4>
            <div class="prose max-w-none text-gray-700">
              <p>
                太阴星人性格温柔，富有艺术气质，对美的事物特别敏感。往往具有较高的审美能力。
              </p>
              <p>
                这颗星主管文艺和美貌，性格较为含蓄内敛，但内心情感丰富。需要注意情绪的波动，容易受外界影响。
              </p>
            </div>
          </div>
        </section>

        <!-- 贪狼星 -->
        <section class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-indigo-700">贪狼星</h3>
            <span class="text-sm text-gray-500">命宫出现概率≈8.33%</span>
          </div>
          
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">基本属性</h4>
              <ul class="space-y-1 text-gray-700">
                <li>阴阳：阳 ☀️</li>
                <li>五行：丙火 🔥</li>
                <li>化气：禄</li>
                <li>斗分：北斗第一星</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">职业特征</h4>
              <ul class="space-y-1 text-gray-700">
                <li>职业：子女主</li>
                <li>职务：掌管欲望，权力</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">别号</h4>
              <ul class="space-y-1 text-gray-700">
                <li>欲望星</li>
                <li>权力星</li>
                <li>桃花星</li>
              </ul>
            </div>
          </div>

          <div class="space-y-4">
            <h4 class="text-xl font-semibold text-indigo-600">贪狼星特性</h4>
            <div class="prose max-w-none text-gray-700">
              <p>
                贪狼星人具有强烈的进取心和欲望，行动力强，敢于追求自己想要的东西。
              </p>
              <p>
                这颗星主管欲望和权力，性格较为主动积极，但也要注意控制欲望，避免过于急进。在感情方面桃花运旺盛。
              </p>
            </div>
          </div>
        </section>

        <!-- 巨门星 -->
        <section class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-indigo-700">巨门星</h3>
            <span class="text-sm text-gray-500">命宫出现概率≈8.33%</span>
          </div>
          
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">基本属性</h4>
              <ul class="space-y-1 text-gray-700">
                <li>阴阳：阴 🌑</li>
                <li>五行：乙木 🪵</li>
                <li>化气：权</li>
                <li>斗分：北斗第二星</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">职业特征</h4>
              <ul class="space-y-1 text-gray-700">
                <li>职业：奴仆主</li>
                <li>职务：掌管言语，口才</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">别号</h4>
              <ul class="space-y-1 text-gray-700">
                <li>口才星</li>
                <li>辩论星</li>
                <li>是非星</li>
              </ul>
            </div>
          </div>

          <div class="space-y-4">
            <h4 class="text-xl font-semibold text-indigo-600">巨门星特性</h4>
            <div class="prose max-w-none text-gray-700">
              <p>
                巨门星人口才出众，善于言辞，具有很强的说服力和表达能力。适合从事与语言相关的工作。
              </p>
              <p>
                这颗星主管言语，也主管是非。需要注意说话的分寸，避免过于尖锐或引起争议。
              </p>
            </div>
          </div>
        </section>

        <!-- 天相星 -->
        <section class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-indigo-700">天相星</h3>
            <span class="text-sm text-gray-500">命宫出现概率≈8.33%</span>
          </div>
          
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">基本属性</h4>
              <ul class="space-y-1 text-gray-700">
                <li>阴阳：阳 ☀️</li>
                <li>五行：辛金 ⚔️</li>
                <li>化气：科</li>
                <li>斗分：南斗第二星</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">职业特征</h4>
              <ul class="space-y-1 text-gray-700">
                <li>职业：迁移主</li>
                <li>职务：掌管相貌，形象</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">别号</h4>
              <ul class="space-y-1 text-gray-700">
                <li>相貌星</li>
                <li>形象星</li>
                <li>容貌星</li>
              </ul>
            </div>
          </div>

          <div class="space-y-4">
            <h4 class="text-xl font-semibold text-indigo-600">天相星特性</h4>
            <div class="prose max-w-none text-gray-700">
              <p>
                天相星人外表端庄大方，举止优雅，给人温和可亲的感觉。对形象和美感有很高的要求。
              </p>
              <p>
                这颗星主管相貌和形象，性格温和，但也较为注重外在。需要注意不要过分在意外表，也要重视内在修养。
              </p>
            </div>
          </div>
        </section>

        <!-- 天梁星 -->
        <section class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-indigo-700">天梁星</h3>
            <span class="text-sm text-gray-500">命宫出现概率≈8.33%</span>
          </div>
          
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">基本属性</h4>
              <ul class="space-y-1 text-gray-700">
                <li>阴阳：阳 ☀️</li>
                <li>五行：戊土 ⛰️</li>
                <li>化气：权</li>
                <li>斗分：南斗第五星</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">职业特征</h4>
              <ul class="space-y-1 text-gray-700">
                <li>职业：官禄主</li>
                <li>职务：掌管仁德，名望</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">别号</h4>
              <ul class="space-y-1 text-gray-700">
                <li>仁德星</li>
                <li>名望星</li>
                <li>官禄星</li>
              </ul>
            </div>
          </div>

          <div class="space-y-4">
            <h4 class="text-xl font-semibold text-indigo-600">天梁星特性</h4>
            <div class="prose max-w-none text-gray-700">
              <p>
                天梁星人性格仁厚，富有同情心，乐于助人。在群众中有较高的威望和号召力。
              </p>
              <p>
                这颗星主管仁德和名望，适合从事公共事务和管理工作。但也要注意不要过分仁慈，以致被人利用。
              </p>
            </div>
          </div>
        </section>

        <!-- 七杀星 -->
        <section class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-indigo-700">七杀星</h3>
            <span class="text-sm text-gray-500">命宫出现概率≈8.33%</span>
          </div>
          
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">基本属性</h4>
              <ul class="space-y-1 text-gray-700">
                <li>阴阳：阳 ☀️</li>
                <li>五行：庚金 ⚔️</li>
                <li>化气：忌</li>
                <li>斗分：北斗第五星</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">职业特征</h4>
              <ul class="space-y-1 text-gray-700">
                <li>职业：官禄主</li>
                <li>职务：掌管权力，威严</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">别号</h4>
              <ul class="space-y-1 text-gray-700">
                <li>权力星</li>
                <li>威严星</li>
                <li>杀伐星</li>
              </ul>
            </div>
          </div>

          <div class="space-y-4">
            <h4 class="text-xl font-semibold text-indigo-600">七杀星特性</h4>
            <div class="prose max-w-none text-gray-700">
              <p>
                七杀星人性格刚强，具有很强的领导能力和决断力。做事果断，不拖泥带水。
              </p>
              <p>
                这颗星主管权力和威严，适合担任领导职务。但也要注意控制脾气，避免过于强势和专制。
              </p>
            </div>
          </div>
        </section>

        <!-- 破军星 -->
        <section class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-indigo-700">破军星</h3>
            <span class="text-sm text-gray-500">命宫出现概率≈8.33%</span>
          </div>
          
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">基本属性</h4>
              <ul class="space-y-1 text-gray-700">
                <li>阴阳：阳 ☀️</li>
                <li>五行：丙火 🔥</li>
                <li>化气：忌</li>
                <li>斗分：北斗第七星</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">职业特征</h4>
              <ul class="space-y-1 text-gray-700">
                <li>职业：迁移主</li>
                <li>职务：掌管变动，革新</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">别号</h4>
              <ul class="space-y-1 text-gray-700">
                <li>变革星</li>
                <li>创新星</li>
                <li>动荡星</li>
              </ul>
            </div>
          </div>

          <div class="space-y-4">
            <h4 class="text-xl font-semibold text-indigo-600">破军星特性</h4>
            <div class="prose max-w-none text-gray-700">
              <p>
                破军星人性格独特，具有创新精神，不喜欢按常规出牌。善于打破陈规，开创新局面。
              </p>
              <p>
                这颗星主管变动和革新，人生经历往往跌宕起伏。需要学会适应变化，把握机遇中的转机。
              </p>
            </div>
          </div>
        </section>
      </div>

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
              星曜特质只代表着一种趋势和特点，这些趋势和特点更多的是一种本能，在没有意识参与的情况下会不由自主的展现出来。
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