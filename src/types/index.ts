// Country type
export type Country = 'TR' | 'OTHER';

// Project type definition matching Supabase schema
export interface Project {
    id: string; // UUID from Supabase
    name: string;
    country: Country; // TR or OTHER
    image_url?: string | null;
    project_url?: string | null;
    motto?: string | null;
    description?: string | null;
    linkedin_url?: string | null;
    is_anonymous: boolean;
    contact_email?: string | null;
    created_at: string; // ISO timestamp
}

// Form data type (what user submits)
export interface ProjectFormData {
    name: string;
    country: Country;
    image_url?: string | null;
    imageFile?: File; // For upload handling
    project_url?: string;
    motto?: string;
    description?: string;
    linkedin_url?: string;
    is_anonymous: boolean;
    contact_email: string;
}
