let animationRunning = true;

// Função para alterar dinamicamente a cor e velocidade de um elemento específico
function changeLightProperties(lightId, color, speed) {
  const lightElement = document.getElementById(lightId);
  lightElement.style.setProperty("--color", color);
  lightElement.style.setProperty("--speed", speed);
}

// Função para iniciar ou parar a animação
function toggleAnimation() {
  const piscaPisca = document.getElementById("piscaPisca");
  const lights = document.querySelectorAll(".light");

  if (animationRunning) {
    piscaPisca.style.animation = "none";
    lights.forEach((light) => (light.style.animation = "none"));
  } else {
    piscaPisca.style.animation = "pisca 1s infinite";
    lights.forEach((light, index) => {
      light.style.animation = `pisca 1s infinite ${index * 0.2}s`;
    });
  }

  animationRunning = !animationRunning;
}

// Função para abrir o seletor de cores
function openColorPicker(lightId) {
  const colorPicker = document.createElement("input");
  colorPicker.type = "color";
  colorPicker.value = getComputedStyle(
    document.getElementById(lightId)
  ).getPropertyValue("--color");
  colorPicker.addEventListener("input", function () {
    changeLightProperties(lightId, this.value, "0.8s");
  });
  colorPicker.click();
}

changeLightProperties("light1", "#ff9900", "0.8s");
changeLightProperties("light2", "#00ff00", "0.8s");
changeLightProperties("light3", "#0000ff", "0.8s");
