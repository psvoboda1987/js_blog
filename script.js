renderPostsListAndPagination(await getData());

document.getElementById('sort').addEventListener('click', async (e) => {
    activateSorting(e);
    renderPostsListAndPagination(await getData());
})

document.getElementById('mode').addEventListener('click', (e) => {
    switchColorMode(e);
})

document.getElementById('search').addEventListener('keyup', async (e) => {
    renderPostsListAndPagination(await getData(e.target.value));
})

function switchColorMode(e) {
    let switchEl = e.target;
    if (switchEl.dataset.mode === 'dark') { // activate dark
        switchEl.dataset.mode = 'light';
        switchEl.innerText = 'dark';
    } else { // activate light
        switchEl.dataset.mode = 'dark';
        switchEl.innerText = 'light';
    }
    document.body.className = switchEl.dataset.mode;
}

function activateSorting(e) {
    const sortEl = e.target;
    if (sortEl.dataset.sort === 'ascending') {
        sortEl.dataset.sort = 'descending';
        sortEl.innerText = 'DESC';
    } else {
        sortEl.dataset.sort = 'ascending';
        sortEl.innerText = 'ASC';
    }
}

async function getData(search) {
    let data = await fetch('posts.json').then(raw => raw.json());
    if (search) {
        let newData = [];
        let pattern = new RegExp(search, 'gi');
        data.forEach((item) => {
            if (item.title.search(pattern) !== -1) {
                newData.push(item);
            }
        })
        data = newData;
    }
    if (document.getElementById('sort').dataset.sort === 'descending') {
        data = data.toSorted((a, b) => parseInt(a.id) < parseInt(b.id));
    }
    return data;
}

function renderPostsListAndPagination(data) {
    $('#pagination').pagination({
        dataSource: data,
        showSizeChanger: true,
        showNavigator: true,
        autoHideNext: true,
        autoHidePrevious: true,
        // showGoInput: true,
        // showGoButton: true,
        sizeChangerOptions: [5, 10, 20],
        callback: function (data, pagination) {
            let html = '<ul>';
            $.each(data, function (index, item) {
                html += `<li><a href="post.html?article=${item.link}">${item.title}</a></li>`;
            });
            html += '</ul>';
            $('#content').html(html);
        }
    });
}
