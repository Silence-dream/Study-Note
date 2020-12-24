## mongoDB数据库

### 安装软件

mongodb-compass 是一个数据库可视化的客户端软件 作用: 通过可视化界面操作数据库
mongodb-win32   是一个数据库软件(相当于仓库本身) 作用: 高效方便的管理数据

### 数据库相关概念

database 数据库，mongoDB数据库软件中可以建立多个数据库

仓库 具体的仓库(京东的仓库  韵达的仓库)

collection 集合

集合，一组数据的集合，可以理解为JavaScript中的数组

document 文档

文档，一条具体的数据，可以理解为JavaScript中的对象

field 字段
字段，文档中的属性名称，可以理解为JavaScript中的对象属性

### 使用流程

```js


// 1.引包
const mongoose = require("mongoose");

// 2.连接数据库

mongoose.connect("mogodb://localhost/数据库名称",{
	useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=>console.log("数据库连接成功"))
    .catch(()=>console.log("数据库连接失败"))

// 3.创建约束

let userSchma= new mongoose.Schema({
	// 用户名
  username: String,
  // 姓名
  name: String,
  // 邮箱
  email: String,
  // 年龄
  age: Number,
  // 爱好 爱好是数组 但是具体的爱好是字符串
  hobbies: [String]
})

// 4.应用约束

let user = new mongoose.model("User",userSchma);

// 5.添加数据

user.create({
      // 用户名
  username: '罗志祥',
  // 姓名
  name: 'luo',
  // 邮箱
  email: 'luo@qq.com',
  // 年龄
  age: 41,
  // 爱好 爱好是数组 但是具体的爱好是字符串
  hobbies: ['多人运动', '时间管理大师']
})
```





### 连接数据库

```js
// 使用mongoose 这个包来连接数据库

// 引包
const mongoose = require("mongoose");

// 连接数据库
// mongoose.connect("mongodb://ip域名/数据库名称");
mongoose.connect("mogodb://localhost/my_shujuku",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=>console.log("数据库连接成功"))
    .catch(()=>console.log("数据库连接失败"))
```



### 添加数据

>   方法一

```js
//引包
const mongoose = require("mongoose");

// 连接数据库
mongoose.connect("mongodb://localhost/my_shujuku",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=>console.log("数据库连接成功"))
    .catch(()=>console.log("数据库连接失败"))

// 创建数据集合的规则

let studentSchema = new mongoose.Schema({
    // 字段: 数据类型
    name:String,
    age:Number,
    address:String,
    hobbies:Array
});

// 引用规则

let Student = new mongoose.model("Student")

// 关键代码
// 给Student添加数据

let student = new Student({
    name:"罗志祥",
    age:41,
    address:"台湾",
    hobbies:["时间管理大师"]
})

// 保存
student.save();
```



>    方法二

```js
// 引包
const mongoose = require("mongoose");

// 连接数据库
mongoose.connect("mongodb://localhost/my_shujuku",{
	useNewUrlParser:true,
    useUnifiedTopology:true
})
	.then(()=>console.log("数据库连接成功"))
	.catch(()=>console.log("数据库连接失败"))

// 创建约束

let studentSchema = new mongoose.Schma({
	// 字段: 数据类型
  name: String,
  age: Number,
  address: String,
  hobbies: Array
})

// 应用约束

let Student = new mongoose.model("Student",studentSchema);

// 关键代码
// 添加数据
Student.create({
    name:"罗志祥",
    age:41,
    address:"台湾",
    hobbies:["时间管理大师"]
})
	.then((data)=>console.log(data))
	.catch((err)=>console.log(err))

```

### 查找数据

#### 查找所有数据

```js
// 1.连接数据库
// 1.引入mongoose这个包
const mongoose = require('mongoose');
// 2.使用mongoose的包的connect方法来连接数据库

// mongoose.connect('mongodb://IP或域名/数据库名称')
mongoose.connect('mongodb://localhost/my_shujuku', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => { console.log("数据库连接成功") })
  .catch((err) => { console.log(err, '数据库连接失败') });


// 创建数据集合规则(学生表: 学习姓名  学生年龄 家庭住址 爱好)
// 创建学生信息的约束
let studentSchema = new mongoose.Schema({
  // 字段: 数据类型
  name: String,
  age: Number,
  address: String,
  hobbies: Array
})


// 应用规则
let Student = new mongoose.model('Student', studentSchema);

// 查询student表中的所有数据

Student.find()
  .then(data => console.log(data))
  .catch(err => console.log(err));
```



#### 查找指定值的数据



```js
// 查询指定的名字

Student.find({ // 
	name:"罗志祥"
})
	.then(data=>console.log(data)) // 输出name为罗志祥的所有数据
	.catch(error=>console.log(error)) // 错误时的输出

// 查询年龄大于 18 小于 25 之间的数据
// 核心关键字 $gt大于   $lt小于

Student.find({
    age:{
		$gt:18,
        $lt:25
    }
})
	.then(data=>console.log(data))
	.catch(error=>console.log(error))

```

#### 升序和降序



```js

// 升序
Student.find().sort('age').then((data) => {
  console.log(data);
})

// 降序
Student.find().sort("-age").then(data=>console.log(data))
```



