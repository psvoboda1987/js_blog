window.onload = async () => {
    await renderPost();
}

async function renderPost() {
    const converter = new showdown.Converter();
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('article');
    await fetch(`pages/${title}/default.md`)
        .then(data => data.text())
        .then(data => document.getElementById('content').innerHTML = converter.makeHtml(data));
}
