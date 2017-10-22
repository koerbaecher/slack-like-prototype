package main

import (
	"fmt"
	"net/http"
	"time"

	"github.com/gorilla/websocket"
	"github.com/mitchellh/mapstructure"
)

type Channel struct {
	Id   string `json:"id"`
	Name string `json:"name"`
}

func main() {
	router := NewRouter()

	//router.Handle("channel add", addChannel)

	http.Handle("/", router)
	http.ListenAndServe(":8080", nil)
}


