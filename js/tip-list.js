function createTipItem(item, index) {
  return `
    <article class="tip-row">
      <span class="tip-num">${index + 1}</span>
      <div class="tip-body">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
      ${createYoutubeVideo(item.youtubeId)}
    </article>
  `;
}

const list = document.querySelector(".tip-list");
if (list && window.TIP_ITEMS) {
  const items = TIP_ITEMS[list.dataset.key] ?? [];
  list.innerHTML = items.map(createTipItem).join("");
}
