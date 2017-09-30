// JavaScript Document
//headerバー固定==================================
jQuery(function($) {
	var header = $('header'),
		offset = header.offset();
	$(window).scroll(function () {
	  if($(window).scrollTop() > offset.top) {
		header.addClass('fixed');
	  }else{
		header.removeClass('fixed');
	  }
	});
});

//スムーススクロール===========================================================
$(function(){
	var header = $('header');
	//ヘッダーの高さを取得し、そこにさらに任意の高さ（ピクセル）を足す
	var headerHight = header.outerHeight() + 15;
	// #で始まるアンカーをクリックした場合に処理
	$('a[href^=#]').click(function(){
		// スクロールの速度
		var speed = 600; // ミリ秒
		// アンカーの値取得
		var href= $(this).attr("href");
		// 移動先を取得
		var target = $(href == "#" || href == "" ? 'html' : href);
		// 移動先を数値で取得
		var position = target.offset().top - headerHight;//移動先からヘッダーの高さを引く
		// スムーススクロール
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	   });
});

//スクロールでPAGE TOPを表示させる==========================================================
$(function() {
    var topBtn = $('#page-top');    
    //var main = $('main');    
    topBtn.hide();
	
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        }else{
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 1
        }, 600);
        return false;
    });
});

//flexsilder==========================================================
$(window).load(function() {
  $('.flexslider').flexslider({
	//基本的なオプション
	animation:"slide",
	slideshow:false,
	//ユーザビリティに関するオプション
	pauseOnAction:false,
  });
});
