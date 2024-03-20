//Chapter 21 (Changing Case)

//Q1
var userInput = "COokIE"
var allLower = userInput.toLowerCase();
document.write(`<h2>${allLower}</h2>`)

//Q2
var x = "StRiNg"
x = x.toLowerCase()
document.write(`<h2>${x}</h2>`)

//Q3
var y = "StRiNg"
y = y.toUpperCase()
document.write(`<h2>${y}</h2>`)

//Q4
var z = "PEaNuT"
var a = z.toLowerCase()
document.write(`<h2>${a}</h2>`)

//Q5
var array =  ["cake","cookie","PaStrY"]
var result = array[2].toLowerCase() 
document.write(`<h2>${result}</h2>`)

//Q6
var str = "this is a string"
alert(str.toUpperCase())

//Q7
var cityName = "kaRacHi";
var capitalised_cityName = cityName[0].toUpperCase() +  cityName.slice(1).toLowerCase()
document.write(`<h2>${capitalised_cityName}</h2>`)


//Chapter 22 - 25 (Strings)

//Q1
var sameWords = "captain"
document.write(`<h2>${sameWords.slice(1,3)}</h2>`)

//Q2
var string_2 = "Biscuit"
var characters_in_string_2 = string_2.length
document.write(`<h2>${characters_in_string_2}</h2>`)

//Q3
var animal = "elephant"
var seg = animal.slice(2,6)
document.write(`<h2>${seg}</h2>`)

//Q4
var string_3 = "Cookie"
var characters_in_string_3 = string_3.length
document.write(`<h2>${characters_in_string_3}</h2>`)

//Q5
var string_4 = string_3.length
var sliced_string_3 = string_3.slice(1,-3)
document.write(`<h2>${sliced_string_3}</h2>`)

//Q6
var text = "To be or not to be."; 
var indx = text.indexOf("be");
document.write(`<h2>${indx}</h2>`)

//Q7
var text = "To be or not to be."; 
var indx = text.lastIndexOf("be");
document.write(`<h2>${indx}</h2>`)

//Q8
var string_5 = "i go there and he goes there"
var indx = string_5.lastIndexOf("go")
document.write(`<h2>${indx}</h2>`)

//Q9
var string_6 = "string"
var indexNum = 4
if (indexNum <= string_6.length ) {
    console.log("yes")
}else{
    console.log("no")
}

//Q10
var string_7 = "abcde"
document.write(`<h2>${string_7.charAt(2)}</h2>`)

//Q11
var string_8 = "abcdefghijk"
var cha = string_8.charAt(10)
document.write(`<h2>${cha}</h2>`)

//Q12
var str = string_8
var x =  string_8.slice(string_8.length-1)
document.write(`<h2>${x}</h2>`)

//Q13
var string_9 = prompt("Enter anything to find the fifth character of the input")
var cha = string_9.charAt(5)
alert(cha)



