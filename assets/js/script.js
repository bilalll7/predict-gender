console.log("test javascript");

const base_url_api = "https://api.genderize.io";

function showResult(name, gender, probability) {
  const prediction = document.getElementById("result");
  // console.log(name, gender, probability);
  const probabilityPercent = probability * 100;
  let genderDecode;
  if (gender == "female") {
    genderDecode = "cewek";
  } else {
    genderDecode = "cowok";
  }
  const predictionText = `Halo ${name}, Jenis kelamin kamu kemungkinan adalah ${genderDecode} sebesar ${probabilityPercent}%`;
  console.log(predictionText);

  prediction.textContent = predictionText;
}

async function predict(event) {
  if (event.key == "Enter") {
    const firstName = event.target.value;
    const queryUrl = `${base_url_api}/?name=${firstName}&country_id=ID`;

    const response = await fetch(queryUrl);
    const result = await response.json();
    // console.log(result);
    showResult(result.name, result.gender, result.probability);
  }
}
