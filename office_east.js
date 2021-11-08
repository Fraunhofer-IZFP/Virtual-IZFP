let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.room.onEnterZone('pop_starter', () => {
    WA.ui.openPopup("pop_silent_room_center_bottom", 'Hello world!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
}}])});

// Close the popup when we leave the zone.
WA.room.onLeaveZone('pop_starter', () => {
    helloWorldPopup.close();
});