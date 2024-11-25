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
        This is an application component that is developed as a Vue plug-in in the @spa/app-component-a package. It uses Pinia to implement a state-full functionality.
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