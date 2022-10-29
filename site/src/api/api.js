import api from './request';
 

export const getdata = (params) => api(`/api/data`, params)