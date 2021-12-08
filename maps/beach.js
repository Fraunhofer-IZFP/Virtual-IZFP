var targetObjectSign ='PopupSign';
var popUpSign = undefined;
var targetObjectFisherman ='PopupFisherman';
var popUpFisherman = undefined;

var quotes_fishing= [
	'B ist ein sehr wichtiger Buchstabe. Ohne ihn sähe der Barsch ganz unfein aus.',
	'Angeln: stundenlang geduldig an einem Fleck lauern, bis man nichts gefangen hat.',
	'Das Wichtigste beim Angeln sind lange Arme, damit man zeigen kann, wie groß der gefangene Fisch war.',
	'Der Lachs ernährt sich von Heringen, fragt sich nur, wie er die Büchsen aufkriegt!',
	'Ein Fisch, der immer höher hinaus will, muss sich oft einer Angel anvertrauen.',
	'Es gibt Menschen die Fische fangen, und solche, die nur das Wasser trüben.',
	'Fischers Fritze fischt frische Fische, frische Fische fischt Fischers Fritze.',
	'Hilfe, mein Fisch ertrinkt!',
	'Ich verstehe jetzt, dass die Fische nicht anbeißen: Ich hab mal so einen Wurm probiert...',
	'Lieber Regen beim Angeln als Sonne beim arbeiten.',
	'Ich habe den Sachsen das Angeln beigebracht. Seitdem heißen sie Angelsachsen. Ich bin der König aller Angler.'
	]

function showPopup(target_zone, target_rectangle, popup_content){
	var popUpInstance = undefined;
	WA.onEnterZone(target_zone, () => {
		popUpInstance = WA.openPopup(target_rectangle, popup_content, [])
	});
	WA.onLeaveZone(target_zone, () => {
		if (popUpInstance !== undefined) popUpInstance.close();
	})
}

// function showPopup(target, content) {
  // popUpSign = WA.openPopup(target, content, [
		// {
			// label: "Close",
			// className: "popUpElement",
			// callback: (popup) => {
				// popup.close();
			// }
		// }
	// ]);
	// return popUpSign;
// }
showPopup('popup_sign_entry', 'PopupSign', 'Einzige Baderegel:\n Hier herrscht Stille. Absolute Stille!')

// WA.onEnterZone('popup_sign_entry', () => {
	// popUpSign = showPopup(targetObjectSign, 'Baderegeln:\n Hier herrscht Stille. Absolute Stille!');
// });
// WA.onLeaveZone('popup_sign_entry', () => {
    // if (popUpSign !== undefined) popUpSign.close();
// })

WA.onEnterZone('popup_fisherman', () => {
	var quote_index = Math.floor(Math.random() * (quotes_fishing.length));
	popUpFisherman = showPopup(targetObjectFisherman, quotes_fishing[quote_index]);
});
WA.onLeaveZone('popup_fisherman', () => {
    if (popUpFisherman !== undefined) popUpFisherman.close();
})



