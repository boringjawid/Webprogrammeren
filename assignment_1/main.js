var path = window.location.pathname;
let page = path.split("/").pop();

function nameToIndex() {
// Sets the title to Index
  document.getElementsByTagName('title')[0].innerText = "Webprogramming (LIX018P05) - Index";
}

function nameToSecond() {
// Sets the title to Second
  document.getElementsByTagName("title")[0].innerText = "Webprogramming (LIX018P05) - Second";
}

function addNewArticle() {
  // Adds a new article
  let container = document.querySelector('.container');
  let article = document.createElement('article');
  let h1 = document.createElement('h1');
  let p = document.createElement('p');
  h1.textContent = 'The New Article';
  p.textContent = 'Mihi paucis verbis dicendum est de America in Latino. America, duo continentes continens, est regio cuius pars orientalis Europa, pars occidentalis Asia adjacent. America a Britannia Oceanum Atlanticaum et a Oceano Pacis separat. America Latina autem, regionem Americarum significans, Hispanice, Lusitanice et Gallice loquitur. Haec regio Mexicum, Americam Centralem, Americam Meridionalem et partem Caribaeorum continet. America Latina patrimonium culturale habet opulentum quod indigenae ac coloniale aetatis Hispaniae et Portugalliae influebant. Musica, saltus, culinae, litterae Latinae Americae characteristicae sunt, ut et diversa naturalia spectacula et loca historia. Cum difficultatibus suis, America Latina regio est dinamica ac facinora.'
  article.appendChild(h1);
  article.appendChild(p);
  container.appendChild(article);
}

function addSchedule() {
  let wpList = {
    'Week 1': 'Assignment 1',
    'Week 2': 'Assignment 1',
    'Week 3': 'Assignment 2',
    'Week 4': 'Assignment 2',
    'Week 5': 'Assignment 3',
    'Week 6': 'Assignment 3',
    'Week 7': 'Final Project'
  }
  for (const [week, assignment] of Object.entries(wpList)) {
  // Adds the schedule
    let container = document.querySelector('.container');
    const div = document.createElement('div');
    div.innerHTML = `<strong>${week}:</strong> ${assignment}`;
    container.appendChild(div);
  }
}

function createLinks() {
  // Changes the value of href attribute for all <a> elements inside <li> inside <div> with id="links" and opens the links in a new tab
  const links = document.querySelectorAll('#links a');
  for (let i = 0; i < links.length; i++) {
  const link = links[i];
  link.setAttribute('href', 'https://google.com');
  link.setAttribute('target', '_blank');
  }
}

function colorToRed() {
  // Get all elements with class 'nav-item' and set the text color to red
  const navItems = document.querySelectorAll('.nav-item a');
  for (let i = 0; i < navItems.length; i++) {
  navItems[i].style.color = 'red';
  }
}

function addSideBar() {
  // Resize the main column and add a sidebar
  const mainColumn = document.querySelector('.col-md-12');
  mainColumn.classList.remove('col-md-12');
  mainColumn.classList.add('col-md-8');

  const sidebarColumn = document.createElement('div');
  sidebarColumn.classList.add('col-md-4');

  const sidebarHeading = document.createElement('h2');
  sidebarHeading.textContent = 'Sidebar';

  sidebarColumn.appendChild(sidebarHeading);

  mainColumn.parentNode.insertBefore(sidebarColumn, mainColumn.nextSibling);
}


if (page === 'index.html')  {
  nameToIndex();
  addNewArticle();
  addSchedule();
  createLinks();
  colorToRed();
} else {
  nameToSecond();
  createLinks();
  colorToRed();
  addSideBar();
}








