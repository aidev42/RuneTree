// TO DO LIST:
// finish 3.2 functions
// finish 3.3
// finish 4.0 game loop
//at that point create front end render
//essentially create a one player game
//when do we render hand and items placed on board?


//SECTION GUIDE
// 1.0 Game variables storage
// 2.0 Rune object setup
// 3.0-3.3 Deck and hand related functions
  // 3.1 Deck initializing functions
  // 3.2 Card drawing and discarding functions
  // 3.3 Playable cards/hand functions
// 4.0 Gamesetup and loop functions
// 5.0 Game start

// BEGIN 1.0 Object to store all universal game variables
  var gameVariables = {
    handsize: 5
  }
// END 1.0

// BEGIN 2.0 Rune object setup

  var Rune = function(runeInfo){
    this.number = runeInfo.number
    this.name = runeInfo.name
    this.meaning = runeInfo.meaning
    this.symbol = runeInfo.symbol
    this.text = runeInfo.text
  }

  //First Aett- Affect own cards

    var fehu = new Rune({
      number: 0,
      name: 'Fehu',
      meaning: 'Wealth',
      symbol: 'test',
      text: 'Draw two cards (up to 7 max)'
    })

    var uruz = new Rune({
      number: 1,
      name: 'Uruz',
      meaning: 'Energy',
      symbol: 'test',
      text: 'Activate any other placed Rune (you still may only have one active Rune per aett)'
    })

    var thurisaz = new Rune({
      number: 2,
      name: 'Thurisaz',
      meaning: 'Chaos',
      symbol: 'test',
      text: 'Draw 4 cards (up to 9 max), then discard 2 at random'
    })

    var ansuz = new Rune({
      number: 3,
      name: 'Ansuz',
      meaning: 'Order',
      symbol: 'test',
      text: 'Look at the top 3 cards of your deck and reorder them however you like'
    })

    var radio = new Rune({
      number: 4,
      name: 'Radio',
      meaning: 'Motion',
      symbol: 'test',
      text: 'Place a rune you are able to place, discard a card, draw two cards'
    })

    var kenaz = new Rune({
      number: 5,
      name: 'Kenaz',
      meaning: 'Light',
      symbol: 'test',
      text: 'Look at the top 6 cards of your deck and replace them in the same order'
    })

    var gebo = new Rune({
      number: 6,
      name: 'Gebo',
      meaning: 'Exchange',
      symbol: 'test',
      text: 'Remove the top and bottom 5 cards of your deck and place them on bottom and top of your deck respectively'
    })

    var wunjo = new Rune({
      number: 7,
      name: 'Wunjo',
      meaning: 'Harmony',
      symbol: 'test',
      text: 'If you have fewer runes placed than an opponent, draw cards until finding a rune you can place. Place that rune, discard all cards, shuffle your deck, and redraw your hand. You miss your next turn.'
    })

  //Second Aett- Affect opponent's cards

    var hagalaz = new Rune({
      number: 8,
      name: 'Hagalaz',
      meaning: 'Storm',
      symbol: 'test',
      text: 'Opponent discards three cards at random and draws three cards'
    })

    var nauthiz = new Rune({
      number: 9,
      name: 'Nauthiz',
      meaning: 'Need',
      symbol: 'test',
      text: 'The next time your opponent places a rune they must discard their hand and redraw 5 cards'
    })

    var isa = new Rune({
      number: 10,
      name: 'Isa',
      meaning: 'Ice',
      symbol: 'test',
      text: 'You may take an additional action this turn. An opponent can do nothing their next turn except use an activated Rune ability.'
    })

    var jera = new Rune({
      number: 11,
      name: 'Jera',
      meaning: 'Seasons',
      symbol: 'test',
      text: 'Discard a rune from each aett and draw three cards. Your opponent reveals their hand. You choose if they keep it or discard it and draw 5 new cards.'
    })

    var eihwaz = new Rune({
      number: 12,
      name: 'Eihwaz',
      meaning: 'Life',
      symbol: 'test',
      text: 'Place a rune you can play, your opponent must discard a rune from that aett, if they cannot they can do nothing their next turn except use an activated Rune ability.'
    })

    var pertho = new Rune({
      number: 13,
      name: 'Pertho',
      meaning: 'Fate',
      symbol: 'test',
      text: "Look at the top 5 cards of your opponent's deck and reorder them however you'd like."
    })

    var algiz = new Rune({
      number: 14,
      name: 'Algiz',
      meaning: 'Enduring',
      symbol: 'test',
      text: 'While active, Algiz is triggered whenever your opponent uses a rune ability: deactivate Algiz and prevent any effect of their rune ability. If you hold another Algiz card in your hand, reactivate your placed Algiz rune, discard the Algiz card in your hand and draw a card.'
    })

    var sowilo = new Rune({
      number: 15,
      name: 'Sowilo',
      meaning: 'Sun',
      symbol: 'test',
      text: 'Your opponent plays with their hand revealed to you until they place a rune.'
    })

  //Third Aett- Affect anything

    var tiwaz = new Rune({
      number: 16,
      name: 'Tiwaz',
      meaning: 'Balance',
      symbol: 'test',
      text: ''
    })

    var birkano = new Rune({
      number: 17,
      name: 'Birkano',
      meaning: 'Awakening',
      symbol: 'test',
      text: ''
    })

    var ehwaz = new Rune({
      number: 18,
      name: 'Ehwaz',
      meaning: 'Trust',
      symbol: 'test',
      text: ''
    })

    var mannaz = new Rune({
      number: 19,
      name: 'Mannaz',
      meaning: 'Awareness',
      symbol: 'test',
      text: ''
    })

    var lagaz = new Rune({
      number: 20,
      name: 'lagaz',
      meaning: 'Dreams',
      symbol: 'test',
      text: ''
    })

    var ingwaz = new Rune({
      number: 21,
      name: 'Ingwaz',
      meaning: 'Action',
      symbol: 'test',
      text: ''
    })

    var dagaz = new Rune({
      number: 22,
      name: 'Dagaz',
      meaning: 'Unity',
      symbol: 'test',
      text: ''
    })

    var othala = new Rune({
      number: 23,
      name: 'Othala',
      meaning: 'Acceptance',
      symbol: 'test',
      text: ''
    })
