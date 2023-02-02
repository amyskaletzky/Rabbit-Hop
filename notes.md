# moving rabbit
need to addeventlisteners to doc for 'up', 'space' + 'mousedown' -> to jump
use keyframes 'hop' to set height of hop
animation: hop 0.3s linear (can change s) -> inside .hop class -> which is added to rabbit, whenever
eventlistener

setTimer -> around 300/500ms to remove classlist hop

add if statement to hop() 



# move ground
need to use setInterval(), maybe use two imgs like the yt vid, read more
move a certain amount per ms? (test)

# create ground
width -> screen.width on js to find screen size + set
ground.style.width = screensize  


# game ends if run into/ land on cactus
check where cactus position is on the page + width
if rabbit position <  && > to cactus position + width

# gameover 
function -> stop the screen + add transparent modal (display:none when gameover=== false)
display:block when gameover === true

# score
starts at 0 -> as soon as start game (500ms)


# sky bg
backmost layer, unnaffected by everything + slower speed 
-> later design: starry night + some gradient sunrise/set + sunny day
maybe to start with clouds moving and the sun and moon and stars
try to use animation after certain time (settimeout) for sun to go down and moon to come up 

# audio
- hop
- game over
- every .... points 
- start game


# bonus
-carrots for extra points
-broken egg if you hit it

# click on any button or mouseclick to start game
add class hide to hide after :)
and start game
event click + keydown

# change rabbit img (run/still/hop)
using js -> 