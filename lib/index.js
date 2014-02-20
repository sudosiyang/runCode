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
init("dialog");

function init(opt) {
	HTMLeditor.setValue(Data[opt].html);
	CSSeditor.setValue(Data[opt].css);
	JSeditor.setValue(Data[opt].js);
	runCode();
}

function addNode() {
	var iframeDOM = document.getElementById("preview").contentDocument;
	iframeDOM.write(HTMLeditor.getValue());
	var style = document.createElement("style");
	style.innerHTML = CSSeditor.getValue();
	iframeDOM.body.appendChild(style);
	setTimeout(function() {
		document.getElementById("preview").contentWindow.eval(JSeditor.getValue());
	}, 100);
}

function runCode() {
	var a = document.getElementById("preview");
	a.parentNode.removeChild(a);
	var iframe = document.createElement("iframe");
	iframe.setAttribute("frameborder", "0");
	iframe.setAttribute("id", "preview");
	iframe.setAttribute("width", "100%");
	iframe.setAttribute("height", "100%");
	document.getElementById("pre").appendChild(iframe);
	addNode();
}