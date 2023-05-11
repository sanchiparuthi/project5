let btn= document.getElementById('nextButton');

question=["What are the early signs of anxiety in children?",
"What are the early signs of depression in children?", 
"What do you do when you make a mistake?", "What should you do if your child is acting out for seemingly no reason",
"How do you support your child through a difficult/stressful time?",
"How do you support your child when they are feeling big feelings like anger/sadness",
"What is an appropriate response when your child lies to you", "What if your child does not respect you?",
"What should you do if you are overwhelmed and can not cater to your child?"

]

answers = [["Anxiety isn't even real", "refusal to talk, or do things, frequent stomach ache/nausea, insomnia etc."],[
"No such thing as depression- it's just sadness that needs to be suppressed","refusal to interact, abnormal apetite, irritability/anger etc."],
            ["Give them fruit slices/ find a way to victimise yourself", "Apologise"],["Punish them/ Ignore them","Try to understand the underlying needs behind the tantrum and equip them with healthier tools to express themselves"],
            ["Tell them they are being weak and need to be stronger","Give them extra love and care, get them external help if you can't help them"],
        ["SUPPRESS SUPPRESS SUPPRESS","Teach them healthy ways to feel those feelings and express them, be there safe space in those times"],
        ["PUNISH THEM GROUND THEM MAKE THEM SUFFER","Try to understand why they could not come to you with the truth and fix it with them"],["How dare they? not under my roof","Respect goes both ways, show them how it works and they will do it for you"],
        ["Lash out on them duh it is their fault I am exhausted and upset","Take care of self, find support, find wellness so that your kid can be well too"]]

console.log(question[0])
document.addEventListener("DOMContentLoaded", function () {
    let x = 0
    document.getElementById("question").innerHTML = question[x]
    document.getElementById("answer1").innerHTML = answers[x][0]
    document.getElementById("answer2").innerHTML = answers[x][1]

btn.addEventListener("click", () =>{
    console.log("button clicked")
    x = x+1

    document.getElementById("question").innerHTML = question[x]
    document.getElementById("answer1").innerHTML = answers[x][0]
    document.getElementById("answer2").innerHTML = answers[x][1]

})
})


/*document.querySelector("#abc").addEventListener("click", function(){

})
*/
