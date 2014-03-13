var path="http://www.ssy.me/TNJ/js/map_sea.js";
var Data = {
	tooltip: {
		html: "<div class='tip'></div>\n<script src='"+path+"'></script>",
		css: "",
		js: 'seajs.use("lib/util/tooltip/tip",function($){\n  $(".tip").tooltip({"title":"ssss"}).tooltip("show");\n})'
	},
	pager: {
		html: "<div class='pager'></div>\n<script src='"+path+"'></script>",
		css: "",
		js: '/**\n* @parent 放置插件的容器\n* @current 当前页\n* @item  每页显示数量\n* @total  数据总数\n* @display_num 按钮最多显示数量\n* @selectChange 选项更改时触发的事件\n**/\nseajs.use("lib/util/pager/page",function(pager){\n  pager.init({\n		parent: ".pager",\n		current: 1,\n		item: 10,\n		total: 270,\n		display_num:5,\n		selectChange: function() {\n			console.log(this.current);\n		}\n	});\n})'
	},
	dialog: {
		html: "<div class='con' style='display:none'>\n    这是一个测试，这是抓取过来的隐藏DOM\n</div>\n<script src='"+path+"'></script>",
		css: "",
		js: '/*!Extend jquery.js*/\n/**\n* @title 标题内容\n* @content 如果传入的是HTMLElement类型，\n		   如果是隐藏元素会给其设置display:block以显示该元素，\n		   其他属性与绑定的事件都会完整保留\n* @ok 	 确定按钮回调函数。\n		 函数如果返回false将阻止对话框关闭；函数this指针指向内部api；\n		 如果传入true表示只显示有关闭功能的按钮\n* @okVal  "确定按钮"文字\n* @cancel 取消按钮回调函数。\n		  函数如果返回false将阻止对话框关闭；函数this指针指向内部api；如果传入true表示只显示有关闭功能的按钮\n	      对话框标题栏的关闭按钮其实就是取消按钮，只不过视觉不同罢了，点击同样触发cancel事件\n* @cancelVal "取消按钮"文字\n* @copy   复制按钮，复制文字\n* @copy_target 复制目标默认.textarea\n* @width   设置消息内容宽度，可以带单位。一般不需要设置此，对话框框架会自己适应内容。\n		   如果设置为百分值单位，将会以根据浏览器可视范围作为基准，此时如果浏览器窗口大小被改变其也会进行相应的调整\n* @height  设置消息内容高度，可以带单位。不建议设置此，而应该让内容自己撑开高度。\n		   如果设置为百分值单位，将会以根据浏览器可视范围作为基准，此时如果浏览器窗口大小被改变其也会进行相应的调整\n* @drag   是否允许用户拖动位置\n* @time   设置对话框显示时间。以毫秒为单位\n*/\nseajs.use("lib/util/dialog/dialog",function(pop){\n  pop.dialog({\n    title:"这是一个测试",\n    content:$(".con"),\n    ok:function(){\n  		alert();\n  	},\n    drag:true,\n    copy:function(){\n    	this.tip();\n    },\n    copy_target:".con",\n  })	\n})'
	},
	item:{
		html:"<div class='content'>\n	<div class='table'></div>\n</div>\n<script src='"+path+"'></script>",
		css:".content{\n	width:900px;\n  	margin:0 auto;\n  	text-align: center;\n}",
		js:'/**\n* @parent 放置插件的容器\n* @item  表头数据 “键” 表示绑定域的ID，对应的之值表示表头名称\n* @data  数据对象数组\n* @display_num 按钮最多显示数量\n* @pager true:时启用分页插件,默认为:false\n* @per_item 每页显示数量\n**/\nseajs.use("lib/util/item/item",function(item){\n  item.init({\n	parent:".table",\n	item:{"ider":"ddd","ddd":"weqwe"},\n	data:[{"ider":"12","ddd":"dasd"},{"ider":"1222","ddd":"da3sd"},{"ider":"1tt2","ddd":"dasd"},{"ider":"1tt2","ddd":"dasd"},{"ider":"122t2","ddd":"da3sd"},{"ider":"12","ddd":"dasd"},{"ider":"12","ddd":"dasd"},{"ider":"1222","ddd":"da3sd"},{"ider":"12","ddd":"dasd"},{"ider":"12","ddd":"dasd"},{"ider":"1222","ddd":"da3sd"},{"ider":"12","ddd":"dasd"},{"ider":"1222","ddd":"da3sd"},{"ider":"12","ddd":"dasd"},{"ider":"1222","ddd":"da3sd"}],\n	pager:true,\n	per_item:3,\n	display_num:5\n  })\n})'
	},
	copy:{
		html:"<div class='word'>这是要被复制的内容</div>\n	<a href='#' class='copy'>复制</a>\n<script src='"+path+"'></script>",
		css:"",
		js:'/**\n* @arg1 复制按钮\n* @arg2 复制对象\n* @arg3 成功复制的回调函数\n**/\nseajs.use("lib/base/util",function(util){\n	util.copy(".copy", ".word", function() {\n		alert("复制成功！");\n	});\n})'
	},
	datepick:{
		html:"<input class='inputDate' value='2014-11-21'/>\n<script src='"+path+"'></script>",
		css:".datepickerMonths{\n	font-size:14px;\n}",
		js:"/**\n* eventName	String 所需的事件来触发日期选择器。默认：click\n* date	String, Date, array	 选定的日期（S）为字符串和Date对象的单一选择，字符串或日期对象数组\n* flat 日期选取器被附加到元素或由事件触发,默认false\n* start 一天一周开始。默认:1（星期一）\n* mode single|multiple|range 模式\n* format  格式 默认YMD\n* position  位置top|left|right|bottom 默认bottom\n* onChange 回调函数触发时，日期将被改变\n* onRender 回调函数触发时，日期的日历被渲染\n* onHide 回调函数时触发，日期选择器被隐藏\n* onShow 回调函数触发,日期选择器显示\n* onBeforeShow 日期选择器之前,触发回调函数\n**/\nseajs.use('lib/util/calendar/datepicker',function(){\n	$('.inputDate').DatePicker({\n		format: 'Y-m-d',\n		date: $('.inputDate').val(),\n		current: $('.inputDate').val(),\n		starts: 1,\n		position: 'bottom',\n		onBeforeShow: function() {\n			$('.inputDate').DatePickerSetDate($('.inputDate').val(), true);\n		},\n		onChange: function(formated, dates) {\n			$('.inputDate').val(formated);\n		}\n	});\n})"
	},
	suggest:{
		html:"<input class='sug'/>\n<script src='"+path+"'></script>",
		css:"",
		js:'/**\n* @target 目标输入框\n* @suggest 建议数组\n**/\nseajs.use("lib/util/suggest/suggester",function(suggest){\n	suggest.init({\n		target: ".sug",\n		suggest: ["", "@163.com", "@gmail.com", "@qq.com", "@111.com", "@tetequ.com"]\n	});\n})'
	},
	pieChart:{
		html:"<div class='chart' data-percent='75'>\n	<span class='percent'></span>\n	<span>%</span>\n</div>\n<script src='"+path+"'></script>",
		css:".chart {\n  position: relative;\n  text-align: center;\n  height:150px;\n  width: 150px;\n  text-align :center;\n}\n.chart span {\n  display: inline-block;\n  line-height: 150px;\n  font-size: 1.3em;\n  z-index: 2;\n}\n.chart canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n}",
		js:'/**\n* @barColor 默认:＃ef1e25 该curcular栏的颜色。您可以通过有效的CSS颜色字符串，或一个函数，\n			它目前的百分比值，并返回一个有效的CSS颜色字符串。\n* @trackColor 默认:#f2f2f2  轨道的颜色，或false来禁用渲染\n* @scaleColor 默认:＃dfe0e0 刻度线的颜色，false来禁用渲染。\n* @scaleLength 默认:5 刻度线的长度（降低了图表的半径）\n* @lineCap 默认:round 定义其样式 参数为: butt , round and square\n* @lineWidth  圆的宽度 默认:3\n* @size    大小\n* @rotate  旋转图标的角度 默认:0\n* @animate   动画\n* @onStep(from, to, currentValue) 在动画提供的当前值\n*/\n\nseajs.use("lib/util/pieChart/chart",function(pager){\n  $(".chart").easyPieChart({\n		easing: "easeOutBounce",\n		onStep: function(from, to, percent) {\n			$(this.el).find(".percent").text(Math.round(percent));\n		},\n		lineCap: "butt",\n		size: 150,\n		lineWidth: 20,\n		barColor: "#e66e1e",\n		scaleColor: false\n	});\n})'
	},
	slider:{
		html:"<div class='slider'></div>\n<script src='"+path+"'></script>",
		css:".slider{\n	margin:100px;\n}",
		js:'/**\n* @parent 插件容器\n* @min 最小刻度值 默认0\n* @max 最大刻度值 默认100\n* @onChange 滑块value改变时触发\n\n* setValue 重设滑块值的函数\n**/\n\nseajs.use("lib/util/slider/slider",function(slider){\n  slider.init({\n	parent: ".slider",\n	min: 20,\n	max: 200,\n	onChange: function() {\n		console.log(this.value);\n	}\n  });\n  //slider.setValue(75);\n})'
	},
	validate:{
		html:"<form action=''>\n  邮箱验证:\n  <div min='2' max='11' reg='^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)+$' data-trigger='' data-placement='right'>\n    <input />\n  </div>\n  <div>\n    <input type='submit'  value='确定'/>\n  </div>\n</form>\n<script src='"+path+"'></script>",
		css:"body{\n	width:980px;\n  	margin: 50px auto;\n}\nform{\n	width:200px;\n}\ninput{\n	width:100%;\n}",
		js:'/**\n* 在HTML中的属性\n	@max 字符最大长度 默认：9999\n    @min 字符自小长度 默认：0\n    @reg 过滤用的正则表达式 \n    @data-trigger 触发条件 默认hover\n    @data-placement 显示位置 默认top\n**/\n\nseajs.use("lib/base/util",function(util){\n  util.validate();\n})'
	},
	parseTpl:{
		html:"<div class='temp'></div>\n<div class='result'></div>\n<script src='"+path+"'></script>",
		css:"",
		js:'/**\n* str 模板\n* data 数据\n* 解析模版tpl。当data未传入时返回编译结果函数；\n* 当某个template需要多次解析时，建议保存编译结果函数，\n* 然后调用此函数来得到结果\n**/\nseajs.use("lib/base/util",function(util){\n  var str = "<p>房间名称：<%=name%></br>房间人数：<%=num%></p>";\n  var obj = {num:"234",name: "hello"};\n  var value=util.parseTpl(str,obj);\n  $(".temp").append(value).next().text(value);\n})'
	},
	stringCat:{
		html:"<div class='temp'></div>\n<div class='result'></div>\n<script src='"+path+"'></script>",
		css:"",
		js:'/**\n* str 模板\n* data 数据\n**/\nseajs.use("lib/base/util",function(util){\n  var str = "<p>房间名称：%%</br>房间人数：%%</p>";\n  var value = util.stringCat(str,3,4);\n  $(".temp").append(value).next().text(value);\n});'
	},
	cookie:{
		html:"<div class='cookie'></div>\n<script src='"+path+"'></script>",
		css:"",
		js:'/**\n* cookie创建，获取\n**/\nseajs.use("lib/util/cache/cookie",function(pager){\n  $.cookie("TEJ","easy");\n  $.cookie("TEJ","better",{"expires":1,"path":"/","domain":""});\n  $(".cookie").text($.cookie("TEJ"));\n  /**\n  * cookie删除\n  **/\n  //$.removeCookie("TEJ");\n})\n'
	},
	unslider:{
		html:'<div class="banner">\n		<ul>\n			<li style="background-image: url(img/sunset.jpg);"></li>\n\n			<li style="background-image: url(img/wood.jpg);"></li>\n\n			<li style="background-image: url(img/subway.jpg);"></li>\n\n			<li style="background-image: url(img/shop.jpg);"></li>\n		</ul>\n	</div>\n'+'<script src="'+path+'""></script>',
		css:"body{\n  margin:0;\n  padding:0;\n}",
		js:'seajs.use("lib/util/unslider/unslider",function(){\n   $(".banner").unslider({\n      speed: 500,               //  动效执行时间\n      delay: 3000,              // 轮询时间 \n      complete: function() {},  //  每次滑动特效后执行函数\n      keys: true,               //  支持左右按键\n      dots: true,               //  点导航\n      fluid: true              //  是否支持响应式网页\n  });\n})'
	}
}
