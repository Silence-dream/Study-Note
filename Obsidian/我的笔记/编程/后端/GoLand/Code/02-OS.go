// Echo1 prints its command-line arguments.
package main

import (
	"fmt"
	"math"
	"os"
)

func main() {
	// 声明的变量类型是 string
	var s, sep string

	var a string
	fmt.Println(a)

	// 执行 go build 然后运行文件   xx.exe 带上一些字符=>  02-OS.exe amd => 输出 amd
	for i := 1; i < len(os.Args); i++ {
		s += sep + os.Args[i]
		sep = " "
	}
	fmt.Println(s)
	fmt.Println(math.Round(10.6))
	fmt.Println(math.Pi)

}
