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



// ------------------------ End of Chapter 4 ------------------------ //


// ------------------------ Chapter 5 : Math Expressions ------------------------ //

//Q1
var num1 = +prompt('Enter Num1')
var num2 = +prompt('Enter Num2')
var result = parseFloat(num1) + parseFloat(num2)
document.write('<p>Sum of ' + num1 + ' and ' + num2 + ' is ' + result + '</p>')

//Q2
// 2a. Subtraction
result = num2 - num1
document.write('<p>Subtraction of ' + num1 + ' and ' + num2 + ' is ' + result + '</p>')

// 2b. Multiplication
result = num1 * num2
document.write('<p>Multiplication of ' + num1 + ' and ' + num2 + ' is ' + result + '</p>')

// 2c. Division (Assuming Num2 != 0)
result = num1 / num2
document.write('<p>Division of ' + num1 + ' and ' + num2 + ' is ' + result + '</p>')

// 2d. Modulus
result = num1 % num2
document.write('<p>Modulus of ' + num1 + ' and ' + num2 + ' is ' + result + '</p>')

//Q3
// 3a. Declare a variable.
var num

// 3b. Show the value of variable
document.write('<p>Value after variable declaration is: ' + num + '</p>')

// 3c. Initialize variable.
num = 5

// 3d. Show Value
document.write('<p>Initial value: ' + num + '</p>')

// 3e. Increment the variable.
num++

// 3f. Show Incremented Value
document.write('<p>Value after increment is: ' + num + '</p>')

// 3g. Add 7
num += 7

// 3h. Show new Value
document.write('<p>Value after addition is: ' + num + '</p>')

// 3i. Decrement the variable.
num--

// 3j. Show Value
document.write('<p>Value after decrement is: ' + num + '</p>')

// 3k. Divide by 3 and show remainder.
num %= 3
document.write('<p>The remainder is: ' + num + '</p>')

// Q4
var ticketPrice = 600
var total = ticketPrice * 5
document.write('<p>The total cost to buy 5 tickets to a movie is ' +total+ ' PKR</p>')

// Q5
var tableNumber = 4
var i = 1
document.write('Table of ' + tableNumber + '</p>')
document.write('<p>'+tableNumber + 'x' + i++ + '=' + tableNumber*i + '</p>')
document.write('<p>'+tableNumber + 'x' + i++ + '=' + tableNumber*i + '</p>')
document.write('<p>'+tableNumber + 'x' + i++ + '=' + tableNumber*i + '</p>')
document.write('<p>'+tableNumber + 'x' + i++ + '=' + tableNumber*i + '</p>')
document.write('<p>'+tableNumber + 'x' + i++ + '=' + tableNumber*i + '</p>')
document.write('<p>'+tableNumber + 'x' + i++ + '=' + tableNumber*i + '</p>')
document.write('<p>'+tableNumber + 'x' + i++ + '=' + tableNumber*i + '</p>')
document.write('<p>'+tableNumber + 'x' + i++ + '=' + tableNumber*i + '</p>')
document.write('<p>'+tableNumber + 'x' + i++ + '=' + tableNumber*i + '</p>')
document.write('<p>'+tableNumber + 'x' + i++ + '=' + tableNumber*i + '</p>')

// Q6

// 6a. Store Celsius in Var
var celsius = 25

// 6b. Convert it to Fahrenheit
var fahrenheit = (celsius * 9 / 5) + 32

// 6c. Output 
document.write('<p>'+celsius + 'C is ' + fahrenheit + 'F' + '</p>') 

// 6d. Store Farenhiet in Var
fahrenheit = 77

// 6e. Convert it to Celsius
celsius = (fahrenheit - 32) * 5 / 9

// 6f. Output
document.write('<p>'+fahrenheit + 'F is ' + celsius + 'C' + '</p>')

// Q7

// 7a. Price of item 1
var item1 = 650

// 7b. Price of item 2
var item2 = 100

// 7c. Ordered quantity of item 1
var item1qty = 3 

// 7d. Ordered Quantity of item 2
var item2qty = 7

// 7e. Shipping charges
var shippingCharges = 100

var total = (item1 * item1qty) + (item2 * item2qty) + shippingCharges
document.write('<p>Price of Item 1 is ' +item1+'</p>')
document.write('<p>Quantity of Item 1 is '+item1qty+'</p>')
document.write('<p>Price of Item 2 is '+item2+'</p>')
document.write('<p>Quantity of Item 2 is '+item2qty+'</p>')
document.write('<p>Shipping Charges '+shippingCharges+'</p>')
document.write('<br/>')
document.write('<p>Total cost of your order is '+total+'</p>')

