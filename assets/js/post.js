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
        // let search = location.pathname.split('/')[1];
        // let search = image.src.split('/')[6] + '/';
        // let replace = `${location.pathname.split('/')[1]}/assets/posts`;
        // let replace = '';
        // image.src = image.src.replace(search, replace);
    });
}