import axios from 'axios'
export function request(config) {
    const install = axios.create({
            baseURL: 'http://localhost:3000',
            timeout: 8000
        })
        // withCredentials: true
    return install(config)
        // axios({
        //     url: 'http://localhost:3000/banner'
        // }).then(res => {
        //     console.log(res);
        //     // return res
        // })
}