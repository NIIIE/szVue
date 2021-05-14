<template>
  <div class="index">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">
          <index1/>
      </el-tab-pane>
      <el-tab-pane label="table" name="second">
          <index2/>
      </el-tab-pane>
      <el-tab-pane label="echarts" name="third">
          <index3/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import Index1 from "@/components/Index1.vue";
import Index2 from "@/components/Index2.vue";
import Index3 from "@/components/Index3.vue";
export default {
  name: "index",
  components: {
    Index1,
    Index2,
    Index3,
  },
  data() {
      return {
        activeName: 'third'
      };
    },
};
</script>

<style scoped>
.index {
  width: 1700px;
  margin: auto;
}
.indexHeader {
  height: 36px;
}
</style>