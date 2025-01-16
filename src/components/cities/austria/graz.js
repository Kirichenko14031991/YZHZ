export function openGrazInfo() {
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
        <body><h1>Допомога Україні в місті Грац, Австрія</h1>
        <p>Місто Грац пропонує широкий спектр допомоги для українців, які постраждали від війни. Наша мета — підтримати вас у цей складний час та допомогти адаптуватися до життя в Австрії.</p>

        <h2>Що ми пропонуємо:</h2>

        <h3>Проживання та житлова допомога</h3>
        <p>Якщо вам потрібне житло, в Австрії є кілька варіантів допомоги: державні програми, місцеві організації та волонтери.</p>
        <ul>
          <li><a href="https://www.caritas.at" target="_blank">Житлова допомога для українців в Австрії – інформація від Caritas</a></li>
          <li><a href="https://www.refugee.info" target="_blank">Пошук житла через офіційний сайт допомоги для біженців</a></li>
        </ul>

        <h3>Юридична підтримка</h3>
        <p>Українські біженці в Австрії мають право на тимчасовий захист, соціальні пільги та інші привілеї. Юридичну допомогу можна отримати через спеціалізовані організації.</p>
        <ul>
          <li><a href="https://www.unhcr.org" target="_blank">Інформація про права біженців в Австрії – UNHCR</a></li>
          <li><a href="https://www.asyl.at" target="_blank">Юридична підтримка для біженців – Asylkoordination Österreich</a></li>
        </ul>

        <h3>Фінансова допомога</h3>
        <p>Українці, які отримали статус тимчасового захисту в Австрії, мають право на фінансову підтримку, включаючи соціальні виплати та допомогу на проживання.</p>
        <ul>
          <li><a href="https://www.bundeskanzleramt.gv.at" target="_blank">Подробиці про фінансову допомогу на офіційному урядовому порталі</a></li>
          <li><a href="https://www.caritas.at" target="_blank">Підтримка біженців від Caritas</a></li>
        </ul>

        <h3>Медична допомога</h3>
        <p>Українські біженці можуть отримати доступ до медичних послуг в Австрії, включаючи екстрену медичну допомогу, вакцинацію та консультації лікарів.</p>
        <ul>
          <li><a href="https://www.unhcr.org" target="_blank">Медичні послуги для біженців – UNHCR</a></li>
          <li><a href="https://www.roteskreuz.at" target="_blank">Інформація про медичну допомогу від Червоного Хреста</a></li>
        </ul>

        <h3>Освіта та інтеграція</h3>
        <p>Діти українських біженців можуть відвідувати школи в Австрії, а для дорослих доступні курси німецької мови та програми інтеграції.</p>
        <ul>
          <li><a href="https://www.integrationsfonds.at" target="_blank">Інтеграційні програми в Австрії – Austria Integration Fund</a></li>
        </ul>

        <h3>Психологічна підтримка</h3>
        <p>Для тих, хто страждає від стресу, тривоги або інших психологічних проблем, доступні безкоштовні консультації та підтримка.</p>
        <ul>
          <li><a href="https://www.caritas.at" target="_blank">Психологічна підтримка від Caritas</a></li>
        </ul>

        <h3>Контакти:</h3>
        <p>Адреса: [Вкажіть вашу адресу в місті Грац]</p>
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