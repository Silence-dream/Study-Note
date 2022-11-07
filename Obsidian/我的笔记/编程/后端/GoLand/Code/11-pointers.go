package main

import "fmt"

func main() {
	var a = 19
	var b = 200

	var p = &a // 指向 i

	*p = 30

	fmt.Println(a)

	p = &b

	*p = *p / 2

	fmt.Println(b)

}
