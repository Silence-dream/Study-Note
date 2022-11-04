package main

import "fmt"


func test (x string,y string) string {
	return x + y
}


func swap(x, y string) (string, string) {
	return y, x
}

func main() {
	a, b := swap("hello", "world")
	fmt.Println(a, b)
}
