
//document.domain = "gsgcorp.com";
//document.domain = "localhost:52419";

//WebMethod
function onFailed(error, userContext, methodName) {
    alert(error.get_message());
}

//file extension check
function IsFileNameExt(path, extension) {

    if (path.length < 1)
        return false;

    var file = path.substring(path.lastIndexOf("\\") + 1, path.length);

    var filename;
    var exp;

    if (file.indexOf(".") >= 0) {
        filename = file.substring(0, file.lastIndexOf("."));
        exp = file.substring(file.lastIndexOf(".") + 1, file.length);
    }
    else {
        filename = file;
        exp = "";
    }

    if (exp != "") {
        exp = exp.toLowerCase();

        if (extension.indexOf(exp) < 0) {
            alert("지원되지 않는 포맷의 파일명입니다.\n" + extension.split("|").join(", ").toUpperCase() + " 만 지원됩니다.");
            return false;
        }
    }
    else {
        alert("파일에 확장자가 없는 잘못된 파일 입니다.\n올바른 파일을 사용해주세요");
        return false;
    }

    return true;
}

function IsEnterCheck(event, obj) {

    var keyCode = window.event ? event.keyCode : event.which ? event.which : event.charCode;

    if (keyCode == 13) {
        if (document.getElementById(obj).onclick())
            return true;
        else
            return false;
    }
}

function getXmlDocument(sFile) {
    var xmlHttp, oXML;
    try {
        xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", sFile, false);
        xmlHttp.send(null);
        oXML = xmlHttp.responseXML;
    } catch (e) {
        xmlHttp = getXMLObject();
        xmlHttp.async = false;
        xmlHttp.resolveExternals = false;
        xmlHttp.load(sFile);
        oXML = xmlHttp;
    }
    return oXML;
}

function getXMLObject() {
    var aVersions = new Array("Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0");
    for (var i = 0; i < aVersions.length; i++) {
        try {
            var oXML = new ActiveXObject(aVersions[i]);
            return oXML;
        }
        catch (e) {
            alert("Xml Load 를 할 수 없는 브라우져 입니다.");
        }
    }
    return null;
}

function toTimeString(date) { //formatTime(date)
    var year = date.getFullYear();
    var month = date.getMonth() + 1; // 1월=0,12월=11이므로 1 더함
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var second = date.getSeconds();

    if (("" + month).length == 1) { month = "0" + month; }
    if (("" + day).length == 1) { day = "0" + day; }
    if (("" + hour).length == 1) { hour = "0" + hour; }
    if (("" + min).length == 1) { min = "0" + min; }
    if (("" + second).length == 1) { second = "0" + second; }

    return ("" + year + "." + month + "." + day + " " + hour + ":" + min + ":" + second)
}

function myRound(num, pos) {
    var posV = Math.pow(10, (pos ? pos : 2)); //10을 두번(pos) 곱해서 100 이 반환된다.
    return Math.round(num * posV) / posV;
}

/*******************************************************************************
* popup
*******************************************************************************/

/* 팝업 */
function Popup() { }

Popup.Open = function (url, w, h, name, scroll, left, top) {

    var winnameset = url.split('/');
    var winname = name || winnameset[winnameset.length - 1].split('.')[0];

    if (scroll) {
        scroll = "yes";
    }
    else {
        scroll = "auto";
    }

    try {
        if (left != null && top != null) {
            window.open(url, winname, 'width=' + w + ', height=' + h + ', resizable=no, scrollbars=' + scroll + ', toolbars=no, status=no, menu=no, left=' + left + ', top=' + top).focus();
        }
        else {
            window.open(url, winname, 'width=' + w + ', height=' + h + ', resizable=no, scrollbars=' + scroll + ', toolbars=no, status=no, menu=no').focus();
        }
    }
    catch (e) { }
}


Popup.Resize = function (w, h, scroll, center) {
    if (scroll)
        w = w + 17;

    if (center) {
        var winl = (screen.width / 2) - (w / 2), wint = (screen.height / 2) - (h / 2); winl = winl - 10; wint = (isopera) ? wint - 130 : wint - 30;
        window.moveTo(winl, wint);
    }


    var nw = (!scroll) ? document.documentElement.clientWidth : document.documentElement.clientWidth + 17;
    var nh = document.documentElement.clientHeight;

    if ((nw != w && (nw - 1) != w && (nw + 1) != w) || nh != h)
        window.resizeBy(w - nw, h - nh);


    if (scroll) {
        document.documentElement.style.overflow = "auto";
        document.documentElement.style.overflowX = "hidden";
    }
    else
        document.documentElement.style.overflow = "hidden";
}

Popup.AutoResize = function (minWidth, minHeight) {

    var bWidth = parseInt(document.body.scrollWidth);
    var bHeight = parseInt(document.body.scrollHeight);

    var popwrapObj = document.getElementById("popwrap");

    var w = parseInt(popwrapObj.scrollWidth) + 20;
    var h = parseInt(popwrapObj.scrollHeight) + 20;

    var nw = (!scroll) ? document.documentElement.clientWidth : document.documentElement.clientWidth + 17;
    var nh = document.documentElement.clientHeight;

    w = w - nw;
    h = h - nh;

    if (w < minWidth) w = minWidth;
    if (h < minHeight) h = minHeight;

    if ((nw != w && (nw - 1) != w && (nw + 1) != w) || nh != h) {


        if (w > screen.width || h > screen.height) {

            document.documentElement.style.overflow = "auto";

            if (w < screen.width)
                document.documentElement.style.overflowX = "hidden";

            if (h < screen.height)
                document.documentElement.style.overflowY = "hidden";
        }
        else
            document.documentElement.style.overflow = "hidden";

        window.resizeBy(w, h);
    }
}
