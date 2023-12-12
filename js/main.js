

var quotes = [
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa"
    },

    {
        text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author: "James Cameron"
    },
    {
        text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author: "Oprah Winfrey"
    },

    {
        text: 'Be yourself; everyone else is already taken.',
        author:  'Oscar Wilde'
    },

    {
        text: 'You only live once, but if you do it right, once is enough.',
        author:  'Mae West'
    },
    
    {
        text: 'Many of life s failures are people who did not realize how close they were to success when they gave up.',
        author:  'Thomas A. Edison'
    },

    {
        text: 'If you want to live a happy life, tie it to a goal, not to people or things.',
        author:  'Albert Einstein'
    }


];

function displayRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quote = quotes[randomIndex];

    document.getElementById("quoteText").innerHTML = quote.text;
    document.getElementById("author").innerHTML = "- " + quote.author;
}

document.getElementById("newQuoteBtn").addEventListener("click", displayRandomQuote);

// displayRandomQuote();

