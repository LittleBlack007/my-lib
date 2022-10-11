const path = require('path'); 
function resolve(dir){ 
  return path.join(__dirname,'..',dir); 
} 
module.exports = { 
  pages:{ 
    index:{ 
      entry:'example/main.js', 
      template:'public/index.html', 
      filename:'index.html' 
    } 
  },
  chainWebpack: config =>{ 
    config.module 
      .rule('js') 
      .include.add(resolve('package')) 
      .end() 
      .use('babel') 
      .loader('babel-loader') 
      .tap( options => { 
        return options; 
      }) 
  } 
}