//Q8
var totalMarks = 1100
var obtainedMarks = 910
var percentage = (obtainedMarks / totalMarks) * 100

document.write('<h3>' + 'Marks Sheet' + '</h3>')
document.write('<p>Total Marks: ' + totalMarks + '</p>')
document.write('<p>Marks Obtained: ' + obtainedMarks + '</p>')
document.write('<p>Percentage: ' + percentage+'</p>')

//Q9
var pkr = (10 * 104.80) + (25 * 28)
document.write('<h3>' + 'Currency Conversion in PKR' + '</h3>')
document.write('Total Currency in PKR: ' + pkr)

//Q10
var num = 10
num = (((num + 5) * 10) / 2)
document.write('<h3>' + 'Arithmetic Operation in single statement' + '</h3>')
document.write('Output: ' + num)

//Q11

// 11a. Store Current Year
var currentYear = 2020

// 11b. Store BirthYear
var birthYear = 1996

// 11c. Calc Birthage
var age = currentYear - birthYear

// 11d. Output
document.write('<h3>' + 'Age Calculator' + '</h3>') 
document.write('<p>Current Year: ' + currentYear + '</p>')
document.write('<p>Birth Year: ' + birthYear + '</p>')
document.write('<p>Your age is: ' + age+'</p>')

//Q12
document.write('<h3>' + 'The Geometrizer' + '</h3>')

// 12a. Store radius.
var radius = 20

// 12b. Calculate circumference.
var  circumference = 2 * 3.142 * radius  

// 12c. Calculate Area
var area = 3.142 * radius * radius

// 12d. Output
document.write('<p>Radius of a Circle: ' + radius + '</p>')
document.write('<p>The circumference is: ' + circumference + '</p>')
document.write('<p>The area is: ' + area+ '</p>')

//Q13
document.write('<h3>' + 'The Lifetime Supply Calculator' + '</h3>')

// 13a. Store snack in var
var snack = 'chocalate chip'

// 13b. Store age in var
var age = 24

// 13c. Store max age into var
var maxAge = 101

// 13d. Max per day
var amount = 3

// 13e. Calc
var lifetime = (60 - 23) * (365 * 3)

// 13e. Output
document.write('<p>Favorite Snack: ' + snack + '</p>')
document.write('<p>Current Age: ' + age + '</p>')
document.write('<p>Estimated Maximum Age: ' + maxAge + '</p>')
document.write('<p>Amount of snacks per day: ' + amount + '</p>')
document.write('<p>You will need ' + lifetime + ' to last you until the ripe old age of ' + maxAge + '</p>')

// ------------------------ End of Chapter 5 ------------------------ //


// ------------------------ Chapter 6 - 9 : Math Expressions ------------------------ //

//Q1
var a = +prompt('Input a number: ')
document.write('<h3>' + 'Pre and Post Increment/ Decrement Operation' + '</h3>')
document.write('<p>Result</p>')
document.write('<p>The value of a is: ' + a + '</p>')
document.write('<p>...............................................' + '</p>')
document.write('<br/>')

// Q1a. Pre-Increment
document.write('<p>The value of ++a is: ' + ++a + '</p>')
document.write('<p>Now the value of a is: ' + a + '</p>')
document.write('<br/>')

// Q1b. Post-Increment
document.write('<p>The value of a++ is: ' + a++ + '</p>')
document.write('<p>Now the value of a is: ' + a + '</p>' )
document.write('<br/>')

// Q1c. Pre-Decrement
document.write('<p>The value of --a is: ' + --a + '</p>')
document.write('<p>Now the value of a is: ' + a + '</p>')
document.write('<br/>')

// Q1d. Post-Decrement
document.write('<p>The value of a-- is: ' + a-- + '<br/>')
document.write('<p>Now the value of a is: ' + a + '</p>' )

//Q2
var a = 2, b = 1
document.write('a is :' + a +'<br>')
document.write('b is :' + b +'<br>')
var result = --a - --b + ++b + b--
document.write('result is :' + result)
document.write('<br />')
document.write('<h2>Explaination</h2>')
document.write('output at stage "--a" = 1 <br />')
document.write('output at stage "--a - --b" =  1 - 0  = 1<br />')
document.write('output at stage " --a - --b + ++b" =  (1 - 0) + 2 = 3<br />')
document.write('output at stage "--a - --b + ++b + b--" =  ((1 - 0) + 2) + 0 = 3<br />')

