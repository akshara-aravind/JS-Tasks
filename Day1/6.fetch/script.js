/*fetch data*/
/**
 Show their:
Picture
Name
Email
Add a “Shuffle Users” button that re-fetches 5 new ones.
Add a text input → filter users by name in real-time (client-side filtering).
*/
const container = document.querySelector('.container');
const shuffle = document.querySelector('.shuffle');



fetch('https://randomuser.me/api/?results=5')
.then(response=>response.json())
.then(data=>{
  console.log(data)
  data.results.forEach(element => {
    let li = document.createElement('li');
    li.style.listStyleType = 'none'
   li.innerHTML = `
   <img src = ${element.picture.large} />
   <h3> Name: ${element.name.title} ${element.name.first} ${element.name.last}</h3>
   <h5> Email: ${element.email}</h5>`
   container.appendChild(li)
  });
})

shuffle.addEventListener('click', function() {
  window.location.reload()
})

