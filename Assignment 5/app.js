// ------------------------ Chapter 1 : Alerts ------------------------ //

/*
//Q1.
alert('Hello Visitor')

//Q2
alert('Error! Please Enter A Valid Password.')

//Q3
alert('Welcome to JS Land... \nHappy Coding!')

//Q4
alert('Welcome to JS Land...')
alert('Happy Coding!')

//Q5
console.log('Yes I can generate alert using developer tools\' console, but I cannot write code for it')


// ------------------------ End of Chapter 1 ------------------------ //



// ------------------------ Chapter 2 : Variables for String ------------------------ //

//Q1
var username

//Q2
var myName = 'Sumeet Kumar'

//Q3
var message
message = 'Hello World'
alert(message)

//Q4
var name = prompt('Please enter your name:')
var age = prompt('Please enter your age:')
var course = prompt('Please enter your course name:')
alert(name)
alert(age+' years old')
alert(course)


//Q5
var pizza = 'PIZZA\nPIZZ\nPIZ\nPI\nP'
alert(pizza)

//Q6
var email = 'sumeet.kumar38@yahoo.com'
alert('My email address is ' +email)

//Q7
var book = 'A smarter way to learn JavaScript'
alert('I am trying to learn from the Book ' +book)

//Q8
document.write('Yah! I can write HTML content through JavaScript')

//Q9
var line = '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬'
alert(line)


// ------------------------ End of Chapter 2 ------------------------ //



// ------------------------ Chapter 3 : Variables for Numbers ------------------------ //

//Q1
var age = 24
alert('I am ' +age+ ' years old')

//Q2
var visits = 44
alert('You have visited this site ' +visits+ ' times.')

//Q3
var birthYear = 1996
document.write('My birth year is ' + birthYear)
document.write('<br />')
document.write('Data type of my declared variable is ' + typeof birthYear)
document.write('<br />')

//Q4
var visitorsName = 'Sumeet Kumar'
var productTitle = 'T-Shirt'
var quantity = 5
document.write('<strong>' +visitorsName+ '</strong> ordered <strong>' + quantity + ' ' + productTitle + '</strong>(s) on XYZ Clothing store')

*/
// ------------------------ End of Chapter 3 ------------------------ //


// ------------------------ Chapter 4 : Variables Names - Legal and Illegal ------------------------ //

//Q1
var one,two,three

//Q2

//Q2a. Legal Variables
var name
var age
var course
var course1
var _age

//Q2b. Illegal Variables
// var #name
// var 1name
// var my name
// var if
// var alert

//Q3
document.write('<h1>Rules for naming JS variables</h1>')
document.write('<br />')
document.write('<p>Variable names can only contain numbers, $, _. For example: $my_1stVariable.</p>')
document.write('<p>Variables must begin with a letter, $ or _. For example $name, _name or name</p>')
document.write('<p>Variable names are case sensitive</p>')
document.write('<p>Variable names should not be JS keywords</p>')