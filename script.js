window.addEventListener('load', function() {
    const loadingScreen = document.querySelector('.loadingScreen');
    const content = document.querySelector('.content');

    // Menghilangkan loading screen
    loadingScreen.style.display = 'none';
    
    // Menampilkan konten setelah loading selesai
    content.style.display = 'block';
});