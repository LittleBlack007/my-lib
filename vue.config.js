const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

function resolve(dir){ 
  return path.join(__dirname,'..',dir); 
} 

const version = new Date().getTime();
console.log(path.resolve(__dirname, './version.json'),'==================================')
module.exports = { 
  pages:{ 
    index:{ 
      entry:'example/main.js', 
      template:'public/index.html', 
      filename:'index.html' 
    } 
  },
  configureWebpack: config => {
    // 打上版本号
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, './version.json'),
            to: path.resolve(__dirname, './dist/version.json'),
            transform(){
              return version.toString();
            }
          }
        ]
      })
    )
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
