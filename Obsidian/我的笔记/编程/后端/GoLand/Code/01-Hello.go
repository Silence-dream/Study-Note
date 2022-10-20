package main // 一个程序里面只能有一个 main 包

import "fmt" // format

func main() { // 程序入口
	fmt.Println("Hello, 世界")
	fn()
}

func fn() {
	fmt.Println("你好")
}
