package main

import "fmt"

var packVar = "Package Scope"
var funcVar = "Func(Package) Scope"

var name = "Onat"

func main() {

	if true {
		var blockVar = "Block Scope"
		fmt.Println(blockVar)
	}

	name, surName := "Hesflay", "Dibo" // redeclaration

	var funcVar = "Func Scope"
	fmt.Println(funcVar)

	fmt.Println(packVar)

	fmt.Println(name, surName)

	myFunc()

}

func myFunc() {

	fmt.Println(funcVar)
}
