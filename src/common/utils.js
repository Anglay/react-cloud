/**
 * 获取当前日期，时分秒
 */
export function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
        " " + date.getHours() + seperator2 + date.getMinutes() +
        seperator2 + date.getSeconds();
    return currentdate;
}

/**
 * 随机生成手机号码
 */
export function getMobileCard() {
    var prefixArray = ["130", "131", "132", "133", "135", "137", "138", "170", "187", "189"];
    var i = parseInt(10 * Math.random(),10);
    var prefix = prefixArray[i];
    for (var j = 0; j < 8; j++) {
        prefix = prefix + Math.floor(Math.random() * 10);
    }
    return prefix;
}

/**
 * 生成随机身份证号
 */
export function getIdCard() {
    var coefficientArray = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"]; // 加权因子
    var lastNumberArray = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"]; // 校验码
    var address = "420101"; // 住址
    var birthday = "19810101"; // 生日
    var s = Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString();
    var array = (address + birthday + s).split("");
    var total = 0;
    for (let i in array) {
        total = total + parseInt(array[i],10) * parseInt(coefficientArray[i],10);
    }
    var lastNumber = lastNumberArray[parseInt(total % 11,10)];
    var id_no_String = address + birthday + s + lastNumber;
    return id_no_String;
}

/**
 * 生成随机银行卡号
 */
export function getBankAccount() {
    var bank_no = document.getElementById("bank_no_select").value;
    var prefix = "";
    switch (bank_no) {
        case "0102":
            prefix = "622202";
            break;
        case "0103":
            prefix = "622848";
            break;
        case "0105":
            prefix = "622700";
            break;
        case "0301":
            prefix = "622262";
            break;
        case "104":
            prefix = "621661";
            break;
        case "0303":
            prefix = "622666";
            break;
        case "305":
            prefix = "622622";
            break;
        case "0306":
            prefix = "622556";
            break;
        case "0308":
            prefix = "622588";
            break;
        case "0410":
            prefix = "622155";
            break;
        case "302":
            prefix = "622689";
            break;
        case "304":
            prefix = "622630";
            break;
        case "309":
            prefix = "622908";
            break;
        case "310":
            prefix = "621717";
            break;
        case "315":
            prefix = "622323";
            break;
        case "316":
            prefix = "622309";
            break;
        default:
    }
    for (var j = 0; j < 13; j++) {
        prefix = prefix + Math.floor(Math.random() * 10);
    }
    return prefix
}