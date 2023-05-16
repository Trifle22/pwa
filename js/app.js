window.addEventListener('load', async () => {

  if (navigator.serviceWorker) {
    try {
      const reg = await navigator.serviceWorker.register('/sw.js')
      console.log('service worker successfully registered', reg);
    } catch (e) {
      console.log('service worker fail');
    }
  }

  await loadPosts()
})

async function loadPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const data = await res.json();
  const postsContainer = document.querySelector('.posts');
  postsContainer.innerHTML = data.map(toCard).join('\n');
}

function toCard(post) {
  return `
  <div class="card">
    <div class="card-title">
      ${post.title}
    </div>
    <div class="card-body">
      ${post.body}
    </div>
  </div>
  `
}