const quotes = [
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: " Walt Disney",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: " John Lennon",
    },
    {
      quote:
        "The world is a book and those who do not travel read only one page.",
      author: " Saint Augustine",
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      author: " Helen Keller",
    },
    {
      quote: "To Travel is to Live",
      author: " Hans Christian Andersen",
    },
    {
      quote: "Only a life lived for others is a life worthwhile.",
      author: " Albert Einstein",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: " Mae West",
    },
    {
      quote: "Never go on trips with anyone you do not love.",
      author: " Hemmingway",
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment.",
      author: " Hilaire Belloc",
    },
    {
      quote: "Travel expands the mind and fills the gap.",
      author: " Sheda Savage",
    },
    {
        quote: "Life has no limitations, except the ones you make.",
        author: " Les Brown",
    },
    {
        quote: "Life is a lively process of becoming.",
        author: " Gen. Douglas MacArthur",
    },
    {
        quote:
        "Life is what happens while you are busy making other plans.",
        author: " John Lennon",
    },
    {
        quote: "All great changes are preceded by chaos.",
        author: " Deepak Chopra",
    },
    {
        quote: "Change alone is eternal, perpetual, immortal",
        author: " Arthur Shopenhauer",
    },
    {
        quote: "By changing nothing, nothing changes.",
        author: " Tony Robbins",
    },
    {
        quote: "Change is inevitable. Growth is optional.",
        author: " John C. Maxwell",
    },
    {
        quote: "Change your thinking, change your life.",
        author: " Ernest Holmes",
    },
    {
        quote: "Failure is not fatal, but failure to change might be.",
        author: " John Wooden",
    },
    {
        quote: "Nothing is forever except change.",
        author: " Buddha",
    },
  ];
  
  const quote = document.querySelector("#quote #quote_content");
  const author = document.querySelector("#quote #quote_author");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = `- `+todaysQuote.author;