const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    // Thêm các đường dẫn ảnh vào đây
];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

document.getElementById('randomImage').src = getRandomImage();
