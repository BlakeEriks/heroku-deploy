import http from '../http-common'

const MovementService = {

    getAll: () => {
        return http.get('/movements')
    },

    getAllForLift: liftId => {
        return http.get(`/movements?liftId=${liftId}`)
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