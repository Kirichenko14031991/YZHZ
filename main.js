// main.js

import { openModal, closeModal, closeOnOutsideClick, closeOnEsc } from "./src/components/modal.js";
import { initializeCityListClose } from "./src/components/cityList.js";
import { openCityInfo } from "./cityInfo.js";
import { openVidnInfo } from "./cities/austria/vidn.js";
import { openGrazInfo } from "./cities/austria/graz.js";
import { openZalInfo } from "./cities/austria/zal.js";
import { openLinInfo } from "./cities/austria/lin.js";
import { openInsInfo } from "./cities/austria/ins.js";
import { openBruInfo } from "./cities/belgia/bru.js";
import { openAntInfo } from "./cities/belgia/ant.js";
import { openGentInfo } from "./cities/belgia/gent.js";
import { openBrugInfo } from "./cities/belgia/brug.js";
import { openLiezInfo } from "./cities/belgia/liez.js";
import { openSofInfo } from "./cities/bolgaria/sof.js";
import { openPlovInfo } from "./cities/bolgaria/plov.js";
import { openVarInfo } from "./cities/bolgaria/var.js";
import { openBurInfo } from "./cities/bolgaria/bur.js";
import { openRusInfo } from "./cities/bolgaria/rus.js";
import { openZagInfo } from "./cities/croatia/zag.js";
import { openSplInfo } from "./cities/croatia/spl.js";
import { openRieInfo } from "./cities/croatia/rie.js";
import { openDubInfo } from "./cities/croatia/dub.js";
import { openOsiInfo } from "./cities/croatia/osi.js";

// Ініціалізація списку міст
initializeCityListClose();

// Додавання обробників подій для міст
document.getElementById("viden").addEventListener("click", openVidnInfo);
document.getElementById("graz").addEventListener("click", openGrazInfo);
document.getElementById("zal").addEventListener("click", openZalInfo);
document.getElementById("lin").addEventListener("click", openLinInfo);
document.getElementById("ins").addEventListener("click", openInsInfo);
document.getElementById("bru").addEventListener("click", openBruInfo);
document.getElementById("ant").addEventListener("click", openAntInfo);
document.getElementById("gent").addEventListener("click", openGentInfo);
document.getElementById("brug").addEventListener("click", openBrugInfo);
document.getElementById("liez").addEventListener("click", openLiezInfo);
document.getElementById("sof").addEventListener("click", openSofInfo);
document.getElementById("plov").addEventListener("click", openPlovInfo);
document.getElementById("var").addEventListener("click", openVarInfo);
document.getElementById("bur").addEventListener("click", openBurInfo);
document.getElementById("rus").addEventListener("click", openRusInfo);
document.getElementById("zag").addEventListener("click", openZagInfo);
document.getElementById("spl").addEventListener("click", openSplInfo);
document.getElementById("rie").addEventListener("click", openRieInfo);
document.getElementById("dub").addEventListener("click", openDubInfo);
document.getElementById("osi").addEventListener("click", openOsiInfo);

// Ініціалізація модального вікна
const modalId = "registrationModal";
document.getElementById("openModalBtn").onclick = () => openModal(modalId);
document.querySelectorAll(".close").forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => closeModal(modalId));
});
closeOnOutsideClick(modalId);
closeOnEsc(modalId);