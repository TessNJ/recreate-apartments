window.addEventListener("DOMContentLoader", init);

function init(event) {
  getData();
}

async function getData() {
  let result = await fetch(
    "https://nerdifying.dk/Theme-9-DC/wp22-rc_apart/wp-json/wp/v2/apartment?_embed"
  );
  showPosts(await result.json());
}

function showPosts(posts) {
  console.log(posts);
}
