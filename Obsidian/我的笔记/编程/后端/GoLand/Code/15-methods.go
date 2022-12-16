package main

import (
	"fmt"
	"math"
)

type Vertex struct {
	X, Y float64
}

func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func Hello() string {
	str := "s"
	return str
}

type TestI int

// Test 注意这个括号在函数名的前面
func (value TestI) Test() int {
	return int(value)
}

func main() {
	v := Vertex{3, 4}

	fmt.Println(v.Abs())

	fmt.Println(math.Abs(-10))

	var test TestI = 100
	fmt.Println(test.Test())
}
