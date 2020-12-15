module.exports = {
  //代理，当用户发送请求时，会转发到该路径下
  devServer: {
    proxy: "http://localhost:8097"
  }
};