// services/projectRepository.ts
import api from './api';
import { type Experience } from '@/types/experience.d.ts';

const RESOURCE_URL = 'experience/';

export default {
  async getAll(): Promise<Experience[]> {
    try {
      const response = await api.get<Experience[]>(RESOURCE_URL);
      return response.data;
    } catch (error) {
      console.error('Error getting experiences:', error);
      throw error;
    }
  },
};
