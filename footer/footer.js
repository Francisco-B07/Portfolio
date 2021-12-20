function footer(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `    
  <footer class="footer">
        <img src="./img/logo-letras-blancas.png" class="footer__imagen" />
        <div class="footer__redes-cont">
          <div class="footer__redes">
          <a class="footer__redes-link" href="https://www.instagram.com/pancho_jburgoa/?hl=es-la">
              <span class="footer__redes-texto">Instagram</span>
              <img src="./img/instagram.png" class="footer__redes-logo" />
            </a>
          </div>
          <div class="footer__redes">
          <a class="footer__redes-link" href="https://www.linkedin.com/feed/">            
              <span class="footer__redes-texto">Linkedin</span>
              <img src="./img/linkedin.png" class="footer__redes-logo" />
            </a>
          </div>
          <div class="footer__redes">
          <a class="footer__redes-link" href="https://github.com/Francisco-B07">
              <span class="footer__redes-texto">Github</span>
              <img src="./img/github.png" class="footer__redes-logo" />
            </a>
          </div>
        </div>
      </footer> `;

  el.appendChild(componentEl);
}
