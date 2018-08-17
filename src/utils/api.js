
import axios from 'axios';



export default {

    install(Vue, options) {
        Vue.prototype.api = function (method, url, data, callback) {
            let domain = '';
            let projet_path = ''
            let method_str = 'post';
            if (method) {
                method_str = method;
            }
            axios({
                method: method_str,
                url: domain + projet_path + url,
                data: data,
                params: method_str == 'get' ? data : ''
            }).then(function (response) {
                callback(response.data)
            });
        }
    },

}