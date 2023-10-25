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

	for i := 0; i < len(pow); i++ {
		fmt.Printf("%d\t", pow[i])
	}

}
