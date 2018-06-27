const inputCohorts = document.getElementById("cohorts");

disparaSelect = (event) =>{
  let idValue = event.target.value;
  muestraID(idValue)
  return idValue;
}

inputCohorts.addEventListener("change",  disparaSelect);


