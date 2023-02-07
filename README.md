# Bunny Hop // DinoChrome Insparation


## Description

This is a code for a game where you play as a rabbit who needs to avoid hitting Easter egg.
The code sets up the game screen, keeps track of your score, and starts the game when you press a key.
As you play, the code continually updates the game to show the movement of the ground, rabbit, and eggs.
The code also checks if you hit an egg and if so, the rabbit loses and the game starts over, and the code also makes the game look good on different screen sizes.

![](https://i.ibb.co/0mgxXrQ/Start-Game-bunny.png)

[Video Explanation Link](https://www.kapwing.com/videos/63e20799c2627900180cee14)
![](https://cdn-useast1.kapwing.com/final_63e20955af4b930061bbf238_324962.gif)

### Our Conflicts

We encountered a conflict with the moving ground script and the Easter eggs functions. To resolve this issue, we made some changes to the way the ground was set up. Initially, we set up the ground using a div element. However, this caused problems with the way the ground moved and interacted with the Easter eggs.

* To fix this, we decided to make the ground move infinitely by increasing the width of the ground element to 300%. This allowed us to create the illusion of an endless ground. Additionally, we modified the ground's position property to absolute and set its bottom property to 0, which helped to keep the ground in the correct position on the screen.

* Another issue we encountered was with the way the Easter eggs were set up. At first, we had created the Easter eggs using div elements. However, this made it difficult to interact with the bunny. To resolve this, we changed the Easter eggs to img elements, which made it possible to accurately determine collisions between the bunny and the Easter eggs.

Overall, these changes allowed us to create a smooth and seamless game experience for the player.
```
export function updateGround(diff, speedScale) {
    groundElems.forEach(ground => {
        incrementCustomProp(ground, "--left", diff * speedScale * SPEED * -1) 

        if (getCustomProp(ground, "--left") <= -300) {
        
        the edge of the screen
            incrementCustomProp(ground, "--left", 600) 
        }
    })
}
```
```

function createEgg() {
    const egg = document.createElement("img")
    egg.dataset.easterEgg = true
    egg.src = "images/easter-egg.png"
    egg.classList.add("easter-egg")
    setCustomProp(egg, "--left", 100)
    container.appendChild(egg)
  }
  

```

### Sorcses and Copyrights
* [MapleStory Wiki](https://maplestory.wiki/THMS/20.1.0) Images created by MapleStory (All images were customized, photoshoped and redesigned)
* [Background Music](shorturl.at/dQX79)
* [Game Over Sound](shorturl.at/huBNT)

### Contributors names and contact info

[@AmySkaletzky](https://www.linkedin.com/in/amy-skaletzky-093472261)
[@KerenPetras](https://www.linkedin.com/in/kerenpetras/)

