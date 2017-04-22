(function() {
	var exerciseChoice;
	mui.ready(function() {
		mui('.mui-scroll-wrapper').scroll({
			indicators: false //是否显示滚动条
		});
		setScrollHeight();  
		//选择习题按钮事件
		document.querySelector('#choiceBtn').addEventListener('tap',function(){
			if(exerciseChoice) exerciseChoice.close(); 
			exerciseChoice=plus.webview.create('/pages/exercise-choice.html','exercise-choice',{bottom:0,height:'350px',position:'absolute',scrollIndicator:'none',background:'rgba(0,0,0,0.5)'},{preload:"preload webview"});
			exerciseChoice.show('slide-in-bottom');
		});
	});
	function setScrollHeight(){
		var documentHeight = document.body.clientHeight;
		if(documentHeight){
			mui('.mui-slider-group')[0].style.height=(documentHeight-90)+'px'; 
		}
	}
})();