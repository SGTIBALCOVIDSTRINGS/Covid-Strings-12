doc.type.html
html lang en 
script
header=document create.element(header)
header.style.backgroundcolor=#4caf50
header.style.color=’white’
header.style.padding=’10px’
header.style.textalign=’center’
header.style.text.fontsize=’24px’
header.textcontent=’welcome to covid strings12 first round’
document appendchild(header)
<header.html>
heading variables 
the heading numbers that determine where each heading and subheading go 
heading1=first round overview
heading2=matchups
heading3=first round questions
heading4=advancing rounds
subheading1=team stealing
subheading2=result for matchup1
subheading3=result for matchup2
subheading4=result for matchup3
subheading5=result for matchup4
<header.html>
first round overview
an overview of the first round of covid strings12 including seeding 
html
head 
utf8
viewport content=width=device-width, initial-scale=one
title covid strings12 first round bracket
div id bracket class bracket div
script src bracket.js
link rel= stylesheet href=css
head
body
bracket-container{}
matchup
solid zero;
padding 
text align center 
filename=covid strings12 first round.js
first round =(highest overall seed, second highest seed, third highest seed, fourth highest seed,fifth highest seed,third low seed, second low seed,lowest overall seed)
highest overall seed = seed1
second highest seed=seed2
third highest seed=seed3
firstmiddleseed=seed4
second middle seed =seed5
third lowest seed= seed6
second lowest seed = seed7
lowest overall seed = seed8
addeventlistener(domcontentloaded, () => 
bracket = getelementbyid(bracket);
<header.html>
matchups 
for first round there are8 teams which equals4 matchups 
matchup1=(pink versus orange)
matchup2=(yellow versus red)
matchup3=(purple versus blue)
matchup4=(teal versus black)
matchup div=matchup
document.createelement 
matchupdiv.classname=(matchup)
matchupdiv.inner html =[matchup]
rounddiv.appendchild(matchup)
for (i in covid strings first round)
round div=create element
round div class name=covid strings11 first round
bracket.appendchild(round div)
if (event.target.covid strings seed list.contains(matchup))
event.target.covid strings seed list.toggle
else:
addmatchup
<header.html>
first round questions
the questions asked in the first round of the covid strings contest
java util.scanner
java.util
first round questions=questions[1-16]
collections.shuffle(arrays.aslist(questions)
question1
question2
question3
question4
question5
question6
question7
question8
question9
question10
question11
question12
question13
question14
question15
question16
if selectedanswer==correct:
return true
else:
return false
if selectedanswer=incorrect
return false
else:
return true
team1=lower ranked seed
team2=the higher seeded opponent
points: 10 points or 20 points
<subheading.html>
team stealing
steal points(stealingteam,victimteam,pointstosteal)
if(victimteam.points>=pointtosteal)
victimteam.points-=pointtosteal;
stealingteampoints+=pointstosteal
console.log([stealingteam.name} stole points from {victim team name}!)
else:
console.log({victimteam.name} doesnt have enough points to steal)
if teams final answer==incorrect:
opposing team steals
else:
change covid strings matchup score
<header.html>
advancing rounds
contains criteria required for a team to advance to the second round 
advancingteam=slice(current teams)
<subheading.html>
result for matchup1
the code for how to determine the end result of matchup1 of covid strings 
result=declarewinner(matchup1)
if orange score>=forty:
console.log(orange rna messengers win)
else:
remain
if pink score>=forty:
consloe.log(pink covid disease fighters win)
else:
remain
<subheading.html>
result for matchup2 
the code for how to determine the end result of matchup2 of covid strings 
result=declarewinner(matchup2)
if red score>=forty:
console.log(red protein spikers win)
else:
remain
if yellow score>=forty:
console.log(yellow moxie wins)
else:
remain
<subheading.html>
result for matchup3
the code for how to determine the end result of matchup3 of covid strings 
result=declarewinner(matchup3)
if blue score>=forty:
console.log(blue curve crushers win)
else:
remain
if purple score>=forty:
console.log(purple brave hearts)
else:
remain
<subheading.html>
result for matchup4 
the code for how to determine the end result of matchup4 of covid strings 
result=declarewinner(matchup4)
if black score>=forty:
console.log(black night riders win)
else:
remain
if teal score>=forty:
console.log(teal terminators win)
else:
remain
return filename
