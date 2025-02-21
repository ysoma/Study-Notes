// catfile.goを拡張して、文字列の一致を検索するようなプログラムを作成する。
// 検索する文字列はコマンドラインの最初の引数とする。
// ゴルーチンが一致を見つけたら、メッセージを出力する。

// 例
// $ go run grepfiles.go hello hoge fuga hoga

package main

import (
	"fmt"
	"os"
	"strings"
	"time"
)

func grepFile(str string, arg string) {
	//fmt.Println("grep: ", str)
	//fmt.Println("filename: ", arg)

	// ファイルを開いて内容を読み込む
	content, err := os.ReadFile(arg)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	// contentにstrが含まれているか確認する
	if strings.Contains(string(content), str) {
		fmt.Println("あるよ！")
	}

}

func main() {
	str := os.Args[1]   // grepする文字列
	args := os.Args[2:] // grepするファイルたち

	for i := range args {
		go grepFile(str, args[i])
	}

	time.Sleep(2 * time.Second)

}
