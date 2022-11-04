---
tags : 
- Go语言
---

## 基本数据类型

```txt
bool

string

int  int8  int16  int32  int64
uint uint8 uint16 uint32 uint64 uintptr

byte // uint8 的别名

rune // int32 的别名
    // 表示一个 Unicode 码点

float32 float64

complex64 complex128

本例展示了几种类型的变量。 同导入语句一样，变量声明也可以“分组”成一个语法块。

`int`, `uint` 和 `uintptr` 在 32 位系统上通常为 32 位宽，在 64 位系统上则为 64 位宽。 当你需要一个整数值时应使用 `int` 类型，除非你有特殊的理由使用固定大小或无符号的整数类型。
```

## 声明变量

```go
var a int= 1;
b := 2
```

## 包

每个 Go 程序都是由包构成的。

程序从 main 包开始运行。


## 模板字符串


```go
var Tobe = false
fmt.Printf("type: %T %V", ToBe) // bool false
```


## 零值
没有明确初始值的变量声明会被赋予它们的 **零值**。

零值是：

-   数值类型为 `0`，
-   布尔类型为 `false`，
-   字符串为 `""`（空字符串）


## 类型转换

```go
var a int = 10  
var b float64 = float64(a)  
fmt.Println(b)
```

```go
package main

import "fmt"

func main() {
	var i int
	var f float64
	var b bool
	var s string
	fmt.Printf("%v %v %v %q\n", i, f, b, s)
}

```

## defer 

defer 语句会将函数推迟到外层函数返回之后执行。

推迟调用的函数其参数会立即求值，但直到外层函数返回前该函数都不会被调用。

```go
package main

import "fmt"

func main() {
	defer fmt.Println("world")

	fmt.Println("hello")
}

// hello world
```


推迟的函数调用会被压入一个栈中。当外层函数返回时，被推迟的函数会按照后进先出的顺序调用。

```go
package main

import "fmt"

func main() {
	fmt.Println("counting")

	for i := 0; i < 10; i++ {
		defer fmt.Println(i)
	}

	fmt.Println("done")
}

```

## GO 语言规则

`import` 声明必须跟在文件的 `package` 声明之后。
= 是赋值， := 是声明变量并赋值



## 参考


[Go 指南](https://tour.go-zh.org/list)