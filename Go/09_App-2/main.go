// 1 - int x, float64 y type conversion sample

/* package main

import "fmt"

func main() {

	x := 75
	var y float64
	y = float64(x) // type(value)

	fmt.Println(y)

} */

// 2 - multiple assing sample x, y = y, x

package main

import "fmt"

func main() {

	x := 5
	y := 10

	fmt.Println("Before |", "X:", x, "Y:", y)

	x, y = y, x

	fmt.Println("After |", "X:", x, "Y:", y)

} // 7:20

// 3 - non English variable names

// 4 - shadowing

// 5 - 40 as a string
