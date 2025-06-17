<template>
    <div class="projects-container">
        <ul class="list">
            <li v-for="project, index in data" :key="index">
                <ProjectCard :title="project.title" :description="project.description" :technologies="project.technologies" />
            </li>
            
        </ul>
    </div>
</template>





<script setup lang="ts">
import { type Project } from '@/types/project.d.ts';
import ProjectCard from '~/components/projects/ProjectCard.vue';
import projectReporsitory from '~/services/projectsRepository';

const { data } = useAsyncData<Project[]>('allProjects', () => {
    return projectReporsitory.getAll()
});

</script>