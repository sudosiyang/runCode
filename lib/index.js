$(function() {
	var _display_max = 10;
	var _$target = $(".n-span");
	var _max = _$target.width();
	var _top = _$target.height();
	var _id = 0;

	var flag;

	function Interval() {
		flag = setInterval(function() {
			if ($(".ce").length < _display_max) {
				creatDiv();
			}
		}, 1000);
	}

	function creatDiv() {
		var _left = Math.floor(Math.random() * (_max));
		var _length = Math.floor(30 + Math.random() * (80 - 30));
		var c_id = "ce-" + _id;
		var _opacity = Math.floor((0.05 + Math.random() * (0.3 - 0.05) * 100)) / 100;
		var _time = Math.floor(8000 + Math.random() * (20000 - 8000));
		_$target.append('<div class="ce" id="' + c_id + '"></div>');
		$("#" + c_id).css({
			width: _length,
			height: _length,
			top: _top,
			left: _left,
			opacity: _opacity
		}).animate({
			top: -_length
		}, _time, function() {
			$(this).remove();
		});
		_id++;
	}
	Interval();
})