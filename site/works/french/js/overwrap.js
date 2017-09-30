var nowOverwrap="none";	//現在表示されているoverwrapのid名

//====================現在出ているoverwrapの横位置を調節する関数====================================
function setPositionOverwrap(){

	//何かしらのoverwrapが表示されていたら実行される
	if(nowOverwrap!="none"){
	
		var b_size;	//ブラウザサイズ
		var o_size;	//overwrapサイズ
		
		//ブラウザサイズを取得
		if(document.all)b_size = document.body.clientWidth;
		else			b_size = innerWidth;
		//overwrapサイズを取得
		o_size=document.getElementById(nowOverwrap).offsetWidth;
		//ブラウザサイズとwrapサイズの差分を取得
		var d=b_size-o_size;
		
		//差分が0px以上なら中央に設置させる
		if(d>0){
			document.getElementById(nowOverwrap).style.left=d/2+"px";
		}
		//差分が0px以下なら左端に固定させる
		else{
			document.getElementById(nowOverwrap).style.left="0px";
		}
	}
}

//============クリックしたボックスに応じたoverwrapタグを表示させる関数======================
function clickBox(id,str){
	//全てのoverwrapを非表示にします。
	deleteAllOverwrap();
	
	//暗幕の状態を引数で受け取って表示を切り替えます。
	document.getElementById("black").style.display = str;
	
	jqid="#" + id;		//jquery用のid名

	//引数がblockならid名のoverwrapを表示させる
	if(str=="block"){
		$(function () {
			 $(jqid).slideToggle(500);
		});
		nowOverwrap=id;					//現在の表示中のoverwrapのidを代入する
		setPositionOverwrap();	//表示中のoverwrapの横位置を調節する
		//表示中のoverwrapを縦位置を調節する。(スクロール位置の１００px下に表示させる)
		var obj_y=document.documentElement.scrollTop || document.body.scrollTop;
		document.getElementById(nowOverwrap).style.top =  obj_y+100+"px";
		
		//specialcharacterlistというクラス名を持つpタグに特殊文字リストを埋め込む
		searchSpecialCharacterList(nowOverwrap);
	}
	//blockでないなら、何も表示させない
	else{
		nowOverwrap="none";//nowOverwrapの値も"none"に設定しておく
	}
}

//==============暗幕をクリックしたときに行う関数===========================
function clickBlackCurtain(){
	//全てのoverwrapを非表示にする
	deleteAllOverwrap();
	//暗幕を非表示にする。
	document.getElementById("black").style.display = 'none';
	//現在表示中のidもnoneに設定しておく
	nowOverwrap="none";

}

//=========================全てのoverwrapを消去する関数。=================
function deleteAllOverwrap(){
	//overwraplistにあるdivタグをすべて取り出す。(ieはコメント部分も要素として取得するので注意、でも非表示にしか使わないため無問題)
	var overwrapList=document.getElementById('overwraplist').children;
	//全てのウインドウを消去します。
	for(var i=0;i<overwrapList.length;i++){
		overwrapList[i].style.display= 'none';
	}
}

//=============overwrap内に特殊記号を入れるクラス名(specialcharacterlist)を持つ要素を検索し、あった場合、特殊記号リストを代入するメソッド-===============
function searchSpecialCharacterList(id){
	//specialcharacterlistを持つ要素はpタグなので、表示されているoverwrap内にあるp要素を抽出する
	elementlist = document.getElementById(id).getElementsByTagName("p");

	for(var i=0;i<elementlist.length;i++){
		//alert(elementlist[i].getAttribute("class"));
		if(elementlist[i].getAttribute("class")=="specialcharacterlist"){
			//alert("specialcharacterlistを持つp要素がありました");
			//特殊単語の一覧も埋め込む
			var str = "<b>特殊文字一覧</b></br>";
			str += "À  Â  Æ  à  â  æ      ";
			str += "Ç  ç      ";
			str += "È  É  Ê  Ë  è  é  ê  ë      ";
			str += "Î  Ï  î  ï      ";
			str += "Ô  ô      ";
			str += "Ù  Û  Ü  ù  û  ü      ";
			str += "Œ  œ      ";
			str = str.replace(/\s/g,"&nbsp;");
			elementlist[i].innerHTML=str;
		}
	}
}
//=============ESCキーを押したらoverwrapを閉じるメソッド=====================================
$(document).keydown(ivnt_keydown);

function ivnt_keydown(e) {
    // ESCAPE key pressed
    if (nowOverwrap!="none" && e.keyCode == 27) {
	clickBlackCurtain();
    }
}
