// Currency data
const currencies = [
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "CHF", name: "Swiss Franc" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "INR", name: "Indian Rupee" },
  { code: "MXN", name: "Mexican Peso" },
];

const userCurrencyInput = document.querySelector("#user-currency");
const selectUserCurrency = document.querySelector("#select-user-currency");
const convertedCurrency = document.querySelector("#convert-currency");
const selectConvertCurrency = document.querySelector(
  "#select-convert-currency"
);

// Popular currency select element
function populateCurrrencySelect() {
  const populateSelect = (selectElements) => {
    currencies.forEach((currency) => {
      const option = document.createElement("option");
      option.value = currency.code;
      option.textContent = `${currency.name} (${currency.code})`;
      selectElements.appendChild(option);
    });
  };
  populateSelect(selectUserCurrency);
  populateSelect(selectConvertCurrency);
}

populateCurrrencySelect();

const handleOnClick = document.querySelector("#btn");

handleOnClick.addEventListener("click", convertCurrency);

const apiKey = "tmbHN1v0GZte8vSpbSDSLg==I4ILLRKjJlVKI3gk";

async function convertCurrency() {
  const amount = Number(userCurrencyInput.value);
  const fromCurrency = selectUserCurrency.value;
  const toCurrency = selectConvertCurrency.value;

  // Input validation
  if (isNaN(amount) || amount < 0 || !fromCurrency || !toCurrency) {
    convertedCurrency.value = "Invalid input";
    return;
  }

  const url = `https://api.api-ninjas.com/v1/convertcurrency?have=${fromCurrency}&want=${toCurrency}&amount=${amount}`;

  try {
    const response = await fetch(url, {
      headers: {
        "X-Api-Key": apiKey,
      },
    });

    //   check if the API request was successful
    if (!response.ok) {
      throw new Error(`Error fetching data. Status: ${response.status}`);
    }

    //   convert data into JSON format
    const data = await response.json();
    console.log(data);

    // Display the new crurrency
    convertedCurrency.value = data.new_amount.toFixed(2);

    // display error message
  } catch (error) {
    console.error("Error loading data", error.message);
    convertedCurrency.value = "conversion failed";
  }
}
