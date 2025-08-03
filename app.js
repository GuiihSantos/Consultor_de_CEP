const cepProcurado = document.getElementById("cepProcurado");
const imgId = document.querySelectorAll(".clipboard-copy img");

document.getElementById("buttonGerarCep").addEventListener("click", geraCep);
document.addEventListener("keyup", geraCepEnter);
imgId.forEach((el) => {
  el.addEventListener("click", () => copiaInfo(el.id));
});

function geraCepEnter(e) {
  if (e.key === "Enter") {
    geraCep();
  }
}

cepProcurado.oninput = () => {
  let value = cepProcurado.value.replace(/\D+/g, "");
  value = value.substring(0, 8);
  value = value.replace(/^(\d{5})(\d{3})/, "$1-$2");
  cepProcurado.value = value;
};

async function geraCep() {
  msgErro("");
  const cep = document.getElementById("cepProcurado").value;

  if (cep.length === "") {
    msgErro("O campo não pode está vazio");
    limpaInfo();
    return;
  }

  if (cep.length < 8) {
    msgErro("O cep precisa ter 8 digitos");
    limpaInfo();
    return;
  }

  const url = `https://viacep.com.br/ws/${cep}/json/`;

  let resultado = await fetch(url);
  let json = await resultado.json();

  if (!json.erro) {
    preencheInfo({
      cep: json.cep,
      endereco: json.logradouro,
      cidade: json.localidade,
      bairro: json.bairro,
      estado: json.estado,
    });
  } else {
    msgErro("Cep não identificado");
    limpaInfo();
  }
}

function preencheInfo(json) {
  document.getElementById("cep").innerText = json.cep;
  document.getElementById("endereco").innerText = json.endereco;
  document.getElementById("cidade").innerText = json.cidade;
  document.getElementById("bairro").innerText = json.bairro;
  document.getElementById("estado").innerText = json.estado;
}

function limpaInfo() {
  document.getElementById("cep").innerText = "";
  document.getElementById("endereco").innerText = "";
  document.getElementById("cidade").innerText = "";
  document.getElementById("bairro").innerText = "";
  document.getElementById("estado").innerText = "";
}

function msgErro(msg) {
  document.getElementById("msgErro").style.display = "block";
  document.getElementById("msgErro").innerText = msg;
}

function copiaInfo(id) {
  const elementoAlvo = document.getElementById(id.replace("Copia", ""));
  const conteudo = elementoAlvo.innerText.trim();

  if (!conteudo) {
    msgErro("Não há conteúdo para ser copiado.");
    document.getElementById("msgErro").style.color = "red";
    return;
  }
  document.getElementById("msgErro").style.color = "green";

  if (id === "cepCopia") {
    msgErro("Cep copiado");
    navigator.clipboard.writeText(document.getElementById("cep").innerText);
  }

  if (id === "enderecoCopia") {
    msgErro("Endereço copiado");
    navigator.clipboard.writeText(
      document.getElementById("endereco").innerText
    );
  }
  if (id === "cidadeCopia") {
    msgErro("Cidade copiado");
    navigator.clipboard.writeText(document.getElementById("cidade").innerText);
  }

  if (id === "bairroCopia") {
    msgErro("Bairro copiado");
    navigator.clipboard.writeText(document.getElementById("bairro").innerText);
  }

  if (id === "estadoCopia") {
    msgErro("Estado copiado");
    navigator.clipboard.writeText(document.getElementById("estado").innerText);
  }
}
