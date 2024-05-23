document.addEventListener("DOMContentLoaded", () => {
  const fortunes = [
      "A vida trará coisas boas se tiveres paciência.",
      "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
      "Não compense na ira o que lhe falta na razão.",
      "Defeitos e virtudes são apenas dois lados da mesma moeda.",
      "A maior de todas as torres começa no solo.",
      "Não há que ser forte. Há que ser flexível.",
      "Gente todo dia arruma os cabelos, por que não o coração?",
      "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
      "A juventude não é uma época da vida, é um estado de espírito.",
      "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos."
  ];

  const openCookieImage = document.getElementById("open-cookie");
  const openedCookieImage = document.getElementById("opened-cookie");
  const fortuneMessage = document.getElementById("fortune-message");
  const fortuneCookie = document.getElementById("fortune-cookie");
  const newCookieButton = document.getElementById("new-cookie");
  const startMessageTitle = document.getElementById("start-message");
  const newMessageTitle = document.getElementById("opened-message");

  function getRandomFortune() {
      const randomIndex = Math.floor(Math.random() * fortunes.length);
      return fortunes[randomIndex];
  }

  function openCookie() {
      const fortune = getRandomFortune();
      fortuneMessage.textContent = fortune;
      fortuneCookie.classList.add("opened");
      openCookieImage.classList.add("hidden");
      startMessageTitle.classList.add("hidden");
      openedCookieImage.classList.remove("hidden");
      newCookieButton.classList.remove("hidden");
      newMessageTitle.classList.remove("hidden");
  }

  function resetCookie() {
    fortuneMessage.textContent = "Clique na imagem para abrir seu biscoito da sorte!";
    fortuneCookie.classList.remove("opened");
    openCookieImage.classList.remove("hidden");
    startMessageTitle.classList.remove("hidden");
    openCookieImage.src = "images/biscoito.svg";
    newCookieButton.classList.add("hidden");
    openedCookieImage.classList.add("hidden");
    newMessageTitle.classList.add("hidden");
}

  openCookieImage.addEventListener("click", openCookie);
  newCookieButton.addEventListener("click", resetCookie);
});
