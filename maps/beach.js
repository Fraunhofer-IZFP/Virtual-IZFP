var targetObjectSign ='PopupSign';
var popUpSign = undefined;


WA.onEnterZone('popup_sign_entry', () => {
	popUpSign = WA.openPopup(targetObjectSign, 'Baderegeln:\n Hier herrscht Stille. Absolute Stille!', [
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

var quotes_fishing= [
	'B ist ein sehr wichtiger Buchstabe. Ohne ihn sähe der Barsch ganz unfein aus.',
	
	]


// WA.room.onEnterZone('popup_sign_entry', () => {
    // WA.chat.sendChatMessage("Hier herrscht Stille. Absolute Stille!", 'Baderegeln');
// })
