(function() {
	mui.ready(function() {
		mui('.mine').on('tap','a',function(){
			var id = this.getAttribute("id");
			var href = this.getAttribute("href");
			if(href=='#') return; 
			mui.openWindow({
					id: id,
					url: href,
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