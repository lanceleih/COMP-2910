                    Scholours Project Group 20

***************************Standards***********************************
    All folder names are lowercase
    All file and image names are lowercase
    All functions are camelcase
    All variables that change repeatedly are lowercase
    All variables that change only once have an underscore
    All ids are camelcase
    All classes are camelcase
    No capitlization or special characters are allowed in file names
    Files must be placed in the proper folder
***********************************************************************

******************************How To Play**************************************
1. Select your shape and difficulty.
2. Using the limited amount of each colour, fill in the grid.
3. Complete the grid without two connecting tiles filled with the same colour.
4. Tiles are connected when their sides are touching.
5. Diagonals are not considered to be connected.
********************************************************************************

**********************************Important*************************************
    This game currently only consistently runs on Chrome, both on the
    desktop and mobile. To get the full experience, running the game through
    desktop is the best option. Results may vary if used on mobile due to issues
    regarding audio playback and initial load time on some Android and Apple devices.
********************************************************************************

*********************Results From Testing**************************************
1. Event handlers for javascript on handled differently depending on browser.
2. Game works as intended on the desktop environment.
3. Sound effects did not work properly on all mobile devices, even those using the same browser.
4. Initial load up time varies depending on the mobile device.
5. Mobile browsers do not automatically play audio unless it is by a user-driven event, ie. touch/click.
6. On mobile and depending on device, initial sound effects may lag; afterwards it does not lag.
7. On mobile, game will be cut off if the browser if the address bar is hidden.
************************************************************************************

*******************Solutions/Workarounds For Problems***************************
1. Currently, the game only functions properly using Chrome, both on desktop and mobile.
2. On mobile, background music is activated when "Play" button is pressed.
3. Currently, as long as the user does not scroll down their browser, the game will resize as intended.
********************************************************************************
***********Folders*********
1. audio - audio files
2. css  - css files
3. html - html files 
4. img  - image files
5. js   - javascript files
6. php  - php files
***************************

***************SubFolders***************
4. img
    I. background   - background images
    II. icons       - button images
    III. title      - title images
    IV. tutorial    - tutorial images
    V. volume       - volume buttons
****************************************

***************************Files******************************
1. audio
    a. clank.mp3        - sound effect: locked unlockable
    b. click2.mp3       - sound effect: general button press
    c. glass2.mp3       - sound effect: tile press
    d. shop.mp3         - background music (bgm)
    e. tap2.mp3         - sound effect: back button press
    f. whistle.mp3      - sound effect: deny action


2. css
    a. base.css     - basic css, used for any divs(easter egg)
    b. large.css    - for larger screens

3. html
    a. scholours.html   - main html with canvas, divs and any images used

