var HTMLeditor = CodeMirror.fromTextArea(document.getElementById("_html"), {
	lineNumbers: true,
	mode: {
		name: "xml",
		alignCDATA: true
	}
});
var CSSeditor = CodeMirror.fromTextArea(document.getElementById("_css"), {
	lineNumbers: true,
	mode: 'css'
});

var JSeditor = CodeMirror.fromTextArea(document.getElementById("_js"), {
	lineNumbers: true,
	mode: 'javascript'
});
addCSS();
addJS();
function addCSS () {
	var iframeDOM=document.getElementById("preview").contentDocument;
	iframeDOM.write(HTMLeditor.getValue());
	var style=document.createElement("style");
	style.innerHTML=CSSeditor.getValue();
	iframeDOM.body.appendChild(style);
}
function addJS(){
	/*var script=document.createElement("script");
	script.setAttribute("defer","");
	script.innerHTML="eval("+JSeditor.getValue()+")";
	iframeDOM.body.appendChild(script);*/

	setTimeout(function(){document.getElementById("preview").contentWindow.eval(JSeditor.getValue());},1000);
}
function runCode(){
	var a=document.getElementById("preview");
	a.parentNode.removeChild(a);
	var iframe=document.createElement("iframe");
	iframe.setAttribute("frameborder","0");
	iframe.setAttribute("id","preview");
	document.getElementById("pre").appendChild(iframe);
	addCSS();
	addJS();
}