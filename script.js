const links = document.querySelectorAll('.nav-links a');

const articles = document.querySelectorAll('article');
articles.forEach((article, index) => {
  if (index === 0) {
    article.style.display = 'block';
  } else {
    article.style.display = 'none';
  }
});
links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    
    const targetId = link.dataset.target;
    
    links.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
    
    articles.forEach(article => {
      article.style.display = (article.id === targetId) ? 'block' : 'none';
    });
  });
});
