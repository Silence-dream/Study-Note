for (var i = 1; i <= 4; i++) {

    var str = "";

    for (var j = 1; j <= i; j++) {
        str += "*";
    }

    for (var j = 1; j <= i; j++) {
        str += " ";
    }

    for (var k = 4 - i; k >= 0; k--) {
        str += "=";
    }
    console.log(str);
}