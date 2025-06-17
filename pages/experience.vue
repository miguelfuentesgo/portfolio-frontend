<template>
    <div class="experience-container">
        <ul class="list">
            <li v-for="project, index in data" :key="index">
                <!-- <ProjectCard :title="project.title" :description="project.description" :technologies="project.technologies" /> -->
                <ExperienceCard 
                    role="Desarrollador Fullstack" 
                    company="Proximax" 
                    startDate="01/02/2021" 
                    endDate="30/02/2024" 
                    description="Desarrollo de aplicaciones web tomando como base blockchain" 
                    technologies="Vue, Golang, Typescripts"
                />
            </li>
            
        </ul>
    </div>
</template>



<script setup lang="ts">
import { type Project } from '@/types/project.d.ts';
import ProjectCard from '~/components/projects/ProjectCard.vue';
import ExperienceCard from '~/components/experience/ExperienceCard.vue';
import projectReporsitory from '~/services/projectsRepository';

const { data } = useAsyncData<Project[]>('allProjects', () => {
    return projectReporsitory.getAll()
});

</script>