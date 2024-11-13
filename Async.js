async function add(a, b) {

    let response = await a + b;
    
    display(response);
    
    }
    
    function display(some) {
    
    console.log(some);
    
    }
    
    add(5, 20);