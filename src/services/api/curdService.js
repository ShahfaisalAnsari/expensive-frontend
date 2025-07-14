import axiosInstance from './axiosInstance';

const crudService = {
  getAll: (resource) => {
    console.log(`[GET] ${axiosInstance.defaults.baseURL}/${resource}`);
    return axiosInstance.get(`${resource}`);
  },

  getOne: (resource, id) => {
    console.log(`[GET] ${resource}/${id}`);
    return axiosInstance.get(`${resource}/${id}`);
  },

  create: (resource, data) => {
    console.log(`[POST] ${resource}`, data);
    return axiosInstance.post(`${resource}`, data);
  },

  update: (resource, id, data) => {
    console.log(`[PUT] ${resource}/${id}`, data);
    return axiosInstance.put(`${resource}/${id}`, data);
  },

  remove: (resource, id) => {
    console.log(`[DELETE] ${resource}/${id}`);
    return axiosInstance.delete(`${resource}/${id}`);
  },
};

export default crudService;
