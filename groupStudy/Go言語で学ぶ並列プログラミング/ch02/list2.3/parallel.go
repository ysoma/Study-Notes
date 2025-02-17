package main

import (
	"fmt"
	"time"
)

func doWork(id int) {
	fmt.Printf("Work %d started at %s \n", id, time.Now().Format("15:04:05"))

	time.Sleep(1 * time.Second) // １秒間スリープし、計算作業をシミュレートする

	fmt.Printf("Work %d finished at %s\n", id, time.Now().Format("15:04:05"))
}

func main() {
	for i := 0; i < 5; i++ {
		go doWork(i) // アタマに"go"をつけるだけ！？
	}

	time.Sleep(2 * time.Second) // 長めに待つ、すべての作業の終了を待つ
	// mainが終わるとプロセスが終了するので、ここで待つ必要がある
}

// 感想：約1秒で終わるマ！？
