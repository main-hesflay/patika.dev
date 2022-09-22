// 1 -) int x, float64 y type conversion sample

/* package main

import "fmt"

func main() {

	x := 75
	var y float64
	y = float64(x) // type(value)

	fmt.Println(y)

} */

// 2 -) multiple assing sample x, y = y, x

// package main

// func main() {

// 		x := 5
// 		y := 10

// 		fmt.Println("Before |", "X:", x, "Y:", y)

// 		x, y = y, x // x = y, y = x

// 		fmt.Println("After |", "X:", x, "Y:", y)

// }

// 3 -) non English variable names

// package main

// import "fmt"

// func main() {

// 	/*	yaş := 21

// 		fmt.Println(yaş) */

// 	姓名 := "Onat"
// 	年龄 := 21

// 	fmt.Println("Name:", 姓名, "Age:", 年龄)

// }

// 4 -) shadowing ? - gölgeleme

// package main

// import "fmt"

// func main() {

// 	x := 5

// 	if true {

// 		x = 10
// 		x++

// 		fmt.Println(x)
// 	}

// 	fmt.Println(x)
// }

// 5 -) 40 as a string

package main

import (
	"fmt"
	"strconv"
)

func main() {

	x := 40

	s := string(x)

	fmt.Printf("%v %T\n", x, x) // 40
	fmt.Printf("%v %T\n", s, s) // (

	y := strconv.Itoa(x) // strconv.Itoa = int to string

	fmt.Printf("%v %T\n", y, y) // "65"

}
