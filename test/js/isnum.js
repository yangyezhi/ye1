//判断是否符合手机号码格式
function isPoneAvailable(str) {
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(str)) {
        return false;
    } else {
        return true;
    }
}
//判断是否符合邮箱格式
function isEmail(str) {
    var myreg=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    if (!myreg.test(str)) {
        return false;
    } else {
        return true;
    }
}
//判断6位以上密码
function isSix(str) {
    var myreg=/^.{6,}$/;
    if (!myreg.test(str)) {
        return false;
    } else {
        return true;
    }
}
//判断6-12位密码
function ispwd(str) {
    var myreg=/^[\w]{6,12}$/;
    if (!myreg.test(str)) {
        return false;
    } else {
        return true;
    }
}
//判断身份证
function isCard(str) {
    var myreg=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (!myreg.test(str)) {
        return false;
    } else {
        return true;
    }
}
//判断银行卡号
function isBankCard(str) {
    var myreg=/^([1-9]{1})(\d{14}|\d{18})$/;
    if (!myreg.test(str)) {
        return false;
    } else {
        return true;
    }
}
//判断姓名
function isName(str) {
    var myreg=/^[\u4E00-\u9FA5A-Za-z]+$/;
    if (!myreg.test(str)) {
        return false;
    } else {
        return true;
    }
}

//判断是否为数字
function isNumber(val) {
    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if(regPos.test(val) || regNeg.test(val)) {
        return true;
    } else {
        return false;
    }
}

//判断日期格式
function isData(str) {
    var reg = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
    var regExp = new RegExp(reg);
    if (!regExp.test(str)) {
        return false;
    } else {
        return true;
    }
}