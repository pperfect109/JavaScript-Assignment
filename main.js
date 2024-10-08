function displayArray(arr) {
    let result = "";
    arr.forEach(value => {
        result += value + "<br>";
    });
    document.getElementById("output").innerHTML = result;
}

let myArray = [1, 2, 3, 4, 5];
displayArray(myArray); 

