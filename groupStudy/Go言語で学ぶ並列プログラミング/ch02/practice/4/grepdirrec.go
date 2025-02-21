// grepfile.goを修正して、ディレクトリ内を再帰的にgrepするプログラムを作成する。

// 例
// $ go run grepdirrec.go hello ../../commonfiles

package main

import (
	"fmt"
	"os"
	"strings"
	"time"
)

func grepFile(grep string, filePath string) {
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

func greprep(grep string, filepath string) {
	// dirの中身を取得
	files, err := os.ReadDir(filepath)
	if err != nil {
		fmt.Println("Error:", err)
	}
	//fmt.Println(grep)

	for i := range files {
		filepath := filepath + "/" + files[i].Name()
		//fmt.Println(filepath)

		if files[i].IsDir() {
			go greprep(grep, filepath)
		} else {
			go grepFile(grep, filepath)
		}
	}
}

func main() {
	str := os.Args[1] // grepする文字列
	dir := os.Args[2] // ディレクトリパス

	greprep(str, dir)

	time.Sleep(2 * time.Second)
}
