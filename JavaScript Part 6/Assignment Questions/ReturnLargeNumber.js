arr = [21, 32, 431, 221, 3221];
num = 33;

function getElements(arr, num){
    for(i = 0; i < arr.length; i++){
        if(arr[i] > num){
            console.log("The larger numbers are: ", arr[i]);
        }
    }
}

getElements(arr, num);