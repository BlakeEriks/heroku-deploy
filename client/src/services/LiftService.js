import http from '../http-common'

const LiftService = {

    getAll: () => {
        return http.get('/lifts')
    },

    getAllForMonth: month => {
        let query = `/lifts?${month}`
        console.log(query)
        return http.get(`/lifts?${month}`)
    },

    getByDate: date => {
        return http.get(`/lifts?date=${date.toLocaleDateString("en-US")}`)
    },

    create: data => {
        return http.post(`/lifts`, data)
    },

    update: (id, data) => {
        return http.put(`/lifts/${id}`, data)
    },

    remove: id => {
        return http.delete(`/lifts/${id}`)
    }

}

export default LiftService