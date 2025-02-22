package main

import (
	"fmt"
	"io"
	"net/http"
	"strings"
)

const allLetters = "abcdefghijklmnopqrstuvwxyz"

func countLetters(url string, frequency []int) {
	resp, err := http.Get(url) // ページの取得
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close() // 関数終了時にクローズ
	if resp.StatusCode != 200 {
		panic("Can't access the page")
	}
	body, _ := io.ReadAll(resp.Body)
	for _, b := range body {
		c := strings.ToLower(string(b))
		cIndex := strings.Index(allLetters, c)
		if cIndex >= 0 {
			frequency[cIndex]++
		}
	}
	fmt.Println("Completed:", url)
}

func main() {
	var frequency = make([]int, 26) // 26文字分のスライスを作成
	for i := 1000; i <= 1030; i++ {
		url := fmt.Sprintf("https://rfc-editor.org/rfc/rfc%d.txt", i)
		countLetters(url, frequency)
	}
	for i, c := range allLetters {
		fmt.Printf("%c-%d ", c, frequency[i])
	}
}
