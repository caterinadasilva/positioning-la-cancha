function laCancha() {
	var container = document.getElementById('cancha');

	var cajaInt = document.createElement('div');
	cajaInt.classList.add('caja', 'interior');

	var cajaPeq1 = document.createElement('div');
	cajaPeq1.classList.add('caja', 'peque', 'izq');
	var cajaPeq2 = document.createElement('div');
	cajaPeq2.classList.add('caja', 'peque', 'der');
	
	var cajaLine = document.createElement('div');
	cajaLine.classList.add('caja', 'line');

	var cajaCirc = document.createElement('div');
	cajaCirc.classList.add('caja', 'circ');

	function Balon(posX, posY) {
		this.posX = posX;
		this.posY = posY;
		this.img = new Image();
		this.img.src = 'assets/img/bola.png';

		this.print = function() {
			var pelota = document.createElement('div');
			pelota.classList.add('pelota')
			pelota.style.left = this.posX + '%';
			pelota.style.top = this.posY + '%';
			var foto = this.img;
			pelota.appendChild(foto);
			cajaInt.appendChild(pelota);
		}
	}

	function printPelotas() {
		var pelota1 = new Balon('19', '26');
		var pelota2 = new Balon('45', '15');
		var pelota3 = new Balon('77', '70');

		pelota1.print();
		pelota2.print();
		pelota3.print();
	}

	cajaInt.appendChild(cajaCirc);
	cajaInt.appendChild(cajaLine);
	cajaInt.appendChild(cajaPeq1);
	cajaInt.appendChild(cajaPeq2);
	printPelotas();
	container.appendChild(cajaInt);
}