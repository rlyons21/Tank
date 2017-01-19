
window.addEventListener("load", function(){
	var modal = document.getElementsByClassName("modal");
	var pictures = document.getElementsByClassName("thumbnail");


	for(i=0; i < pictures.length; i++){
		pictures[i].addEventListener("click", function(e){
			e.preventDefault();
			modal[0].style.display = "block";
		});
	};
});