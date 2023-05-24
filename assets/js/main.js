function CreateGameiFrame(gameId, gameUrl) {
    var f = document.createElement('iframe');
    f.src = "assets/games/" + gameUrl;
    f.width = 1000;
    f.height = 500;
    f.id = "iframe-" + gameId;
    $("#game-" + gameId).append(f);
}

function RemoveGameiFrame(gameId) {
    $("#iframe-" + gameId).remove();
}

function EscapePressed(e, gameId, closeButton) {
    if(e.key === "Escape") {
        RemoveGameiFrame(gameId);
        closeButton.click();
    }
}