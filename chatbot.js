function askQuestion() {
  var input = document.getElementById("input").value;
  input = input.toLowerCase()
  var giveresponse = responses[input]
  if (giveresponse == undefined) {
    document.getElementById('chat-area').innerHTML += "I don't understand your question";

  }
  else {


  document.getElementById("chat-area").innerHTML += input + ": " + giveresponse + " ";
}
}

var responses = {
"what do you think about Hillary?" : "Hillary Clinton invented ISIS with her stupid policies. She is responsible for ISIS.— Donald Trump on Sunday, July 17th, 2016<br/> <br/>",

"what is your name?" : "My name is Donald J.Tr$mp.<br/> <br/>",

"how old are you?" : "I am currently 70 years old<br/> <br/>",

"what are your plans for the border?" : "I will build a great, great wall on our southern border. And I will have Mexico pay for that wall.- July 27th, 2016<br/> <br/>",

"hi" : "Yes my wall will be very high.<br/> <br/>",

"how are you?" : "I'm doing well.<br/> <br/>"
}
