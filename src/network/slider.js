import axios from 'axios'
export function getSlider() {
    axios({
        url: 'http://localhost:3000/banner'
    }).then(res => {
        console.log(res);
    })
}