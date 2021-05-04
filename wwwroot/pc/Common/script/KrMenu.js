function GetGnbMenu(elementID) {

    var root = "";
    var nodes = "";
    var gnbMenu = "";

    root = getXmlDocument("/Common/Xml/KrMenu.xml?v=20200427");
    nodes = root.getElementsByTagName("node");

    gnbMenu = "<ul class='c-header__menu-list'>";

    for (var i = 0; i < nodes.length; i++) {
        var depth = nodes[i].getAttribute("depth");
        var link = nodes[i].getAttribute("link");
        var target = nodes[i].getAttribute("target");
        var title = nodes[i].getAttribute("title");
        var seqno = nodes[i].getAttribute("seqno");
        var last = nodes[i].getAttribute("last");
        var is2depthlast = nodes[i].getAttribute("is2depthlast");
        var has3depth = nodes[i].getAttribute("has3depth");

        if (depth == 1) {
            gnbMenu += "<li class='c-header__menu-list__item'>";

            var depth1Html = "<a href='" + link + "' class='c-header__menu-list__item-tit c-header__menu-list__item-tit-pc'>"
                                + "<span>" + title + "</span>"
                            + "</a>"
                            + "<div class='c-header__menu-list__item-tit c-header__menu-list__item-tit-mo'>"
                                + "<span>" + title + "</span>"
                            + "</div>";

            gnbMenu += depth1Html;
        }
        else if (depth == 2) {
            if (seqno == 0) {
                var open2depthHtml = "<ul class='c-header__menu-sub-list'>";
                gnbMenu += open2depthHtml;
            }

            var depth2Html = "<li class='c-header__menu-sub-list__item'>"
                                + "<a href='" + link + "' class='c-header__menu-sub-list__item-tit'>"
                                        + "<span>" + title + "</span>"
                                + "</a>";

            if (has3depth != "true") {
                depth2Html += "</li>";
            }

            gnbMenu += depth2Html;
        }
        else if (depth == 3) {
            if (seqno == 0) {
                var open3depthHtml = "<button class='c-header__menu-sub-list__depth-btn' type='button'>"
                                        + "<span class='c-header__menu-sub-list__depth-btn__text'>더보기</span>"
                                    + "</button>";
                gnbMenu += open3depthHtml;

                gnbMenu += "<ul class='c-header__menu-sub-list__depth-list'>";
            }

            var depth3Html = "<li class='c-header__menu-sub-list__depth-list__item'>"
                                + "<a href='" + link + "' class='c-header__menu-sub-list__depth-list-item-tit'>"
                                    + "<span>" + title + "</span>"
                                + "</a>"
                            + "</li>";

            gnbMenu += depth3Html;
        }

        if (last == "true") {
            if (depth == 2) {
                gnbMenu += "</ul>";
                gnbMenu += "</li>";
            }
            else if (depth == 3) {
                gnbMenu += "</ul>";
                gnbMenu += "</li>";
                if (is2depthlast == "true") {
                    gnbMenu += "</ul>";
                    gnbMenu += "</li>";
                }
            }
        }
    }

    gnbMenu += "</ul>";

    $("#" + elementID).html(gnbMenu);
    //console.log(gnbMenu);
}

function GetBreadCrumb(elementID, url, nodeName, isLast) {
    var root = "";
    var nodes = "";
    url = url.toLowerCase();
    if (url.indexOf("?") > 0) url = url.substring(0, url.indexOf("?"));
    else url = url;

    root = getXmlDocument("/Common/Xml/KrBreadCrumb.xml?v=20200427");
    nodes = root.getElementsByTagName(nodeName);

    var selectedTitle = "";
    var liBreadCrumbClass = (isLast == true) ? "m-breadcrumb__item m-breadcrumb__item-last" : "m-breadcrumb__item";

    var selectHtml = "<li class='" + liBreadCrumbClass + "'>"
                        + "<div class='cells m-breadcrumb__cells'>"
                            + "<div class='m-select__wrap'>";

    var selectLI = "";

    var urlSlashCount = url.split("/").length - 1;

    switch (urlSlashCount) {
        case 3:
            if (nodeName.indexOf("B") > -1)
                break;
            url = url.substring(url.indexOf("/"), url.lastIndexOf("/"));
            break;
        case 4:
            if (nodeName.indexOf("C") > -1)
                break;
            url = url.substring(url.indexOf("/"), url.lastIndexOf("/"));
            if(nodeName == "A")
                url = url.substring(url.indexOf("/"), url.lastIndexOf("/"));
            break;
    }

    for (var i = 0; i < nodes.length; i++) {
        var link = nodes[i].getAttribute("link").toLowerCase();
        var title = nodes[i].getAttribute("title");

        if (link == url || link.indexOf(url) > -1) {
            selectedTitle = title;
        } else if (nodes[i].childElementCount > 0) {
            if (nodes[i].children != null) {
                for (var j = 0; j < nodes[i].children.length; j++) {
                    if (nodes[i].children[j].getAttribute("link").toLowerCase().indexOf(url) > -1) {
                        selectedTitle = title;
                        break;
                    }
                }
            } else {
                for (var j = 0; j < nodes[i].childNodes.length; j++) {
                    if (nodes[i].childNodes[j].attributes != null && nodes[i].childNodes[j].getAttribute("link").toLowerCase().indexOf(url) > -1) {
                        selectedTitle = title;
                        break;
                    }
                }
            }
        }
        selectLI += "<li class='m-select__view-list__item' data-index='" + i + "' value='" + link + "'>" + title + "</li>";
    }
    var middleCloseHtml =  "<div class='m-select__view'>"
                                    + "<span class='m-select__label'>" + selectedTitle + "</span>"
                                    + "<i class='m-icon m-icon__select'></i>"
                                + "</div>"
                                + "<div class='m-select__view-list'>"
                                    + "<ul class='m-select__view-list__wrap'>";
    selectHtml += middleCloseHtml;

    selectHtml += selectLI;

    selectHtml += "</ul></div></div></div></li>";

    //console.log(selectHtml);
    $("." + elementID).append(selectHtml);
}

