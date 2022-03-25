window.addEventListener("DOMContentLoaded", init);

function init(event) {
  getData();
}

async function getData() {
  let result = await fetch(
    "https://nerdifying.dk/Theme-9-DC/wp22-rc_apart/wp-json/wp/v2/apartment?_embed"
  );
  showPosts(await result.json());
}

function showPosts(apartment) {
  const template = document.querySelector("#main_template").content;

  apartment.forEach((place) => {
    const templateClone = template.cloneNode(true);
    //change content

    templateClone.querySelector("h3").textContent = place.title.rendered;

    templateClone.querySelector("h3:last-of-type").textContent =
      place._embedded["wp:term"][0][0].name +
      ", " +
      place._embedded["wp:term"][0][1].name;
    templateClone.querySelector(".beds li").textContent = place.bed;
    templateClone.querySelector(".baths li").textContent = place.bath;
    templateClone.querySelector(".space li").textContent = place.square_feet;
    templateClone.querySelector("img").src =
      place._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.medium.source_url;
    //end content
    document.querySelector("main").appendChild(templateClone);
  });
}
