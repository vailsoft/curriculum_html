const cidade = "Araripina";
const dataHoje = new Date();

const dia = String(dataHoje.getDate()).padStart(2, '0');
const mes = String(dataHoje.getMonth() + 1).padStart(2, '0');
const ano = dataHoje.getFullYear();

const dataFormatada = `${dia}/${mes}/${ano}`;

const info = document.createElement("p");
info.textContent = cidade + ", " + dataFormatada;
var dataCidade = document.getElementById('data');
dataCidade.appendChild(info);


// Elemento da barra de progresso
const progressBar = document.getElementById('progress-bar');

// Função para atualizar a largura da barra de progresso
function updateProgressBar() {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrolledHeight = window.scrollY;
      const percentage = (scrolledHeight / totalHeight) * 100;
      progressBar.style.width = percentage + '%';
    }

    // Atualize a barra de progresso quando a página é rolada
    window.addEventListener('scroll', updateProgressBar);


    function showLargeImage() {
      var modal = document.getElementById("imageModal");
      var modalImage = document.getElementById("modalImage");
      modal.style.display = "block";
      modalImage.src = "images/imagem-candidato-grande.jpg";
    }

    function closeModal() {
      var modal = document.getElementById("imageModal");
      modal.style.display = "none";
    }