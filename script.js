document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function () {
        // Remove "active" from all navbar links
        document.querySelectorAll('nav a').forEach(el => el.classList.remove('active'));
        
        // Add "active" class to the clicked link
        this.classList.add('active');
    });
});