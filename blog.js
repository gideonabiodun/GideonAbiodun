// Contentful credentials
const spaceId = "g_U7hwE_XG2_nikLvp2ds7X9vYvvim7-4TYrlRyTPfE";
const accessToken = "iiNJ_Gei9qEDPQU24EUoB_72gnYQaoj5IsG_pwHC7Hc";

async function fetchPosts() {
  const response = await fetch(
    `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}&content_type=blogPost`
  );
  const data = await response.json();

  const postsContainer = document.getElementById("posts");

  data.items.forEach((item) => {
    const title = item.fields.title;
    const body = item.fields.body; // assuming "body" is a text field
    const date = item.fields.date; // if you added a date field

    const post = document.createElement("div");
    post.classList.add("post");
    post.innerHTML = `
      <h3>${title}</h3>
      <p><em>${date}</em></p>
      <p>${body}</p>
    `;

    postsContainer.appendChild(post);
  });
}

fetchPosts();
