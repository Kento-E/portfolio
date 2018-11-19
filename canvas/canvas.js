$(function() {
var canvas = document.getElementById('canvas');
if (!canvas || !canvas.getContext) return false;
	var ctx = canvas.getContext('2d'),
			startX,
			startY,
			x,
			y,
			borderWidth = ($('#canvas').outerWidth() - $('#canvas').innerWidth())/2,
			isDrawing = false;
	$('#canvas').bind('touchstart',function(e){
		isDrawing = true;
		event.preventDefault();
		startX = e.changedTouches[0].pageX;
		startY = e.changedTouches[0].pageY;
	})
		.bind('touchmove',function(e){
			if (!isDrawing) return;
			event.preventDefault();
			x = e.changedTouches[0].pageX - $(this).offset().left - borderWidth;
			y = e.changedTouches[0].pageY - $(this).offset().top - borderWidth;
			ctx.beginPath();
			ctx.moveTo(startX, startY);
			ctx.lineTo(x, y);
			ctx.stroke();
			startX = x;
			startY = y;
		})
		.bind('touchend',function(){
			isDrawing = false;
		})
		.bind('touchcancel',function(){
			isDrawing = false;
	});
	$('#penColor').change(function(){
		ctx.strokeStyle = $(this).val();
	});
	$('#penWidth').change(function(){
		ctx.lineWidth = $(this).val();
	});
	function clear(){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	};
	$('#erase').click(function(){
		if(!confirm('本当に消去しますか？')) return;
		clear();
	});
	$('#save').click(function(){
	//  var timeStamp = new Date().format('yy-mm-dd-HH-mm-ss');
		var img = $('<img>').attr({
			src: canvas.toDataURL()
		});
		var link = $('<a>').attr({
			href: canvas.toDataURL().replace('image/png','application/cotet-stream'),
			download: 'canvas_' + moment().format('YY-MM-DD-HH-mm-ss') + '.png'
		});
		$('#gallery').append(link.append(img.addClass('thumbs')));
		clear();
	});
});
