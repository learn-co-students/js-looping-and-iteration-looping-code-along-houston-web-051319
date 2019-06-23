// Code your solutions in this file

function writeCards(arrayNames, eventName){
  let x = [];
  for(let i=0; i<arrayNames.length; i++){
    x.push(`Thank you, ${arrayNames[i]}, for the wonderful ${eventName} gift!`);
  }
  return x;
}

function countdown(countdown){
  while (countdown > 0){
    console.log(countdown);
    countdown-=1;
  }
  console.log(countdown);
}