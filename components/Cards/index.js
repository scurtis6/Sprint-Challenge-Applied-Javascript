// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response =>{
    // console.log(response.data.articles);
    response.data.articles.javascript.forEach(e => {
        cardContainer.appendChild(createCard(e.headline, e.authorPhoto, e.authorName))
    })
    response.data.articles.bootstrap.forEach(e => {
        cardContainer.appendChild(createCard(e.headline, e.authorPhoto, e.authorName))
    })
    response.data.articles.technology.forEach(e => {
        cardContainer.appendChild(createCard(e.headline, e.authorPhoto, e.authorName))
    })
    response.data.articles.jquery.forEach(e => {
        cardContainer.appendChild(createCard(e.headline, e.authorPhoto, e.authorName))
    })
    response.data.articles.node.forEach(e => {
        cardContainer.appendChild(createCard(e.headline, e.authorPhoto, e.authorName))
})
})

/*solution #2
    const topicArray = Object.values(response.data.articles);
    console.log(topicArray);
    topicArray.forEach(e => {
      e.forEach(i => {
        cardContainer.appendChild(createCard(i.headline, i.authorPhoto, i.authorName));
      })
})*/
.catch(err =>{
    console.log('The data was not returned', err)
})

function createCard(headline, authorPhoto, authorName){
    const card = document.createElement('div'),
        cardHeadline = document.createElement('div'),
        author = document.createElement('div'),
        imgContainer = document.createElement('div'),
        img = document.createElement('img'),
        span = document.createElement('span');

        card.classList.add('card');
        cardHeadline.classList.add('headline');
        author.classList.add('author');
        imgContainer.classList.add('img-container');

        card.appendChild(cardHeadline);
        card.appendChild(author);
        author.appendChild(imgContainer);
        author.appendChild(span);
        imgContainer.appendChild(img);

        cardHeadline.textContent = headline;
        img.src = authorPhoto;
        span.textContent = `By ${authorName}`

        return card
}
