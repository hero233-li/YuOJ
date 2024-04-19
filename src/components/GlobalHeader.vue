<template>
  <div>
    <a-row id="globalHeader" style="margin-bottom: 16px" align="center">
      <a-col flex="auto">
        <a-menu
          mode="horizontal"
          :selectedKeys="selectedKeys"
          @menu-item-click="doMenuClick"
        >
          <a-menu-item
            key="0"
            :style="{ padding: 0, marginRight: '38px' }"
            disabled
          >
            <div id="title-bar">
              <img class="-logo" src="@/assets/OJ-logo.svg" alt="" />
              <div class="-title">鱼 OJ</div>
            </div>
          </a-menu-item>
          <a-menu-item v-for="item in routes" :key="item.path">
            {{ item.name }}
          </a-menu-item>
        </a-menu>
      </a-col>
      <a-col flex="100px">
        <div>{{ store.state?.user?.loginUser?.userName ?? "未登录" }}</div>
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import { routes } from "@/router/routes";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex";
const router = useRouter();
const route = useRoute();
const store = useStore();
const selectedKeys = ref(["/"]);
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});
const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
setTimeout(() => {
  store.dispatch("user/getLoginUser", { userName: "未登录222" });
}, 3000);
</script>
<style scoped>
#title-bar {
  display: flex;
  align-items: center;
}
.-logo {
  height: 48px;
}
.-title {
  color: #444;
  margin-left: 16px;
}
</style>
