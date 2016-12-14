// TO DO LIST:
// build testing function to test discardCards()
// finish 3.3
// finish 4.0 game loop
//at that point create front end render
//essentially create a one player game
//when do we render hand and items placed on board?
//all cards (react components) have a state, clickedOn that toggles on/off with click, when On zooms in, when off zooms back out to original position (can be accomplished potentially by using react to add a class, then css/scss to style/animate)
//want to lock screen in ionic as vertical aligned


//SECTION GUIDE
// 1.0 Game variables storage
// 2.0 Rune object setup
// 3.0-3.3 Deck and hand related functions
  // 3.1 Deck initializing functions
  // 3.2 Card drawing and discarding functions
  // 3.3 Playable cards/hand functions
// 4.0 Gamesetup and loop functions
// 5.0 Game start
// 6.0 Dev automated testing functions

// BEGIN 1.0 Object to store all universal game variables
  var gameVariables = {
    handSize: 5
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
      // 3x aett1, 2x aett2, 1x aett3
      var deck = [aett1,aett1,aett1,aett2,aett2,aett3]
      //Flatten the deck to one dimension
      deck = [].concat.apply([], deck)
      //Now shuffle it
      return shuffleCards(deck);
    }

    function shuffleCards(cards) {
      // Using Durstenfeld shuffle algorithm
      for (var i = cards.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = cards[i];
          cards[i] = cards[j];
          cards[j] = temp;
      }
      return cards;
    }
  // END 3.1

  // BEGIN 3.2 Card drawing and discarding functions
    // Callable for hand modification: drawCards, drawHand, discardCards, discardHand, all return [hand,deck]
    // Callable as a precursor to hand modification: selectRandomCardsInHand, this returns [cards] within hand

    function drawCards(numberOfCards,hand,deck){
      console.log('drawing X cards: ',numberOfCards)
      console.log('the deck is: ',deck)
      for (var i = 0; i < numberOfCards; i++){
        hand.push(deck.splice(0,1)[0])
      }
      console.log('this is not the hand', hand)
      return [hand,deck]
    }

    //Only to be called when hand is empty
    function drawHand(deck){
      console.log('about to draw hand, the deck is: ',deck)
      return drawCards(gameVariables.handSize,[],deck)
    }

    //Used to select random cards (usually before they are discarded)
    function selectRandomCardsInHand(numberOfCards,hand){
      var tempHand = hand.slice(0)
      var selectedCards = []
      var upperIndexBound = tempHand.length - 1
      for (var i = 0; i < numberOfCards; i++){
        var randInt = Math.floor(Math.random() * (upperIndexBound - 0 + 1)) + 0;
        selectedCards.push(tempHand.splice(randInt,1)[0])
        upperIndexBound --
      }
      return selectedCards
    }

    function discardCards(cards,hand,deck){
      //First shuffle the cards to be discarded before placing them on bottom of deck
      cards = shuffleCards(cards)
      var upperIndexBound = hand.length - 1
      //Then go through each card to be discarded
      for (var i = 0; i<cards.length; i++){
        //And check to see if this card appears in the hand
        for (var j = 0; i < upperIndexBound; j++){
          if (cards[i] == hand[j]){
            //If card is found remove card from hand and add to bottom of the deck
            deck.push(hand.splice(j,1)[0])
            upperIndexBound --
            break
          }
        }
      }
      return [hand,deck]
    }

    //Only to be called when discarding entire hand
    function discardHand(hand,deck){
      //Shuffle hand before placing on bottom of deck
      hand = shuffleCards(hand)
      for (var i = 0; i < hand.length; i++){
        deck.push(hand[i])
      }
      hand = []
      return [hand,deck]
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
    console.log('this is now the deck: ',p1Deck)
    var p1HandAndDeck = drawHand(p1Deck)
    window.p1Hand = p1HandAndDeck[0]
    window.p1Deck = p1HandAndDeck[1]
    var p1PlacedRunes = [
      [0,0,0,0,0,0,0,0], //first aett
      [0,0,0,0,0,0,0,0], //second aett
      [0,0,0,0,0,0,0,0] //third aett
    ]
    gameLoop()
  }

  function gameLoop(){
    //if no winner begin turn
    //player actions decision:
      //1) invoke active rune ability
      //2) discard any card from hand and draw a card
      //3) play a card (if possible), play that card and draw a card. check if played card updates active runes
      //4) if entire hand is not playable, you may discard entire hand redraw 5 cards
    //check for winner
    //repeat
  }
// END 4.0

// BEGIN 5.0 Game start
  gameInit()
// END 5.0

// BEGIN 6.0 Dev test functions
    function devTest_discardCards(){}
    //BUILD discardCards testing function
    //to test
    //reinit p1 hand, print out names of p1Hand
    //select a number of cards to delete, print out names of cards to delete
    //check those and only those were deleted by printing out names of cards remaining in hand
    //need to check when multiple of same cards are in hand
    //and above AND multiple of same cards to be deleted
// END 6.0