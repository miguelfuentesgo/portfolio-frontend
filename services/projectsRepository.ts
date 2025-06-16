// services/projectRepository.ts
import api from './api';
import { type Project, type ProjectCreate, type ProjectUpdate } from '@/types/project.d.ts'; // Importa tus tipos

const RESOURCE_URL = 'projects/';

export default {
  async getAll(): Promise<Project[]> {
    try {
      const response = await api.get<Project[]>(RESOURCE_URL);
      return response.data;
    } catch (error) {
      console.error('Error al obtener todos los proyectos:', error);
      throw error;
    }
  },

  async getById(id: number): Promise<Project> {
    try {
      const response = await api.get<Project>(`${RESOURCE_URL}${id}/`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener el proyecto con ID ${id}:`, error);
      throw error;
    }
  },

  async create(data: ProjectCreate): Promise<Project> {
    try {
      const response = await api.post<Project>(RESOURCE_URL, data);
      return response.data;
    } catch (error) {
      console.error('Error al crear el proyecto:', error);
      throw error;
    }
  },

  async updatePartial(id: number, data: ProjectUpdate): Promise<Project> {
    try {
      const response = await api.patch<Project>(`${RESOURCE_URL}${id}/`, data);
      return response.data;
    } catch (error) {
      console.error(`Error al actualizar parcialmente el proyecto con ID ${id}:`, error);
      throw error;
    }
  },

  async updateFull(id: number, data: ProjectCreate): Promise<Project> { // Usamos ProjectCreate para PUT, ya que es la estructura completa
    try {
      const response = await api.put<Project>(`${RESOURCE_URL}${id}/`, data);
      return response.data;
    } catch (error) {
      console.error(`Error al actualizar completamente el proyecto con ID ${id}:`, error);
      throw error;
    }
  },

  async delete(id: number): Promise<void> {
    try {
      await api.delete(`${RESOURCE_URL}${id}/`);
    } catch (error) {
      console.error(`Error al eliminar el proyecto con ID ${id}:`, error);
      throw error;
    }
  }
};