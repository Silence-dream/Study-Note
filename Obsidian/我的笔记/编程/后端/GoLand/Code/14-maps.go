package main

import "fmt"

type Vertex struct {
	Lat, Long float64
}

var m map[string]Vertex

func main() {
	m = make(map[string]Vertex)
	m["Hi"] = Vertex{
		40.68, -60.23,
	}
	fmt.Println(m["Hi"]) // {40.68 -60.23}
	fmt.Println(m)       // map[Hi:{40.68 -60.23}]

	// 简略写法
	var obj = map[string]Vertex{
		"v1": {40.2, -85},
		"v2": {40.2, -85},
	}
	fmt.Println(obj) // map[v1:{40.2 -85} v2:{40.2 -85}]

	// 修改
	obj["v1"] = Vertex{100, 200}
	fmt.Println(obj) // map[v1:{100 200} v2:{40.2 -85}]
	// 删除
	delete(obj, "v1")
	fmt.Println(obj) // map[v2:{40.2 -85}]

	// 双赋值检测某个键是否存在
	ele, flag := obj["v2"]
	fmt.Println(ele, flag) // ele = key 对应的 value;flag 表示 key 对应的 value 是否存在
}
