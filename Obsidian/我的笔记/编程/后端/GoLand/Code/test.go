package main

import "fmt"

type Obj struct {
	name string
	age  int
}

var (
	v1 = Obj{
		name: "张安",
		age:  18,
	}

	v2 = Obj{
		name: "李四",
		age:  20,
	}

	v3 = Obj{}

	p = &Obj{
		name: "王五",
		age:  20,
	}
)

func main() {
	p.age = 10
	fmt.Println(v1, v2, v3, p)
}
