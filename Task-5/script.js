document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('posts-container');
    const loader = document.getElementById('loader');

    const fetchPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            const data = await response.json();
            
            // Slice the first 9 posts for display
            const posts = data.slice(0, 9);
            
            // Remove loader
            loader.style.display = 'none';

            // Iterate and inject into DOM
            posts.forEach(post => {
                const card = document.createElement('div');
                card.className = 'card';
                
                card.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;
                
                container.appendChild(card);
            });

        } catch (error) {
            console.error(error);
            loader.style.display = 'none';
            container.innerHTML = `<p style="color: red; text-align: center; width: 100%;">Error loading API data.</p>`;
        }
    };

    fetchPosts();
});
