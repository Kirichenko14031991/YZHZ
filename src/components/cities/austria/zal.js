// cities/vidn.js
export function openZalInfo() {
    const newWindow = window.open("", "_blank", "width=800,height=600,scrollbars=yes");
    if (newWindow) {
      newWindow.document.write(`
        <html>
        <head>
          <title>Допомога Україні в місті Відень</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; color: #333; }
            h1 { color: #007bff; }
            a { color: #007bff; text-decoration: none; }
            a:hover { text-decoration: underline; }
          </style>
        </head>
        <body>
          
        <h1>Допомога Україні у місті Зальцбург, Австрія</h1>
        <p>Місто Зальцбург активно підтримує українців, які через війну змушені були залишити свої домівки. У місті доступні послуги з житлової, юридичної, медичної та іншої допомоги, а також програми інтеграції та працевлаштування.</p>

        <h2>Що ми пропонуємо:</h2>

        <h3>Проживання та житлова допомога</h3>
        <p>У Зальцбурзі доступні варіанти тимчасового житла через державні програми та волонтерські організації.</p>
        <ul>
          <li><a href="https://www.caritas-salzburg.at" target="_blank">Житлова допомога від Caritas Зальцбург</a></li>
          <li><a href="https://www.salzburg.com" target="_blank">Інформація про житло для біженців у Зальцбурзі – офіційний портал</a></li>
        </ul>

        <h3>Юридична підтримка</h3>
        <p>Юридичну допомогу, включно з оформленням статусу тимчасового захисту та дозволів на роботу, можна отримати в місцевих організаціях.</p>
        <ul>
          <li><a href="https://www.unhcr.org" target="_blank">Юридична допомога у Зальцбурзі – UNHCR</a></li>
          <li><a href="https://www.asyl.at" target="_blank">Юридичні консультації для біженців – Asylkoordination Österreich</a></li>
        </ul>

        <h3>Фінансова допомога</h3>
        <p>Українці мають доступ до соціальних виплат і фінансової підтримки через місцеві державні програми.</p>
        <ul>
          <li><a href="https://www.caritas-salzburg.at" target="_blank">Фінансова допомога у Зальцбурзі – Caritas</a></li>
          <li><a href="https://www.salzburg.com" target="_blank">Інформація про соціальну підтримку – офіційний портал</a></li>
        </ul>

        <h3>Медична допомога</h3>
        <p>У Зальцбурзі біженці можуть отримати безкоштовну медичну допомогу, включаючи екстрені послуги та консультації лікарів.</p>
        <ul>
          <li><a href="https://www.unhcr.org" target="_blank">Медична підтримка у Зальцбурзі – UNHCR</a></li>
          <li><a href="https://www.roteskreuz.at" target="_blank">Медичні послуги – Червоний Хрест Зальцбург</a></li>
        </ul>

        <h3>Освіта та інтеграція</h3>
        <p>Діти можуть безкоштовно відвідувати школи в Зальцбурзі, а для дорослих доступні курси німецької мови.</p>
        <ul>
          <li><a href="https://www.bmbwf.gv.at" target="_blank">Освіта та школи для біженців – BMBWF</a></li>
          <li><a href="https://www.integrationsfonds.at" target="_blank">Інтеграційні програми у Зальцбурзі – Austria Integration Fund</a></li>
        </ul>

        <h3>Працевлаштування</h3>
        <p>Для пошуку роботи та консультацій із працевлаштування у Зальцбурзі діють спеціальні служби.</p>
        <ul>
          <li><a href="https://www.ams.at" target="_blank">Працевлаштування для біженців – AMS Зальцбург</a></li>
          <li><a href="https://www.unhcr.org" target="_blank">Доступ до ринку праці – UNHCR</a></li>
        </ul>

        <h3>Психологічна підтримка</h3>
        <p>У місті доступні послуги психологів і груп підтримки для подолання наслідків стресу та травм.</p>
        <ul>
          <li><a href="https://www.caritas-salzburg.at" target="_blank">Психологічна допомога – Caritas Зальцбург</a></li>
          <li><a href="https://www.roteskreuz.at" target="_blank">Підтримка від Червоного Хреста</a></li>
        </ul>

        <h3>Контакти:</h3>
        <p>Адреса: [Вкажіть вашу адресу у Зальцбурзі]</p>
        <p>Телефон: [Вкажіть номер телефону]</p>
        <p>Електронна пошта: [Вкажіть e-mail для зв’язку]</p>
        <p>Години роботи: [Вкажіть години роботи]</p>
        </body>
        </html>
      `);
      newWindow.document.close();
    } else {
      alert("Не вдалося відкрити нове вікно. Можливо, ваш браузер блокує спливаючі вікна.");
    }
  }
  