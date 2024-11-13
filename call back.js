function mydisplay(value){
    console.log(value);
}
function mycalculator(num1, num2, myCallback){
    let sum= num1+num2;
    myCallback(sum);
}
mycalculator(7,7, mydisplay)