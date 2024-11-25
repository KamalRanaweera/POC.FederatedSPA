<script setup lang="ts">
import { getCurrentInstance } from 'vue';
import { RouterLink } from 'vue-router';

</script>

<template>
    <h2>App Component B</h2>
    <div>
        This is an application component developed with Vue routing and integrated to the SPA using module federation.
        It uses Vue Router to navigate to the About page, and another inner-route <em>/app-component-b/subroot1</em>, 
        both of which are defined in the main SPA.
    </div>
    <br />
    <router-link to="/about">Navigate to About Page</router-link> | 
    <router-link to="/app-component-c/sub-route-one">Navigate to Sub-route-one Page</router-link>
</template>