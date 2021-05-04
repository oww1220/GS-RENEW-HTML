/*

Form Validation Check
    
use static method.
send element name.

*/

function trim(str) {
    return str.replace(/(^[\s　]+)|([\s　]+$)/g, "");
}

function FormValidation() { }

FormValidation.check = function (_objName, _msg, _isFocus, isRegExp, regExpType) {

    if (typeof (regExpType) == undefined)
        regExpType = "";

    var obj = FormValidation.setElementsNameIsExist(_objName);

    if (!obj)
        return alert(_objName + " Elements is null");

    switch (FormValidation.getElementsType(obj)) {
        case "text": return FormValidation.getCheckForSingle(obj, _msg, _isFocus, isRegExp, regExpType);
        case "file": return FormValidation.getCheckForSingle(obj, _msg, _isFocus, isRegExp, regExpType);
        case "password": return FormValidation.getCheckForSingle(obj, _msg, _isFocus, isRegExp, "pwd");
        case "textarea": return FormValidation.getCheckForSingle(obj, _msg, _isFocus, isRegExp, "");
        case "checkbox": return FormValidation.getCheckForMulti(obj, _msg);
        case "radio": return FormValidation.getCheckForMulti(obj, _msg);
        case "select-one": return FormValidation.getCheckForSingle(obj, _msg, _isFocus);
        case "hidden": return FormValidation.getCheckForSingle(obj, _msg);
        default: return false;
    }
}

FormValidation.getElementsType = function (_obj) {
    return _obj[0].type;
}

/* isExist (s) */
FormValidation.setElementsIdIsExist = function (_objName) {
    return document.getElementById(_objName) || false;
}

FormValidation.setElementsNameIsExist = function (_objName) {
    return document.getElementsByName(_objName) || false;
}

FormValidation.setElementsIsExist = function (_objName) {

    var obj = FormValidation.setElementsNameIsExist(_objName);

    if (!obj)
        obj = FormValidation.setElementsNameIsExist(_objName);

    return obj;
}
/* isExist (e) */

/* Validation check (s) */
FormValidation.getCheckForSingle = function (_obj, _msg, _isFocus, isRegExp, _regExpType) {

    var value = trim(_obj[0].value);

    if (value == "") {

        if (_msg != undefined && trim(_msg) != "")
            alert(_msg);

        if (_isFocus)
            _obj[0].focus();

        return false;
    }
    else {
        if (isRegExp) {
            if (!FormValidation.isRegExpType(_regExpType, value)) {
                alert("입력하신 값은 규칙에 허용되지 않습니다.");
                _obj[0].focus();
                return false;
            }
        }
    }

    return true;
}

FormValidation.getCheckForMulti = function (_obj, _msg) {

    var elementChecked = false;

    for (var i = 0; i < _obj.length; i++) {
        if (_obj[i].checked)
            elementChecked = true;
    }

    if (!elementChecked) {

        if (_msg != undefined && trim(_msg) != "")
            alert(_msg);

        return false;
    }

    return true;
}

/* Validation check (e) */

FormValidation.isRegExpType = function (_pattern, _string) {
    var patternString = null;

    var chk1 = null;
    var chk2 = null;
    var chk3 = null;

    switch (_pattern) {

        case "pwd":
            chk1 = /^[a-z\d]{6,16}$/;
            chk2 = /[a-z]/;
            chk3 = /\d/;
            break;

        case "uid": patternString = /^[0-9A-Za-z]{5,12}$/; break;
        case "korname": patternString = /^[가-힣]+$/; break;
        case "engname": patternString = /^[A-Z]+$/; break;
        case "int": patternString = /^[0-9]+$/; break;
        case "string": patternString = /^[가-힣0-9A-Za-z\s\.\-\&\(\)\~]+$/; break;
        case "email": patternString = /^[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+)*@[0-9a-zA-Z-]+(\.[a-zA-Z-]+){1,2}$/; break;
        case "tel": patternString = /^[0-9\-]+$/; break;
        case "eng": patternString = /^[A-Za-z0-9\s\.\-\&\(\)\~\,]+$/; break;
        default: patternString = /^[가-힣0-9A-Za-z\s\.\-]+$/; break;
    }

    if (_pattern == "id" || _pattern == "pwd")
        return chk1.test(_string) && chk2.test(_string) && chk3.test(_string);
    else
        return patternString.test(_string);
}

//All Check (s)
function CheckAll(targetName) {

    var obj = document.getElementsByName(targetName);
    //    var objTag = obj.getElementsByTagName("input");
    //    if (!objTag)
    //        return;
    var checkedValue = true;

    if (CheckChecked(targetName))
        checkedValue = false;

    for (var i = 0; i < obj.length; i++) {

        if (obj[i].type == "checkbox")
            obj[i].checked = checkedValue;

    }
}

function CheckChecked(targetName) {

    var obj = document.getElementsByName(targetName);
    var returnValue = true;

    for (var i = 0; i < obj.length; i++) {
        if (obj[i].checked == false) {
            returnValue = false;
            break;
        }
    }

    return returnValue;
}

//Checked Value (s)
function CheckedValue(objName) {

    var obj = document.getElementsByName(objName);
    if (!obj)
        return;

    var returnValue = "";

    for (var i = 0; i < obj.length; i++) {

        if (obj[i].checked)
            returnValue += (returnValue != "" ? "," : "") + obj[i].value;

    }

    return returnValue;
}
//Checked Value (e)
