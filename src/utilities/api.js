import axios from 'axios'
import router from '@/router'

export function Api () {
    const api = axios.create({
        baseURL: 'http://www.mocky.io/v2/'
    })

    /*api.interceptors.response.use(response => response,
    error => {
        if(error.response.status === 401) {
            router.push('Page404');
        } else if(error.response.status === 404) {
            router.push('Page404');
        } else if(error.response.status === 500) {
            router.push('Page500');
        } else {
            router.push('/');
        }
        return Promise.reject(error);
    });*/
    return api
}
