<script setup lang="ts">
import { useComponentStoreA } from "../stores";


const store = useComponentStoreA();

function increment(): void {
    store.increment();
};

function decrement(): void {
    store.decrement();
}
</script>

<template>
    <div>
        This is a Pinia based component defined in <em>app-component-pinia</em>.
    </div>
    <div class="info">Count: {{  store.count }}</div>
    <button @click="decrement()">Decrement</button>
    <button @click="increment()">Increment</button>
</template>

<style scoped>
button {
    margin-right: 10px !important;
}
.info {
    margin: 10px 0;
}
</style>