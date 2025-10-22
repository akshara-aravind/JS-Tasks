const result = document.querySelector('.result')
const inputBox = document.querySelector('.input')
const keyTable = document.querySelector('.keyTable')

const header = document.createElement('tr')
const tr1 = document.createElement('th')
const tr2 = document.createElement('th')
const tr3 = document.createElement('th')
tr1.textContent = 'Pressed Key '
tr2.textContent = 'Alphabetic Code '
tr3.textContent = 'Character Code '
keyTable.appendChild(tr1)
keyTable.appendChild(tr2)
keyTable.appendChild(tr3)

let i=0
inputBox.addEventListener('keypress',(e)=>{

if(i < 10){
const rowLists = document.createElement('tr')
const row1 = document.createElement('td')
const row2 = document.createElement('td')
const row3 = document.createElement('td')

row1.textContent = e.key
row2.textContent = e.code
row3.textContent = e.charCode

rowLists.appendChild(row1)
rowLists.appendChild(row2)
rowLists.appendChild(row3)

keyTable.appendChild(rowLists)

i++
}

})