window.onload = async function () {
    renderPostsListAndPagination(await getPosts());

    document.getElementById('sort').addEventListener('click', async (e) => {
        changeSortingButtonProperties(e.target);
        let posts = getSortedPosts(await getPosts(), e.target.dataset.sort);
        renderPostsListAndPagination(posts);
    });

    document.getElementById('search').addEventListener('keyup', async (e) => {
        let posts = await getPosts();
        posts = getSearchedPosts(posts, e.target.value);
        renderPostsListAndPagination(posts);
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

async function getPosts() {
    let rawData = await fetch('posts.json').then(raw => raw.json());
    return rawData.filter(item => item.publish == 'true');
}

function getSearchedPosts(posts, search) {
    let searchedPosts = [];
    let pattern = new RegExp(search, 'gi');
    posts.forEach((item) => {
        if (item.title.search(pattern) !== -1) {
            searchedPosts.push(item);
        }
    });
    return searchedPosts;
}

function getSortedPosts(posts, sort) {
    if (sort === 'descending') {
        posts = posts.toSorted((a, b) => parseInt(a.id) < parseInt(b.id));
    }
    return posts;
}

function renderPostsListAndPagination(posts) {
    $('#pagination').pagination({
        dataSource: posts,
        showSizeChanger: true,
        showNavigator: true,
        autoHideNext: true,
        autoHidePrevious: true,
        sizeChangerOptions: [5, 10, 20],
        callback: function (posts, pagination) {
            let html = '<ul>';
            $.each(posts, function (index, item) {
                html += `<li><a href="post.html?article=${item.link}">${item.title}</a></li>`;
            });
            html += '</ul>';
            $('#content').html(html);
        }
    });
}
