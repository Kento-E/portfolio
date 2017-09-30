/*ラジオボタン問題のチェックを行うメソッド
 *使用例：FormIdタグ内にある全てのラジオボタン要素とAnswerの中身を比較して、結果をresultタグ内に表示する
 *注意：FormIdタグ内に設置する問題において、1問につき一つのdiv要素で括ること。
 *また、問題に応じたボックスリストの内容も変化させる処理も含むため、FormIdタグ名は"question_○"に設定しておくこと。
 *FormId・・・ラジオボタン問題が存在するidタグ
 *Answer・・・解答が格納された配列
*/
function RadioButtonAnswerCheck(FormId,Answer)	{

	//全問正解していればフラグがtrueのままになる変数
	var CheckFlag = true;
	//FormId内にあるすべてのdiv要素を取得する。一つのdiv要素がひとつの問題となっている。
	var questionList=document.getElementById(FormId).getElementsByTagName('div');
	//問題に対応している赤枠ボックス。問題番号はFormIdから取り出している
	var box=document.getElementById("box"+FormId.replace("question",""));
	//結果を表示する場所。問題番号はFormIdから取り出している
	var result = document.getElementById("result"+FormId.replace("question",""));
	
	//問題の全チェック
	for(var i=0;i<Answer.length;i++){
		//正解部分をチェックしていれば基本的に何もしない
		if( document.getElementById(Answer[i]).checked )	{
			questionList[i].style.backgroundColor="";
		}
		//正解部分をチェックしていなければ、全問正解フラグをへし折り、間違えた問題の背景を赤くする
		else{
			questionList[i].style.backgroundColor="#F08080";
			CheckFlag=false;
		}
	}

	//結果を出力する
	if(CheckFlag==true){
		result.innerHTML="全問正解しました。";
		result.style.color="#000000";
		box.getElementsByTagName("p")[0].style.display="block";
		return true;
	}else{
		result.innerHTML="赤色の箇所が間違っています。";
		result.style.color="red";
		box.getElementsByTagName("p")[0].style.display="none";
		return false;
	}
}


/*穴埋め問題のチェックを行うメソッド
 *使用例：FormIdタグ内にある全ての空白要素とAnswerの中身を比較して、結果をresultタグ内に表示する
 *また、問題に応じたボックスリストの内容も変化させる処理も含むため、FormIdタグ名は"question_○"に設定しておくこと。
 *FormId・・・穴埋め問題が存在するidタグ
 *Answer・・・解答が格納された配列
*/
function FillBlankAnswerCheck(FormId,Answer)	{

	//全問正解していればフラグがtrueのままになる変数
	var CheckFlag = true;
	//FormId内にあるすべての空白要素を取得する
	var AllList = document.getElementById(FormId).getElementsByTagName('input');	//全てのinput要素
	var BlankList = new Array();																									//全てのinput要素からtextのtype属性のみを集めた要素配列
	for(var i=0;i<AllList.length;i++){
		if(AllList[i].type=="text"){
			BlankList.push(AllList[i]);
		}
	}
	//問題に対応しているボックス。問題番号はFormIdから取り出している
	var box=document.getElementById("box"+FormId.replace("question",""));
	//結果を表示する場所。問題番号はFormIdから取り出している
	var result = document.getElementById("result"+FormId.replace("question",""));
	
	
	//全問題の正誤チェックを行う
	for(var i=0; i<Answer.length; i++)	{
		//テキストボックスの中身を取り出す
		var str = BlankList[i].value;
		//テキストボックスに改行、タブ、半角スペース、全角スペースがあれば取り除く
		str = str.replace(/\s|　/g,"");
		//解答において、複数の選択肢がある場合、ここで区切る
		var ans = Answer[i].split("/");
		//テキストボックスの中身が解答リストのどれか一つでも一致していればtrueに変わる変数
		var f = false;
		//全解答候補の数だけループする(正解していればその場で脱出)
		for(var j=0;j<ans.length;j++){
			//(不必要なものを取り除いた)テキストボックスと解答が一致していれば以下の処理を行い、脱出する。
			if( ans[j] == str )	{
				BlankList[i].style.backgroundColor="";
				f=true;
				break;
			}
		}
		//解答リストのいずれにも一致していない場合、全問正解フラグをへし折り、テキストの背景を赤くする
		if(f==false){
			BlankList[i].style.backgroundColor="#F08080";
			CheckFlag = false;
		}
	}

	//結果を出力する
	if(CheckFlag==true){
		result.innerHTML="全問正解しました。";
		result.style.color="#000000";
		box.getElementsByTagName("p")[0].style.display="block";
		return true;
	}else{
		result.innerHTML="赤色の箇所が間違っています。";
		result.style.color="red";
		box.getElementsByTagName("p")[0].style.display="none";
		return false;
	}
}

function CheckBoxAnswerCheck(FormId,Answer)	{

	//全問正解していればフラグがtrueのままになる変数
	var CheckFlag = true;
	//FormId内にあるすべてのdiv要素を取得する。一つのdiv要素がひとつの問題となっている。
	var questionList=document.getElementById(FormId).getElementsByTagName('div');	
	//結果を表示する場所。問題番号はFormIdから取り出している
	var result = document.getElementById("result"+FormId.replace("question",""));
	
	var box=document.getElementById("box"+FormId.replace("question",""));

	
	
	//全問題の正誤チェックを行う
	for(var i=0; i<Answer.length; i++)	{
		var arrAns = Answer[i];
		var correct = true;
		for(var j=0; j<arrAns.length; j++){
			var idAns = document.getElementById(FormId.replace("uestion","")+"_"+(i+1)+"_"+(j+1));
			
			if(idAns.checked != arrAns[j]) {
				CheckFlag = false;
				correct = false;
			}
		}
		
		if (correct == true) {
			questionList[i].style.backgroundColor="";
		}　else {
			questionList[i].style.backgroundColor="#F08080";
		}
	}
	
	//結果を出力する
	if(CheckFlag==true){
		result.innerHTML="全問正解しました。";
		result.style.color="#000000";
		box.getElementsByTagName("p")[0].style.display="block";
		return true;
	} else {
		result.innerHTML= "赤色の箇所が間違っています。";
		result.style.color="red";
		box.getElementsByTagName("p")[0].style.display="none";
		return false;
	}
}

function true2one(num) //true_to_1をジョークで命名
　{if(num == true)
　　　　return 1;
　　else
　　　　return 0;
　}
