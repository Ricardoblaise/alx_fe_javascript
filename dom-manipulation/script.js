document.addEventListener('DOMContentLoaded', () => {
  const quoteDisplay = document.getElementById('quoteDisplay');
  const newQuoteButton = document.getElementById('newQuote');
  const addQuoteButton = document.getElementById('addQuoteButton');
  const newQuoteText = document.getElementById('newQuoteText');
  const newQuoteCategory = document.getElementById('newQuoteCategory');

  const quotes = [
      { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", category: "Inspiration" },
      { text: "The way to get started is to quit talking and begin doing.", category: "Motivation" },
      { text: "Life is what happens when you're busy making other plans.", category: "Wisdom" }
  ];

  function showRandomQuote() {
      if (quotes.length === 0) {
          quoteDisplay.textContent = "No quotes available.";
          return;
      }
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const quote = quotes[randomIndex];
      quoteDisplay.textContent = `"${quote.text}" - ${quote.category}`;
  }

  function addQuote() {
      const text = newQuoteText.value.trim();
      const category = newQuoteCategory.value.trim();
      if (text === "" || category === "") {
          alert("Both fields are required.");
          return;
      }
      quotes.push({ text, category });
      newQuoteText.value = "";
      newQuoteCategory.value = "";
      showRandomQuote(); 
  }

  newQuoteButton.addEventListener('click', showRandomQuote);
  addQuoteButton.addEventListener('click', addQuote);

  showRandomQuote();
});