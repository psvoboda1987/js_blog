window.onload = async () => {
    await renderPost();
}

async function renderPost() {
    const converter = new showdown.Converter();
    const urlParams = new URLSearchParams(location.search);
    const title = urlParams.get('article');
    await fetch(`assets/posts/${title}/default.md`)
        .then(data => data.text())
        .then(data => document.getElementById('content').innerHTML = converter.makeHtml(data));

    // fix img src
    Array.from(document.images).forEach(image => {
        let search = location.pathname.split('/')[1];
        let replace = `${location.pathname.split('/')[1]}/assets/posts/${title}`;
        image.src = image.src.replace(search, replace);
    })
}
