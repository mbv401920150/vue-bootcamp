<template>
  <div>
    <h1>Counter example (Using Composable Function)</h1>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ square }}</h3>

    <button @click="addOne">+1</button>
    <button @click="minusOne">-1</button>
  </div>
</template>

<script lang="ts" src="./MyCounterScript.ts" />

<style scoped>
div {
  border: 2px solid yellowgreen;
  margin: 10px 0 10px 0;
  padding: 0 0 10px 10px;
}

h1 {
  color: darkgoldenrod;
  font-size: 30px;
}
</style>
