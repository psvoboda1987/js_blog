window.onload = async () => {
    await renderPost();
}

async function renderPost() {
    const urlParams = new URLSearchParams(location.search);
    const title = urlParams.get('article');
    let json = await fetch(`posts.json`)
    let data = await json.json()
    let post = data.find(item => item.link === title);
    document.getElementById('content').innerHTML = post.content;

    fixImageSrc();
}

function fixImageSrc() {
    Array.from(document.images).forEach(image => {
        let src = image.src.split('/');
        let search = src[src.length - 1];
        image.src = image.src.replace(search, `assets/images/${search}`);
    });
}