let request = require("request");
//to get a request (or) for this we should install request i.e., npm install request --save
// request(
//   "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand",
//   function (err, response, body) {
//     //we are passing our body string into json object
//     let bodyJSON = JSON.parse(body);
//     let randomQuote = bodyJSON[0]["content"];
//     document.getElementById("quote").innerHTML = randomQuote;
//   }
// );
setInterval(function () {
  request(
    "https://andruxnet-random-famous-quotes.p.rapidapi.com/",

    function (err, response, body) {
      //we are passing our body string into json object
      let bodyJSON = JSON.parse(body);
      let randomQuote = bodyJSON["content"];
      document.getElementById("quote").innerHTML = randomQuote;
    }
  );
}, 5000);
