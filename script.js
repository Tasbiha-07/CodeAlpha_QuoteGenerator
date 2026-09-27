const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { text: "Knowledge is power.", author: "Francis Bacon" }
];

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote-btn");
const copyBtn = document.getElementById("copy-btn");

let lastIndex = -1;

function displayRandomQuote() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastIndex && quotes.length > 1);

  lastIndex = randomIndex;
  const quote = quotes[randomIndex];
  quoteText.textContent = `"${quote.text}"`;
  quoteAuthor.textContent = `- ${quote.author}`;
}

newQuoteBtn.addEventListener("click", displayRandomQuote);

copyBtn.addEventListener("click", () => {
  const fullText = `${quoteText.textContent} ${quoteAuthor.textContent}`;
  navigator.clipboard.writeText(fullText).then(() => {
    const originalText = copyBtn.textContent;
    copyBtn.textContent = "Copied!";
    setTimeout(() => {
      copyBtn.textContent = originalText;
    }, 1500);
  });
});

// Load a quote immediately on launch
displayRandomQuote();