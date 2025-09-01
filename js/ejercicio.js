
   document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const icon = this.querySelector('i');
    if(document.body.classList.contains('dark-mode')) {
        icon.classList.remove('bi-moon');
        icon.classList.add('bi-brightness-high');
    } else {
        icon.classList.remove('bi-brightness-high');
        icon.classList.add('bi-moon');
    }
});
