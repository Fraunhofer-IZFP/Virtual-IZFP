// WA.room.onEnterZone('popup_sign_entry', () => {
    // WA.chat.sendChatMessage("Hier herrscht Stille. Absolute Stille!", 'Baderegeln');
// })

helloWorldPopup = WA.room.onEnterZone("popup_sign_entry").subscribe(() => {
    WA.ui.openPopup("SignPopup", 'Hello world!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.room.onLeaveZone("popup_sign_entry").subscribe(() => {
    helloWorldPopup.close();
