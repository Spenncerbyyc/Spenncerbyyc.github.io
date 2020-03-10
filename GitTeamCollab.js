document.body.style.height = '100vh';

/* 
document.addEventListener('click', function(event){
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
    if(ajax.readyState == 4 && ajax.status == 200) {
        var quoteJson = JSON.parse(ajax.responseText);
        document.body.innerHTML += "<h1>" + quoteJson.quote + "</h1>"
    }
}

    ajax.open('GET', 'https://the-one-api.herokuapp.com/v1./quote', true);
    ajax.send();    

    {
        id:"5cf5805fb53e011a64671582";
        name:"The Fellowship Of The Ring";
        }

}); */

function lotr_quote() {
    var request = new XMLHttpRequest();

    var random_quote = Math.floor(Math.random() * 2389) + 1;
    request.open('GET', 'https://the-one-api.herokuapp.com/v1/quote', true)
    request.setRequestHeader('Authorization', 'Bearer ' + 'MQD6cqG126WtTio7A6n2');
    request.onload = function() {
        
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)
    
      if (request.status >= 200 && request.status < 400) {
        const values = Object.values(data.docs)

        const randomValue = values[parseInt(Math.floor(Math.random() * 2389) + 1)]

        console.log(randomValue.dialog)
        document.getElementById("quote").innerHTML = randomValue.dialog;
      } else {
        console.log('error')
      }
    }
    
    request.send()
  }

