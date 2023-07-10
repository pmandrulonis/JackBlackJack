// class Deck {
//     constructor(){
//         this.suits = ["hearts", "diamonds", "spades", "clubs"]
//         this.values = [2,3,4,5,6,7,8,9,10,"Jack", "Queen", "King", "Ace"]
//     }
    
// }
let suits = ["hearts", "diamonds", "spades", "clubs"]
let values = [2,3,4,5,6,7,8,9,10,"Jack", "Queen", "King", "Ace"]
let ourDeck = []
let HeartCards = []
let DiamondCards = []
let ClubCards = []
let SpadeCards = []
let WagerAmount = 0
let P1Card1
let CPUCard1
let P1Hand = []
let CPUHand = []
let newDeck = []
let P1Score = 0
let CPUScore = 0
let P1Cash = 0
let TotalCash = 0
let CPUCash = 500
let WouldYouLiketoPlay
let CPUAceAmount
let P1AceAmount
let CPUAceChoice
let playername
let prompt2=require("prompt-sync")({sigint:true});
let CPUHitorStayOptions = ["hit", "stay"]
let CPUHitorStayChoice = Math.floor(Math.random()*CPUHitorStayOptions.length)

createNewDeck()
shuffledeck()
DoYouWanttoPlay()
//wager()
deal2Cards()
CPUHitorStay()
HitorStay()





//

// console.log("P1 Score: " + P1Score)
// console.log("CPU Score: " + CPUScore)


//console.log(`CPU: ${CPUHand} - ${CPUScore}`)






  function DoYouWanttoPlay(){
      let prompt=require("prompt-sync")({sigint:true});
      let prompt1=require("prompt-sync")({sigint:true});
      prompt2=require("prompt-sync")({sigint:true});
      playername = prompt1("What should I call you?")
      WouldYouLiketoPlay = prompt2("Ok, " + playername + " would you like to play Black Jack?")
      WouldYouLiketoPlay = WouldYouLiketoPlay.toLowerCase()
      if(WouldYouLiketoPlay === "yes"){
          wager()
      }else(console.log("Bye bye"))
}

function wager(){
    let prompt3=require("prompt-sync")({sigint:true});
        WagerAmount = parseInt(prompt3("How much would you like to bet on this hand? "));
    if(WagerAmount % 5 != 0){
        console.log("Wagers must be made in $5 increments.")
        wager()
    }else{
        return WagerAmount
    }
}

function createNewDeck(){
    for (let value of values){
            HeartCards.push(value + " of Hearts")
            DiamondCards.push(value + " of Diamonds")
            ClubCards.push(value + " of Clubs")
            SpadeCards.push(value + " of Clubs")
            ourDeck = HeartCards.concat(DiamondCards, ClubCards, SpadeCards)
            
        }
   }

function shuffledeck(){
        for (let i = ourDeck.length - 1; i > 0; i--) { 
            const j = Math.floor(Math.random() * (i + 1)); 
            [ourDeck[i], ourDeck[j]] = [ourDeck[j], ourDeck[i]]; 
          } 
          return ourDeck; 
        }    

function deal2Cards(){
            P1Card1 = ourDeck.pop([(Math.floor(Math.random()*ourDeck.length))])
            P1Hand.push(P1Card1)
            CPUCard1 = ourDeck.pop([(Math.floor(Math.random()*ourDeck.length))])
            CPUHand.push(CPUCard1)
         // Card 2   
            P1Hand.push(ourDeck.pop([(Math.floor(Math.random()*ourDeck.length))]))
            CPUHand.push(ourDeck.pop([(Math.floor(Math.random()*ourDeck.length))]))
        
            
            P1HandScore()
            CPUHandScore()
            console.log("P1 Hand: Card 1 Facedown " + P1Hand[1])
            console.log("CPU Hand: Card 1 Facedown " + CPUHand[1])
            console.log("")
            console.log(`Player 1: ${P1Hand} - Score: ${P1Score}`)
        
        }



function P1HandScore(){
    for(let i=0; i < P1Hand.length; i++){
        if(P1Hand[i].includes("King")||P1Hand[i].includes("Queen")||P1Hand[i].includes("Jack")||P1Hand[i].includes("10")){
            P1Score += 10
        }else if(P1Hand[i].includes("9")){
            P1Score += 9
        }else if(P1Hand[i].includes("8")){
            P1Score += 8
        }else if(P1Hand[i].includes("7")){
            P1Score += 7
        }else if(P1Hand[i].includes("6")){
            P1Score += 6
        }else if(P1Hand[i].includes("5")){
            P1Score += 5
        }else if(P1Hand[i].includes("4")){
            P1Score += 4
        }else if(P1Hand[i].includes("3")){
            P1Score += 3
        }else if(P1Hand[i].includes("2")){
            P1Score += 2
        }else if(P1Hand[i].includes("Ace")){
            P1ChooseAceAmount()      
        }
    
    }return P1Score
}
   
