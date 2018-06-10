document.addEventListener("DOMContentLoaded",
	function(event){
		document.querySelector("button")
		.addEventListener("click",function () {
	ajaxutils.sendGetRequest("data/data.json",
		function(resp){
			var message=resp.user;
			document.querySelector("#content").innerHTML="<h2>gr "+message+"</h2>";
		});
});
	})