//Q3
var name = prompt('Enter your name: ')
document.write('Hello ' + name + '<br/>')

//Q4
//Do Nothing

//Q5
var num = +prompt('Enter Number for Table Multiplication:', 5)
if(num === null || num === 0) num = 5
var count = 1
document.write(num + 'x' + count++ + '=' + (num * count) + '<br/>')
document.write(num + 'x' + count++ + '=' + (num * count) + '<br/>')
document.write(num + 'x' + count++ + '=' + (num * count) + '<br/>')
document.write(num + 'x' + count++ + '=' + (num * count) + '<br/>')
document.write(num + 'x' + count++ + '=' + (num * count) + '<br/>')
document.write(num + 'x' + count++ + '=' + (num * count) + '<br/>')
document.write(num + 'x' + count++ + '=' + (num * count) + '<br/>')
document.write(num + 'x' + count++ + '=' + (num * count) + '<br/>')
document.write(num + 'x' + count++ + '=' + (num * count) + '<br/>')
document.write(num + 'x' + count++ + '=' + (num * count) + '<br/>')


//Q6
document.write('<h3>' + 'Marksheet' + '</h3>')

// Q6a. Prompt 3 Subjects
subject1 = prompt('Enter Name of Subject 1:')
subject2 = prompt('Enter Name of Subject 2:')
subject3 = prompt('Enter Name of Subject 3:')

// Q6b. Store Total marks of subjects
var total1, total2, total3
total1 = total2 = total3 = 100

// Q6c. Store Sub1 Obtained
obtained1 = prompt('Enter Marks of ' + subject1)

// Q6d. Store Sub2,3 Obtained
obtained2 = prompt('Enter Marks of ' + subject2)
obtained3 = prompt('Enter Marks of ' + subject3)

// Q6e. Calculate
var obtainedMarks = (parseFloat(obtained1) + parseFloat(obtained2) + parseFloat(obtained3))
var totalMarks = total1 + total2 + total3
var percentage = ((obtainedMarks / totalMarks) * 100).toFixed(2)
var percentage1 = ((obtained1 / total1) * 100).toFixed(2)
var percentage2 = ((obtained2 / total2) * 100).toFixed(2)
var percentage3 = ((obtained3 / total3) * 100).toFixed(2)

document.write('<table width="100%" border="1px">')

document.write('<tr>')
    document.write('<th>' + 'Subject'  + '</th>')
    document.write('<th>' + 'Total Marks'  + '</th>')
    document.write('<th>' + 'Obtained Marks'  + '</th>')
    document.write('<th>' + 'Percentage'  + '</th>')
document.write('</tr>')

document.write('<tr>')
    document.write('<td>' + subject1  + '</td>')
    document.write('<td>' + total1  + '</td>')
    document.write('<td>' + obtained1  + '</td>')
    document.write('<td>' + percentage1 + '%' + '</td>')
document.write('</tr>')

document.write('<tr>')
    document.write('<td>' + subject2  + '</td>')
    document.write('<td>' + total2  + '</td>')
    document.write('<td>' + obtained2  + '</td>')
    document.write('<td>' + percentage2 + '%' + '</td>')
document.write('</tr>')

document.write('<tr>')
    document.write('<td>' + subject3  + '</td>')
    document.write('<td>' + total3  + '</td>')
    document.write('<td>' + obtained3  + '</td>')
    document.write('<td>' + percentage3 + '%' + '</td>')
document.write('</tr>')

document.write('<tr>')
    document.write('<td></td>')
    document.write('<td>' + totalMarks  + '</td>')
    document.write('<td>' + obtainedMarks  + '</td>')
    document.write('<td>' + percentage + '%' + '</td>')
document.write('</tr>')

document.write('</table>')

*/

// ------------------------ End of Chapter 6-9 ------------------------ //


// ------------------------ Chapter 9 - 11 : User Input and Conditional Statement ------------------------ //

//Q1
var city = prompt('Please enter City Name:')
if (city.toLowerCase() === 'karachi'){
    alert('Welcome to city of lights')
}

//Q2
var gender = prompt('Enter Your Gender')
if (gender.toLowerCase() === 'male'){
    alert('Good Morning Sir')
}
else{
    alert('Good Morning Maam')
}

//Q3
var color = prompt('Enter the color of traffic road signal: \n Red, Yellow or Green')
if (color.toLowerCase() === 'red'){
    alert('Must Stop')
} 
if (color.toLowerCase() === 'yellow'){
    alert('Ready to Move')
} 
if (color.toLowerCase() === 'green'){
    alert('Move Now')
} 

