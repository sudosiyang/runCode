var path="http://192.168.1.10/susu/TNJ/js/_sea.js";
var Data = {
	tooltip: {
		html: "<div class='tip'></div>\n<script src='"+path+"'></script>",
		css: "",
		js: 'seajs.use("lib/util/tooltip/tip",function($){\n  $(".tip").tooltip({"title":"ssss"}).tooltip("show");\n})'
	},
	pager: {
		html: "<div class='pager'></div>\n<script src='"+path+"'></script>",
		css: "",
		js: 'seajs.use("lib/util/pager/page",function(pager){\n  pager.init({\n		parent: ".pager",\n		current: 1,\n		item: 100,\n		total: 270,\n		display_num:5,\n		selectChange: function() {\n			console.log(this.current);\n		}\n	});\n})'
	},
	dialog: {
		html: "<div class='con' style='display:none'>这是一个测试，这是抓取过来的隐藏DOM</div>\n<script src='"+path+"'></script>",
		css: "",
		js: '/*!Extend jquery.js*/\n/**\n* @title 标题内容\n* @content 如果传入的是HTMLElement类型，\n		   如果是隐藏元素会给其设置display:block以显示该元素，\n		   其他属性与绑定的事件都会完整保留\n* @ok 	 确定按钮回调函数。\n		 函数如果返回false将阻止对话框关闭；函数this指针指向内部api；\n		 如果传入true表示只显示有关闭功能的按钮\n* @okVal  "确定按钮"文字\n* @cancel 取消按钮回调函数。\n		  函数如果返回false将阻止对话框关闭；函数this指针指向内部api；如果传入true表示只显示有关闭功能的按钮\n	      对话框标题栏的关闭按钮其实就是取消按钮，只不过视觉不同罢了，点击同样触发cancel事件\n* @cancelVal "取消按钮"文字\n* @copy   复制按钮，复制文字\n* @copy_target 复制目标默认.textarea\n* @width   设置消息内容宽度，可以带单位。一般不需要设置此，对话框框架会自己适应内容。\n		   如果设置为百分值单位，将会以根据浏览器可视范围作为基准，此时如果浏览器窗口大小被改变其也会进行相应的调整\n* @height  设置消息内容高度，可以带单位。不建议设置此，而应该让内容自己撑开高度。\n		   如果设置为百分值单位，将会以根据浏览器可视范围作为基准，此时如果浏览器窗口大小被改变其也会进行相应的调整\n* @drag   是否允许用户拖动位置\n* @time   设置对话框显示时间。以毫秒为单位\n*/\nseajs.use("lib/util/dialog/dialog",function(pop){\n  pop.dialog({\n    title:"这是一个测试",\n    content:$(".con"),\n    ok:function(){\n  		alert();\n  	},\n    copy:function(){\n    	this.tip()\n    }\n  })	\n})'
	},
	item:{
		html:"<div class='content'>\n	<div class='table'></div>\n</div>\n<script src='"+path+"'></script>",
		css:".content{\n	width:900px;\n  	margin:0 auto;\n}",
		js:'seajs.use("lib/util/item/item",function(item){\n  item.init({\n	parent:".table",\n	item:{"ider":"ddd","ddd":"weqwe"},\n	data:[{"ider":"12","ddd":"dasd"},{"ider":"1222","ddd":"da3sd"},{"ider":"1tt2","ddd":"dasd"},{"ider":"1tt2","ddd":"dasd"},{"ider":"122t2","ddd":"da3sd"},{"ider":"12","ddd":"dasd"},{"ider":"12","ddd":"dasd"},{"ider":"1222","ddd":"da3sd"},{"ider":"12","ddd":"dasd"},{"ider":"12","ddd":"dasd"},{"ider":"1222","ddd":"da3sd"},{"ider":"12","ddd":"dasd"},{"ider":"1222","ddd":"da3sd"},{"ider":"12","ddd":"dasd"},{"ider":"1222","ddd":"da3sd"}],\n	pager:true,\n	per_item:3,\n	display_num:5\n  })\n})'
	},
	copy:{
		html:"<div class='word'>这是要被复制的内容</div>\n	<a href='#' class='copy'>复制</a>\n<script src='"+path+"'></script>",
		css:"",
		js:'seajs.use("lib/base/util",function(util){\n	util.copy(".copy", ".word", function() {\n		alert("复制成功！");\n	});\n})'
	},
	datepick:{
		html:"<input class='inputDate' value='2014-11-21'/>\n<script src='"+path+"'></script>",
		css:".datepickerMonths{\n	font-size:14px;\n}",
		js:"seajs.use('lib/util/calendar/datepicker',function(){\n	$('.inputDate').DatePicker({\n		format: 'Y-m-d',\n		date: $('.inputDate').val(),\n		current: $('.inputDate').val(),\n		starts: 1,\n		position: 'bottom',\n		onBeforeShow: function() {\n			$('.inputDate').DatePickerSetDate($('.inputDate').val(), true);\n		},\n		onChange: function(formated, dates) {\n			$('.inputDate').val(formated);\n		}\n	});\n})"
	},
	suggest:{
		html:"<input class='sug'/>\n<script src='"+path+"'></script>",
		css:"",
		js:'seajs.use("lib/util/suggest/suggester",function(suggest){\n	suggest.init({\n		target: ".sug",\n		suggest: ["", "@163.com", "@gmail.com", "@qq.com", "@111.com", "@tetequ.com"]\n	});\n})'
	},
	pieChart:{
		html:"<div class='chart' data-percent='75'>\n	<span class='percent'></span>\n	<span>%</span>\n</div>\n<script src='"+path+"'></script>",
		css:".chart {\n  position: relative;\n  text-align: center;\n  height:150px;\n  width: 150px;\n  text-align :center;\n}\n.chart span {\n  display: inline-block;\n  line-height: 150px;\n  font-size: 1.3em;\n  z-index: 2;\n}\n.chart canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n}",
		js:'seajs.use("lib/util/pieChart/chart",function(pager){\n  $(".chart").easyPieChart({\n		easing: "easeOutBounce",\n		onStep: function(from, to, percent) {\n			$(this.el).find(".percent").text(Math.round(percent));\n		},\n		lineCap: "butt",\n		size: 150,\n		lineWidth: 20,\n		barColor: "#e66e1e",\n		scaleColor: false\n	});\n})'
	},
	slider:{
		html:"<div class='slider'></div>\n<script src='"+path+"'></script>",
		css:".slider{\n	margin:100px;\n}",
		js:'seajs.use("lib/util/slider/slider",function(slider){\n  slider.init({\n	parent: ".slider",\n	min: 20,\n	max: 200,\n	onChange: function() {\n		console.log(this.value);\n	}\n  });\n  //slider.setValue(75);\n})'
	}
}