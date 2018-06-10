(function (global) {
	

		var ajaxutils={};

		ajaxutils.sendGetRequest=function(requestUrl,requestHandler,isJsontrue){
			var request=new XMLHttpRequest();
			request.onreadystatechange=function(){
				handleResponse(request,requestHandler,isJsontrue);
			}
			request.open("GET",requestUrl,true);
			request.send(null);
		}
		function handleResponse(request,requestHandler,isJsontrue){
			if ((request.readyState==4) && (request.status==200)) {
				if (isJsontrue==undefined) {
					isJsontrue==true;
				}
				if (isJsontrue) {
					requestHandler(JSON.prase(request.responseText));
				}
				else{
					requestHandler(request.responseText);
				}
			}
				
			}

		global.ajaxutils=ajaxutils;


	
	
})(window);