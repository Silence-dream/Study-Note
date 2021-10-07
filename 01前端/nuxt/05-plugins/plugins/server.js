export default (context,inject) => {
  inject('myServer',() => {
    return "这里是 server"
  })
  console.log("指定在服务端运行")
}
