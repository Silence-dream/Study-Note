package main

import "fmt"

func main() {
	for i := 0; i < 10; i++ {
		fmt.Println(i)
	}

	sum := 1
	for ; sum < 1000; sum++ {
		sum += sum
	}
	fmt.Println(sum)

	// while
	count := 1
	for count < 1000 {
		count += count
	}
	fmt.Println(count)

	// 无限循环
	for {
		fmt.Println(1)
		if sum == 1023 {
			fmt.Println("你好世界")
			break
		}
	}
}
