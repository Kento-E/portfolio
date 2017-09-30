window.onload = function(){
	MyInit();
	
	var userAgent = window.navigator.userAgent.toLowerCase();
	if (userAgent.indexOf('msie') != -1) { //IDの場合呼ばれる
		return;
	}
	else{
		playSound('audio1');
	}
}

//全問題の解答完了リスト
var compList=new Array(false,false,false,false,false,false,false,false);
//各問題の解答リスト
var answer1 = new Array( 'toi', 'toi', 'vous', 'vous', 'toi' );

var answer2 = new Array('va','Ça','toi','bien',
						'vous','je',/*'bien',*/'vous','vais','bien',
						'au','revoir',
						'À','Salut','demain');

var answer3 = new Array( 'Ça', "C'", 'Ça', 'ça', 'Ce', 'ce' );

var answer4 = new Array('Bon' ,'appétit',                 'Bon', 'voyage',                    'Bonne' ,'nuit');

var answer5 = new Array( 'nne', 'n', 'n', 'nne', 'n', 'nne' );

var answer6 = new Array( 'q6_1_1', 'q6_2_2', 'q6_3_1', 'q6_4_1', 'q6_5a_2', 'q6_5b_2', 'q6_6_2', 'q6_7a_1', 'q6_7b_2', 'q6_8_1', 'q6_9a_2', 'q6_9b_2', 'q6_9c_1', 'q6_9d_2', 'q6_10a_2', 'q6_10b_2', 'q6_10c_2', 'q6_10d_2', 'q6_10e_2', 'q6_10f_2', 'q6_10g_2', 'q6_11a_1', 'q6_11b_2', 'q6_11c_2' );

var answer7 = new Array();
answer7[0] = new Array(true,true);
answer7[1] = new Array(false,true);
answer7[2] = new Array(true,false);
answer7[3] = new Array(false,true);
answer7[4] = new Array(true,false);
answer7[5] = new Array(true,false);
answer7[6] = new Array(true,false);
answer7[7] = new Array(true,false);

var answer8 = new Array( 'Bonjour','comment','Je','merci','vous', 'Bien', 'Salut', 'Tu','bien','toi','Ça' );

//===============問題画面①の答え合わせをする関数===================
function QuestionCheck1()	{
	//穴埋め問題問題判定メソッドを実行させる
	if( FillBlankAnswerCheck("question1",answer1)==true ){
		compList[1-1]=true;
	}else{
		compList[1-1]=false;
	}

	//全問題の解答状況の確認
	checkCompList();
	//結果をサーバに転送する(正解か不正解によって転送内容が変わる)
	sendEachResult(1-1, compList[1-1]);
}

//===============問題画面②の答え合わせをする関数===================
function QuestionCheck2(){
	//穴埋め問題判定メソッドを実行させる
	if( FillBlankAnswerCheck("question2",answer2)==true ){
		compList[2-1]=true;
	}else{
		compList[2-1]=false;
	}

	//全問題の解答状況の確認
	checkCompList();
	//結果をサーバに転送する(正解か不正解によって転送内容が変わる)
	sendEachResult(2-1, compList[2-1]);
}

//===============問題画面③の答え合わせをする関数===================
function QuestionCheck3(){
	//穴埋め問題判定メソッドを実行させる
	if( FillBlankAnswerCheck("question3",answer3)==true ){
		compList[3-1]=true;
	}else{
		compList[3-1]=false;
	}

	//全問題の解答状況の確認
	checkCompList();
	//結果をサーバに転送する(正解か不正解によって転送内容が変わる)
	sendEachResult(3-1, compList[3-1]);
}

//===============問題画面④の答え合わせをする関数===================
function QuestionCheck4(){
	//穴埋め問題判定メソッドを実行させる
	if( FillBlankAnswerCheck("question4",answer4)==true ){
		compList[4-1]=true;
	}else{
		compList[4-1]=false;
	}

	//全問題の解答状況の確認
	checkCompList();
	//結果をサーバに転送する(正解か不正解によって転送内容が変わる)
	sendEachResult(4-1, compList[4-1]);
}

//===============問題画面⑤の答え合わせをする関数===================
function QuestionCheck5()	{
	//穴埋め問題問題判定メソッドを実行させる
	if( FillBlankAnswerCheck("question5",answer5)==true ){
		compList[5-1]=true;
	}else{
		compList[5-1]=false;
	}

	//全問題の解答状況の確認
	checkCompList();
	//結果をサーバに転送する(正解か不正解によって転送内容が変わる)
	sendEachResult(5-1, compList[5-1]);
}

