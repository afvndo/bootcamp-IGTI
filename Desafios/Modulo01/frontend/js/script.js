let globalDevelopers = [];
let globalResults = [];

let tabResults = null;

window.addEventListener('load', () => {
  tabResults = document.querySelector('#results');

  fetchDevelopers();
});

async function fetchDevelopers() {
  const res = await fetch('http://localhost:3001/devs');
  const json = await res.json();
  
  const devs = json.map(( devs ) => {
    const { name, picture, programmingLanguages} = devs;
    return {
      name,
      picture,
      languages: programmingLanguages,
      pesquisa: name.trim().replace(' ','').toLowerCase()
    }
  });
  
  globalDevelopers = devs;
  render();
}

function render() {
  renderResults();
}

function renderResults() {
  globalResults = globalDevelopers;
  let HTMLResults = "<div>";
  globalResults.forEach(( dev ) => {
    const { name, picture, languages } = dev;
    const langs = languages.reduce((acum, curr) => {
      const { id, language, experience } = curr;
      return acum += `<img class='img-language' src='../images/${language.toLowerCase()}.png' alt='${id}'>&nbsp;<span>(${experience})</span>`;
    }, '');

    console.log(langs);

    const HTMLDeveloper = `
      <div>
        <img class='img-developer' src='${picture}' alt='${name}'>
        <p>${name}</p>
        <p>${langs}</p>
      </div>
    `;
    HTMLResults += HTMLDeveloper;
  })
  HTMLResults += "</div>";

  tabResults.innerHTML = HTMLResults;
}