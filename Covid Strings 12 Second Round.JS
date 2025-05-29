doc.type html
html lang en 
script
header=document create.element(header)
header.style.backgroundcolor=#4caf50
header.style.color=’white’
header.style.padding=’10px’
header.style.textalign=’center’
header.style.text.fontsize=’24px’
header.textcontent=’welcome to covid strings12 second round’
document appendchild(header)
<header.html>
heading variables 
the heading numbers that determine where each heading and subheading go 
heading1=second round overview
heading2=matchups
heading3=second round questions
heading4=advancing rounds
subheading1=team stealing
subheading2=result for matchup1
subheading3=result for matchup2
<header.html>
second round overview
is an overview of the second round of the covid strings contest
html
head
utf8
viewport content=width=device-width, initial-scale=one
title covidstrings 12 second round bracket
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
filename=covid strings12 secondround.js
highest remaining seed=(greatest remaining num value in covid strings list)
lowest remaining seed = (lowest remaining num value in covid strings list)
intermediate seed1=(first middle remaining value in covid strings list)
intermediate seed2=(second middle remaining value in covid strings list))
round =createelement(div);
createround =covid strings12 second round 
round.classlist.add(round);
for (let i = zero; i < teams.length; i += two) {
round.appendchild(creatematchup(teams[i], teams[i + one]));
return round;
bracket.appendchild(createround(teams));
<header.html>
matchups
contains4 teams which equals2 matchups 
matchup1=(lowest remaining seed versus highest remaining seed)
matchup = document.createelement(div);
matchup.classlist.add(matchup);
matchup.inner html =div>${team1}</div><div>${team2}</div>;
return matchup;
matchup2=(intermediate seed two versus intermediate seed one)
matchup = document.createelement(div);
matchup.classlist.add(matchup);
matchup.inner html =div>${team1}</div><div>${team2}</div>;
return matchup;
<header.html>
second round questions
the questions asked in the second round of the covid strings contest
java util.scanner
java.util
second round questions=questions[17-25]
collections.shuffle(arrays.aslist(questions)
question17
question18
question19
question20
question21
question22
question23
question24
question25
private string getblanks(int numberofblanks)
char[] chars =new char[numberofblanks]
arrays.fill chars 
return new string chars 
bracket.addeventlistener((event) => 
myclass=(non-concatenated)
if category==math problem:
prompt
log
else:
select from multiple choice
if category ==multiplechoice:
select answer
else:
prompt
log
myclass=new myclass(concatenated) 
return category
if category==math problem:
prompt
log
else:
select from multiple choice
if category == multiplechoice:
select answer
else:
prompt
log
import syntax 
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
contains the criteria for teams in the second round to advance to the championship 
advanceteams=slice(currentteams)
<subheading.html>
result for matchup1
the code for how to determine the end result of matchup1 of covid strings 
result= declarewinner(matchup1)
if highest remaining seed score>=forty:
console.log(highest remaining seed advances)
else:
remain
if lowest remaining seed  score>=forty: 
console.log(lowest remaining seed advances)
else:
remain
<subheading.html>
result for matchup2
the code for how to determine the end result of matchup2 of covid strings 
result= declarewinner(matchup2)
if intermediate seed1 score>=forty:
console.log(intermediate seed1 advances)
else:
remain
if intermediateseed2score>=forty:
console.log(intermediate seed2 advances)
else:
remain
return filename
