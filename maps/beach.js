var targetZoneSign = 'popup_sign_entry'
var targetRectangleSign = 'PopupSign'
var contentSignEnglish = ['Only pool rule:\n Be silent! Absolutely silent!']
var contentSignGerman = ['Einzige Baderegel:\n Hier herrscht Stille. Absolute Stille!']
var targetZoneFisherman = 'popup_fisherman'
var targetRectangleFisherman = 'PopupFisherman'

var isEnglish = false

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
		var index = Math.floor(Math.random() * (popup_content.length));
		popUpInstance = WA.openPopup(target_rectangle, popup_content[index], [])
	});
	WA.onLeaveZone(target_zone, () => {
		if (popUpInstance !== undefined) popUpInstance.close();
	})
}


function showPopupEnglishGerman(target_zone, target_rectangle, popup_content_english, popup_content_german){
	var popUpInstance = undefined;
	WA.onEnterZone(target_zone, () => {
		var index = Math.floor(Math.random() * Math.min(popup_content_english.length, popup_content_german.length));
		// get language
		if(isEnglish)
		{
			popUpInstance = WA.openPopup(target_rectangle, popup_content_english[index], 
			[{
				label: "Deutsch",
				className: "primary",
				callback: (popup) => {
					// Close the popup when the "Close" button is pressed.
					popup.close();
					isEnglish = false;
				}
			}]);
		}
		else 
		{
			popUpInstance = WA.openPopup(target_rectangle, popup_content_german[index], 
			[{
				label: "English",
				className: "primary",
				callback: (popup) => {
					// Close the popup when the "Close" button is pressed.
					popup.close();
					isEnglish = true;
				}
			}]);
		}
	});
	WA.onLeaveZone(target_zone, () => {
		if (popUpInstance !== undefined) popUpInstance.close();
	})
}

//showPopup(targetZoneSign, targetRectangleSign, contentSign)
showPopupEnglishGerman(targetZoneSign, targetRectangleSign, contentSignEnglish, contentSignGerman)
showPopup(targetZoneFisherman, targetRectangleFisherman, quotes_fishing)