4. img
    a. docwaylon.gif    - video of waylon for the easter egg
    I. background
        a. autumnpanel.jpg      - colour pack autumn image
        b. beergogglespanel.jpg - colour pack beer image
        c. bg.jpg               - background image of the game
        d. colourblindmode.jpg  - colour blind colour pack image
        e. icecreampanel.jpg    - colour pack ice cream image
        f. junglelovepanel.jpg  - colour pack jungle love image
        g. lockedimage.jpg      - locked image for achivements
        h. pacmanghostpanel.jpg - colour pack pacman ghost image
    II. icons
        a. active.png           - active text
        b. audio.png            - audio button
        c. autumn.png           - autumn splendor name
        d. back.png             - back button
        e. beatDiamond.png      - beat diamond text
        f. beatHexagon.png      - beat hexagon text
        g. beatSquare.png       - beat square text
        h. beergoggles.png      - beer goggles name
        i. bgmusic.png          - background music name
        j. bgtimer.png          - timer icon
        k. buttonfinal.png      - button template
        l. colourblind.png      - colour blind name
        m. colourpacks.png      - colour packs button
        n. continue.png         - continue button
        o. cube.png             - cube image for logo
        p. easy.png             - easy button
        q. effects.png          - effects name
        r. hard.png             - hard button
        s. hexa.png             - hexagon button
        t. icecream.png         - ice cream desserts name
        u. junglelove.png       - jungle love name
        v. leftarrow.png        - left arrow button
        w. lockedColours        - locked Colours text
        x. mainmenu.png         - main menu button
        y. medium.png           - medium button
        z. pacmanghosts.png     - pacman ghosts name
        aa. paused.png           - paused button
        ab. play.png             - play button
        ac. playagain.png        - play again button
        ad. polygon.png          - diamond button
        ae. restart.png          - restart button
        af. resume.png           - resume button
        ag. rightarrow.png      - right arrow button
        ah. scores.png          - scores button
        ai. settings.png        - settings button
        aj. square.png          - square button
        ak. title.png           - title name (Scholours)
        al. tutorial.png        - tutorial button
    III. title
        a. audiosettings.png            - audio settings banner
        b. choosecolourpack.png         - colour pack banner
        c. difficultyeasytitle.png      - difficulty easy banner
        d. difficultyhardtitle.png     - difficulty hard banner
        e. difficultymediumtitle.png   - difficulty medium banner
        f. diffcultytitle.png           - difficulty header
        g. leaderboardtitle.png         - leaderboard choose shape header
        h. pausedtitle.png              - paused header
        i. resulttitle.png              - result header
        j. settingstitle.png            - settings header
        k. shapetitle.png               - choose shape header
        l. slogan.png                   - slogan image
        m. title.png                    - title (Scholours)
        n. titleicon.png                - template for header
    IV. Tutorial
        a. firsttutorial.jpg    - first tutorial image
        b. secondtutorial.jpg   - second tutorial image
        c. thirdtutorial.jpg    - third tutorial image
    V. volume
        a. mute.png                 - mute button
        b. muteclicked.png          - mute button after clicked
        c. volumefive.png           - volume five button
        d. volumefiveclicked.png    - volume five button after clicked
        e. volumefour.png           - volume four button
        f. volumefourclicked.png    - volume four button after clicked
        g. volumeone.png            - volume one button
        h. volumeoneclicked.png     - volume one button after clicked
        i. volumethree.ong          - volume one button
        j. volumethreeclicked.png   - volume three button after clicked
        k. volumetwo.png            - volume two button
        l. volumetwoclicked.png     - volume two button after clicked

5. js
    a. achievement.js           - locked achievement functions
    b. audio.js                 - all audio functions
    c. colourpack.js            - anything about the colour packs and colour inventory
    d. colourpacksettings.js    - all colour pack settings functions
    e. diamond.js               - all functions specific for diamond
    f. form.js                  - all functions for the submit button for the leaderboard
    g. game.js                  - general game functions
    h. gamemenu.js              - pause and result page functions
    i. globalvariables.js       - all global variables (first page loaded)
    j. hexagon.js               - all functions specific for hexagon
    k. leaderboard.js           - all functions for the leaderboard pages
    l. main.js                  - home page functions (called on load)
    m. selectmenu.js            - shape and difficulty select page functions
    n. settings.js              - settings functions
    o. square.js                - all functions specific to square
    p. timer.js                 - timer functions
    q. tutorial.js              - tutorial functions
    r. utility.js               - additional functions (easter egg, etc.)
    s. validategame.js          - game validation functions

6. php
    a. addscore.php             - adds score to the leaderboard
    b. config.php               - information for the database
    c. diamondeasy.php          - display diamond easy results
    d. diamondhard.php          - display diamond hard results
    e. diamondmedium.php        - display diamond medium results
    f. hexagoneasy.php          - display hexagon easy results
    g. hexagonhard.php          - display hexagon hard results
    h. hexagonmedium.php        - display hexagon medium results
    i. scholoursdatabase.php    - identical to the html, except with leaderboard functionality
    j. squareeasy.php           - display square easy results
    k. squarehard.php           - display square hard results
    l. squaremedium.php         - display square medium results
**************************************************************************************************