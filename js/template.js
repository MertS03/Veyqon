function getTemplateSettingsDialog() {
  return `
<div class="dialogHeader">
  <h3>Einstellungen</h3>
  <button class="headerNavLinks" onclick="closeDialog('settingsDialog')">Schließen</button>
</div>

<div>
  <div>
    <p class="dialogHeadlines">Allgemein</p>
    <article>

    </article>

  </div>

  <p class="dialogHeadlines">KI-Modelle</p>
  <article>

  </article>
</div>
    `;
}

function getTemplatehelpForm() {
  return `
<div class="dialogHeader">
  <h3>Hilfe</h3>
  <button class="headerNavLinks" onclick="closeDialog('helpDialog')">Schließen</button>
</div>
<p>Du hast Feedback oder möchtest einen Bug melden? Oder hast du ein anderes Anliegen? Dann schreib uns gerne eine Nachricht.</p> 

    <form class="formHilfe" onsubmit="sendMail(event)">

    <label for="">Vorname:</label>
    <input type="text" required/>

    <label for="">Nachname:</label>
    <input type="text" required />

    <label for="">E-mail:</label>
    <input type="email" required />

    <label for="">Nachrichten:</label>
    <textarea required></textarea>

    <div class="checkBoxContainer" >

    <label for="">Ich akzeptiere die Datenschutzerklärung.</label>


    <input type="checkbox" required/>
    </div>
    <button class="formBtn" type="submit"> Senden </button>
    
    </form>

    `;
}

function getTemplateSupportedModells(index) {
  return `

  <div class="supportedElement" > 
      <img class0"supportedModellImg" src="${supportedModdels[index].image}"
      <p class="supportedElementText">${supportedModdels[index].name} </p>
  </div>

  `;
}
