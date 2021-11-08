WA.chat.sendChatMessage('12', 'Mr Robot');


let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.room.onEnterZone('silent_zone_pop_bottom', () => {
    WA.ui.openPopup("myPopup1", 'Hello world!', [])});

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