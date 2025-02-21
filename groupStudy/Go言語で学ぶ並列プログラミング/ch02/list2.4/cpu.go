package main

import (
	"fmt"
	"runtime"
)

func main() {
	fmt.Println("CUPの数:", runtime.NumCPU())
	fmt.Println("GOMAXPROCS:", runtime.GOMAXPROCS(0))
	fmt.Println("GOMAXPROCS:", runtime.GOMAXPROCS(1))
}
