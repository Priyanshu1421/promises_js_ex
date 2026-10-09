const divide = (a, b) => {
    return new Promise((resolve, reject) => {
        if(b === 0){
            reject("Division by zero is not alloued");
        }
        else{
            resolve(a/b);
        }
    });
};

// Five random Numbers

// num-1
divide(10, 2)
.then(result => console.log("Dividing 10 by 2... \n Result:", result))
.catch(error => console.log("Dividing 10 by 2... \n Error:", error));

// num-2
divide(64, 4)
.then(result => console.log("Dividing 10 by 2... \n Result:", result))
.catch(error => console.log("Dividing 10 by 2... \n Error:", error));

// num-3
divide(10, 0)
.then(result => console.log("Dividing 10 by 2... \n Result:", result))
.catch(error => console.log("Dividing 10 by 2... \n Error:", error));

// num-4
divide(40, 4)
.then(result => console.log("Dividing 10 by 2... \n Result:", result))
.catch(error => console.log("Dividing 10 by 2... \n Error:", error));

// num-5
divide(-20, 0)
.then(result => console.log("Dividing 10 by 2... \n Result:", result))
.catch(error => console.log("Dividing 10 by 2... \n Error:", error));