//===============問題画面⑥の答え合わせをする関数===================
function QuestionCheck6()	{
	//ラジオボタン問題判定メソッドを実行させる
	if( RadioButtonAnswerCheck("question6",answer6)==true ){
		compList[6-1]=true;
	}else{
		compList[6-1]=false;
	}

	//全問題の解答状況の確認
	checkCompList();
	//結果をサーバに転送する(正解か不正解によって転送内容が変わる)
	sendEachResult(6-1, compList[6-1]);
}

//===============問題画面⑦の答え合わせをする関数===================
function QuestionCheck7()	{
	//チェックボックス題判定メソッドを実行させる
	if( CheckBoxAnswerCheck("question7",answer7)==true ){
		compList[7-1]=true;
	}else{
		compList[7-1]=false;
	}

	//全問題の解答状況の確認
	checkCompList();
	//結果をサーバに転送する(正解か不正解によって転送内容が変わる)
	sendEachResult(7-1, compList[7-1]);
}

//===============問題画面⑧の答え合わせをする関数===================
function QuestionCheck8()	{
	//穴埋め問題問題判定メソッドを実行させる
	if( FillBlankAnswerCheck("question8",answer8)==true ){
		compList[8-1]=true;
	}else{
		compList[8-1]=false;
	}

	//全問題の解答状況の確認
	checkCompList();
	//結果をサーバに転送する(正解か不正解によって転送内容が変わる)
	sendEachResult(8-1, compList[8-1]);
}
//===============全問題が解答済みか確認するメソッド===================
function checkCompList(){
	var flag=true;
	//判定開始
	for(var i=0;i<compList.length;i++){
		if(compList[i]!=true)flag=false;
	}
	
	//全問正解していれば教材が完了したことを送信、その後教材を終了するためのボタンを用意する。
	if(flag==true){
		document.getElementById("finishButton").style.display = "block"; //右下の終了ボタンを出現させる
		sendCompleteAns(); //学習が完了したことをSCORMのAPIを用いて送信する
		//alert("全問題の解答が終わりました\n教材を正常に終了させるには右下のボタンをクリックしてください");
	} else {
		//document.getElementById("finishButton").style.display = "none"; //右下の終了ボタンを消す
		document.getElementById("finishButton").style.display = "block";	//右下のボタンを出現させる		
		sendInCompleteAns();
	}
}

//=============ページ移動を行うメソッド================================
function movePage(page1, page2, blockbox, nonebox){
	//背景画像を引数で渡されたurlに置き換える
	document.getElementById("background1").style.backgroundImage="url("+page1+")";
	document.getElementById("backgournd2").style.backgroundImage="url("+page2+")";
	//指定されたブロックリストを表示させる
	document.getElementById( blockbox ).style.display="block";
	document.getElementById( nonebox ).style.display="none";
}

//=============クリックされた問題の音声プレーヤーを出現させ、再生させるメソッド======================
function appearAudio(num,url,place){
		var str ="<p>"+num+"</p>";
		str += QT_GenerateOBJECTText(url,'300px','16px','','obj#id', 'audio', 'emb#name', 'audio', 'autoplay', 'true','scale','aspect','controller','true');
		document.getElementById(place).innerHTML = str;
}

//------------イベント時にaudioタグのidのmp3を再生するメソッド-----------------------
var audioFlag = {audio1: false,audio5: false, audio7: false, audio8: false};
function playSound(id){
		
	var audio = document.getElementById(id);
	if (audioFlag[id] == false)
	{
		audio.play();
	}
	audioFlag[id] = true;
}

//=============Enterキー押下でその問題の答え合わせを実行するメソッド==================
$(document).keydown(QuestionCheck_keydown);

function QuestionCheck_keydown(e) {
	if(nowOverwrap!="none" && e.keyCode == 13){		 // Enter key pressed
		if(nowOverwrap=="overwrap1"){
		QuestionCheck1(); 
		}
		else if(nowOverwrap=="overwrap2"){
		QuestionCheck2(); 
		}
		else if(nowOverwrap=="overwrap3"){
		QuestionCheck3(); 
		}
		else if(nowOverwrap=="overwrap4"){
		QuestionCheck4(); 
		}
		else if(nowOverwrap=="overwrap5"){
		QuestionCheck5(); 
		}
		else if(nowOverwrap=="overwrap6"){
		QuestionCheck6(); 
		}
		else if(nowOverwrap=="overwrap7"){
		QuestionCheck7(); 
		}
		else if(nowOverwrap=="overwrap8"){
		QuestionCheck8(); 
		}
 }	else if(nowOverwrap=="none" && e.keyCode == 13 && document.getElementById("finishButton").style.display == "block"){
	 finishContents();
	}
}
