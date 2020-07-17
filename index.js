// Code your solutions in this file
var gifts = [ 'Lisa', 'Kaitlin', 'Jan' ]
var birthday = 'surprise'


function writeCards(){
  let returnArray = []
  for (let i = 0; i < gifts.length; i++) {
    returnArray.push(`Thank you, ${gifts[i]}, for the wonderful ${birthday} gift!`)
  }
 return returnArray
}
function countdown(){
let i = 10
while(i >= 0){
   i = i - 1
   console.log(i)
}
}

