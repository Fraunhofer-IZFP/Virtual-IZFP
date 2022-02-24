/// ToDo:
//var targetRectangleSignBeach = 'PopupSignBeach'
//var targetRectangleSignMoaiIsland = 'PopupSignMoaiIsland'
var targetRectangleSignFunAreaEntry = 'PopupSignFunAreaEntry'
var targetRectangleSignFunAreaOverview = 'PopupSignFunAreaOverview'
/// ToDo:
//var targetTriggerZoneSignBeach = 'popup_sign_beach'
//var targetTriggerZoneSignMoaiIsland = 'popup_sign_moai_island'
var targetTriggerZoneSignFunAreaEntry = 'popup_sign_fun_area_entry'
var targetTriggerZoneSignFunAreaOverview = 'popup_sign_fun_area_overview'
/// ToDo:
//var contentSignBeachEnglish = ['To the beach']
//var contentSignBeachGerman = ['Zum Strand']
var contentSignMoaiIslandEnglish = ['To the Moai-Island']
var contentSignMoaiIslandGerman = ['Zur Moai-Insel']

var contentSignFunAreaEntryEnglish = ['Welcome to the IZFP "fun" area.\nEntering the cave at your own risk!']
var contentSignFunAreaEntryGerman = ['Willkommen in der IZFP-"Spaß"-Ecke.\nBetreten der Höhle auf eigene Gefahr!']

var contentSignFunAreaOverviewEnglish = ['Orientation:\n\nNorth-west: To the beach\nSouth-west: Moai island\nCenter: Game events and meetup\nNorth-east: Back to town center']
var contentSignFunAreaOverviewGerman = ['Orientierung:\n\nNord-Westen: Zum Strand\nSüd-Westen: Die Moai Insel\nZentrum: Spielveranstaltungen und Treffen\nNord-Osten: Zurück zum Zentrum']

var targetZoneMoai = 'popup_Moai'
var targetRectangleMoai = 'PopupMoai'
var targetTriggerZoneMoai = 'popup_moai'


var isEnglish = false

var quotes_moai= [
	'Dum dum...\ngive me gum gum.',
	'You in trouble, dum dum.',
	'You better, run run.',
	'You new dum dum\nand\nyou give me gum gum!',
	'See you later, dum dum.'
	]

function showPopup(target_zone, target_rectangle, popup_content) {
	var popUpInstance = undefined;
	WA.onEnterZone(target_zone, () => {
		var index = Math.floor(Math.random() * (popup_content.length));
		popUpInstance = WA.openPopup(target_rectangle, popup_content[index], [])
	});
	WA.onLeaveZone(target_zone, () => {
		if (popUpInstance !== undefined) popUpInstance.close();
	})
}

function showPopupEnglishGerman(target_zone, target_rectangle, popup_content_english, popup_content_german) {
	var popUpInstance = undefined;
	WA.onEnterZone(target_zone, () => {
		var index = Math.floor(Math.random() * Math.min(popup_content_english.length, popup_content_german.length));
		// get language
		if (isEnglish) {
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
		else {
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

//showPopupEnglishGerman(targetTriggerZoneSignBeach, targetRectangleSignBeach, contentSignSignBeachEnglish, contentSignSignBeachGerman)
//showPopupEnglishGerman(targetTriggerZoneSignMoaiIsland, targetRectangleSignMoaiIsland, contentSignSignMoaiIslandEnglish, contentSignSignMoaiIslandGerman)
showPopupEnglishGerman(targetTriggerZoneSignFunAreaEntry, targetRectangleSignFunAreaEntry, contentSignFunAreaEntryEnglish, contentSignFunAreaEntryGerman)
showPopupEnglishGerman(targetTriggerZoneSignFunAreaOverview, targetRectangleSignFunAreaOverview, contentSignFunAreaOverviewEnglish, contentSignOFunAreaOverviewGerman)
showPopup(targetZoneMoai, targetRectangleMoai, quotes_moai)


