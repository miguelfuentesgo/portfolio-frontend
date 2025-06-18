<template>
    <div class="card">
        <div class="header">
            <h2 class="role">
                {{ props.position }}
            </h2>
            <h3 class="company">
                {{ props.company }}

            </h3>
            <div class="date-range">
                <span class="start-date">
                    {{ props.startDate }}
                </span> -
                <span class="end-date">
                    {{ props.endDate }}
                </span>
            </div>
            
        </div>
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
        position: string,
        company: string,
        startDate: string,
        endDate: string,
        description: string,
        technologies: string,
}>();

</script>