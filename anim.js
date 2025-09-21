document.addEventListener("DOMContentLoaded", () => {
  const flowers = document.querySelectorAll(".flower");
  const message = document.querySelector(".message");

  // Aseguramos que las flores empiecen en tamaño 0
  flowers.forEach((flower) => {
    flower.style.transform = "scale(0)";
    flower.style.transformOrigin = "bottom center";
  });

  // Hacemos que crezcan una por una
  flowers.forEach((flower, i) => {
    setTimeout(() => {
      flower.style.transition = "transform 0.7s ease-out";
      flower.style.transform = "scale(1)";
    }, i * 500); // delay diferente por flor
  });

  // Mostramos el mensaje cuando todas ya aparecieron
  setTimeout(() => {
    message.style.transition = "opacity 1s ease, transform 1s ease";
    message.style.opacity = "1";
    message.style.transform = "translateY(0)";
  }, flowers.length * 500 + 700);

  // Movimiento tipo "balanceo" para cada flor
  flowers.forEach((flower, i) => {
    let angle = 0;
    setInterval(() => {
      angle = Math.sin(Date.now() / (2000 + i * 300)) * 5;
      flower.style.transform = `scale(1) rotate(${angle}deg)`;
    }, 50);
  });
});
