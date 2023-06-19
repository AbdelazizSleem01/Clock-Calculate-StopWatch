function allNum(num){
    
    if (isNaN(num)){
        return console.log(false)
    }

    else
 {
        console.log(true)
    }
    
}
allNum(50)


//2

const num1 = 5;
const num2 = 20;

let highestNumber;

if (num1 > num2) {
  highestNumber = num1;
} else {
  highestNumber = num2;
}

console.log(highestNumber); 


// 3

let i 
let array = [100]
console.log()
for (i=1;i<=array;i++)
{
  if(i%2==0){
    console.log(i)
  }
}
    
// 4

function date(){
    var x = new Date()
    console.log(x)


}
date()

// 5

function show () {
    var date = new Date ();
    
    var Year = date.getUTCFullYear() ;
    var Month = date.getMonth() ;
    var Day = date.getDate() ;


var currentDate = `${Year} / ${Month+1} / ${Day}`

console.log(currentDate)  ;
}
show ()

