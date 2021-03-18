// ==UserScript==
// @name         ROBLOX 2010
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match         https://www.roblox.com/home
// @include https://www.roblox.com/*
// @grant        none
// ==/UserScript==

(function() {

    // JQUERY

        var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
    //
    'use strict';

    // FAVICON
        var url = window.location.href
        if(url.includes("roblox.com")){

            var link = document.querySelector("link[rel~='icon']");
            if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.getElementsByTagName('head')[0].appendChild(link);
            }
        }
    link.href = 'https://lh3.googleusercontent.com/nH9gHFaLq0z7Zmf3zqG56vLIwTaBhJfMwISjMoTBaaBB48HCwUO6rQAWYPcel-Olz0qqHQW0LtnGELbpNaK0=w1600-h789';

    // CONTAINER

    var legacyMasterContainer = document.getElementById("wrap")
    var container = document.createElement("div")
    container.id = "Container"
    legacyMasterContainer.appendChild(container)

    // HEADER


    var HeaderContainer = document.createElement("div")
    HeaderContainer.id = "HeaderContainer"
    container.appendChild(HeaderContainer)

    var Header = document.createElement("div")
    Header.id = "Header"
    HeaderContainer.appendChild(Header)

    var Navigation = document.createElement("div")
    Navigation.className = "Navigation"
    Header.appendChild(Navigation)

    var navButtons = document.createElement("ul")
    navButtons.id = "ctl00_Menu_MenuUL"
    Navigation.appendChild(navButtons)

    // BODY

    var Body = document.createElement("div")
    container.appendChild(Body)
    Body.id = "Body"

    // APPEND CONTENT

    var contentLegacy = document.getElementsByClassName("content")
    Body.appendChild(contentLegacy[0])

    // APPEND ADS

    var leftAd = document.getElementsByClassName("left-abp")
    var rightAd = document.getElementsByClassName("right-abp")
    try{
        legacyMasterContainer.appendChild(leftAd[0])
    }catch(err) {
        console.log(err)
    }

    try{
        legacyMasterContainer.appendChild(rightAd[0])
    }catch(err) {
        console.log(err)
    }

    // HEADER "ROBLOX" LINK

    var homepage = document.createElement("a")
    HeaderContainer.appendChild(homepage)
    homepage.href = "https://www.roblox.com/home"
    homepage.id = "Homepage"

    // HEADER ACCOUNT INFO

    var accountinfo = document.createElement("div")
    HeaderContainer.appendChild(accountinfo)
    accountinfo.id = "AccountInfo"
    var robuxinfo = document.getElementById("navbar-robux")
    accountinfo.appendChild(robuxinfo)

    // FRIEND REQUESTS

    var requestslegacy = document.getElementById("nav-friends")


    var friendrequests = document.createElement("p")
    accountinfo.appendChild(friendrequests)
    friendrequests.id = "FriendRequests"
    accountinfo.appendChild(requestslegacy)


    // BELOW ARE NAV BUTTONS

    // MY ROBLOX

    var myRoblox = document.createElement("li")
    navButtons.appendChild(myRoblox)
    var myRobloxHref = document.createElement("a")
    myRoblox.appendChild(myRobloxHref)
    myRobloxHref.href = "https://www.roblox.com/user.aspx"
    myRobloxHref.innerHTML = "My ROBLOX"

    // GAMES

    var headergames = document.createElement("li")
    navButtons.appendChild(headergames)
    var gamesHref = document.createElement("a")
    headergames.appendChild(gamesHref)
    gamesHref.href = "https://www.roblox.com/games#/sortName/PopularInCountry"
    gamesHref.innerHTML = "Games"

    // CATALOG

    var catalog = document.createElement("li")
    navButtons.appendChild(catalog)
    var catalogHref = document.createElement("a")
    catalog.appendChild(catalogHref)
    catalogHref.href = "https://www.roblox.com/catalog"
    catalogHref.innerHTML = "Catalog"

    // BUILDERS CLUB (YAY)

    var builderclub = document.createElement("li")
    navButtons.appendChild(builderclub)
    var builderclubHref = document.createElement("a")
    builderclub.appendChild(builderclubHref)
    builderclubHref.href = "https://www.roblox.com/premium/membership"
    builderclubHref.innerHTML = "Builders Club"

    // AVATAR

    var avatar = document.createElement("li")
    navButtons.appendChild(avatar)
    var avatarHref = document.createElement("a")
    avatar.appendChild(avatarHref)
    avatarHref.href = "https://www.roblox.com/my/avatar"
    avatarHref.innerHTML = "Avatar"

    // GROUPS

    var groups = document.createElement("li")
    navButtons.appendChild(groups)
    var groupsHref = document.createElement("a")
    groups.appendChild(groupsHref)
    groupsHref.href = "https://www.roblox.com/my/groups"
    groupsHref.innerHTML = "Groups"

    // GROUPS

    var create = document.createElement("li")
    navButtons.appendChild(create)
    var createsHref = document.createElement("a")
    create.appendChild(createsHref)
    createsHref.href = "https://www.roblox.com/create"
    createsHref.innerHTML = "Develop"

    // TRADE

    var trade = document.createElement("li")
    navButtons.appendChild(trade)
    var tradeHref = document.createElement("a")
    trade.appendChild(tradeHref)
    tradeHref.href = "https://www.roblox.com/trades"
    tradeHref.innerHTML = "Trade"

    // PROFILE STUFF

    if(window.location.href.includes("profile")){
        // MERGE CREATIONS AND ABOUT
     window.location.href = "#!/creations"
        document.getElementById("about").appendChild(document.getElementById("creations"))
        window.location.href = "#!/about"

        var userid = (window.location.href).split("/")[4]

        var profilecontainer = document.getElementsByClassName("profile-container")[0]

        var columnleft = document.createElement("div")
        columnleft.id = "columnleft"
        profilecontainer.appendChild(columnleft)

        var profileavatar = document.getElementsByClassName("profile-avatar")[0]
        columnleft.appendChild(profileavatar)
        var profilebadges = document.getElementById("roblox-badges-container")
        columnleft.appendChild(profilebadges)
        try {
        var profileplayerbadges = document.getElementById("player-badges-container")
        columnleft.appendChild(profileplayerbadges)
        } catch(err){console.log(err)}
        try {
        var profileabout = document.getElementsByTagName("profile-description")
        profileavatar.appendChild(profileabout[0])
        } catch(err){console.log(err)}
        var profilestats = document.getElementById("profile-statistics-container")
        columnleft.appendChild(profilestats)
        try {
        var profilegroups = document.querySelectorAll("div[ng-if='!metadata.areProfileGroupsHidden']")
        columnleft.appendChild(profilegroups[0])
        profilegroups[0].className = "ng-scope container-list"
        } catch(err){console.log(err)}

        var profilegames = document.getElementsByClassName("profile-game")[0]
        profilegames.remove()


        // PROFILE GAMES

        var games = $.getJSON('https://games.roblox.com/v2/users/' + userid + '/games?sortOrder=Asc&limit=10', function(data){
        var g = data.data
        //var profilegames = document.getElementsByClassName("profile-game")[0]
        var profilegames = columnright
        var gamescontainer = document.createElement("div")
        gamescontainer.id = "profilegames"
            profilecontainer.appendChild(gamescontainer)

        var profilegamesheader = document.createElement("div")
        gamescontainer.appendChild(profilegamesheader)
        profilegamesheader.id = "ProfileGamesHeader"
        var profilegamesheadertext = document.createElement("p")
        profilegamesheader.appendChild(profilegamesheadertext)
        profilegamesheadertext.innerHTML = "Active Places"

        //
        if(g[0] !== null){
            var game0 = document.createElement("div")
            var game0content = document.createElement("div")
            var game0header = document.createElement("p")

            game0header.className = "gameheader"
            game0.appendChild(game0header)
            game0header.innerHTML = g[0].name
            gamescontainer.appendChild(game0)
            game0.appendChild(game0content)
            game0.id = "game0"
            game0.className = "gamelisting"
            game0content.id = "game0content"
            game0content.style.display = "none"

            var game0descheader = document.createElement("h2")
            game0content.appendChild(game0descheader)
            game0descheader.innerHTML = "Description"

            var game0desc = g[0].description
            var game0deschtml = document.createElement("p")
            game0deschtml.innerHTML = game0desc
            game0content.appendChild(game0deschtml)

            var game0visits = g[0].placeVisits
            var game0visitshtml = document.createElement("h3")
            game0visitshtml.innerHTML = game0visits
            game0content.appendChild(game0visitshtml)

            var game0goto = document.createElement("a")
            game0goto.innerHTML = "Go to game"
            game0content.appendChild(game0goto)
            game0goto.href = "https://www.roblox.com/games/" + g[0].rootPlace.id



            var game0img = $.getJSON("https://thumbnails.roblox.com/v1/games/icons?universeIds=" + g[0].id + "&size=256x256&format=Png&isCircular=false", function(img){
               var game0imghtml = document.createElement("img")
               var image = img.data[0].imageUrl
                game0imghtml.src = img.data[0].imageUrl
                game0content.appendChild(game0imghtml)
                game0imghtml.id = "game0img"
                game0imghtml.className = "gameimage"
                game0imghtml.onclick = function(gotogame){
                window.location.href = "https://www.roblox.com/games/" + g[0].rootPlace.id
            }

                   if(image.includes("gif")){
                   game0imghtml.src = "https://static.wikia.nocookie.net/robloxcreepypasta/images/4/47/Download-0.jpg/revision/latest/scale-to-width-down/340?cb=20170317070258"
                   }
            });



            game0header.onclick = function expand(){
                if(game0content.style.display == "none"){
                    game0content.style.display = "block"
                game0.style.height = "200px"
                } else if(game0content.style.display == "block"){
                    game0content.style.display = "none"
                    game0.style.height = "20px"
                }
            }
        }

        //

        if(g[1] !== null){
            try{
            var game1 = document.createElement("div")
            var game1content = document.createElement("div")
            var game1header = document.createElement("p")

            game1header.className = "gameheader"
            game1.appendChild(game1header)
            game1header.innerHTML = g[1].name
            gamescontainer.appendChild(game1)
            game1.appendChild(game1content)
            game1.id = "game1"
            game1.className = "gamelisting"
            game1content.id = "game1content"
            game1content.style.display = "none"

            var game1descheader = document.createElement("h2")
            game1content.appendChild(game1descheader)
            game1descheader.innerHTML = "Description"

            var game1desc = g[1].description
            var game1deschtml = document.createElement("p")
            game1deschtml.innerHTML = game1desc
            game1content.appendChild(game1deschtml)

            var game1visits = g[1].placeVisits
            var game1visitshtml = document.createElement("h3")
            game1visitshtml.innerHTML = game1visits
            game1content.appendChild(game1visitshtml)

            var game1goto = document.createElement("a")
            game1goto.innerHTML = "Go to game"
            game1content.appendChild(game1goto)
            game1goto.href = "https://www.roblox.com/games/" + g[1].rootPlace.id



            var game1img = $.getJSON("https://thumbnails.roblox.com/v1/games/icons?universeIds=" + g[1].id + "&size=256x256&format=Png&isCircular=false", function(img){
               var game1imghtml = document.createElement("img")
               var image = img.data[0].imageUrl
                game1imghtml.src = img.data[0].imageUrl
                game1content.appendChild(game1imghtml)
                game1imghtml.id = "game1img"
                game1imghtml.className = "gameimage"
                game1imghtml.onclick = function(gotogame){
                window.location.href = "https://www.roblox.com/games/" + g[1].rootPlace.id
            }

                   if(image.includes("gif")){
                   game1imghtml.src = "https://static.wikia.nocookie.net/robloxcreepypasta/images/4/47/Download-0.jpg/revision/latest/scale-to-width-down/340?cb=20170317070258"
                   }
            });



            game1header.onclick = function expand(){
                if(game1content.style.display == "none"){
                    game1content.style.display = "block"
                game1.style.height = "200px"
                } else if(game1content.style.display == "block"){
                    game1content.style.display = "none"
                    game1.style.height = "20px"
                }
            }
            }catch(err){console.log(err)}
            }

        //

        if(g[2] !== null){
            try{
            var game2 = document.createElement("div")
            var game2content = document.createElement("div")
            var game2header = document.createElement("p")

            game2header.className = "gameheader"
            game2.appendChild(game2header)
            game2header.innerHTML = g[2].name
            gamescontainer.appendChild(game2)
            game2.appendChild(game2content)
            game2.id = "game2"
            game2.className = "gamelisting"
            game2content.id = "game2content"
            game2content.style.display = "none"

            var game2descheader = document.createElement("h2")
            game2content.appendChild(game2descheader)
            game2descheader.innerHTML = "Description"

            var game2desc = g[2].description
            var game2deschtml = document.createElement("p")
            game2deschtml.innerHTML = game2desc
            game2content.appendChild(game2deschtml)

            var game2visits = g[2].placeVisits
            var game2visitshtml = document.createElement("h3")
            game2visitshtml.innerHTML = game2visits
            game2content.appendChild(game2visitshtml)

            var game2goto = document.createElement("a")
            game2goto.innerHTML = "Go to game"
            game2content.appendChild(game2goto)
            game2goto.href = "https://www.roblox.com/games/" + g[2].rootPlace.id



            var game2img = $.getJSON("https://thumbnails.roblox.com/v1/games/icons?universeIds=" + g[2].id + "&size=256x256&format=Png&isCircular=false", function(img){
               var game2imghtml = document.createElement("img")
                var image = img.data[0].imageUrl
                game2imghtml.src = image
                game2content.appendChild(game2imghtml)
                game2imghtml.id = "game2img"
                game2imghtml.className = "gameimage"
                game2imghtml.onclick = function(gotogame){
                window.location.href = "https://www.roblox.com/games/" + g[2].rootPlace.id
            }

                if(image.includes("gif")){
                   game2imghtml.src = "https://static.wikia.nocookie.net/robloxcreepypasta/images/4/47/Download-0.jpg/revision/latest/scale-to-width-down/340?cb=20170317070258"
                   }
            });



            game2header.onclick = function expand(){
                if(game2content.style.display == "none"){
                    game2content.style.display = "block"
                game2.style.height = "200px"
                } else if(game2content.style.display == "block"){
                    game2content.style.display = "none"
                    game2.style.height = "20px"
                }
            }
             }catch(err){console.log(err)}
            }
            // END OF PROFILE GAMES

            // RIGHT COLUMN
        var columnright = document.createElement("div")
        columnright.id = "columnright"
        profilecontainer.appendChild(columnright)

        var profilefriends = document.getElementById("people-list-container")
        try{
        columnright.appendChild(profilefriends)
        }catch(err){console.log(err)}
        var profilefavs = document.getElementsByClassName("favorite-games-container")[0]
        try{
        columnright.appendChild(profilefavs)
        }catch(err){console.log(err)}
        var profileclothing = document.getElementById("creations")
        try {
        columnright.appendChild(profileclothing)
        } catch(err){console.log(err)}
        var profilecollections = document.getElementsByClassName("profile-collections")[0]
        try{
        columnright.appendChild(profilecollections)
        }catch(err){console.log(err)}

        var profilecollectionstryagain = document.querySelectorAll("div[ng-controller='profileCollectionsController']")[0]
        try{
        columnright.appendChild(profilecollectionstryagain)
        }catch(err){console.log(err)}

        var followingdetails = document.getElementsByClassName("details-info")[0]
        var statschildren = profilestats.getElementsByClassName("section-content")[0]
        statschildren.appendChild(followingdetails)



    }); // <---- END OF IF STATEMENT AND JSON FUNCTION

        // CHANGE USERNAME HEADER

        var profilenamelegacy = document.getElementsByClassName("profile-name")[0]
        var profileheader = document.querySelectorAll(".profile-avatar .container-header")[0]
        profileheader.appendChild(profilenamelegacy)

        var profileoptions = document.getElementById("profile-header-more")
        profileavatar.appendChild(profileoptions)

        // CREATE INVENTORY BUTTON

        var useravatar = document.getElementById("UserAvatar")
        var profilelinks = document.createElement("div")
        useravatar.appendChild(profilelinks)
        profilelinks.id = "profilelinks"

        var profileinvbutton = document.createElement("a")
        profilelinks.appendChild(profileinvbutton)
        profileinvbutton.innerHTML = "Inventory"
        profileinvbutton.id = "profilelink-inv"
        profileinvbutton.href = "https://www.roblox.com/users/" + userid + "/inventory"

        var profilefavbutton = document.createElement("a")
        profilelinks.appendChild(profilefavbutton)
        profilefavbutton.innerHTML = "Favorites"
        profilefavbutton.id = "profilelink-fav"
        profilefavbutton.href = "https://www.roblox.com/users/" + userid + "/favorites#!/places"

        // GET POPOVER

        var popover = document.querySelectorAll(".popover.fade.bottom")[0]
        popover.className = "popover fade bottom in"



        // SET GROUPS TO GRID

        profilegroups[0].className = "ng-scope container-list"
        var setgrid1 = document.getElementsByTagName("groups-showcase-grid")
        setgrid1[0].className = "ng-isolate-scope"


    }

})();
