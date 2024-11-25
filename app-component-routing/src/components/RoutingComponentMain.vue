<script setup lang="ts">
import { getCurrentInstance } from 'vue';

const router = getCurrentInstance()!.appContext.config.globalProperties.$router;

const navigateTo = (path:string) => router.push(path);

</script>

<template>
    <h2>App Component B</h2>
    <div>
        This is an application component developed with Vue routing and integrated to the SPA using module federation.
        It uses Vue Router to navigate to the About page, and another inner-route <em>/app-component-b/subroot1</em>, 
        both of which are defined in the main SPA.
    </div>
    <br />
    <span @click="navigateTo('/about')" class="green link">Navigate to About Page</span> | 
    <span @click="navigateTo('/app-component-c/sub-route-one')" class="green link">Navigate to Sub-route-one Page</span>

</template>