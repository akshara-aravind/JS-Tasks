//2 progress bar
const color = document.querySelector('.color')
window.addEventListener('scroll',() => {
    const top = document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

    const percentage = (top / height) * 100
    color.style.width = percentage + '%'
})