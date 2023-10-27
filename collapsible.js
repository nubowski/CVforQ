document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll('.collapsible-header');
    headers.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});