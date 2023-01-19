function listArrayItems(arr){
    for (var i = 0; i < arr.length; i++){
        console.log(i, arr[i])
    }
}
var colors = ['red', 'orange', 'yello', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);

/* to start the count from one instead of zero */

function listArrayItems(arr){
    for (var i = 0; i < arr.length; i++){
        console.log(i + 1, arr[i])
    }
}

/* add another condition */

function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!")
        } else {
            console.log(i*100, arr[i])
        }
    }
}