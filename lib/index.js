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

window.onresize = resize;
resize();
changeHash();

function resize() {
	$("#wp").height(document.body.clientHeight / 2 - 90);
	$("#code").height(document.body.clientHeight - 75);
}

function changeHash() {
	if (location.hash.replace("#", "") == "") {
		init("dialog");
	} else {
		init(location.hash.replace("#", ""));
	}
}

function init(opt) {
	HTMLeditor.setValue(Data[opt].html);
	CSSeditor.setValue(Data[opt].css);
	JSeditor.setValue(Data[opt].js);
	runCode();
}
var flag;

function addNode() {
	var iframeDOM = $("#preview")[0].contentDocument;
	iframeDOM.write(HTMLeditor.getValue());
	var style = document.createElement("style");
	style.innerHTML = CSSeditor.getValue();
	iframeDOM.body.appendChild(style);
	flag = setInterval(function() {
		if ($("#preview")[0].contentWindow.seajs) {
			$("#preview")[0].contentWindow.eval(JSeditor.getValue());
			clearInterval(flag);
		}
	}, 100);
}

function runCode() {
	var _a = $("#preview")[0];
	_a.remove();
	var iframe = document.createElement("iframe");
	iframe.setAttribute("frameborder", "0");
	iframe.setAttribute("id", "preview");
	iframe.setAttribute("width", "100%");
	iframe.setAttribute("height", "100%");
	$("#wp")[0].appendChild(iframe);
	addNode();
}

$("#list").on('click', 'li', function(event) {
	event.preventDefault();
	$("#list li").removeClass();
	$(this).addClass('active');
	location.hash = $(this).attr("attr");
	changeHash();
});
//按钮事件绑定
$(".m-panelbtns").on('click', 'li a', function(event) {
	event.preventDefault();
	var _id = "#_" + $(this).attr('id');
	if(_id=="#demo") return;
	$("#"+$(this).attr('id')).toggleClass('_select');
	$(_id).parent().toggle();
	switch ($('form:hidden').length) {
		case 0:
			$("form").width("33.3%");
			break;
		case 1:
			$("form").width("50%");
			break;
		case 2:
			$("form").width("100%");
	}
});