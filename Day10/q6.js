//6 key pressed details
const result = document.querySelector('.result')
const inputBox = document.querySelector('.inputBox')
const keyTable = document.querySelector('.keyTable')

inputBox.addEventListener('keypress', (e) =>{
    console.log(e)
    const rows = document.createElement('tr')
    const row1 = document.createElement('td')
    const row2 = document.createElement('td')
    const row3 = document.createElement('td')

    row1.textContent = e.key
    row2.textContent = e.code
    row3.textContent = e.timeStamp

    rows.appendChild(row1)
    rows.appendChild(row2)
    rows.appendChild(row3)

    keyTable.appendChild(rows)
    if(keyTable.rows.length > 11){
      keyTable.deleteRow(0)
    }
})