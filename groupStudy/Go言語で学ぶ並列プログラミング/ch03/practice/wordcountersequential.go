package main

import (
	"fmt"
	"io"
	"net/http"
	"regexp"
	"strings"
	"time"
)

func countLetters(url string, frequency map[string]int) {
	resp, err := http.Get(url)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()
	if resp.StatusCode != 200 {
		panic("Can't access the page")
	}

	body, _ := io.ReadAll(resp.Body)
	wordRegex := regexp.MustCompile(`[a-zA-Z]+`)
	for _, word := range wordRegex.FindAllString(string(body), -1) {
		wordLower := strings.ToLower(word)
		frequency[wordLower]++
	}
	fmt.Println("Done:", url)
}

func main() {
	var frequency = make(map[string]int)
	for i := 1000; i <= 1020; i++ {
		url := fmt.Sprintf("https://rfc-editor.org/rfc/rfc%d.txt", i)
		countLetters(url, frequency)
	}
	time.Sleep(10 * time.Second)
	for k, v := range frequency {
		fmt.Printf(k, "->", v)
	}
}
