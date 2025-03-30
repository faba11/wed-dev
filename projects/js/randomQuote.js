const btn = document.querySelector("#quote-btn");
const message = document.querySelector("#quote-message");
const category = document.querySelector("#category");

btn.addEventListener("click", quotes);

const url = "https://api.api-ninjas.com/v1/quotes?category=happiness";
const apiKey = "tmbHN1v0GZte8vSpbSDSLg==I4ILLRKjJlVKI3gk";

async function quotes() {
  try {
    const response = await fetch(url, {
      headers: {
        "X-Api-Key": apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
    // display message to page

    result.map((messageQuote) => {
      message.textContent = `“${messageQuote.quote}”`;

      category.innerHTML = `-${messageQuote.author}`;
    });
  } catch (error) {
    console.error("Fetch eroor", error);
    message.textContent = "Fetching to load quote";
  }
}

// calling the function here will fire function once the page is open
quotes();
