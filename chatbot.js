function askQuestion() {
  var input = document.getElementById("input").value;
  var giveresponse = responses[input]
  document.getElementById("chat-area").textContent += input + ": " + giveresponse + " ";
}

var responses = {
  "What do you think about Hillary" : "Hillary Clinton invented ISIS with her stupid policies. She is responsible for ISIS.— Donald Trump on Sunday, July 17th, 2016 "
}
