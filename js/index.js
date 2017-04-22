(function() {
	mui.init({
  		statusBarBackground: '#259b24',
  	});
	var slider = mui("#slider");
	slider.slider({
		interval: 5000
	});
	mui.plusReady(function(){
		plus.navigator.setStatusBarStyle('UIStatusBarStyleBlackOpaque');
		mui('.mui-table-view,.mui-bar-tab').on('tap', 'a', function() {
				var id = this.getAttribute("id");
				var type = this.getAttribute("login-type");
				var href = this.getAttribute("href");
				if(href=='#') return;
				if(type=='1'){
					if(!isLogin()){
						openLoginWindow();
						return;
					}
				} 
				if(mui.os.ios){
					var webview_style = {
						popGesture: "close"
					};
				}
				mui.openWindow({
					id: id,
					url: href,
					styles: webview_style,
					show: {
						aniShow: 'slide-in-right'
					},
					waiting: {
						autoShow: false
					}
				});
			});
	});
})();