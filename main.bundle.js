/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/styles/styles.scss */ \"./assets/styles/styles.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n\n\n\n// fonctions\nconst addAndRemoveClass = (selectedElement, allElements, classRemoved) => {\n  for (const element of allElements) {\n    if (element !== selectedElement) {\n      element.classList.remove(classRemoved);\n    } else {\n      element.classList.add(classRemoved);\n    }\n  }\n};\nconst createHeaderItemBarHTML = (...elements) => {\n  let html = '';\n  for (const element of elements) {\n    const location = window.location.href.split('/');\n    const currentPage = location[location.length - 1];\n    // console.log(currentPage, element.includes(currentPage));\n    // verifier si l'item correspond à la page actuelle\n    if (currentPage.includes('.html') && element.includes(currentPage)) {\n      html += `<span style=\"background-color:var(--blue-primary)\">${element}</span>`;\n    } else {\n      html += `<span>${element}</span>`;\n    }\n  }\n  const result = '<nav>' + html + '</nav>';\n  return result;\n};\n\n// construction de la top-bar\nclass TopBar extends HTMLElement {\n  connectedCallback() {\n    this.innerHTML = `\n        <header class=\"down-scroll\">\n            <div class=\"container-1\">\n                <div id=\"logo-container\" class=\"logo-container\">\n                </div>\n                <div class=\"menu-container\">\n                    \n                    <p id=\"services\">NOS SERVICES</p>\n                    <p id=\"materiel\">ACHETER DU MATERIEL</p>\n                    <p id=\"entreprise\">L'ENTREPRISE</p>\n                    <p id=\"enSavoirPlus\">EN SAVOIR PLUS</p>\n                    \n                </div>\n                <div class=\"nous-rejoindre\">\n                    <span class=\"point\"></span>\n                    <p>CONTACTEZ-NOUS<br>contact@parlonspc.fr</p>\n                </div>\n            </div>\n            <div class=\"container-2\" id=\"container-2\">\n            </div>\n        </header>\n        `;\n  }\n}\n\n// balyse pour la top-bar\ncustomElements.define('top-bar', TopBar);\n\n// une fois la page chargée\nwindow.addEventListener('DOMContentLoaded', event => {\n  // met l'image dans la top-bar\n  const headerLogoElement = document.createElement('img');\n  headerLogoElement.id = 'header-logo';\n  headerLogoElement.src = 'assets/images/cropped-image_2023-08-10_142556159-removebg-preview.png';\n  headerLogoElement.alt = 'logo de l\\'entreprise ParlonsPC';\n  const logoContainerElement = document.getElementById('logo-container');\n  logoContainerElement.appendChild(headerLogoElement);\n\n  // top-bar - redirection du logo\n  const headerlogoElement = document.querySelector('#header-logo');\n  headerlogoElement.addEventListener('click', event => {\n    location = './index.html';\n  });\n\n  // detection du scroll pour afficher la top-bar\n  const headerElement = document.querySelector('header');\n  const DScrollElement = document.querySelector('.down-scroll');\n  const contentElement = document.querySelector('.content');\n  let lastScrollY;\n  document.addEventListener('scroll', event => {\n    if (scrollY > 0) {\n      headerElement.classList.add('down-scroll');\n      // contentElement.style = 'margin-top: 170px';\n    } else {\n      headerElement.classList.remove('down-scroll');\n      // document.getElementById('section-0').style = 'padding-top: 0';\n    }\n\n    if (scrollY < lastScrollY) {\n      DScrollElement.style.top = '0px';\n    } else if (scrollY > lastScrollY) {\n      DScrollElement.style.top = '-64px';\n    }\n    lastScrollY = scrollY;\n  });\n\n  // menu de la top-bar et bar d'items\n  const menuMap = {\n    'services': ['<a>Audit</a>', '<a href=\"cybersecurite.html\">Cybersécurité</a>', '<a href=\"infogerance.html\">Infogérance</a>', '<a href=\"cloud_computing.html\">Cloud Computing</a>', '<a>Maintenance informatique</a>', '<a>Site internet</a>', '<a>Téléphonie et Internet</a>', '<a>Support informatique</a>'],\n    'materiel': ['<a>Mac OS</a>', '<a>Windows</a>', '<a>Configuration sur Mesure</a>', '<a>Reconditionné</a>', '<a>Service après-vente et livraison</a>'],\n    'entreprise': ['<p>Nos Valeurs</p>', '<p>Fonctionnement</p>', '<p>Témoignages de nos clients</p>', '<p>Victor, le dirigeant</p>', '<p>Notre brochure</p>'],\n    'enSavoirPlus': ['<a>Nous poser une question</a>', '<a>Prendre un Rendez-Vous</a>', '<p>Nous suivre sur les réseaux</p>', '<p>Coordonnées</p>']\n  };\n\n  // TEST\n  const menuContainerAllElements = document.querySelectorAll('.menu-container p');\n  const itemsBarElement = document.getElementById('container-2');\n  const section0Element = document.querySelector('.section-0');\n  menuContainerAllElements.forEach(element => {\n    element.addEventListener('click', event => {\n      addAndRemoveClass(headerElement, [headerElement], 'open');\n      addAndRemoveClass(contentElement, [contentElement], 'blur');\n      // addAndRemoveClass(section0Element, [section0Element], 'blur')\n      addAndRemoveClass(element, menuContainerAllElements, 'active');\n      console.log('event hover');\n      itemsBarElement.innerHTML = createHeaderItemBarHTML(...menuMap[event.currentTarget.id]);\n      headerElement.addEventListener('mouseover', event => {\n        event.stopPropagation();\n      });\n      contentElement.addEventListener('mouseover', event => {\n        event.stopPropagation();\n        addAndRemoveClass('', menuContainerAllElements, 'active');\n        addAndRemoveClass('', [headerElement], 'open');\n        addAndRemoveClass('', [contentElement /*section0Element*/], 'blur');\n        itemsBarElement.innerHTML = null;\n      });\n    });\n  });\n\n  // // click sur les elements du menu de la top-bar\n  // const menuContainerAllElements = document.querySelectorAll('.menu-container p');\n  // const itemsBarElement = document.getElementById('container-2');\n  // // pour chaque elements du menu\n  // menuContainerAllElements.forEach(element => {\n  //     // ajoute un écouteur d'evenement à chaque element\n  //     element.addEventListener('click', event => {\n  //         // menu clické\n  //         const clickedElement = event.currentTarget.id;\n  //         console.log(menuMap[clickedElement]);\n  //         addAndRemoveClass(clickedElement, menuContainerAllElements, 'active');\n  //         // construction de la barre d'items\n  //         itemsBarElement.innerHTML = createHeaderItemBarHTML(...menuMap[clickedElement]);\n  //     })\n  // })\n});\n\n// construction du pied de page\nclass Footer extends HTMLElement {\n  connectedCallback() {\n    this.innerHTML = `\n        <footer>\n        <div class=\"footer-container\">\n            <div class=\"footer-register\">\n                <h3>ParlonsPC</h3>\n                <p>ParlonsPC est une entreprise informatique comprenant un réseau de partenaires informatique certifiés\n                    sur le territoire français.</p>\n                <input type=\"text\" placeholder=\"Votre Email*\"><br>\n                <p class=\"footer-submit\">S'incrire</p>\n            </div>\n            <div class=\"footer-coordonnees\">\n    \n                <h3>Nos Coordonnées</h3>\n                <ul>\n                    <li><span>\n                            <p>Téléphone :</p>\n                            <p>+33 (0)7 64 36 89 08</p>\n                        </span></li>\n                    <li><span>\n                            <p>Email :</p>\n                            <p>contact@parlonspc.fr</p>\n                        </span></li>\n                    <li><span>\n                            <p>Adresse :</p>\n                            <p>2805 Avenue Etienne Mehul</p>\n                            <p>34070 Montpellier</p>\n                        </span></li>\n                </ul>\n            </div>\n            <div class=\"footer-services\">\n                <h3>Nos Services</h3>\n                <ul>\n                    <li>Audit Informatique</li>\n                    <li>Maintenance Informatique</li>\n                    <li>Cybersécurité</li>\n                    <li>Conception de site internet</li>\n                    <li>Vente de matériel</li>\n                    <li>Téléphonie et Internet</li>\n                    <li>Support Informatique</li>\n                    <li>Maintenance Informatique</li>\n                    <li>Cloud Computing</li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"footer-separator\"></div>\n        <div class=\"footer-container2\">\n            <div class=\"footer-links\">\n                <p>Acceuil</p>\n                <p>Mentions Légales</p>\n                <p>Conditions d'utilisation</p>\n                <p>Charte de protection des données</p>\n            </div>\n            <div class=\"footer-icons\">\n                <img src=\"assets/icons/linkedin_circle.svg\" alt=\"Icon de linkedin avec cercle\">\n                <img src=\"assets/icons/Facebook_circle.svg\" alt=\"Icon de facbook avec cercle\">\n                <img src=\" assets/icons/Instagram_circle.svg\" alt=\"Icon de instagram avec cercle\">\n            </div>\n            <div class=\"footer-mention\">Copyright ©ParlonsPC Tous droits réservés.</div>\n        </div>\n    </footer>\n      `;\n  }\n}\n\n// balyse pour le pied de page\ncustomElements.define('pied-de-page', Footer);\n\n//# sourceURL=webpack://tests/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/styles.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/styles.scss ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/-W_8XJnvUD7dzB2Ck_kIaWMu.woff2 */ \"./assets/fonts/-W_8XJnvUD7dzB2Ck_kIaWMu.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --background-color-primary: #15171C;\n  --background-color-primary-opacity: #15171ccb;\n  --text-color-primary: #e9e5e5;\n  --input-border-color: #6A6B6D;\n  --blue-primary: #4A81F7;\n}\n\n.point-bleu-avec-trait {\n  /* Style pour le conteneur de point et de trait */\n}\n.point-bleu-avec-trait .point-et-trait {\n  height: fit-content;\n  display: flex;\n  align-items: center;\n  /* Style pour la ligne grise */\n  /* Style pour le point bleu */\n}\n.point-bleu-avec-trait .point-et-trait .trait {\n  width: 3rem;\n  height: 1px;\n  background-color: var(--input-border-color);\n}\n.point-bleu-avec-trait .point-et-trait .trait-column {\n  width: 1px;\n  height: 3rem;\n  margin-top: 1rem;\n}\n.point-bleu-avec-trait .point-et-trait .point-bleu {\n  min-width: 10px;\n  min-height: 10px;\n  background-color: var(--blue-primary);\n  border-radius: 50%;\n  margin-left: 1rem;\n}\n.point-bleu-avec-trait .point-et-trait p {\n  font-size: 1.5rem;\n  margin-left: 1rem;\n}\n.point-bleu-avec-trait .column {\n  flex-direction: column;\n}\n.point-bleu-avec-trait .column .point-bleu {\n  margin-left: 0;\n  margin-top: 1rem;\n}\n.point-bleu-avec-trait .column > p {\n  rotate: -90deg;\n  margin-top: 2rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.blue-word {\n  color: var(--blue-primary);\n}\n\n/* thai */\n/* latin */\n@font-face {\n  font-display: swap;\n  font-family: \"Prompt\";\n  font-style: normal;\n  font-weight: 300;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n:root {\n  font-family: \"Prompt\";\n  font-weight: normal;\n  cursor: default;\n}\n:root .blur {\n  transition: 0.5s;\n  background-color: var(--background-color-primary-opacity);\n  filter: blur(10px);\n}\n:root .content {\n  margin-top: 170px;\n}\n:root .content p {\n  text-align: center;\n  letter-spacing: 2px;\n}\n:root a {\n  text-decoration: none;\n}\n:root ul {\n  text-decoration: none;\n  padding: 0 0 0 0;\n}\n:root ul li {\n  list-style-type: none;\n}\n:root ul.with-blue-puce li {\n  list-style-type: disc;\n}\n:root ul.with-blue-puce li::marker {\n  color: var(--blue-primary);\n}\n:root h1 {\n  font-size: 4rem;\n  margin-top: 8rem;\n  text-align: center;\n}\n:root h2 {\n  font-size: 3rem;\n}\n:root h3 {\n  font-size: 1.75rem;\n}\n\nbody {\n  margin: 0;\n  display: grid;\n  background-color: var(--background-color-primary);\n  color: rgba(255, 255, 255, 0.75);\n}\nbody header {\n  z-index: 1;\n  color: white;\n  position: absolute;\n  width: 100%;\n}\nbody header.open div {\n  background-color: black;\n  z-index: 1;\n  transform: perspective();\n  transition: 1s;\n}\nbody header.open .container-1 {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n}\nbody header.open .container-2 {\n  height: fit-content;\n  width: 100%;\n  padding: 2.5rem 5rem;\n  position: fixed;\n}\nbody header.open .container-2 nav {\n  display: flex;\n  flex-direction: column;\n}\nbody header.open .container-2 nav span {\n  padding: 1rem 2rem;\n}\nbody header.open .container-2 nav span * {\n  cursor: pointer;\n  width: fit-content;\n  color: white;\n  margin: 0 0;\n  padding: 0 0;\n}\nbody header.open .container-2 nav span *:hover {\n  color: var(--blue-primary);\n}\nbody header.down-scroll {\n  position: fixed;\n  top: 0px;\n  width: 100%;\n  transition: top 0.3s;\n  background-color: var(--background-color-primary-opacity);\n  backdrop-filter: blur(5px);\n}\nbody header .container-1 {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  font-family: \"Prompt\";\n  letter-spacing: 3px;\n  justify-content: space-between;\n}\nbody header .container-1 img {\n  cursor: pointer;\n  height: 2.75rem;\n  margin-top: 0.8rem;\n  margin-left: 3rem;\n  transition: transform 0.3s;\n}\nbody header .container-1 img:hover {\n  transform: scale(1.05);\n}\nbody header .container-1 .menu-container {\n  width: 70%;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  align-items: center;\n}\nbody header .container-1 .menu-container p {\n  width: fit-content;\n  padding: 0 15px;\n  margin: 0.5rem 0;\n  cursor: pointer;\n  font-size: 0.65rem;\n}\nbody header .container-1 .menu-container p a {\n  margin: 0;\n}\nbody header .container-1 .menu-container p a:hover {\n  transition: 0.5s;\n  color: var(--blue-primary);\n}\nbody header .container-1 .nous-rejoindre {\n  border-top: var(--blue-primary) solid 2px;\n  border-left: var(--blue-primary) solid 2px;\n  border-bottom: #FF3131 solid 2px;\n  border-right: #FF3131 solid 2px;\n  border-radius: 5px;\n  letter-spacing: normal;\n  height: fit-content;\n  padding: 0 2rem 0 2rem;\n  display: flex;\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-right: 3rem;\n}\nbody header .container-1 .nous-rejoindre, body header .container-1 .nous-rejoindre * {\n  cursor: pointer;\n}\nbody header .container-1 .nous-rejoindre span.point {\n  background-color: var(--blue-primary);\n  border-radius: 50%;\n  height: 12px;\n  width: 12px;\n  margin-right: 10px;\n  margin-top: auto;\n  margin-bottom: auto;\n}\nbody header .container-1 .nous-rejoindre p {\n  min-width: 8rem;\n  margin: 0;\n  font-size: 0.65rem;\n}\nbody header .container-1 .nous-rejoindre:hover {\n  transition: 0.2s;\n  border: var(--blue-primary) solid 2px;\n  color: var(--blue-primary);\n}\nbody header .container-1 .nous-rejoindre:hover span.point {\n  transition: 1.2s;\n  background-color: white;\n}\nbody header .active {\n  color: var(--blue-primary);\n}\nbody .content {\n  padding: 0 1rem 4rem 1rem;\n}\nbody .content section {\n  margin-top: 2rem;\n  margin-bottom: 6rem;\n}\nbody .content section .span-image {\n  border-radius: 5px;\n}\nbody footer {\n  padding: 1rem 2rem;\n}\nbody footer .footer-container {\n  padding: 2rem 0;\n  display: flex;\n  flex-wrap: wrap;\n}\nbody footer .footer-container div {\n  margin-right: 6rem;\n}\nbody footer .footer-container h3 {\n  font-size: 1.8rem;\n  max-width: 50px;\n}\nbody footer .footer-container .footer-register {\n  flex: 0.4;\n}\nbody footer .footer-container .footer-register input {\n  width: 99%;\n  background-color: var(--background-color-general);\n  border: none;\n  border-bottom: var(--input-border-color) solid 1px;\n  font-size: 20px;\n  margin: 3rem 0 0 0;\n  color: var(--text-color-primary);\n}\nbody footer .footer-container .footer-register input:focus {\n  outline: none;\n}\nbody footer .footer-container .footer-register .footer-submit {\n  background-color: var(--blue-primary);\n  padding: 0.75rem 20rem;\n  border-radius: 15px;\n  margin: 3rem 0 0 0;\n}\nbody footer .footer-container .footer-coordonnees {\n  flex: 0.3;\n}\nbody footer .footer-container .footer-coordonnees li {\n  margin-bottom: 2rem;\n}\nbody footer .footer-container .footer-coordonnees li span p {\n  margin: 0;\n}\nbody footer .footer-container .footer-services {\n  flex: 0.3;\n}\nbody footer .footer-container .footer-services li {\n  margin-bottom: 0;\n  padding-bottom: 1rem;\n}\nbody footer .footer-separator {\n  height: 2px;\n  background-color: var(--text-color-primary);\n}\nbody footer .footer-container2 {\n  display: flex;\n  padding-top: 2rem;\n}\nbody footer .footer-container2 .footer-links {\n  flex: 0.4;\n  display: flex;\n  /* align-items: center; */\n  flex-wrap: wrap;\n}\nbody footer .footer-container2 .footer-links p {\n  margin: 0;\n  padding: 0 2rem;\n}\nbody footer .footer-container2 .footer-icons {\n  flex: 0.2;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\nbody footer .footer-container2 .footer-icons img {\n  height: 2rem;\n  width: 2rem;\n}\nbody footer .footer-container2 .footer-mention {\n  flex: 0.4;\n  text-align: center;\n  margin-top: auto;\n  margin-bottom: auto;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tests/./assets/styles/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/cropped-image_2023-08-10_142556159-removebg-preview.png */ \"./assets/images/cropped-image_2023-08-10_142556159-removebg-preview.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/Sll3.jpg */ \"./assets/images/Sll3.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/victor.png */ \"./assets/images/victor.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.section-0 {\n  width: 100%;\n  background-color: black;\n  padding: 4rem 0 10rem 0;\n}\n.section-0 .span-image {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat;\n  background-size: contain;\n  display: block;\n  height: 12.5rem;\n  width: 25rem;\n  margin: 4rem auto 0 auto;\n  overflow: hidden;\n}\n.section-0 h1 {\n  background-image: linear-gradient(to left, #94A4B0, #5F82A0, #3F6D97, #486078);\n  -webkit-background-clip: text;\n  color: transparent;\n  font-size: 1.5rem;\n  margin: 0;\n}\n.section-0 p {\n  width: 35%;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  font-size: 0.8rem;\n}\n.section-0 .span-icon {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 3rem;\n  display: flex;\n  justify-content: space-evenly;\n  width: 35%;\n}\n.section-0 .span-icon * {\n  height: 2.5rem;\n}\n\n.content .section-1 {\n  display: flex;\n  justify-content: center;\n}\n.content .section-1 > div {\n  height: 35rem;\n}\n.content .section-1 .section1-c1 {\n  z-index: -1;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.content .section-1 .section1-c1 .icons {\n  height: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.content .section-1 .section1-c1 .icons img {\n  cursor: pointer;\n  height: 2.5rem;\n  width: 2.5rem;\n  transition: 0.3s;\n}\n.content .section-1 .section1-c1 .icons img:hover {\n  transform: scale(1.15);\n}\n.content .section-1 .section1-c1 .defiler {\n  margin-top: auto;\n}\n.content .section-1 .section1-c2 {\n  z-index: -1;\n  flex: 10;\n  padding-left: 2rem;\n  text-align: center;\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) center/cover no-repeat;\n  border-radius: 5px;\n  height: 35rem;\n  width: 100%;\n  transition: transform 0.3s;\n  overflow: initial;\n  display: block;\n}\n.content .section-1 .section1-c2 h1 {\n  text-align: left;\n  margin: 0;\n}\n.content .section-1 .section1-c2:hover {\n  transform: scale(1.01);\n}\n.content .section-2 .section2-container {\n  display: flex;\n}\n.content .section-2 .section2-container .mot-du-dirigeant {\n  flex: 6;\n  padding: 0 2rem;\n}\n.content .section-2 .section2-container .mot-du-dirigeant h2 {\n  font-size: 3rem;\n  font-weight: 700;\n  margin-top: 0;\n}\n.content .section-2 .section2-container .mot-du-dirigeant p {\n  text-align: left;\n}\n.content .section-2 .section2-container .victor {\n  flex: 4;\n  border-left: 1px solid var(--blue-primary);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-left: 4rem;\n}\n.content .section-2 .section2-container .victor .image {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) center no-repeat;\n  height: 25rem;\n  width: 25rem;\n}\n.content .section-2 .section2-container .victor .prendre-rdv {\n  padding: 4rem;\n  text-align: center;\n}\n.content .section-2 .section2-container .victor .prendre-rdv .sous-titre {\n  color: var(--blue-primary);\n}\n.content .section-2 .section2-container .victor .prendre-rdv div {\n  min-width: max-content;\n  background-color: #F4F4F4;\n  padding: 5px 5px;\n  width: fit-content;\n  border-radius: 3px;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n}\n.content .section-2 .section2-container .victor .prendre-rdv div span {\n  display: flex;\n  align-items: center;\n  border: 2px solid var(--background-color-primary);\n  border-radius: 3px;\n}\n.content .section-2 .section2-container .victor .prendre-rdv div span p {\n  margin: 0;\n  padding: 0.6rem 0.5rem 0.6rem 2rem;\n  color: var(--background-color-primary);\n}\n.content .section-2 .section2-container .victor .prendre-rdv div span img {\n  height: 1.2rem;\n  width: 1.2rem;\n  padding-right: 2rem;\n}\n.content .section-3 {\n  text-align: center;\n}\n.content .section-3 h1 {\n  max-width: 70%;\n  margin: 0 auto 0 auto;\n}\n.content .section-3 p {\n  font-size: 1.5rem;\n}\n.content .section-4 {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n.content .section-4 .container {\n  height: 340px;\n  width: 340px;\n  padding-bottom: 3.5rem;\n  margin-top: 5rem;\n  margin-right: 5rem;\n  display: flex;\n}\n.content .section-4 .container .span-image {\n  background-size: contain;\n  min-width: 5rem;\n  margin-right: 1rem;\n}\n.content .section-4 .container h3 {\n  font-size: 2rem;\n  margin: 0;\n  margin-bottom: 1rem;\n  line-height: 2rem;\n}\n.content .section-4 .container p {\n  text-align: left;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tests/./src/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://tests/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://tests/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://tests/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./assets/styles/styles.scss":
/*!***********************************!*\
  !*** ./assets/styles/styles.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tests/./assets/styles/styles.scss?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tests/./src/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tests/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tests/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tests/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tests/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tests/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tests/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./assets/fonts/-W_8XJnvUD7dzB2Ck_kIaWMu.woff2":
/*!*****************************************************!*\
  !*** ./assets/fonts/-W_8XJnvUD7dzB2Ck_kIaWMu.woff2 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5676c5c1b806f8aa695f.woff2\";\n\n//# sourceURL=webpack://tests/./assets/fonts/-W_8XJnvUD7dzB2Ck_kIaWMu.woff2?");

/***/ }),

/***/ "./assets/images/Sll3.jpg":
/*!********************************!*\
  !*** ./assets/images/Sll3.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"10dc5a317910e50003ed.jpg\";\n\n//# sourceURL=webpack://tests/./assets/images/Sll3.jpg?");

/***/ }),

/***/ "./assets/images/cropped-image_2023-08-10_142556159-removebg-preview.png":
/*!*******************************************************************************!*\
  !*** ./assets/images/cropped-image_2023-08-10_142556159-removebg-preview.png ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0110caa060ca25a4c137.png\";\n\n//# sourceURL=webpack://tests/./assets/images/cropped-image_2023-08-10_142556159-removebg-preview.png?");

/***/ }),

/***/ "./assets/images/victor.png":
/*!**********************************!*\
  !*** ./assets/images/victor.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"351b2019c2e1f75449dd.png\";\n\n//# sourceURL=webpack://tests/./assets/images/victor.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;