// END 2.0

// BEGIN 3.0 Deck and hand related functions

  // BEGIN 3.1 Deck initilization functions

    function initDeck(){
      var aett1 = [fehu,uruz,thurisaz,ansuz,radio,kenaz,gebo,wunjo]
      var aett2 = [hagalaz,nauthiz,isa,jera,eihwaz,pertho,algiz,sowilo]
      var aett3 = [tiwaz,birkano,ehwaz,mannaz,lagaz,ingwaz,dagaz,othala]
      //add third aett
      var deck = [aett1,aett1,aett1,aett2,aett2,aett3]
      //Flatten the deck to one dimension
      deck = [].concat.apply([], deck)
      //Now shuffle it
      return shuffleDeck(deck);
    }

    function shuffleDeck(deck) {
      // Using Durstenfeld shuffle algorithm
      for (var i = deck.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = deck[i];
          deck[i] = deck[j];
          deck[j] = temp;
      }
      return deck;
    }
  // END 3.1

  // BEGIN 3.2 Card drawing and discarding functions
    function drawCards(numberOfCards,hand,deck){
      for (var i = 0; i < numberOfCards; i++){
        hand.push(deck.splice(0,1)[0])
      }
      return [hand,deck]
    }

    //Only to be called when hand is empty
    function drawHand(deck){
      return drawCards(gameVariables.handSize,deck)
    }

    //Used to select random cards (usually before they are discarded)
    function selectRandomCardsInHand(numberOfCards,hand){

    }

    function discardCards(cards,hand,deck){
      //remove specified cards from
    }

    //Only to be called when discarding entire hand
    function discardHand(hand,deck){

    }
  // END 3.2

  // BEGIN 3.3 Playable cards/hand functions

    function playableRunes(placedRunes){
      //runes in first aett always playable
      //runes in second playable if lower aett runes in same position and one on either side completed (+1/-1 index positions)
      //runes in third playable only once first aett completed AND condition above for second aett is met

      //remove runes that are already placed

      //create an array of playable index positions that will correspond with Rune #'s - 1
    }

    function isHandPlayable(){
      //for each card in hand check if appears in playableRunes array
      //this will be nested for loops, try and think of a way to improve this

      //alternatively playableRunes could build a single array of index positions tying to each rune with 1 or 0 values so simply directly lookup value thus only needing single for statement
    }
  // END 3.3
// END 3.0

// BEGIN 4.0 Gamesetup and loop functions

  function gameInit(){
    //Create deck and hand
    var p1Deck = initDeck()
    var p1HandAndDeck = drawHand(player1Deck)
    var p1Hand = p1HandAndDeck[0]
    var p1Deck = p1HandAndDeck[1]
    var p1PlacedRunes = [
      [0,0,0,0,0,0,0,0], //first aett
      [0,0,0,0,0,0,0,0], //second aett
      [0,0,0,0,0,0,0,0] //third aett
    ]
    gameLoop()
  }

  function gameLoop(){
    //if no winner begin turn
    //check if hand is playable
    //if so select a card to play, play that card and draw a card. Check to update active runes.
    //If hand was not playable discard whole hand and redraw
    //check for winner
    //repeat
  }
// END 4.0

// BEGIN 5.0 Game start
  //gameInit()
// END 5.0