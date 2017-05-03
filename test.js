function myJsonp(url,params,fn){
	var scrip=document.createElement('script')
	var str='?'
	for(var k in params){
		str += k+'='+params[k]+'&'
	}
	var funcName='testFunc'+Math.random().toString().substr(2)
	scrip.src=url+str+'callback='+funcName
	window[funcName]=function(data){
		fn(data)
	}
	document.body.appendChild(scrip)
}
myJsonp('http://api.douban.com/v2/movie/in_theaters',{start:1,count:3},function(data){
	console.log(data)
})