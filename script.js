function calcular() {
	let vitoria = parseInt(document.getElementById("vitoria").value);
	let derrota = parseInt(document.getElementById("derrota").value);
	let saldo = vitoria - derrota;
	let res ='';
	
		if (saldo <= 10){
			res = 'Ferro';
		}else if ((saldo >10) && (saldo <= 20)){
			res = 'Bronze';
		}else if ((saldo >20) && (saldo <= 50)){
			res = 'Prata';
		}else if ((saldo >50) && (saldo <= 80)){
			res = 'Ouro';
		}else if ((saldo >81) && (saldo <= 90)){
			res = 'Diamante';
		}else if ((saldo >90) && (saldo <= 100)){
			res = 'Lendário';
		}else if (saldo >100) {
			res = 'Imortal';
		}
		document.getElementById("resultado").innerHTML = '<font color=red>O Herói tem de saldo de '+saldo+' está no nível de '+res+'</font>';
	
}