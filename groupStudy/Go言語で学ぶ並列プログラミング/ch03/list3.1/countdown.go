package main

import (
	"time"
)

func main() {
	count := 5
	go countdown(&count) // アドレスで渡す
	for count > 0 {
		time.Sleep(500 * time.Millisecond)
		println(count)
	}
}

func countdown(seconds *int) {
	for *seconds > 0 {
		time.Sleep(1 * time.Second)
		*seconds--
	}
}