//Q4
var fuel = prompt('Enter your remaining fuel (in liters):')
if (fuel < 0.25){
    alert('Please refill your fuel in car')
}


//Q5

// Q5a.
var a = 4 
if (++a === 5){ 
    alert('given condition for variable a is true')
    }

// Q5b.
var b = 82
if (b++ === 83){
    alert('given condition for variable b is true')
    }

// Q5c.
var c = 12
if (c++ === 13){
    alert('condition 1 is true')
    }

if (c === 13){ 
    alert('condition 2 is true') 
    }

if (++c < 14){ 
    alert('condition 3 is true') 
    } 

if(c === 14){ 
    alert('condition 4 is true') 
    }

// Q5d.
var materialCost = 20000 
var laborCost = 2000 
var totalCost = materialCost + laborCost 
if (totalCost === laborCost + materialCost){ 
    alert('The cost equals') 
    }

// Q5e.
if (true){ 
    alert('True') 
    } 

if (false){ 
    alert('False') 
    }

// Q5f.
if('car' < 'cat'){ 
    alert('car is smaller than cat') 
    }

// Q6
var obtainedMarks = parseFloat(prompt('Enter Obtained Marks in three subjects:'))
var totalMarks = parseInt(prompt('Enter total Marks:'))
var percentage = (obtainedMarks / totalMarks) * 100

document.write('<h3>' + 'Mark Sheet' + '<h3>')
document.write('Total Marks: ' + totalMarks + '</br>')
document.write('Marks Obtained: ' + obtainedMarks + '</br>')
document.write('Percentage: ' + percentage + '</br>')

if (percentage >= 80 && percentage < 100){
    document.write('Grade: A-one' + '<br>')
    document.write('Remarks: Excellent' + '<br>')
}

else if (percentage >= 70 && percentage < 80){
    document.write('Grade: A' + '<br>')
    document.write('Remarks: Good' + '<br>')
}

else if (percentage >= 60 && percentage < 70){
    document.write('Grade: B' + '<br>')
    document.write('Remarks: You need to improve' + '<br>')
}

else if (percentage < 60){
    document.write('Grade: Fail' + '<br>')
    document.write('Remarks: Sorry' + '<br>')
}
else{
    document.write('Invalid Input' + '<br>')
}

// Q7
var secret = 2
var guess = parseInt(prompt('Guess the Number: \nBetween 1-10'))
if (secret === guess){
    alert('Bingo! Correct Answer: ')
}
else if (secret === guess+1){
    alert('Close enough to the correct answer')
}
else{
    alert('Sorry Wrong Guess')
}

//Q8
var num = parseInt(prompt('Enter number to check number is divisible by 3 or not: '))
if (num % 3 === 0){
    alert(num + ' is divisble by 3')
}
else{
    alert(num + ' is not divisible by 3')
}

//Q9
var num = parseInt(prompt('Enter number to check number is even or odd'))
if (num % 2 === 0){
    alert(num + ' is even number')
}
else{
    alert(num + ' is odd number')
}

//Q10
var temperature = +prompt('Enter your city temperature: ')
if (temperature > 40){
    alert('It is too hot outside')
}
else if (temperature > 30){
    alert('The weather today is Normal')
}
else if(temperature > 20){
    alert('Today\'s Weather is cool')
}
else{
    alert('OMG! Today\'s weather is so Cool')
}

// Q11
var first = parseInt(prompt('Enter First Number: '))
var second = parseInt(prompt('Enter Second Number: '))
var operator = prompt('Choose your operator: \n( + , - , * , / , % )')
document.write('<h3>' + 'Calculator' + '</h3>')
document.write('First Number: ' + first + '</br>')
document.write('Second Number: ' + second + '</br>')
if (operator === '+'){
    document.write('Result:'+first+'+'+second+'='+(first + second))
}
else if (operator === '-'){
    document.write('Result:'+second+'-'+first+'='+(second - first))
}
else if (operator === '*'){
    document.write('Result:'+first+'x'+second+'='+(first * second))
}
else if (operator === '/'){
    document.write('Result:'+first+'/'+second+'='+(first / second))
}
else if (operator === '%'){
    document.write('Result:'+first+'%'+second+'remainderis:'+(first % second))
}
else{
    document.write('Wrong Input')
}

// ------------------------ End of Chapter 9 - 11 ------------------------ //
