import "../models/loading-page.scss";

const body = document.createElement('div');
body.classList.add('loading-screen');
body.id = "loading-screen";
console.log(body);
body.innerHTML = `
<!-- écrans de chargement -->
    <div class="loading-screen" id="loading-screen">
        <section class="section-0" id="section-0">
            <span class="span-image">
                <!-- image -->
            </span>
            <h1>ParlonsPC, votre entreprise informatique à Montpellier</h1>
            <p>Nous simplifions et prenons en charge vos besoins informatiques depuis nos bureaux de Montpellier
            </p>

            <span class="span-icon">
                <img src="../assets/icons/facebook.svg" alt="icon Facebook">
                <img src="../assets/icons/instagram.svg" alt="icon Instagram">
                <img src="../assets/icons/linkedin.svg" alt="icon LinkedIn">
            </span>

        </section>
    </div>
`
document.querySelector('html').appendChild(body)

window.addEventListener('load', event => {
    const loadingScreenElement = document.querySelector('div.loading-screen');
    setTimeout(() => {
        loadingScreenElement.style.transition = "opacity 0.5s ease-out";
        loadingScreenElement.style.transform = "matrix3D()"
        loadingScreenElement.style.opacity = '0';

        // Retirez l'écran de chargement du DOM après une transition
        setTimeout(() => {
            loadingScreenElement.remove();
        }, 500);
    }, 0)

});