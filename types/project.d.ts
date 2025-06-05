export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string;
    repo_url: string | null; 
    demo_url: string | null;     
    is_featured: boolean;
    language: string;
    tags_list: string[];
  }
  
 
  export interface ProjectCreate {
    title: string;
    description: string;
    technologies: string;
    repo_url?: string;
    demo_url?: string;
    is_featured?: boolean;
    language?: string;
    tags_list?: string[];
  }
  
  export interface ProjectUpdate {
    title?: string;
    description?: string;
    technologies?: string;
    repo_url?: string;
    demo_url?: string;
    is_featured?: boolean;
    language?: string;
    tags_list?: string[];
  }