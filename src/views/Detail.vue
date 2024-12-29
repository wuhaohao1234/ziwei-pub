<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">紫薇斗数详解</h1>
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="十二宫位">
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-4">十二宫位解析</h3>
          <a-collapse v-model:activeKey="activeCollapseKeys">
            <a-collapse-panel key="1" header="命宫">
              命宫代表人的先天个性、外貌、才能等基本特质。
            </a-collapse-panel>
            <a-collapse-panel key="2" header="父母宫">
              父母宫主要反映与父母的关系、家庭环境等。
            </a-collapse-panel>
            <a-collapse-panel key="3" header="福德宫">
              福德宫表示人的内在性格、兴趣爱好等。
            </a-collapse-panel>
            <!-- 可以继续添加其他宫位 -->
          </a-collapse>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="主星解析">
        <div class="p-4">
          <!-- 主星内容 -->
        </div>
      </a-tab-pane>
      <a-tab-pane key="3" tab="四化星">
        <div class="p-4">
          <!-- 四化星内容 -->
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeKey = ref('1');
const activeCollapseKeys = ref(['1']);
</script> 