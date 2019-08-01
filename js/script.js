/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


//Create array objects for quotes. Properties include: quote, source, citation and year.
var quotes = [
  {
    quote: "In politics, if you want anything said, ask a man. If you want anything done, ask a woman.",
    source: "Margaret Thatcher",
    citation: "From speech",
    year: "1965"
  },
  {
    quote: "The question isn’t who’s going to let me; it’s who is going to stop me.",
    source: "Ayn Rand"
  },
  {
    quote: "We realize the importance of our voices only when we are silenced.",
    source: "Malala Yousafzai",
    citation: "I Am Malala",
    year: "2013"
  },
  {
    quote: "Think like a queen. A queen is not afraid to fail. Failure is another steppingstone to greatness.",
    source: "Oprah",
  },
  {
    quote: "Every woman's success should be an inspiration to another. We're strongest when we cheer each other on.",
    source: "Serena Williams",
  }
];
//Test to ensure the function above worked: console.log(myQuotes);

//Create function to pull a random object from the array above.
function getRandomQuote() {
  var randomNum = [Math.floor(Math.random()*quotes.length)];
  return quotes[randomNum];
}
//Test to ensure function above worked: console.log( getRandomQuote() );

//Create function to pull a random quote via the getRandomQuote function above.
//Create variable to store array object properties and display the contents.
function printQuote() {
  var pullQuote = getRandomQuote();
  var string = '';
  string += '<p class="quote">' + pullQuote.quote + '</p>';
  string += '<p class="source">' + pullQuote.source
  if (pullQuote.citation != null) {
    string += '<span class="citation">' + pullQuote.citation + '</span>';
  }
  if (pullQuote.year != null) {
    string += '<span class="year">' + pullQuote.year + '</span>';
  } + '</p>';
  document.getElementById("quote-box").innerHTML = string;
}

//Instructed to leave code below as-is.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
