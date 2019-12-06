// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const header = document.createElement('div'),
        spanDate = document.createElement('span'),
        h1 = document.createElement('h1'),
        spanTemp = document.createElement('span');

        header.classList.add('header');
        spanDate.classList.add('date');
        spanTemp.classList.add('temp');

        header.appendChild(spanDate);
        header.appendChild(h1);
        header.appendChild(spanTemp);

        spanDate.textContent = `SMARCH 28, 2019`;
        h1.textContent = `Lambda Times`;
        spanTemp.textContent = `98\xB0`

        return header
}
const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header())

