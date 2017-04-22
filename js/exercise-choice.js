(function() {
	var v = new Vue({
		el:"#list"
	});
	mui.plusReady(function() {
		mui('.mui-scroll-wrapper').scroll({
			indicators: false //是否显示滚动条
		});
		document.querySelector('#closeBtn').addEventListener('tap',function(){
			plus.webview.currentWebview().close();
		});
		//calcCellWidth();
	});
	function calcCellWidth(){
		var docWidth = document.body.clientWidth;
		if(docWidth){
			var cellWidth = docWidth/5-12;
			mui('li').each(function(index,item){
				item.style.width=cellWidth+'px'; 
			});
			
		}
		
		
	}
})();