function CPUHandScore(){
    for(let i=0; i < CPUHand.length; i++){
        if(CPUHand[i].includes("King")||CPUHand[i].includes("Queen")||CPUHand[i].includes("Jack")||CPUHand[i].includes("10")){
            CPUScore += 10
        }else if(CPUHand[i].includes("9")){
            CPUScore += 9
        }else if(CPUHand[i].includes("8")){
            CPUScore += 8
        }else if(CPUHand[i].includes("7")){
            CPUScore += 7
        }else if(CPUHand[i].includes("6")){
            CPUScore += 6
        }else if(CPUHand[i].includes("5")){
            CPUScore += 5
        }else if(CPUHand[i].includes("4")){
            CPUScore += 4
        }else if(CPUHand[i].includes("3")){
            CPUScore += 3
        }else if(CPUHand[i].includes("2")){
            CPUScore += 2
        }else if(CPUHand[i].includes("Ace")){
            CPUChooseAceAmount()
        }
    } return CPUScore
}
function hitMe(){
    P1Hand.push(ourDeck.pop([(Math.floor(Math.random()*ourDeck.length))]))
    P1Score = 0
    P1HandScore()
    console.log(`Player 1 Hand: ${P1Hand}`)
    console.log(`Player 1 Score: ${P1Score}`)
    if(P1Score > 21){
         WinorLose()
    }
     else{
        HitorStay()
    }
}

function P1ChooseAceAmount(){
    let prompt5=require("prompt-sync")({sigint:true});
        console.log(P1Hand)
        P1AceAmount = parseInt(prompt5("You drew an Ace, it can be worth 1 or 11, which amount would you like your ace to be worth?"))
        if(P1AceAmount === 1){
            P1Score += 1
        }else if(P1AceAmount === 11){
            P1Score += 11
        }
        else{
            console.log("Please choose 1 or 11.")
            P1ChooseAceAmount()
        }
}
function CPUChooseAceAmount(){
    // let AceOptions = [1, 11]
    // CPUAceChoice = Math.floor(Math.random()*AceOptions.length)
    if(CPUScore + 11 >= 17){
        CPUAceAmount = 11
    }else{
        CPUAceAmount = 1
    }
    CPUHand.push(CPUAceChoice)
}
function HitorStay(){
    console.log("Dealer Card 1 Face Down, " + CPUHand[1])
    let prompt4=require("prompt-sync")({sigint:true});
    let hitorstay = prompt4("hit or stay?")
    hitorstay = hitorstay.toLowerCase()
    if(hitorstay === "hit"){
        hitMe()
    //}
    // else if(P1Score > 21){
    //     console.log("You busted! The dealer wins!")
    //     P1Cash -= WagerAmount
    //     console.log(P1Cash)
    }else if(hitorstay === "stay"){
        WinorLose()        
    }
    
}

// function CPUHitorStayRandom(){
// //    for(i=0; i < CPUHitorStay.length; i++){
//     if(CPUHitorStayChoice === "hit"){
//         CPUHand.push(ourDeck.pop([(Math.floor(Math.random()*ourDeck.length))]))
//         CPUScore = 0
//         HandScore()
//         console.log(CPUHand)
//         console.log(CPUScore)
//     }
// }
function CPUHitorStay(){
    if(CPUScore <= 16){
        CPUHand.push(ourDeck.pop([(Math.floor(Math.random()*ourDeck.length))]))
        CPUScore = 0
        CPUHandScore()
        console.log(`Computer: ${CPUHand}`)
        //  console.log(`Computer Score: ${CPUScore}`)
    }
 }

function WinorLose(){
    if(P1Score > 21){
        console.log("You busted! The dealer wins!")
        console.log(`${playername}: ${P1Score} | Dealer: ${CPUScore}`)
        TotalCash = P1Cash -= WagerAmount
        console.log(P1Cash)
    }else if(P1Score <= 21 && CPUScore <= 21 && P1Score > CPUScore || CPUScore > 21){
        TotalCash = P1Cash += WagerAmount
        console.log(`${playername} you won! ${playername}: ${P1Score} | Dealer: ${CPUScore}`)
        console.log(P1Cash)
    }else if(CPUScore <= 21 && P1Score < CPUScore){
        TotalCash = P1Cash -= WagerAmount
        console.log(`${playername} you lose. ${playername}: ${P1Score} | Dealer: ${CPUScore}`)
        console.log(P1Cash)
    }else if(P1Score <= 21 && CPUScore <= 21 && P1Score === CPUScore){
        console.log(`It's push! You tied the dealer. ${playername}: ${P1Score} | Dealer: ${CPUScore}`)
        console.log(P1Cash)
    }else{console.log(`${playername}: ${P1Score} | Dealer: ${CPUScore}`)}
}return TotalCash

