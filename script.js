let anruf = document.getElementById("Anruf");

function Rufnummer() {
  window.alert(
    "Bitte schoen, Bitte kopieren Sie unsere Rufnummer: +212600000001",
  );
}

anruf.addEventListener("click", Rufnummer);

let Submit = document.getElementById("Submit");

function submit() {
  window.alert("Danke, Deine Nachricht ist bei uns gekommen");
}

Submit.addEventListener("click", submit);
