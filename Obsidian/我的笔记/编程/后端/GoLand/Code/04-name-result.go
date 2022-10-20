package main

import "fmt"

func split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	// 没有参数的 return 语句返回已命名的返回值(就是此例子中的 x, y)。也就是 直接 返回。
	return
}

func main() {
	fmt.Println(split(17))
}
