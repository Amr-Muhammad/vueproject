import axios from "axios"

let baseUrl = 'http://localhost:2000'

export default {
    data() {
        return {

        }
    },
    methods: {
        async register(formData, role) {
            try {
                let res = await axios.post(`${baseUrl}/${role}`, formData)
                console.log(res);
            }
            catch (err) {
                console.log(err)
            }
        },

        getData(role) {
            return axios.get(`${baseUrl}/${role}`)
                .then(res => res)
                .catch(err => console.log(err))
        },

        async deleteData(role,id) {
            let res = await axios.delete(`${baseUrl}/${role}/${id}`)
            console.log(res);
        }

    }
}