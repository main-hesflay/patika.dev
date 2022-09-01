// 1-) studentName -> John Doe, grade --> 77, isPassed --> true değişkenlerini 3 farklı yöntem
// ile oluşturup çıktısını yazdırınız

package main

import "fmt"

func main() {

	/* var studentName string = "John Doe"
	var grade int = 77
	var isPassed bool = true */

	/* var studentName = "John Doe"
	var grade = 77
	var isPassed = true */

	/* studentName := "John Doe"
	grade := 77
	isPassed := true */

	// 2-) yukarıda belirtilen değişkenleri tek satır içerisinde tanımlayınız.
	// var studentName, grade, isPassed = "John Doe", 77, true
	studentName, grade, isPassed := "John Doe", 77, true

	fmt.Println(studentName)
	fmt.Println(grade)
	fmt.Println(isPassed)

	// 3-) "Declaration", "Assign", "Initialization Value" kavramlarını açıklayınız (Terminoloji)
	var yourName string = "Onat" // Declaration
	fmt.Println(yourName)

	// 4-) "Statically" vs "Dynmaically Typed" ifadelerini GO ve Python üzerinden gösteriniz.

	// 5-) ":=" vs "=" arada ki farkı gösteriniz, double declaration
	var companyName string = "reDEV"
	companyName = "E-Spor"

	fmt.Println(companyName)

	yourEmail := "testinfo@gmail.com" // declare and assign
	yourEmail = "nice@gmail.com"
	println(yourEmail)

}

// Initialization Value find
