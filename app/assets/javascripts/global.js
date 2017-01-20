
window.addEventListener("load", function(){
	var modal = document.getElementsByClassName("modal");
	var pictures = document.getElementsByClassName("thumbnail");


	for(i=0; i < pictures.length; i++){
		pictures[i].addEventListener("click", function(e){
			var content = document.getElementById("modalImage");
			var clicked = this.getAttribute("id");
			
			content.setAttribute("src", "assets/" + clicked);

			
		});
	};
});