const button = document.getElementById("button");

const body = document.getElementById("body");

let loading = false;

if (button)
  button.addEventListener("click", async () => {
    if (!loading) {
      getQuote();
    }
  });

const getQuote = async () => {
  const url = "https://api.quotable.io/random";
  const options = {
    method: "GET",
  };
  loading = true;
  if (button) button.classList.toggle("button--loading");
  try {
    const quoteResponse = await fetch(url, options);
    const quoteResult = await quoteResponse.json();
    if (body) body.innerText = '"' + quoteResult.content + '"';
    loading = false;
    if (button) button.classList.toggle("button--loading");
  } catch (error) {
    console.error(error);
    if (body) body.innerText = "Sorry API error !!";
    loading = false;
    if (button) button.classList.toggle("button--loading");
  }
};

getQuote();
