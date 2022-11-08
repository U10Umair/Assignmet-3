// chapter 15: Arrays

var cities =["karachi","lahore","islamabad","quetta","jehlum"]

console.log(cities[4])

// chapter 16:Adding and removing elements

var animals =["cat","dog","horse","elephant","lion"]

animals.push("tommy","dx","bs")

console.log(animals)

animals.pop()
console.log(animals)


// chapter 17: Removing, inserting,and extracting elements

var numbers =[2,4,6,8,10,12]

numbers.shift()
console.log(numbers)

numbers.unshift(1,3,5)

console.log(numbers)

numbers.splice(3,0,"two","three","five")
console.log(numbers)

var ch =['a','b','c','d','e','f']

ch.splice(1,4)
console.log(ch)

// chapter 18: for loops

var i;
var cleanCity =["karachi","lahore","islamabad","peshawar","quetta"]
var check = prompt("enter your city")
 

for(i=0;i<5;i++){
    if(check===cleanCity[2]){
        alert((check)+" "+"is the cleanest city in Pakistan.")
        
        

    }
    else{
        alert("your city is not the cleanist cit in country.")
    }
}


// chapter 20: for loops nested

var fn =["umair","zain","ghulam"];
var ln =["ahmed","rayes","mohiuddin"]
var names =[];

for(i=0;i<fn.length;i++){

    for(j=0;j<ln.length;j++){
        names.push(fn[i]+ln[j]);
        console.log(names); 
          
    }
}



