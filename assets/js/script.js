const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const gender = getSelectedValue("gender");
  const age = getInputNumberValue("age");
  const weight = getInputNumberValue("weight");
  const height = getInputNumberValue("height");
  const activityLevel = Number(getSelectedValue("activity_level"));
  const tmb = Math.round(
    gender === "female"
      ? 655 + 9.6 * weight + 1.8 * height - 4.7 * age
      : 66 + 13.7 * weight + 5 * height - 6.8 * age
  );
  const maintenance = Math.round(tmb * activityLevel);
  const loseWeight = maintenance - 450;
  const gainWeight = maintenance + 450;
  const layout = `
  <div class="result-container">
  <h2>Here's the results:</h2>
  <div id="result-content">
    <ul>
      <li>Seu metabolismo basal é de <strong>${tmb} calorias</strong>.</li>
      <li>
        Para manter o seu peso você precisa consumir em média
        <strong>${maintenance} calorias</strong>.
      </li>
      <li>
        Para perder peso você precisa consumir em média
        <strong>${loseWeight} calorias</strong>.
      </li>
      <li>
        Para ganhar peso você precisa consumir em média
        <strong>${gainWeight} calorias</strong>.
      </li>
    </ul>
  </div>
</div>
  `;
  const result = document.getElementById("result");
  result.innerHTML = layout;
}
function getSelectedValue(id) {
  const selected = document.getElementById(id);
  const index = selected.selectedIndex;
  return selected.options[index].value;
}
function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
}
