var naoForSorteado = true;
var numerosSorteados = [];

while(naoForSorteado) {
	var numeroSorteado = Math.random() * 80

	var numeroSorteadoInteiro = parseInt( numeroSorteado)
	
	var naoFoiSorteado = numerosSorteados.indexOf(numeroSorteadoInteiro) == -1
	
	if (naoFoiSorteado) {
		numerosSorteados.push(numeroSorteadoInteiro);	
		alert(numeroSorteadoInteiro);
	}
	console.log(numerosSorteados)
	
	if(numerosSorteados.length == 10){
		break;
	}


}
