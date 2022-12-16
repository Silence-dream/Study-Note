package main

import (
	"fmt"
	"time"
)

func say(s string) {
	for i := 0; i < 5; i++ {
		time.Sleep(100 * time.Millisecond)
		fmt.Println(s)
	}
}

func main() {
	// Go 程（goroutine）是由 Go 运行时管理的轻量级线程。
	go say("world")
	say("hello")
}
