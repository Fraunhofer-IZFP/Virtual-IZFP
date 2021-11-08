WA.chat.sendChatMessage('Hello world, I run in the script in the maps folder, update', 'Mr Robot');


let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.room.onEnterZone('zonePopTest', () => {
    WA.ui.openPopup("myPopup1", 'Hello world!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
}}])});

// Close the popup when we leave the zone.
WA.room.onLeaveZone('zonePopTest', () => {
    helloWorldPopup.close();
});

WA.room.onEnterZone('myZone', () => {
    WA.chat.sendChatMessage("Hello!", 'Mr Robot');
})

WA.room.onLeaveZone('myZone', () => {
    WA.chat.sendChatMessage("Goodbye!", 'Mr Robot');
})