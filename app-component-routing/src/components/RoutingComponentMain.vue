<script setup lang="ts">
import { getCurrentInstance } from 'vue';
import { RouterLink } from 'vue-router';

</script>

<template>
    <h2>Routing Example</h2>
    <div>
        This is a component defined in <em>app-component-routing</em> to demonstrate the user of Vue Router for navigating to routed pages. 
        These routes must have been defined in the end application that uses this component. E.g. If this component is 
        tested in the sandbox app inside <em>app-component-routing</em> then these links will take you to those pages.
        When you test them in the <em>spa-poc</em> app which uses these components via module federation, those links 
        will take you to the routes defined in <em> spa-poc</em> app.
    </div>
    <br />
    <router-link to="/about">Navigate to About Page</router-link> | 
    <router-link to="/app-component-c/sub-route-one">Navigate to Sub-route-one Page</router-link>
</template>