document.getElementById("form").addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  var formData = new FormData(event.target);
  var formObject = {};
  formData.forEach(function(value, key) {
    formObject[key] = value;
  });

  fetch(
    "https://onedrive.live.com/edit?action=editnew&id=2DFE4E628D04F41B!138&resid=2DFE4E628D04F41B!138&ithint=file%2cxlsx&ct=1715630204954&wdNewAndOpenCt=1715630204591&wdOrigin=OFFICECOM-WEB.START.NEW&wdPreviousSessionSrc=HarmonyWeb&wdPreviousSession=08ee33fc-4983-42cc-a8d5-eba3f0b39de9&wdo=2&cid=2dfe4e628d04f41b",

    {
      method: "POST",
      body: JSON.stringify(formObject),
    }
  )
  .then(res => {
    if (res.ok) {
      alert("Hello, you've successfully registered for THE APOSTOLIC INVASION, God bless you and see you there!!");
    } else {
      // Handle error if needed
    }
  })
  .catch(err => console.log(err));

  event.target.reset();
}