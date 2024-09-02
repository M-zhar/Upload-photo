let photos = [];
let currentPhotoIndex = 0;

document.getElementById('add-photo-btn').addEventListener('click', function() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.click();

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                photos.push(e.target.result);
                if (photos.length === 1) {
                    displayPhoto(0);
                }
            };
            reader.readAsDataURL(file);
        }
    });
});

document.getElementById('prev-photo-btn').addEventListener('click', function() {
    if (photos.length > 0) {
        currentPhotoIndex = (currentPhotoIndex > 0) ? currentPhotoIndex - 1 : photos.length - 1;
        displayPhoto(currentPhotoIndex);
    }
});

document.getElementById('next-photo-btn').addEventListener('click', function() {
    if (photos.length > 0) {
        currentPhotoIndex = (currentPhotoIndex < photos.length - 1) ? currentPhotoIndex + 1 : 0;
        displayPhoto(currentPhotoIndex);
    }
});

function displayPhoto(index) {
    const imgElement = document.getElementById('current-photo');
    imgElement.src = photos[index];
    imgElement.style.display = 'block';
}
