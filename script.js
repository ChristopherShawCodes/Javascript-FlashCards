function Card(term, definition, category) {
    this.term = term;
    this.definition = definition;
    //this.category = category;
  }
  var newDeck = [];
  var newCard;
  var front = document.getElementById("front");
  var back = document.getElementById("back");
  var flip = document.getElementById("flip");
  var submit = document.getElementById("submit");
  var clearDeck = document.getElementById("clearDeck");
  var formFront, formBack;
  
  function slideIn(){
    $('#importExport').animate({'left':'10px'},500);
          
      };
  function slideOut(){
          $('#importExport').animate({'left':'-610px'},500);
      };
  var card1 = new Card(
    "1) Lexical Environment",
    "1) Where code sits in relation to any surrounding code",
    "General"
  );
  var card2 = new Card(
    "2) Execution Context",
    "2) How, Why, When, and Where code is executed",
    "General"
  );
  var card3 = new Card(
    "3)JSON",
    "3)JavaScript Object Notation, for storing objects and their enclosed data. Often referred to as Key Value Pairs",
    "Objects"
  );
  var card4 = new Card(
    "4)getElementById",
    "4)To access an HTML element from JavaScript, you can use this method",
    "General"
  );
  var card5 = new Card(
    "5)data with properties & methods",
    "5)object",
    "General"
  );
  var card6 = new Card(
    "6)write a statement that tells the browser to write 'Hello Dolly' inside an HTML element with id='demo'",
    "6)document.getElementBy Id ('demo').innerHTML= 'Hello Dolly';",
    "General"
  );
  var card7 = new Card(
    "7)javascript elements are executed in what order",
    "7)In the sequence they are written",
    "General"
  );
  var card8 = new Card(
    "8)groups of javascript statements",
    "8)blocks",
    "General"
  );
  var card9 = new Card(
    "9)containers for storing information in javascript",
    "9)Javascript variables",
    "General"
  );
  var card10 = new Card(
    "10)a text value is called a ____",
    "10)string",
    "General"
  );
  var card11 = new Card(
    "11)used to assign a value to a variable",
    "11)=",
    "General"
  );
  var card12 = new Card(
    "12)if you re-declare a variable without a value, will it lose it's current value?",
    "12)no",
    "General"
  );
  var card13 = new Card(
    "13)a variable that stores a series of characters like 'John Doe' is called ________",
    "13)a string",
    "General"
  );
  var card14 = new Card(
    "14)what 2 values can BOOLEANS have?",
    "14)TRUE or FALSE",
    "General"
  );
  var card15 = new Card(
    "15)write a condensed array called 'CARS' with the values 'Saab,Volvo & BWM'.",
    "15)var CARS = new Array('Saab','Volvo','BMW')",
    "General"
  );
  var card16 = new Card(
    "16)inside of curly braces {} , an object's properties are defined as ____ and ____ ____ .",
    "16)Name and Value Pairs (name:value)",
    "General"
  );
  var card17 = new Card(
    "17)what are object properties separated by?",
    "17)commas(,)",
    "General"
  );
  var card18 = new Card(
    "18)what 2 ways can you address object properties?",
    "18)name=person.lastname; name=person['lastname']",
    "General"
  );
  var card19 = new Card(
    "19)the value of a variable with no value us",
    "19)undefined",
    "General"
  );
  var card20 = new Card(
    "20)variables can be emptied by setting the value to _____",
    "20)null",
    "General"
  );
  var card21 = new Card(
    "21)when you declare a new variable, you can declare its type using the keyword",
    "21)new",
    "General"
  );
  var card22 = new Card(
    "22)are variables objects?",
    "22)yes",
    "General"
  );
  var card23 = new Card(
    "23)values associated with an object",
    "23)properties",
    "General"
  );
  var card24 = new Card(
    "24)Actions that can be performed on objects",
    "24)methods",
    "General"
  );
  var card25 = new Card(
    "25)the syntax for accessing the property of an object",
    "25)objectName.propertyname",
    "General"
  );
  var card26 = new Card(
    "26)the syntax for calling a method",
    "26)objectName.methodName()",
    "General"
  );
  var card27 = new Card(
    "27)in object oriented languages, it is common to use _____-______ function names",
    "27)camel-case (examples: functionName)",
    "General"
  );
  var card28 = new Card(
    "28)a block of code that will be executed when it is called",
    "28)function",
    "General"
  );
  var card29 = new Card(
    "29)what do you call a value that is passed into a function",
    "29)argument or parameter",
    "General"
  );
  var card30 = new Card(
    "30)how many arguments can be passed into a function",
    "30)as many that are needed",
    "General"
  );
  var card31 = new Card(
    "31)How do you separate multiple arguments within a function?",
    "31)using a comma",
    "General"
  );
  var card32 = new Card(
    "32)a statement that is used to return a value back to where the call was made",
    "32)return",
    "General"
  );
  var card33 = new Card(
    "33)can you use a return statement to exit a function?",
    "33)yes",
    "General"
  );
  var card34 = new Card(
    "34)what operator is used to assign values to javascript variables",
    "34)=",
    "General"
  );
  var card35 = new Card(
    "35)what operator is used for MODULUS (division remainder)",
    "35)%",
    "General"
  );
  var card36 = new Card(
    "36)what is the arithmetic operator for incremental values?",
    "36)++",
    "General"
  );
  var card37 = new Card(
    "37)what is the arithmetic operator for decremental values?",
    "37)--",
    "General"
  );
  var card38 = new Card(
    "38)what operator is used to add string variables or text values together?",
    "38)+",
    "General"
  );
  var card39 = new Card(
    "39)Adding two numbers will return the sum. However, adding a number and a string will return a ______",
    "39)string",
    "General"
  );
  var card40 = new Card(
    "40)what operators can be used to test for TRUE or FALSE?",
    "40)comparison",
    "General"
  );
  var card41 = new Card(
    "41)Comparison operator for 'is equal to'",
    "41)==",
    "General"
  );
  var card42 = new Card(
    "42)Comparison operator for 'is NOT equal to'",
    "42)!=",
    "General"
  );
  var card43 = new Card(
    "43)Logical operator for 'and'",
    "43)&&",
    "General"
  );
  var card44 = new Card(
    "44)Logical operator for 'or'",
    "44)||",
    "General"
  );
  var card45 = new Card(
    "45)Logical operator for 'not'",
    "45)!",
    "General"
  );

  var myCards = [card1, card2, card3,card4,card5,card6,card7,card8,card9,card10,card11,card12,card13,card14,card15,card16,card17,card18,card19,card20,card21,card22,card23,card24,card25,card26,card27,card28,card29,card30,card31,card32,card33,card34,card35,card36,card37,card38,card39,card40,card41,card42,card43,card44,card45];
  var cardIndex = 0;
  
  front.innerHTML = card1.term;
  back.innerHTML = card1.definition;
  back.style.visibility = "hidden";
  function showHideLightText() {
      let d =document.getElementsByClassName('lightText')[0];
      let el = document.getElementsByClassName('showHideHotkeysButton')[0];
      if (d.classList.contains('hide')) {
           d.classList.remove('hide')
           } else {
                   d.classList.add('hide')
  
      }
      if (el.classList.contains('hide')) {
          el.classList.remove('hide')
  
      } else {
  
          el.classList.add('hide')
      }
  }
  function flash() {
    if (front.style.visibility != "hidden") {
      front.style.visibility = "hidden";
      back.style.visibility = "visible";
    } else {
      front.style.visibility = "visible";
      back.style.visibility = "hidden";
    }
  }
  
  function cardAdd(formFront, formBack) {
    function clearForm() {
      document.getElementById("newTerm").value = "";
      document.getElementById("newDef").value = "";
      document.getElementById("cardForm").reset();
    }
  
    function updatePlaceholder() {
      document.getElementById("newTerm").placeholder =
        "...another term?";
      document.getElementById("newDef").placeholder =
        "...and another definition?";
    }
  
    formFront = document.getElementById("newTerm");
    formBack = document.getElementById("newDef");
    if (
      formFront.value !== formBack.value &&
      formFront.value != "" &&
      formBack.value != ""
    ) {
      var newCard = new Card();
      newCard.term = formFront.value;
      newCard.definition = formBack.value;
      myCards.push(newCard);
      cardIndex = myCards.length - 1;
      clearForm();
      updatePlaceholder();
      front.innerHTML = myCards[cardIndex].term;
      back.innerHTML = myCards[cardIndex].definition;
      // back.style.visibility = "hidden";
    } else if (formFront.value == formBack.value) {
      alert('kinda defeats the purpose of a "flash" card doesn`t it?');
    } else if (
      (formFront.value == null || formFront.value == "", formBack.value == null ||
        formBack.value == "", formFront.value == null ||
        formBack.value == null ||
        formFront.value == "" ||
        formBack.value == "")
    ) {
      alert("Fill out both sides of the card, ya dringus!");
    }
    document.getElementById("newTerm").focus();
  }
  
  function nextCard() {
    cardIndex = (cardIndex + 1) % myCards.length;
    front.innerHTML = myCards[cardIndex].term;
    back.innerHTML = myCards[cardIndex].definition;
  }
  function prevCard() {
    if (cardIndex > 0)
      cardIndex = (cardIndex - 1);
    else if (cardIndex == 0) cardIndex = myCards.length-1;
    front.innerHTML = myCards[cardIndex].term;
    back.innerHTML = myCards[cardIndex].definition;
  
  }
  
      document.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode == 37 ) {
          prevCard();
      }
      if (event.keyCode == 39 ) {
          nextCard();
      }
      if (event.keyCode == 38 || event.keyCode == 40) {
        flash();
      }
      if (event.keyCode == 46) {
        emptyDeck();
      }
      // if (event.keyCode == 9 && !(document.activeElement == document.getElementById("newTerm")) {
      //     document.getElementById("newTerm");
      //     }
  });
  function cardSelect(myCards, cardIndex) {
    var selectCards = document.getElementById("selectCards");
    var options = selectCards.appendElement("")
    options.map(myCards.keys);
  }
  function download(filename, text) {
      var pom = document.createElement('a');
      pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      pom.setAttribute('download', filename);
  
      if (document.createEvent) {
          var event = document.createEvent('MouseEvents');
          event.initEvent('click', true, true);
          pom.dispatchEvent(event);
      }
      else {
          pom.click();
      }
  }
  function download_deck(){
  let t = JSON.stringify(myCards, null, "\t");
    let t2 = myCards;
  let fn = "flashcards.json".toString();
  download(fn, t);
  }
  
  function upload_deck() {
      var files = document.getElementById('uploadDeck').files;
    console.log(files);
    if (files.length <= 0) {
      return false;
    }
    
    var fr = new FileReader();
    
    fr.onload = function(e) { 
      var newDeck = [];
    // console.log(e);
      var result = JSON.parse(e.target.result);
      
      
       for (i = 0; i < result.length;i++) {
        var newCard = new Card;
        let item = result[i];
        newCard.term = item["term"];
        newCard.definition = item["definition"];
        console.log("added card");
        console.log(JSON.stringify(newCard.term));
        newDeck.push(newCard);
      }
  
      // console.log(JSON.stringify(newDeck, null, 2));
      var formatted = JSON.stringify(result, null, 2);
      console.log("Upload Result:\r\n" + formatted);
      myCards.splice(0, myCards.length, ...newDeck);
      console.log("Current Deck:\r\n");
      console.log(JSON.stringify(myCards));
      updateDeck();
          // document.getElementById('result').value = formatted;
    }
  fr.readAsText(files.item(0));
       
    // for (obj in fr.readAstext(files.item(0))) {
    //   newCard.term = obj["term"];
    //   newCard.definition == obj["definition"];
    //   console.log("added card!" + JSON.stringify(newCard.definition));
    // }
  
  
  };
  function updateDeck() {
    document.getElementById("front").innerHTML = myCards[cardIndex].term;
    document.getElementById("back").innerHTML = myCards[cardIndex].definition;
  
  }
  
  
  