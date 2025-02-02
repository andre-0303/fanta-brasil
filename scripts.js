document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM totalmente carregado!");

  // Seleciona os elementos que serão atualizados
  const leftDiv = document.getElementById("left-container");
  const canImg = document.getElementById("can-img");
  const titleEl = document.getElementById("title_");
  const productTitleEl = document.getElementById("product-title");
  const productDescEl = document.getElementById("product-description");
  const carboText = document.getElementById("carboidrato-text");
  const caloriesText = document.getElementById("calorias-text");
  const fruitIconEl = document.getElementById("fruit-icon");
  const fruitNameEl = document.getElementById("fruit-name");

  // Botões de navegação
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Lista de latinhas com informações completas
  const latinhas = [
    {
      nome: "Laranja",
      descricao:
        "Refrescante e saborosa, a Fanta Laranja é a favorita dos brasileiros!",
      imagem: "./imgs/fanta-laranja.png",
      cor: "#FFA600",
      slogan: "O sabor mais vibrante!",
      carbs: "8g / 350ml",
      calories: "5g",
      fruitIcon: "./imgs/orange.png",
      fruitName: "LARANJA",
      productTitle: "FANTA LARANJA 350ML",
      productDescription:
        "Borbulhante e popular, é o segundo produto da companhia mais vendido no Brasil. Feito com suco de frutas.",
    },
    {
      nome: "Uva",
      descricao: "Com um sabor único e marcante, a Fanta Uva é irresistível!",
      imagem: "./imgs/fanta-uva.png",
      cor: "#800080",
      slogan: "O sabor da diversão!",
      carbs: "10g / 350ml",
      calories: "6g",
      fruitIcon: "./imgs/uva.png",
      fruitName: "UVA",
      productTitle: "FANTA UVA 350ML",
      productDescription: "Uma explosão de sabor da uva que você ama.",
    },
    {
      nome: "Guaraná",
      descricao: "Uma nova versão cheia de energia e refrescância!",
      imagem: "./imgs/fanta-guarana.png",
      cor: "#397500",
      slogan: "Uma explosão de sabor!",
      carbs: "9g / 350ml",
      calories: "4g",
      fruitIcon: "./imgs/guarana.png",
      fruitName: "GUARANÁ",
      productTitle: "FANTA GUARANÁ 350ML",
      productDescription: "O sabor natural do guaraná refrescante.",
    },
    {
      nome: "Maracujá",
      descricao:
        "A diversão tem diferentes sabores. Experimente o novo sabor Maracujá! Seu lanche agora está fun e salvo com o sabor de outro mundo que acaba de entrar em cena. Com qual lanche você vai experimentar essa novidade?",
      imagem: "./imgs/fanta-maracuja.png",
      cor: "#d3d012",
      slogan: "Uma explosão de sabor!",
      carbs: "9g / 350ml",
      calories: "4g",
      fruitIcon: "./imgs/maracuja.png",
      fruitName: "MARACUJÁ",
      productTitle: "FANTA MARACUJÁ 350ML",
      productDescription:
        "A diversão tem diferentes sabores. Experimente o novo sabor Maracujá! Seu lanche agora está fun e salvo com o sabor de outro mundo que acaba de entrar em cena. Com qual lanche você vai experimentar essa novidade?",
    },
  ];

  let index = 0;

  function updateLatinha(newIndex) {
    index = newIndex;
    const flavor = latinhas[index];

    canImg.classList.add("fade");

    setTimeout(() => {
        canImg.src = flavor.imagem;
        leftDiv.style.backgroundColor = flavor.cor;
        titleEl.textContent = flavor.nome;
        productTitleEl.textContent = flavor.productTitle;
        productDescEl.textContent = flavor.productDescription;
        carboText.textContent = flavor.carbs;
        caloriesText.textContent = flavor.calories;
        fruitIconEl.src = flavor.fruitIcon;
        fruitNameEl.textContent = flavor.fruitName;
        document.getElementById("comprar").style.backgroundColor = flavor.cor;

        setTimeout(() => {
            canImg.classList.remove("fade");
        }, 100);
    }, 300);
}

  nextBtn.addEventListener("click", () => {
    let newIndex = (index + 1) % latinhas.length;
    updateLatinha(newIndex);
  });

  prevBtn.addEventListener("click", () => {
    let newIndex = (index - 1 + latinhas.length) % latinhas.length;
    updateLatinha(newIndex);
  });

  updateLatinha(index);
});

document.getElementById('comprar').addEventListener('click', function() {
  window.location.href = 'https://nasuacasa.coca-cola.com.br';
});