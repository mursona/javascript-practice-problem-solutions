var num = [12, 87, 9, 6, -13, 35, 2, 6];
function onlyPositive(num) {
    for(var i = 0 ; i <= num.length ; i++){
        var number = num[i];
        if (number < 0) {
            break;
        }
        console.log(number);
    }
}
onlyPositive(num);