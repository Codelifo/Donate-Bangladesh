function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    return parseFloat(inputValue);
  }
  
  function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    return parseFloat(textValue);
  }
  
  function historyGenerator(heading, donateBalance) {
    const headingElement = document.getElementById(heading).innerText;
    const d = new Date();
    console.log(d);
    const div = document.createElement("div");
    div.classList.add("p-6", "border", "space-y-4", "rounded-2xl");
    div.innerHTML = `
          <h2 class=" text-xl font-bold text-gray-800
          ">${donateBalance} Taka is ${headingElement}</h2>
          <p class="bg-slate-100 rounded-lg pl-3 py-2 text-base font-light text-gray-700">Date : ${d}</p>
  
      `;
    document.getElementById("history-section").appendChild(div);
  }
  
  function modelOpen() {
    const model = document.getElementById("model");
    model.classList.remove("hidden");
  }
  
  
  