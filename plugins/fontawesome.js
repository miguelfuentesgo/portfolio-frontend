import { defineNuxtPlugin } from '#app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faHome, faPlane, faDiagramProject, faAddressCard} from '@fortawesome/free-solid-svg-icons'; // Importa los íconos que necesitas
import { faHtml5,faCss3Alt, faJsSquare, faVuejs, faReact, faAws, faGolang, faPython  } from '@fortawesome/free-brands-svg-icons';

library.add(faUser, faHome, faPlane, faDiagramProject, faAddressCard, faHtml5, faCss3Alt, faJsSquare, faVuejs, faReact, faAws, faGolang, faPython ); // Agrega los íconos a la librería

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon); // Registra el componente globalmente
});
