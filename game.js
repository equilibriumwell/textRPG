const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-button')



let state = {

}

function startGame(){
state = {}
showTextNode(1)

}
function welcomeScreen(){


    nodeBeginning()
   
}

function nodeBeginning(){
    const nodeIntro = nodeBeginnings
    textElement.innerText = nodeIntro.text
    // optionButtonsElement = nodeBeginnings.nodeIntro.options
    const button1 = document.createElement('button')
    button1.innerText = nodeIntro.options.options
    button1.classList.add('btn')
    button1.addEventListener('click', () => selectOption(option))
    optionButtonsElement.appendChild(button1)
    

}

function showTextNode(textNodeIndex ){
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while(optionButtonsElement.firstChild){
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if(showOption(option)){
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)

        }
    })
}   

function showOption(option){
    return option.requiredState == null || option.requiredState(state)

}


function selectOption(option){
const nextTextNodeId = option.nextText
state = Object.assign(state, option.setState)
showTextNode(nextTextNodeId)
}

const nodeBeginnings = {

     
        text: "Welcome push Start if you dare!",
        options:
            {
            text: "Start Game",
            options: startGame()
            }
        
    
}
const textNodes = [
    
    {
        id:1,
        text: 'You wake up in a strange place and you see a Jar of blue goo near you.',
        options: [
            {
                text: 'Take goo',
                setState: {blueGoo: true},
                nextText: 2
            },
            {
                text: "Leave the goo",
                nextText: 2
            }
        ]

    },
    {
        id:2,
        text: 'You venture forth in search of answers to where you are when you came across a merchant.',
        options: [
            {
                text: "Trade the goo for a sword",
                requiredState:(currentState) => currentState.blueGoo,
                setState: {blueGoo: false, sword: true},
                nextText: 3
            },
            {
                text: "Trade the goo for a shield",
                requiredState:(currentState) => currentState.blueGoo,
                setState: {blueGoo: false, shield: true},
                nextText: 3
            },
            {
                text: "Ignore the merchant",
                nextText: 3
            },
        ]

    },
    {
        id:3,
        text: 'After leaving the merchant you start to feel tired and stumble upon a small town next to a dangerous looking castle',
        options: [
            {
                text: "Explore the castle",

                nextText: 4
            },
            {
                text: "Find a room to sleep at in the town",
              
                nextText: 3
            },
            {
                text: "Find Some hay in a stable to sleep in",
                nextText: 6
            },
        ]

    }, 
    {
        id: 4,
        text: 'You are so tired that you fall asleep while exploring the castle and are killed by some terrible monster in your sleep.',
        options:[{
            text: 'Restart',
            nextText: -1
            }        ]
    }

]

welcomeScreen()
// startGame()