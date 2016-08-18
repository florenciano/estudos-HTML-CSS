(function(){
	function swapImage () {
		if(window.innerWidth < 1200) {
			document.getElementById("target").setAttribute('src', 'assets/img/imagem-pequena.gif');
		} else {
			document.getElementById("target").setAttribute('src', 'assets/img/imagem-grande-1.gif');
		}
	}
	swapImage();
	window.addEventListener("resize", swapImage);
})();