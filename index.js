const likes = document.getElementsByClassName("right");
for (const like of likes) {
  like.children[1].addEventListener("click", () => {
    let likes = like.children[0].innerText.split(" ");
    likes[0] = parseInt(likes[0]) + 1;
    like.children[0].innerText = likes.join(" ");
  });
}
