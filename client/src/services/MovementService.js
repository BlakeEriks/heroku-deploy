import http from '../http-common'

const MovementService = {

    getAll: () => {
        return http.get('/movements')
    },

    getAllForMonth: month => {
        console.log(month)
        console.log(`/movements?month=${month+1}`)
        return http.get(`/movements?month=${month+1}`)
    },

    get: id => {
        return http.get(`/movements/${id}`)
    },

    create: movement => {
        return http.post(`/movements`, movement)
    },

    update: (id, movement) => {
        return http.put(`/movements/${id}`, movement)
    },

    delete: id => {
        return http.delete(`/movements/${id}`)
    }

}

export default MovementService