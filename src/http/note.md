###请求库封装

**工程版请求库封装，未使用**

···
在main.js 引入
import api from './http/index'
Vue.use(api)
// 此时可以直接在 Vue 原型上调用 $api 了

···



···
this.$api.list(id).then(res => {
     if (res.rc === 0) {
          this.pageList = res.data.item
      } else {
        this.$Message.info(res.desc);
      }
     })
     .catch(error => {
        this.$Message.info(error);
      })
...