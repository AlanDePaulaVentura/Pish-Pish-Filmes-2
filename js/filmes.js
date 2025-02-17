//aqui é a splash no início da Home
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("splash").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("splash").style.display = "none";
            document.getElementById("content").style.display = "block";
        }, 1000);
    }, 3000);
});
//Final da Splash
//inicio da caixa de login
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("loginModal");
    const closeBtn = document.querySelector(".close");
    if (modal) {
      modal.style.display = "flex";
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        window.history.back();
      });
      window.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.style.display = "none";
          window.history.back();
        }
      });
    }
  });
  //Se Perfil logado = foto perfil