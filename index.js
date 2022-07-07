var n = 106;

//a là đơn vị
var a = n % 10;
//b là chục
var b = (n / 10) % 10;
//c là hàng trăm
var c = n / 100;
//điều kiện số có hai chữ số
if (n < 100 || n > 999) {
    console.log("Nhập vào số có hai chữ số!! ");
}
else {
    //in ra hàng trăm
    switch (c) {
        case 1: console.log("Một trăm "); break;
        case 2: console.log("Hai trăm "); break;
        case 3: console.log("Ba trăm "); break;
        case 4: console.log("Bốn trăm "); break;
        case 5: console.log("Năm trăm "); break;
        case 6: console.log("Sáu trăm "); break;
        case 7: console.log("Bảy trăm "); break;
        case 8: console.log("Tám trăm "); break;
        case 9: console.log("Chín trăm "); break;
    }
    // in ra chử "lẻ" nếu hàng chục bằng không
    if (b % 10 == 0 && a != 0) {
        console.log("lẻ ");
    }
    //in ra hàng chục
    switch (b) {
        case 1: console.log("mười "); break;
        case 2: console.log("hai mươi "); break;
        case 3: console.log("ba mươi "); break;
        case 4: console.log("bốn mươi "); break;
        case 5: console.log("năm mươi "); break;
        case 6: console.log("sáu mươi "); break;
        case 7:console.log("bảy mươi "); break;
        case 8: console.log("tám mươi "); break;
        case 9: console.log("chín mươi "); break;
    }
    //in ra hàng đơn vị
    switch (a) {
        case 1: console.log("một "); break;
        case 2: console.log("hai "); break;
        case 3: console.log("ba "); break;
        case 4:console.log("bốn "); break;
        case 5: console.log("năm "); break;
        case 6: console.log("sáu "); break;
        case 7: console.log("bảy "); break;
        case 8: console.log("tám "); break;
        case 9: console.log("chín "); break;
    }
}







