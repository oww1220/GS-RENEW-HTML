// onreadystatechange functon 설정
function SetFunction() {
    if (httpObj != null) httpObj.OnReadyStateChange = MyOnReadyStatChange;
}

//xml data 요청
function SendRequest() {
    if (httpObj != null) {
        //httpObj.OnReadyStateChange = MyOnReadyStatChange;  //여기에 지정해도 무방함
        //gpDisp.innerHTML = "<img src='http://asp1.krx.co.kr/servlet/krx.asp.SiseInfoServlet?code=001250&width=200&panelBGColor=ffffff&defaultFontColor=000000&myComGrpHeight=100'><br><img src='http://asp1.krx.co.kr/servlet/krx.asp.DTRmainServlet?code=001250&width=200&panelBGColor=ffffff&defaultFontColor=000000&myComGrpHeight=100'>";
        httpObj.DoRequest();
    }
}

// onreadystatechange funcion 이 이function 으로 설정된 경우 작동
var dipDate; //날짜시간처리
function MyOnReadyStatChange() {
    var nReadyState = httpObj.ReadyState;
    if (4 == nReadyState) {
        if (httpObj.Status != 200) {
            alert("Error Code: " + httpObj.Status + "\r\n" + httpObj.StatusText);
        }
        else {
            var contentType = httpObj.getResponseHeader("Content-Type");
            if (contentType.length < 8 || contentType.substring(0, 8) != "text/xml") {
                alert("잘못된 데이터입니다. 오랫동안 사용하지 않아 세션이 종료되었거나, 서버오류입니다!");
                return;
            }
            var xmlDoc = httpObj.ResponseXML;
            var cDate = document.getElementById("createDate")
            dipDate = xmlDoc.selectSingleNode("stockprice").getAttribute("querytime");
            parseNode(xmlDoc);
            setTimeout(SendRequest, 100000);
        }
    }
}

function parseNode(xmlDoc) {
    var node = xmlDoc.selectSingleNode("stockprice/TBL_StockInfo");
    if (node != null) parseStastistics(node);
    node = xmlDoc.selectSingleNode("stockprice/TBL_Hoga");
}

function parseStastistics(TBL_StockInfo) {
    var nowprice = document.getElementById("nowprice");
    var curjuka = TBL_StockInfo.getAttribute("CurJuka").trim();
    var nowpriceChg = document.getElementById("nowpriceChg");
    var debi = TBL_StockInfo.getAttribute("Debi").trim();
    var dungrak = TBL_StockInfo.getAttribute("Dungrak");
    var nowpriceChgPersent = document.getElementById("nowpriceChgPersent");
    var dungrakul = myRound((parseInt(debi) / parseInt(curjuka.replace(',', ''))) * 100, 2)
    var nowday = document.getElementById("nowday");
    var today = new Date();

    nowprice.innerHTML = "";
    nowpriceChg.innerHTML = "";
    nowpriceChgPersent.innerHTML = "";
    nowday.innerHTML = "";

    nowday.innerHTML = toTimeString(today);

    for (var i = 0; i < curjuka.length; i++) {
        if (curjuka.substring(i, i + 1) == ",")
            nowprice.innerHTML += "<img src=\"/Kr/Images/common/main/big_num_jum.gif\" alt=\"" + curjuka.substring(i, i + 1) + "\" />";
        else
            nowprice.innerHTML += "<img src=\"/Kr/Images/common/main/big_num" + curjuka.substring(i, i + 1) + ".gif\" alt=\"" + curjuka.substring(i, i + 1) + "\" />";
    }

    if (dungrak < 5)
        nowpriceChg.innerHTML += "<img src=\"/Kr/Images/common/main/sm_red_num_up.gif\" />";
    else
        nowpriceChg.innerHTML += "<img src=\"/Kr/Images/common/main/sm_red_num_down.gif\" />";

    for (var i = 0; i < debi.length; i++) {
        nowpriceChg.innerHTML += "<img src=\"/Kr/Images/common/main/sm_red_num" + debi.substring(i, i + 1) + ".gif\" alt=\"" + debi.substring(i, i + 1) + "\" />";
    }

    if (dungrak < 5)
        nowpriceChgPersent.innerHTML += "<img src=\"/Kr/Images/common/main/sm_gray_num_plus.gif\" />";
    else
        nowpriceChgPersent.innerHTML += "<img src=\"/Kr/Images/common/main/sm_gray_num_minus.gif\" />";

    for (var i = 0; i < dungrakul.toString().length; i++) {
        if (dungrakul.toString().substring(i, i + 1) == ".")
            nowpriceChgPersent.innerHTML += "<img src=\"/Kr/Images/common/main/sm_gray_num_jum.gif\" alt=\"" + dungrakul.toString().substring(i, i + 1) + "\" />";
        else
            nowpriceChgPersent.innerHTML += "<img src=\"/Kr/Images/common/main/sm_gray_num" + dungrakul.toString().substring(i, i + 1) + ".gif\" alt=\"" + dungrakul.toString().substring(i, i + 1) + "\" />";
    }
}