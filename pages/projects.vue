<template>
    <div class="projects-container">
        <ul class="list">
            <li v-for="project, index in data" :key="index">
                <ProjectCard :title="project.title" :description="project.description" :technologies="project.technologies" @click="goTo(project.repo_url)" />
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

const goTo = (url:string | null) => {
    if (typeof url !== 'string' || !url) {
        return;
    }
  window.open(url, '_blank')
}
</script>