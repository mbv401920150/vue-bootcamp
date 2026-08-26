<template>
  <div id="appWrapper">
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <MyCounter :value="20" />
    <MyCounterScript :initialValue="5" />
    <MyCounterScriptTwo :initial-value="22" />
  </div>
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounterScriptTwo from './components/my-counter-script/MyCounterScript.vue';
</script>
