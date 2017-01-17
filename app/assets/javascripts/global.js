
window.addEventListener("load", function(){
	var modal = document.getElementsByClassName("modal");
	var pictures = document.getElementsByClassName("thumbnail");

	debugger;

	for(i=0; i<pictures.length; i++){
		pictures[i].addEventListener("click", function(e){
			debugger;
			e.preventDefault();
			modal.style.display = "block";
		});
	};
});