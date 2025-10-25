/**
10. Create an image gallery.
 i) User should able to upload a image from device and should be shown in UI
 ii) User should able to delete images, should also support deleting multiple images
 iii) Show message "Upload images to see" when no images are available. 
*/
const uploadInput = document.querySelector('.imageUpload')
const deleteBtn = document.querySelector('.deleteBtn')
const noImageText = document.querySelector('.noImageText')
const gallery = document.querySelector('.gallery')

uploadInput.addEventListener('change', function(e){
    const files =[...e.target.files];

    files.forEach(file => {
        const reader = new FileReader();//read file from user device

        reader.onload = function (event){ // run after the file read
            const imgContainer = document.createElement('div')
            imgContainer.classList.add('image-container');

            imgContainer.innerHTML = `
            <input type= "checkbox" class = "check"
            <img src = "${event.target.result}" >`;

            gallery.appendChild(imgContainer);
            updateUI()
        };
        reader.readAsDataURL(file)
    });
    uploadInput.value = ''; //same file can be uploaded again
});

deleteBtn.addEventListener('click',() =>{
    const seletedImages = document.querySelectorAll('.check:checked');
    seletedImages.forEach(img => img.parentElement.remove());
    uploadBtn();
})
function updateUI(){
    const images = document.querySelectorAll('.image-container');
    noImageText.style.display = images.length ? 'none' : 'block';
    deleteBtn.disabled = images.length === 0;
}