function GetLnbMenu(elementID, page, url) {

    var root = "";
    var nodes = "";
    var lnbMenu = "";

    if (navigator.userAgent.match(/Mobile|iPhone|iPad|BlackBerry|Android|Windows CE|Windows Phone|Opera Mini|POLARIS/) != null) {

        root = getXmlDocument("/Common/Xml/MibileMenu.xml");
        nodes = root.getElementsByTagName("node");

        lnbMenu = "<h1><a href='/Kr/'><img src='/Kr/Images/common/logo.gif' alt='GS 글로벌' /></a></h1>";
        lnbMenu += "<div class='gnb' id=\"gnbUi\">";
        lnbMenu += "<ul>";

        for (var i = 0; i < nodes.length; i++) {

            var img = nodes[i].getAttribute("img");

            if (page != "main" && typeof (img) != "object") {
                img = img.replace("/main", "");
                img = img.replace("sub_", "sub");
            }

            var depth = nodes[i].getAttribute("depth");
            var link = nodes[i].getAttribute("link");
            var target = nodes[i].getAttribute("target");

            if (depth < 2) {

                if (i > 0 && depth < 2) {
                    lnbMenu += "</ul><p><a href=\"#\" class='close_btn'><img src='/Kr/images/common/main/btn_gnb_close.gif' alt='닫기'/></a></p></div></li>";
                }

                lnbMenu += "<li><a href='#'><img src='" + img + "' alt='회사소개' /></a>";
                lnbMenu += "<div class=\"subgnb\" style=\"display:none;\">";
                lnbMenu += "<ul>";

            }
            else if (depth == 2) {
                var alt = "";
                
                if (nodes[i].text == undefined)
                    alt = nodes[i].textContent;
                else
                    alt = nodes[i].text;

                lnbMenu += "<li><a href='" + link + "' target='" + target + "'><img src='" + img + "' alt='" + alt + "' /></a></li>";
            }
        }
        
        lnbMenu += "</ul>";
        lnbMenu += "</div>";


        $("#" + elementID).html(lnbMenu);
    }
    else {

        root = getXmlDocument("/Common/Xml/Menu.xml");
        nodes = root.getElementsByTagName("node");
        
        var swf = "/Common/Swf/mainNavi.swf"
        var width = 341;
        var height = 501;
        var num1 = -1;
        var num2 = 0;

        if (page != "main") {
            swf = "/Common/Swf/subNavi.swf";
            width = 235;
            height = 501;
        }

        for (var i = 0; i < nodes.length; i++) {
        
            var depth = nodes[i].getAttribute("depth");
            var link = nodes[i].getAttribute("link");
            var seqno = nodes[i].getAttribute("seqno");

            if (depth == 1 && link == url) {
                num1 = seqno;
                if (num1 == 1 || num1 == 2) num2 = -1;
                break;
            }
            else if (depth == 2 && link == url) {
                num1 = nodes[i].parentNode.getAttribute("seqno");
                num2 = seqno;
                break;
            }
            else if (depth == 3 && link == url) {
                num1 = nodes[i].parentNode.parentNode.getAttribute("seqno");
                num2 = nodes[i].parentNode.getAttribute("seqno"); ;
                break;
            }
        }

        lnbMenu = "<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' width='" + width + "' height='" + height + "' id='mainNavi' align='middle'>";
        lnbMenu += "<param name='movie' value='" + swf + "' />";
        lnbMenu += "<param name='quality' value='high' />";
        lnbMenu += "<param name='bgcolor' value='#ffffff' />";
        lnbMenu += "<param name='play' value='true' />";
        lnbMenu += "<param name='loop' value='true' />";
        lnbMenu += "<param name='wmode' value='transparent' />";
        lnbMenu += "<param name='scale' value='showall' />";
        lnbMenu += "<param name='menu' value='true' />";
        lnbMenu += "<param name='devicefont' value='false' />";
        lnbMenu += "<param name='salign' value='' />";
        lnbMenu += "<param name='allowScriptAccess' value='sameDomain' />";

        if (page == "main")
            lnbMenu += "<param name='flashVars' value='xmlPath=/Common/Xml/Menu.xml' />";
        else
            lnbMenu += "<param name='flashVars' value='xmlPath=/Common/Xml/Menu.xml&m=" + num1 + "&s=" + num2 + "' />";

        
        lnbMenu += "<!--[if !IE]>-->";
        lnbMenu += "<object type='application/x-shockwave-flash' data='" + swf + "' width='" + width + "' height='" + height + "'>";
        lnbMenu += "<param name='movie' value='" + swf + "' />";
        lnbMenu += "<param name='quality' value='high' />";
        lnbMenu += "<param name='bgcolor' value='#ffffff' />";
        lnbMenu += "<param name='play' value='true' />";
        lnbMenu += "<param name='loop' value='true' />";
        lnbMenu += "<param name='wmode' value='transparent' />";
        lnbMenu += "<param name='scale' value='showall' />";
        lnbMenu += "<param name='menu' value='true' />";
        lnbMenu += "<param name='devicefont' value='false' />";
        lnbMenu += "<param name='salign' value='' />";
        lnbMenu += "<param name='allowScriptAccess' value='sameDomain' />";

        if (page == "main")
            lnbMenu += "<param name='flashVars' value='xmlPath=/Common/Xml/Menu.xml' />";
        else
            lnbMenu += "<param name='flashVars' value='xmlPath=/Common/Xml/Menu.xml&m=" + num1 + "&s=" + num2 + "' />";

        lnbMenu += "<!--<![endif]-->";
        lnbMenu += "<a href='http://www.adobe.com/go/getflash'>";
        lnbMenu += "<img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' />";
        lnbMenu += "</a>";
        lnbMenu += "<!--[if !IE]>-->";
        lnbMenu += "</object>";
        lnbMenu += "<!--<![endif]-->";
        lnbMenu += "</object>";

        document.getElementById(elementID).innerHTML = lnbMenu;
    }
}

function GetTopNavi(url) {

    var root = getXmlDocument("/Common/Xml/Menu.xml");
    var nodes = root.getElementsByTagName("node");
    var navi = "";
    var depth = "";
    var link = "";
    var name = "";
    var depth1 = "";
    var depthname1 = "";
    var depthname2 = "";

    for (var i = 0; i < nodes.length; i++) {

        depth = nodes[i].getAttribute("depth");
        link = nodes[i].getAttribute("link");
        name = nodes[i].getAttribute("title");

        if (depth == 2 && link == url) {
            depth1 = nodes[i].parentNode.getAttribute("link");
            depthname1 = nodes[i].parentNode.getAttribute("title");
            depthname2 = name
            break;
        }

        if (depth == 3 && link == url) {
            depth1 = nodes[i].parentNode.getAttribute("link");
            depthname1 = nodes[i].parentNode.parentNode.getAttribute("title");
            depthname2 = nodes[i].parentNode.getAttribute("title");
            break;
        }
    }
    
    if (depthname1 == "") {
        for (var i = 0; i < nodes.length; i++) {
            depth = nodes[i].getAttribute("depth");
            link = nodes[i].getAttribute("link");

            if (depth == 1 && link == url) {
                depth1 = nodes[i].getAttribute("link");
                depthname1 = nodes[i].getAttribute("title");
                break;
            }
        }
    }
    
    navi += "<li><a href='/Kr/'>Home</a></li>";
    navi += "<li><a href='" + depth1 + "'>" + depthname1 + "</a></li>";
    navi += "<li class='end'>" + depthname2 + "</li>";

    return navi;
}