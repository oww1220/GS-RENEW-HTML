function Editor() { }

Editor.init = function () {

    this.oEditors = [];
}

Editor.imgInput = function (imgLocation) {

    var sHTML = "<img src='http://" + imgLocation + "' alt='' />";
    oEditors.getById["txtContents"].exec("PASTE_HTML", [sHTML]);
}

Editor.ValidEditorText = function (editorText) {

    if (editorText == null || editorText == "" || editorText == "<p>&nbsp;</p>" || editorText == "&nbsp;")
        return false;

    return true;
}