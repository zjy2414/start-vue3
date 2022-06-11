<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div>
      <a-button size="large" v-on:click="gotoServerlessDevs"
        >Serverless Devs</a-button
      >
    </div>

    <h3>生态</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>

    <h3>帮助链接</h3>
    <ul>
      <li>
        <a
          href="https://github.com/Serverless-Devs/Serverless-Devs"
          target="_blank"
          rel="noopener"
          >命令行工具仓库</a
        >
      </li>
      <li>
        <a
          href="https://www.serverless-devs.com/serverless-devs/install"
          target="_blank"
          rel="noopener"
          >工具安装文档</a
        >
      </li>
      <li>
        <a
          href="https://www.serverless-devs.com/serverless-devs/command/readme"
          target="_blank"
          rel="noopener"
          >命令行指令文档</a
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    gotoServerlessDevs() {
      window.open("https://www.serverless-devs.com/serverless-devs/");
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
