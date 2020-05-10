function valida_email(id) {
	// funçao para validar email
	var email = document.getElementById(id).value;
	var alertp = document.getElementById("alert_tamanho_char");
	console.log(email);
	if (email.length < 5 & email.search("@") == -1) {
		alertp.style.display = "inline";
	}else{
		alertp.style.display = "none";
	}
}

function valida_senha(id){
	/// funaçao para validaçao de senha 
	var senha = document.getElementById(id).value;
	var alert_S = document.getElementById("alert_tamanho_char_senha");
	console.log(senha);
	if (senha.length < 5){
		alert_S.style.display = "inline";
	} else{
		alert_S.style.display = "none";
	}
}	
/// nao funcional
function mostra_senha(senha,ver_senha){
	var senha = document.getElementById(senha).value;
	var checkbox = document.getElementById("ver_senha");
	if(checkbox.checked == true){
		senha.setAttribute("type","text");
	}else{
		senha.setAttribusste("type","password");
	}

}