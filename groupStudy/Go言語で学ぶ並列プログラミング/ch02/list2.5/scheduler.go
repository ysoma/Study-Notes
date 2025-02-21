package main

import (
	"fmt"
	"runtime"
)

func sayHello() {
	fmt.Println("Hello")
}

func main() {
	go sayHello() // まれにHelloが出力されないこともある

	// ↓Goスケジューラを呼び出す。これにより、他のゴルーチンに処理を譲る
	runtime.Gosched()
	fmt.Println("Finished")
}
