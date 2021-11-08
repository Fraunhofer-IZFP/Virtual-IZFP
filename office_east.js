WA.chat.sendChatMessage('Hello world', 'Mr Robot');

let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.room.onEnterZone('zone_pop_silent_room_bottom_center', () => {
    WA.ui.openPopup("pop_silent_room_center_bottom", 'Hello world!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    });
}]);

// Close the popup when we leave the zone.
WA.room.onLeaveZone('zone_pop_silent_room_bottom_center', () => {
    helloWorldPopup.close();
});