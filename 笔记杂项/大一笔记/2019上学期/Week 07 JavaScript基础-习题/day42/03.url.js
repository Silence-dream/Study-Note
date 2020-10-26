// 3.获取url中的用户名和密码 https://www.test.com/login?name=zs&pwd=123,并且控制台输出对象的格式{name:'zs',pwd:123}

let url = "https://www.test.com/login?name=zs&pwd=123";

//分开？
let t = url.split("?")
// console.log(t)

let n = t[1].split("&")
// console.log(n)  //[ 'name=zs', 'pwd=123' ]

//隔开name和zs
let n_and_z = n[0].split("=")
// console.log(n_and_z) //[ 'name', 'zs' ]
//隔开pwd和zs
let p_1 = n[1].split("=");
// console.log(p_1) //[ 'pwd', '123' ]

// 定义对象

let obj = {
    name: n_and_z[1],
    pwd: p_1[1]
}
console.log(obj)
