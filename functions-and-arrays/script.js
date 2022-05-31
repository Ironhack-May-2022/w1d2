// console.log('hello functions 🙃')

// Functions

// function declaration - is hoisted

function greet(name, char) {
	//
	// console.log('hello')
	const text = 'hello ' + name + char
	return text
}
// console.log(text) -> text is only accessible inside the greet function

const name = 'alex'

const greeting = greet(name, '##')

// console.log(greeting)

// function expression - is not hoisted

// const greet = function () {
// 	console.log('hello')
// }

function checkNumber(num) {
	if (num === 7) {
		return 'it is seven'
	} else {
		return 'it is not seven'
	}
}

const result = checkNumber(7)
// console.log(result)


// Arrays - data structures - ordered list of various values


const numbers = [2, 4, 6, 8]
// console.log(numbers)

// access values
// console.log(numbers[0])

const empty = []
// console.log(typeof empty) -> object
// empty[0] = 'a'
// empty[1] = 'b'
// empty[5] = 'x' // the 3 empty indices are added

// empty = [] -> this does not work bc of const - cannot be reassigned

// console.log(empty)
// push() - adds an element to the end of the array 

empty.push('x')
const res = empty.push('y') // push returns the length of the array

// 
// pop() - removes an element at the end of the array 
empty.pop() // returns the removed element

// console.log(empty)

// shift() and unshift() removes and adds elements at the beginning of the array

empty.unshift('4')
// console.log(empty)

// check if an array contains a specific element

const chars = ['a', 'b', 'c']

// indexOf() -> returns -1 if the element is not in the array
const idx = chars.indexOf('b')
console.log(idx)


// includes -> returns a boolean

console.log(chars.includes('b'))

// splice
const countries = ['usa', 'france', 'uruguay', 'england', 'poland']

countries.splice(1, 1, 'italy')

console.log(countries)

// write a function that gets an array of countries and returns an array
// with all the countries that start with 'u' removed

function filterCountries(countries) {
	const result = []
	// iterate over 'countries' 
	for (let country of countries) {
		// check if the country starts with 'u'
		if (country[0] === 'u') {
			// if yes add this country to the result array
			result.push(country)
		}
	}
	return result
}

// iterate over an array

// using a for loop
for (let i = 0; i < countries.length; i++) {
	// console.log(countries[i][1])
}


// for of loop
/* syntax for 'for of loop'
for (<element> of <name of the array) {

}
*/

for (let country of countries) {
	// console.log(country[1])
}

// forEach
countries.forEach(function (country) {
	// console.log(country)
})

function myForEach(arr, callback) {
	for (let el of arr) {
		callback(el)
	}
}
let array = []
myForEach([2, 4, 6], function (num) {
	array.push(num)
})
// console.log(array)
