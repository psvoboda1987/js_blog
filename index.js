renderPostsListAndPagination(await getData());

activateSortSwitch();

activateSearchSwitch();

function activateSortSwitch() {
    getElementById('sort').addEventListener('click', async (e) => {
        changeSortingButtonProperties(e.target);
        renderPostsListAndPagination(await getData());
    });
}

function activateSearchSwitch() {
    getElementById('search').addEventListener('keyup', async (e) => {
        renderPostsListAndPagination(await getData(e.target.value));
    });
}

function changeSortingButtonProperties(sortEl) {
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
        });
        data = newData;
    }
    if (getElementById('sort').dataset.sort === 'descending') {
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

function getElementById(id) {
    return document.getElementById(id);
}
