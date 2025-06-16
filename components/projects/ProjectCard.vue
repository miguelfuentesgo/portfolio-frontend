<template>
    <div class="project-card">
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

.project-card {
    width: 500px;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 1rem;
    cursor: pointer;
    border: 1px solid transparent;
    .title {
        margin-bottom: 1rem;
    }

    .description {
        margin-bottom: 0.5rem;
    }
}

@media (max-width: 768px) {
    .project-card {
        width: 100%;
        margin: 0 auto;
        
    }

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