function loadHTML(url, elementId) {
    fetch(url)
    .then(response => response.text())
    .then(html => {
        document.getElementById(elementId).innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}
