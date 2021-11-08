WA.chat.sendChatMessage('1', 'Mr Robot');


let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.room.onEnterZone('silent_zone_pop_bottom', () => {
    WA.ui.openPopup("myPopup1", 'Hello world!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
}}])});

// Close the popup when we leave the zone.
WA.room.onLeaveZone('silent_zone_pop_bottom', () => {
    helloWorldPopup.close();
});

WA.room.onEnterZone('silent_zone_pop_bottom', () => {
    WA.chat.sendChatMessage("Hello!", 'Mr Robot');
})

/*WA.room.onLeaveZone('pop_silent_area', () => {
    WA.chat.sendChatMessage("Goodbye!", 'Mr Robot');
})*/