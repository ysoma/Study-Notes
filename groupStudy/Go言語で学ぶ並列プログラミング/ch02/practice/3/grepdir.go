// grepfile.goを修正して、ディレクトリパスを受け取るようにする。

// 例
// $ go run grepdir.go hello ../../commonfiles

package main

import (
	"fmt"
	"os"
	"strings"
	"time"
)

func grepFile(grep string, filePath string) {
	//fmt.Println("grep: ", str)
	//fmt.Println("filename: ", arg)

	// ファイルを開いて内容を読み込む
	content, err := os.ReadFile(filePath)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	// contentにstrが含まれているか確認する
	if strings.Contains(string(content), grep) {
		fmt.Println("あるよ！")
	}

}

func main() {
	str := os.Args[1] // grepする文字列
	dir := os.Args[2] // ディレクトリパス

	// dirの中身を取得
	files, err := os.ReadDir(dir)
	if err != nil {
		fmt.Println("Error:", err)
	}

	for i := range files {
		filepath := dir + "/" + files[i].Name()
		go grepFile(str, filepath)
	}

	time.Sleep(2 * time.Second)
}
