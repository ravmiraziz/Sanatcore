import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337/api';

const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token if available
if (process.env.STRAPI_API_TOKEN) {
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${process.env.STRAPI_API_TOKEN}`;
}

export const strapiAPI = {
  // Projects
  getProjects: async (params?: Record<string, any>) => {
    const response = await apiClient.get('/projects', { params });
    return response.data;
  },

  getProjectBySlug: async (slug: string) => {
    const response = await apiClient.get(`/projects?filters[slug][$eq]=${slug}`);
    return response.data.data?.[0];
  },

  // Services
  getServices: async () => {
    const response = await apiClient.get('/services');
    return response.data;
  },

  getServiceBySlug: async (slug: string) => {
    const response = await apiClient.get(`/services?filters[slug][$eq]=${slug}`);
    return response.data.data?.[0];
  },

  // News
  getNewsList: async (params?: Record<string, any>) => {
    const response = await apiClient.get('/news-articles', { params });
    return response.data;
  },

  getNewsArticle: async (slug: string) => {
    const response = await apiClient.get(`/news-articles?filters[slug][$eq]=${slug}`);
    return response.data.data?.[0];
  },

  // Contact Form
  submitContactForm: async (data: Record<string, any>) => {
    const response = await apiClient.post('/contacts', data);
    return response.data;
  },

  // Company Info
  getCompanyInfo: async () => {
    const response = await apiClient.get('/company-info');
    return response.data.data;
  },
};

export default apiClient;
