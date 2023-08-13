fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        const postTitles = posts.map(post => post.title);
        const publicPosts = posts.filter(post => !post.private);
        console.log('title post :', postTitles);
        console.log('public post', publicPosts);
    })
    .catch(error => {
        console.error('error', error);
    });
