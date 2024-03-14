const blogCards = document.querySelectorAll('.blog');

blogCards.forEach(card => {
  const learnMoreBtn = card.querySelector('.learn-more');
  const likeBtn = card.querySelector('.like-btn');
  const commentBtn = card.querySelector('.comment-btn');

  learnMoreBtn.addEventListener('click', () => {
    const blogId = learnMoreBtn.getAttribute('data-id');
    // Redirect to another page with the blog details
    window.location.href = `blogs-detail.html?id=${blogId}`;
  });

  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('liked');
  });

  commentBtn.addEventListener('click', () => {
    const commentsSection = card.querySelector('.comments-section');
    commentsSection.classList.toggle('show-comments');
  });
});
