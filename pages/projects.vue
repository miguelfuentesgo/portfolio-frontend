<template>
    <div class="projects-container">
        <ul class="projects-list">
            <li v-for="project, index in data" :key="index">
                <ProjectCard :title="project.title" :description="project.description" :technologies="project.technologies" />

            </li>
            
        </ul>
    </div>
</template>

<style lang="scss" scoped>

.projects-container {
    
    .projects-list {
        width: min-content;
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        gap: 20px;
        padding: 20px;
        list-style: none;



        li {
            opacity: 1;
            transition: all 0.2s ease-in-out;
            border: 1px solid transparent;

            
        }

        &:hover li {
            opacity: 0.5;
        }

        li:hover{
                opacity: 1;
                border: 1px solid white;
                border-radius: 5px;
        }
    }
}


@media (max-width: 768px) {
    .projects-container {
        .projects-list {
            flex-direction: column;
            align-items: center;
            
            li {
                width: 100%;
                max-width: 500px;
            }
        }
    }
}
</style>

<script setup lang="ts">
import { type Project } from '@/types/project.d.ts';
import ProjectCard from '~/components/projects/ProjectCard.vue';
import projectReporsitory from '~/services/projectsRepository';

const { data } = useAsyncData<Project[]>('allProjects', () => {
    return projectReporsitory.getAll()
});

</script>