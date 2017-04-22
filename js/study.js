(function() {
	mui.ready(function() {
		mui(".mui-progressbar").each(function() {
			mui(this).progressbar({ progress: this.getAttribute("data-progress") }).show();
		}); 
		mui('.mui-slider-group').on('tap','a',function(){
			var id = this.getAttribute("id");
			var href = this.getAttribute("href");
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