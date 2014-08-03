var canvas = document.getElementById("quadro");
// inicia o desenho em canvas em formato '2d'
var ctx = canvas.getContext("2d");

	/*
	// definindo contornos
	ctx.strokeStyle = "orange";
	ctx.lineWidth = 1;
	ctx.strokeRect(100,20,80,120);

	// definindo outro contorno
	ctx.strokeStyle = "blue";
	ctx.lineWidth = 4;
	ctx.strokeRect(160,100,100,50);

	// definindo formas retangulares
	ctx.fillStyle = "red";
	ctx.fillRect(150,60,200,70);
	ctx.strokeStyle = "green";
	ctx.lineWidth = 1;
	ctx.strokeRect(149,59,202,72);

	// limpando formas retangulares
	ctx.clearRect(160,65,20,20);

	// aplicando sombras
	ctx.fillStyle = "#ccc";
	ctx.shadowColor = "#666";
	ctx.shadowOffsetX = 0;
	ctx.shadowOffsetY = 0;
	ctx.shadowBlur = 20;
	ctx.fillRect(200,200,50,50);
	*/

	/*
	// desenhando paths
	ctx.beginPath();
	ctx.strokeStyle = "red";
	ctx.lineWidth = 2;
	ctx.moveTo(20,20); // posiciona a pena de desenho
	ctx.lineTo(80,120); // desenha a reta a partir da posicao da pena
	ctx.stroke(); // aplica o estilo definido

	ctx.beginPath();
	ctx.strokeStyle = "blue";
	ctx.lineWidth = 2;
	ctx.moveTo(80,120);
	ctx.lineTo(150,30);
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle = "green";
	ctx.lineWidth = 2;
	ctx.moveTo(150,30);
	ctx.lineTo(350,100);
	ctx.stroke();
	*/

	/*
	// desenhando arcos
	ctx.beginPath();
	ctx.strokeStyle = "orange";
	ctx.moveTo(20,50);
	ctx.arcTo(100,50,100,130,90); // x1, y1 coordenada iniciais; x2, y2 coordenadas finais e raio
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle = "pink";
	ctx.lineWidth = 3;
	ctx.moveTo(100,130);
	ctx.arcTo(200,130,200,30,100); // x1, y1 coordenada iniciais; x2, y2 coordenadas finais e raio
	ctx.stroke();

	ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.strokeStyle = "#ccc";
	ctx.fillStyle = "#f5f5f5"
	ctx.arc(280,240,40,20,Math.PI,true);
	// x,y,r, angulo inicial, angulo final, sentido 'horário' ou 'antihorário'
	ctx.fill();
	ctx.stroke();
	*/

	// fechando paths
	ctx.lineWidth = 2;
	ctx.moveTo(20,20);
	ctx.strokeStyle = "green";
	ctx.lineTo(80,190);
	ctx.lineTo(180,160);
	ctx.lineTo(220,40);
	ctx.closePath();
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle = "gray";
	ctx.arc(300,100,80,190,0,-3/2*Math.PI, true);
	ctx.closePath();
	ctx.stroke();


