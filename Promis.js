function myDisplayer(some) {

console.log(some);;
    
    }
    
    function sum(a, b) {
    
    var sum = a + b;
    
    myDisplayer(sum);
    
    }
    
    let myPromise = new Promise(function (myResolve, myReject) {
    
    // producing code may take some time
    
    let x = 0; // some code (try to change x to 5)
    
    if (x == 0) {
    
    myResolve("OK"); // when successfull
    
    } else {
    
    myReject("Error"); // when error
    
    }
    
    });
    
    // consuming code - must wait for fullfilled promise
    
    myPromise.then(
    
    function (value) { sum(5, 5); }, // code is successfull
    
    function (error) { sum(error); } // code is error
    
    );