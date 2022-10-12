<template>
  <div class="hello">
    <button @click="showVersion">查看版本号</button>
  </div>
</template>

<script>
import { apiGetVersion } from '../services/base.js';
export default {
  name: 'HelloWorld',
  methods:{
    showVersion(){
      apiGetVersion().then(res => {
        res.json().then(str => {
          str = str.toString();
          let oldVersion = localStorage.getItem('version');
          localStorage.setItem('version', str);
          if(str === oldVersion){
            alert('现版本号：' + str + '\n' + '旧版本号：' + oldVersion + '\n' + '没有更新');
          }else{
            alert('现版本号：' + str + '\n' + '旧版本号：' + oldVersion + '\n' + '已更新');
          }
          console.log(str,oldVersion)
        })
      }).catch(err => {
        console.error(err)
      })
      //let version = 
      //
      //confirm();
      //prompt();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
