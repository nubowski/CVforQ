document.querySelectorAll('.collapsible-header').forEach(function(header) {
    header.addEventListener('click', function() {
        this.classList.toggle('open');
    });
});
