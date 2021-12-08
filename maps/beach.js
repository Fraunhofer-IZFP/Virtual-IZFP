var targetObjectSign ='PopupSign';
var popUpSign = undefined;


WA.onEnterZone('popup_sign_entry', () => {
	WA.chat.sendChatMessage("Hier herrscht Stille. Absolute Stille!", 'Baderegeln');
	
	popUpSign = WA.openPopup(targetObjectSign, 'Hello World', [
		{
			label: "Close",
			className: "popUpElement",
			callback: (popup) => {
				popup.close();
			}
		}
	])
});

WA.onLeaveZone('popup_sign_entry', () => {
    if (popUpSign !== undefined) popUpSign.close();
})

// WA.room.onEnterZone('popup_sign_entry', () => {
    // WA.chat.sendChatMessage("Hier herrscht Stille. Absolute Stille!", 'Baderegeln');
// })
