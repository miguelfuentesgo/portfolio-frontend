import { defineStore } from 'pinia';

export const usePortfolioStore = defineStore('portfolio', {
    state: () => {
        return {
            profile: {
                biography: "",
            }
        }
    }
}