// テキストファイル名のリストを引数として受け取る。
// 各ファイル名に対して、そのファイルの内容をコンソールに出力する新たなゴルーチンを生成する。
// このプログラムは、全てのゴルーチンが終了するまで待機する必要がある。

// このプログラムの実行方法は次の通り。
// go run catfiles.go txtfile1 txtfile2 txtfile3

package main

import (
	"fmt"
	"os"
	"time"
)

func catFile(arg string) {
	//fmt.Println("filename: ", arg)

	// ファイルを開いて内容を読み込む
	content, err := os.ReadFile(arg)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	fmt.Println(string(content))
}

func main() {
	args := os.Args[1:] // 引数を受け取る、[0]はプログラム名なので除外

	for i := range args {
		go catFile(args[i])
	}

	time.Sleep(2 * time.Second)

}
