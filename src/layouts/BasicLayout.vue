<template>
  <div id="basicLayout">
    <a-layout style="height: 400px">
      <a-layout-header class="-header"><global-header /></a-layout-header>

      <a-layout-content class="-content"> <router-view /></a-layout-content>
      <a-layout-footer class="-footer">OJ前端优化</a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>
<style scoped>
#basicLayout {
}
#basicLayout .-header {
  margin-bottom: 16px;
  box-shadow: #eee 1px 1px 5px;
}
#basicLayout .-content {
  background: blue;
  margin-bottom: 16px;
}
#basicLayout .-footer {
  background: green;
  padding: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
