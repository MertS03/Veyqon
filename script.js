function init() {
  rendersupportedModells();
}

function openDialogSettings() {
  let dialog = document.getElementById("settingsDialog");
  dialog.innerHTML = "";

  if (dialog) {
    dialog.innerHTML += getTemplateSettingsDialog();
    dialog.showModal();
    console.log("Dialog open!");
  }
}

function openDialogHelp() {
  let dialog = document.getElementById("helpDialog");
  dialog.innerHTML = "";

  if (dialog) {
    dialog.innerHTML += getTemplatehelpForm();
    dialog.showModal();
    console.log("Dialog open!");
  }
}

function closeDialog(id) {
  let dialog = document.getElementById(id);
  dialog.innerHTML = "";

  if (dialog) {
    dialog.close();
    console.log("Dialog open!");
  }
}

function sendMail(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  fetch("https://formspree.io/f/mqppjjrv", {
    method: "POST",
    body: new FormData(event.target),
    headers: {
      Accept: "application/json",
    },
  })
    .then(() => {
      window.location.href = "./sendMail.html";
    })
    .catch((error) => {
      console.log(error);
    });
}

function rendersupportedModells() {
  let content = document.getElementById("supportedModdelsContainer");
  content.innerHTML = "";

  for (let index = 0; index < supportedModdels.length; index++) {
    content.innerHTML += getTemplateSupportedModells(index);
  }
}
