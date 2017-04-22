(function() {
	mui.ready(function(){
		document.querySelector('#baomingBtn').addEventListener('tap',function(){
			mui.openWindow({
					id: 'baoming-confirm',
					url: '/pages/baoming-confirm.html',
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