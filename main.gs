function bankRound(value , places) {
  var toNumber=parseFloat(value)*Math.pow(10,places);
  toNumber+=0.5;
  
  if(Math.floor(toNumber)==toNumber && toNumber%2!=0){
   toNumber=Math.floor(toNumber);
    toNumber=toNumber-1;
  }else{
  toNumber=Math.floor(toNumber);  
  }
  
  return toNumber/Math.pow(10,places);
}

function SciNotation(value ,digit){
  var toNumber=parseFloat(value);
  var getDigit=Math.floor( Math.log(toNumber)/Math.log(10));
  toNumber/=Math.pow(10,getDigit+1);
  toNumber=bankRound(toNumber , digit)*10;
  toNumber.toFixed(digit+2);
  return toNumber+"E"+ getDigit;
}


function SciNotationLaTex(value ,digit){
  var toNumber=parseFloat(value);
  if(toNumber==0){
    return 0;
  }else{
  var getDigit=Math.floor( Math.log(Math.abs(toNumber))/Math.log(10));
  toNumber/=Math.pow(10,getDigit+1);
  toNumber=bankRound(toNumber , digit)*10;
  return toNumber.toFixed(digit-1)+((getDigit==0)?"":("\\times 10^{"+ getDigit+"}"));
  }
}