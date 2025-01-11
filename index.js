document.querySelector('.nav-toggle').addEventListener('click', function() {
  const nav = this.closest('nav');
  nav.classList.toggle('collapsed');
});

const fetchPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    const latestPosts = posts.slice(0, 10); // 最新10件のみ取得

    const main = document.querySelector('main');
    console.table(latestPosts);
    latestPosts.forEach(post => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;
      main.appendChild(card);
    });
  } catch (error) {
    console.error('データの取得に失敗しました:', error);
  }
}

fetchPosts();
console.info("情報");
console.log("ログ");
console.warn("警告");
console.error("エラー");
