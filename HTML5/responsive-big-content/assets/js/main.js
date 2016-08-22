(function(){
	function replaceImg (el, actualPath, newPath) {
		if (window.innerWidth > 1199) {
			document.getElementById(el).setAttribute('src', newPath);
		} else {
			document.getElementById(el).setAttribute('src', actualPath);
		}
	}
	replaceImg('target', 'assets/img/imagem-pequena.gif','assets/img/imagem-grande-1.gif');
	window.addEventListener('resize', function(){
		replaceImg('target', 'assets/img/imagem-pequena.gif','assets/img/imagem-grande-1.gif');
	});
})();