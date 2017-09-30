//APIインスタンスの探索-----------------------------------------------------------------
var API=null;
function FindAPI(win){
	if ((typeof(win.API_1484_11) != "undefined") && (win.API_1484_11 !=null)){
	return win.API_1484_11;
	}
	else if (win.location == top.location) {
		return null;
	} 
	else {
		return FindAPI(win.parent);
	}
}

//通信セッションの開始------------------------------------------------------------------
function MyInit(){
		//API フレームを見つける
	if ((window.parent != null) && (window.parent != window)) {
		API = FindAPI(window.parent);
	}
		// ウィンドウ・オープナにあるAPI フレームを見つける
	if ((API == null) && (window.opener != null)){
		API = FindAPI(window.opener);
	}
	if (API != null){
		API.Initialize("");
		//解答が未完了であることを送信する
		API.SetValue("cmi.completion_status", "uncompleted");
		API.SetValue("cmi.success_status","failed");
		//各問題のインタラクション(問題設定)をセットする
		setInfo("0" , "question1", "穴埋め問題",				"fill-in", 	"0.2", answer1);
		setInfo("1" , "question2", "穴埋め問題", 				"fill-in", 	"0.2", answer2);
		setInfo("2" , "question3", "穴埋め問題",				"fill-in", 	"0.2", answer3);
		setInfo("3" , "question4", "穴埋め問題",				"fill-in", 	"0.2", answer4);
		setInfo("4" , "question5", "穴埋め問題",	"fill-in", 	"0.2", answer5);
		setInfo("5" , "question6", "選択問題",					"choice", 	"0.2", answer6);
		setInfo("6" , "question7", "選択問題",					"choice", 	"0.2", answer7);
		setInfo("7" , "question8", "穴埋め問題",					"fill-in", 	"0.2", answer8);
		//各問題の解答状態をリセットする(教材を中断された場合の対策処理)
		sendEachResult(0, false);
		sendEachResult(1, false);
		sendEachResult(2, false);
		sendEachResult(3, false);
		sendEachResult(4, false);
		sendEachResult(5, false);
		sendEachResult(6, false);
		sendEachResult(7, false);
		API.Commit("");
	}
}

//Interaction（問題）の情報設定--------------------------------------------------------------
function setInfo(num, id, description, type, weighting, correct){
	string1="cmi.interactions."+num;			//基本となるインタラクション文字列

	//問題の識別子(ID)の設定
	string2=string1+".id";
	API.SetValue(string2,id);
	//問題の説明について設定
	string2=string1+".description";
	API.SetValue(string2,description);
	//問題の種類の設定
	string2=string1+".type";
	API.SetValue(string2,type);
	//得点の重み付け
	string2=string1+".weighting";
	API.SetValue(string2,weighting);
	//問題の答え
	string2=string1+".correct_responses.0.pattern";
	API.SetValue(string2,correct);
}

//通信セッションの終了------------------------------------------------------------------------\
function MyFin(){
	if (API != null){
		API.Terminate("");
	}
}

//全解答が完了したことを送信するメソッド----------------------------------------
function sendCompleteAns(){
	
	API.SetValue("cmi.completion_status", "completed");//学習者がSCOを完了したかどうか
	API.SetValue("cmi.success_status","passed");//学習者がSCOを合格したかどうか
	API.Commit("");
}



function sendInCompleteAns(){
	
	API.SetValue("cmi.completion_status", "completed");//学習者がSCOを完了したかどうか
	API.SetValue("cmi.success_status","failed");//学習者がSCOを合格したかどうか
	API.Commit("");
}




//各問題の結果を送る時に使うメソッド-----------------------------------------------------
//num・・・その問題に対応したインタラクション番号。基本的に送る問題番号のひとつ前の番号が渡される(2番目の問題を送る時は引数を1とする)
//result・・・その問題の結果。trueが格納されていれば正解したものとなり、それ以外は不正解であるという結果を送る
function sendEachResult(num, result){
	//引数を元にサーバに送る内容をセットする
	if(result == true)API.SetValue("cmi.interactions."+num+".result","correct");
	else							API.SetValue("cmi.interactions."+num+".result","incorrect");
	//結果をサーバに転送する
	API.Commit("");																				
}

//教材を正式に終了するメソッド。確認画面で「はい」を押すことで終了する-------------------
function finishContents(){
	if(window.confirm("解答結果を送信しますか？\n")){
		API.SetValue("adl.nav.request","exitAll");
		MyFin();
	}else{
		return false;
	}
}