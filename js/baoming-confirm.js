(function() {
	mui.ready(function(){
		document.querySelector('#comfirmOrder').addEventListener('tap',function(){
			mui.openWindow({
					id: 'baoming-pay',
					url: '/pages/baoming-pay.html',
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