#### 查询包含指定字段的数据

```js
// 查询 爱好包含 时间管理大师的 数据($in只能查找字段值是数组的)
Student.find({ hobbies: { $in: ['时间管理大师'] } })
    .then((data) => { console.log(data); })

```



#### 查询值

```js

// 查询数据库中 name 和 age 的值   -号代表去掉这个值
Student.find().select('name age -_id').then((data) => {
  console.log(data);
})

```



#### 只查询一个数据,谁在前面就输出谁

```js
Student.findOne({
  age: 18
}).then(data => console.log(data))
```



#### 关联查询

```js
// 引入mongoose包
const mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://localhost/db_blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("数据库连接成功")
}).catch((err) => {
  console.log("数据库连接失败")
})


// 创建约束
// const userSchema = new mongoose.Schema({
//   name: {
//     type: String
//   }
// })

// 创建并应用约束
const User = new mongoose.model('User', new mongoose.Schema({
  name: {
    type: String
  }
}));


// User.create({
//   name: '展飞'
// })


const Post = new mongoose.model('Post', new mongoose.Schema({
  // 文章的标题
  title: {
    type: String
  },
  // 文章作者
  author: {
    // 用户id(规定写法 如果你的数据类型是用户的id)
    type: mongoose.Schema.Types.ObjectId,
    // author的id引用自 User集合
    ref: 'User'
  }
}))

// Post.create({
//   title: '霸道总裁爱上我',
//   author: '5ecf80ea93548c28a43a58d6'
// })


// 关联查询
// 查询文章 把文章的标题和文章的作者全部显示出来
// Post.find().then((result) => {
//   console.log(result)
// });

Post.find().populate('author').then((result) => {
  console.log(result)
});
```









### 删除数据



#### 删除一条数据



```js

Student.findOneAndDelete({ _id: '5ecdbe7c13228d28b430379e' }).then((data) => { console.log(data) })

```



#### 删除多条数据



```js
// deleteMany({如果不写就是删除全部数据}) ,如果写了就删除符合条件的数据
Student.deleteMany({}).then((data) => {
  console.log(data); // { n: 12, ok: 1, deletedCount: 12 } 数据			库中有12条数据  成功删除了12条数据
})

// 删除年龄是 18 的所有数据
Student.deleteMany({
  age: 18
}).then((data) => {
  console.log(data); 
})
```





### 更新数据



#### 更新一条

```js

Student.updateOne({
    _id:"数据库中的id"
},{
    //传入要更新的对象
	name:"罗志祥",
    age:41,
    address:"台湾",
    hobbies:["多人运动创始人"]
})

let result = await User.findOneAndUpdate(
    {
      _id: id,
    },
    {
      status: false,
    }
  );

```





#### 更新多条



```js
// 空对象就是全部的对面 全部的email修改成default@qq.com
User.updateMany({}, {
  email: 'default@qq.com'
}).then(data => console.log(data));
```



#### 验证数据

```js
// 1.连接数据库
// 1.引入mongoose这个包
const mongoose = require('mongoose');
// 2.使用mongoose的包的connect方法来连接数据库
mongoose.connect('mongodb://localhost/db_teacher', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => { console.log("数据库连接成功") })
  .catch((err) => { console.log(err, '数据库连接失败') });


// 3.创建约束
let teacherSchema = new mongoose.Schema({
  // 用户名 6个字符-18个字符直接
  username: {
    // 确定这个字段的数据类型
    type: String,
    // 这个字段必须要传 true必传
    required: [true, '请传入用户名'],
    // 一般网站 用户名限制在6-18
    minlength: [6, '用户名的字符长度要在6个字符以上'],
    maxlength: [18, '用户名的字符长度要在18个字符以内'],
    // 去除字符串两边的空格
    trim: true
  },
  // 姓名(两个 --> 4个)
  name: {
    // 确定这个字段的数据类型
    type: String,
    // 这个字段必须要传
    // required: [true, '请传入姓名'],

    // 自定义校验
    // 如果是false 那么就不能通过校验
    // 如果是true 那么就通过校验
    validate: {
      validator: v => {
        return v && v.length >= 2 && v.length <= 4;
      },
      message: '您的名字不符合姓名规则'
    }

  },
  // 邮箱
  email: String,
  // 年龄
  age: {
    type: Number,
    default: 19,
    min: [18, '未成年人请在家长陪同下玩游戏'],
    max: [100, '请在家人陪同下玩游戏']
  },
  // 爱好 爱好是数组 但是具体的爱好是字符串
  hobbies: {
    type: String,
    // 枚举 列举
    enum: {
      values: ['抽烟', '喝酒', '烫头', '说相声', '耍剑'],
      message: '您的爱好不在正常范围内'
    }
  }
})


// 4.应用约束
let Teacher = new mongoose.model('Teacher', teacherSchema);

// 验证
// 用create方法把数据添加到数据库
Teacher.create({ username: '   YeungWanLum3   ', name: '商汤', hobbies: '说相声' }).then((data) => {
  console.log(data)
}).catch(err => {
  // console.log(err.errors.username.properties.message) 
  // console.log(err.errors);
  for (let key in err.errors) {
    console.log('错误:' + err.errors[key].properties.message);
  }
});


```

****