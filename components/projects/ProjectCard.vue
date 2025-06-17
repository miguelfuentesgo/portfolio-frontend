<template>
    <div class="card">
        <h2 class="title">{{ props.title }}</h2>
        <p class="description">
            {{ props.description }}
        </p>
        <div class="technologies">
            <div  class="technology">
               {{  props.technologies }}
            </div>
        </div>
    </div>
    
</template>

<style lang="scss">

.title {
    margin-bottom: 1rem;
}

.description {
    margin-bottom: 0.5rem;
}

</style>
<script setup lang="ts">

import { defineProps } from 'vue';

const props = defineProps<{
    title: string;
    description: string;
    technologies: string;
}>();

</script>