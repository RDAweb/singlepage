const ImgSelector = document.querySelectorAll("ImgSelector");
const imagePreview = document.getElementById('imagePreview');

ImgSelector. forEach( thumbnail => {
    thumbnail.addEventListener("click", () => {
        imagePreview.src = this.src;
    });
});