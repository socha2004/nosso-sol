function formatarCNPJ(cnpj) {
    // Remove caracteres não numéricos
    cnpj = cnpj.replace(/\D/g, '');

    // Adiciona pontos e barras
    cnpj = cnpj.replace(/^(\d{2})(\d)/, '$1.$2');
    cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    cnpj = cnpj.replace(/\.(\d{3})(\d)/, '.$1/$2');
    cnpj = cnpj.replace(/(\d{4})(\d)/, '$1-$2');

    return cnpj;
  }

  function formatarInputCNPJ() {
    let inputCNPJ = document.getElementById('cnpj');
    inputCNPJ.value = formatarCNPJ(inputCNPJ.value);
  }

function verificaIgualdade(){
    let senha = document.getElementById("senha").value;
    let confirma_senha = document.getElementById("confirma_senha").value;



    if(senha === confirma_senha){
        window.alert("Cadastro realizado!");
    }
    else{
        window.alert("As senhas não conferem, tente novamente");
    }
}

function apenasLetras(event) {
    // Obtém o código da tecla pressionada
    var codigoTecla = event.which || event.keyCode;

    // Verifica se a tecla pressionada é uma letra ou espaço
    if ((codigoTecla >= 65 && codigoTecla <= 90) || (codigoTecla >= 97 && codigoTecla <= 122) || codigoTecla === 32) {
        return true; // Permite a entrada da letra ou espaço
    } else {
      event.preventDefault(); // Impede a entrada de outros caracteres
      return false;
    }
  }