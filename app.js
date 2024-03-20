//chapters 21-25 
//STRING METHODS

//Q1
var firstName = prompt("Enter your first name")
var lastName = prompt("Enter your last name")
var fullName = firstName + ' ' + lastName
alert(`Hi ${fullName}!`)


//Q2
var user_favorite_phone = prompt("Enter your favorite phone model")
document.write(`<br><h2>My favorite phone is: ${user_favorite_phone}<br>
Length of string: ${user_favorite_phone.length}`)

//Q3
var string = "Pakistani"
document.write(`<br><h2>String: ${string}<br>Index of 'n':${string.indexOf("n")}`)

//Q4
var string_2 = "Hello World"
document.write(`<br><h2>String: ${string_2}<br>Last index of 'l': ${string_2.indexOf("ld")}`)

//Q5
document.write(`<br><h2>String: ${string}<br>Character at index 3:  ${string[3]}`)

//Q6
fullName = firstName.concat(" "+lastName)
alert(`Hi ${fullName}!`)

//Q7
var city_1 = "Hyderabad"
var city_2 = city_1.replace("Hyder","Islam")
document.write(`<br><h2>City: ${city_1} <br> After replacement: ${city_2} </h2>`)    

//Q8
var message = "Ali and Sami are best friends. They play cricket and football together."
var modified_message = message.replaceAll("and","&")
document.write(`<h2>${modified_message}</h2>`)

//Q9
var string_value = "472"
var to_number_value = Number(string_value)

document.write(`<h2>
Value: ${string_value}<br>
Type: ${typeof string_value}<br>
Value: ${to_number_value}<br>
Type: ${typeof to_number_value}
</h2>`)

//Q10
var user_input = prompt("Enter any word or letter to convert it into upper case")
var uppercased_user_input = user_input.toUpperCase()

document.write(`<h2>
User input: ${user_input}<br>
Uppper Case: ${uppercased_user_input}
</h2>`)

//Q11
var user_input_2 = prompt("Enter any word to convert its first letter into upper case")

if(user_input_2 == ""){
   console.log("")
}else{
    var first_letter = user_input_2[0].toUpperCase()
}
    

var remaining_letters = user_input_2.slice(1)
var title_case = first_letter + remaining_letters 

document.write(`<h2>
User input: ${user_input_2}<br>
Title Case: ${title_case} 
</h2>`)

//Q12
var num = 35.36
var tostring_num = String(num)
var spliced_num = tostring_num.replace(".","")

document.write(`<h2>
Number: ${num}<br>
Result: ${spliced_num}
</h2>`)

//Q13
var username = prompt("Enter username")
var flag = false

for (let i = 0; i < username.length; i++) {
    if (username[i] == "!" || username[i] == ","){
        flag = true
    }
    else if(username[i] == "." || username[i] == "@"){
        flag = true
    }    
}

if (flag == true){
    alert('Error: Do not put special characters example(! , . @) in username')
}


//Q14
var A = ["cake","apple pie","cookie","chips","patties"]
var searchitems = prompt("Welcome to ABC Bakery.What do you want to order \n sir/ma'am?")
var flag_2 = false

if (searchitems != ""){
    var lowercase_searchitems = searchitems.toLowerCase()
}

for (let i = 0; i < A.length; i++) {
   if(lowercase_searchitems == A[i]){
     flag = true
   }
}

if(flag == true){
    alert(`${lowercase_searchitems} is available at index ${A.indexOf(lowercase_searchitems)} in our bakery`)
}
else{
    alert(`We are sorry ${lowercase_searchitems} is not available in our bakery`)
}

//Q15
var user_password = prompt("Enter Password")

document.write(`<h2>Entered Password: ${user_password}</h2>`)

if (/^[A-Za-z0-9]*$/.test(user_password) == false){
    alert("Password should only contain numbers and alphabets and does not contain any space")
    document.write("<h2>Password should only contain numbers and alphabets and does not contain any space</h2>")
}else if (!isNaN(user_password.charAt(0)) == true){
      alert("Password should not start with number")
      document.write("<h2>Password should not start with number</h2>")
      
}else if (user_password.length <= 5){
    alert("Password must be at least 6 characters long")
    document.write("<h2>Password must be at least 6 characters long</h2>")
}

//Q16
var university = "University of Karachi"
console.log(university.split(""))

//Q17
var user_input_3 = "Pakistan"

document.write(`<h2>
User input: ${user_input_3}<br>
Last character of input: ${user_input_3.charAt(user_input_3.length - 1)}
`)

//Q18
var string_3 = "The quick brown fox jumps over the lazy dog"

document.write(`<h2>
Text: ${string_3}<br>
There are ${string_3.match(/the/g).length} occurrence(s) of word 'the'
</h2>`)

document.write(`<br><h2><a href="Questions PDF 21-25.html" target="_blank">Questions PDF 21-25.html</a></h2>`)
