---
tags : 
- Go语言
---

## 基本数据类型

```text
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

## 指针 pointers

& 操作符会生成一个指向其操作数的指针。

* 操作符表示指针指向的底层值。

```go
package main

import "fmt"

func main() {
	i, j := 42, 2701

	p := &i         // 指向 i
	fmt.Println(*p) // 通过指针读取 i 的值
	*p = 21         // 通过指针设置 i 的值
	fmt.Println(i)  // 查看 i 的值

	p = &j         // 指向 j
	*p = *p / 37   // 通过指针对 j 进行除法运算
	fmt.Println(j) // 查看 j 的值
}

```


## 结构体 struct


```go
package main

import "fmt"

type Vertex struct {
	X int
	Y int
}

func main() {
	fmt.Println(Vertex{1, 2})
	fmt.Println(Vertex{X: 1, Y: 2})
}

```

## 数组

```go
package main

import "fmt"

func main() {
	arr := [6]int{1, 2, 3, 4, 5, 6}
	fmt.Println(arr, "数组长度", len(arr))

	// 切片  arr[low:high] => 前闭后开区间
	var s []int = arr[0:2]
	fmt.Println("s", s)

	/**
	 * 切片并不存储任何数据，它只是描述了底层数组中的一段。
	 * 更改切片的元素会修改其底层数组中对应的元素。
	 * 与它共享底层数组的切片都会观测到这些修改。
	 */
	s[0] = 100
	fmt.Println(arr) // [100 2 3 4 5 6]

	// 像 js 一样创建一个没有指定长度的数组

	var jsArray = []struct {
		name string
		age  int
	}{
		{"张三", 18},
		{"李四", 18},
	}
	fmt.Println("jsArray", jsArray)

	var sliceJsArray = jsArray[:] // => 等价于  jsArray[0:2] jsArray[:2] jsArray[0:]   [默认值0:默认值是切片的长度]
	fmt.Println("sliceJsArray", sliceJsArray)

	// len and cap different
	var testArray = []int{1, 2, 3, 4}
	var sliceTestArray = testArray[0:2]
	fmt.Println("长度", len(sliceTestArray), "容量", cap(sliceTestArray), "值", sliceTestArray)
	// 扩容
	sliceTestArray = sliceTestArray[2:]
	fmt.Println("长度", len(sliceTestArray), "容量", cap(sliceTestArray), "值", sliceTestArray)

	// nil 切片

	var nilc []int
	fmt.Println("nilc", nilc, len(nilc), cap(nilc))

	/*
		切片的零值是 nil。
		nil 切片的长度和容量为 0 且没有底层数组。
	*/
	if nilc == nil {
		fmt.Println("nil")
	}

	// make 创建切片

	makeA := make([]int, 5, 10) // len 5 cap 10
	fmt.Println("makeA", makeA, len(makeA), cap(makeA))

	// 追加元素
	var appendArr []int
	appendArr = append(appendArr, 1, 2, 3, 4)
	fmt.Println("appendArr", appendArr)

	// range 遍历
	var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}

	for i2, i3 := range pow {
		fmt.Println("当前 index ", i2, "当前元素的副本", i3)
	}

}

```

## GO 语言规则

`import` 声明必须跟在文件的 `package` 声明之后。
= 是赋值， := 是声明变量并赋值



## 参考


[Go 指南](https://tour.go-zh.org/list)