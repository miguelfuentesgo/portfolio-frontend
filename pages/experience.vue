<template>
    <div class="experiencenpm-container">
        <ul class="list">
            <li v-for="experience, index in data" :key="index">
                <!-- <ProjectCard :title="project.title" :description="project.description" :technologies="project.technologies" /> -->
                <ExperienceCard 
                    :position="experience.position" 
                    :company="experience.company" 
                    :startDate="experience.start_date" 
                    :endDate="experience.end_date" 
                    :description="experience.description" 
                    :technologies="experience.technologies"
                    
                />
            </li>
            
        </ul>
    </div>
</template>



<script setup lang="ts">
import { type Experience } from '@/types/experience.d.ts';
import ExperienceCard from '~/components/experience/ExperienceCard.vue';
import experiencRepository from '~/services/experienceRepository';

const { data } = useAsyncData<Experience[]>('allExperiences', () => {
    return experiencRepository.getAll()
});



</script>