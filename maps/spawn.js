var targetRectangleSignOfficeWest = 'PopupSignOfficeWest'
var targetRectangleSignOfficeEast = 'PopupSignOfficeEast'
var targetRectangleSignFunArea = 'PopupSignFunArea'
var targetRectangleSignForum = 'PopupSignForum'
var targetRectangleSignBeach = 'PopupSignBeach'
var targetRectangleScarecrow = 'PopupScarecrow'
var targetRectangleSignOverview = 'PopupSignOverview'

var targetTriggerZoneSignOfficeWest = 'popup_sign_office_west'
var targetTriggerZoneSignOfficeEast = 'popup_sign_office_east'
var targetTriggerZoneSignFunArea = 'popup_sign_fun_area'
var targetTriggerZoneSignForum = 'popup_sign_forum'
var targetTriggerZoneSignBeach = 'popup_sign_beach'
var targetTriggerZoneScarecrow = 'popup_scarecrow'
var targetTriggerZoneSignOverview = 'popup_sign_overview'

var contentSignOfficeWestEnglish = ['To the western offices']
var contentSignOfficeWestGerman = ['Zu den westlichen Büros']
var contentSignOfficeEastEnglish = ['To the eastern offices']
var contentSignOfficeEastGerman = ['Zu den östlichen Büros']
var contentSignFunAreaEnglish = ['Danger!\nYou will now enter the IZFP "fun" area.\nUnder construction!']
var contentSignFunAreaGerman = ['Gefahr!\nSie betreten nun die IZFP-"Spaß"-Ecke.\nBetreten der Baustelle weder sinnvoll noch empfohlen!']
var contentSignForumEnglish = ['To the Forum.\nYou will find the meeting rooms there']
var contentSignForumGerman = ['Zum Forum.\nDort gibt es Besprechungsräume.']
var contentSignBeachEnglish = ['To the silent beach.\nTrust me, it is relaxing.']
var contentSignBeachGerman = ['Zum ruhigen Strand.\nMan sagt, es sei erholsam.']
var contentScarecrowEnglish = ['Some people without brains do an awful lot of talking, don\'t you think?']
var contentScarecrowGerman = ['Manche Leute ohne Hirn reden furchtbar viel, finden Sie nicht auch?']
var contentSignOverviewEnglish = ['Orientation:\n\nNorth-west: Library\nNorth: Offices\nEast: Forum with meeting rooms\nSouth: Fun area, beware!\nWest: Silent beach\nCenter: Events and meetup']
var contentSignOverviewGerman = ['Orientierung:\n\nNord-Westen: Bibliothek\nNorden: Büros\nOsten: Forum mit Besprechungsräumen\nSüden: Spiel und Spaß, uffbasse!\nWesten: Entspannung am Strand\nZentrum: Veranstaltungen und Treffen']

var isEnglish = false

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

showPopupEnglishGerman(targetTriggerZoneSignOfficeWest, targetRectangleSignOfficeWest, contentSignOfficeWestEnglish, contentSignOfficeWestGerman)
showPopupEnglishGerman(targetTriggerZoneSignOfficeEast, targetRectangleSignOfficeEast, contentSignOfficeEastEnglish, contentSignOfficeEastGerman)
showPopupEnglishGerman(targetTriggerZoneSignFunArea, targetRectangleSignFunArea, contentSignFunAreaEnglish, contentSignFunAreaGerman)
showPopupEnglishGerman(targetTriggerZoneSignForum, targetRectangleSignForum, contentSignForumEnglish, contentSignForumGerman)
showPopupEnglishGerman(targetTriggerZoneSignBeach, targetRectangleSignBeach, contentSignBeachEnglish, contentSignBeachGerman)
showPopupEnglishGerman(targetTriggerZoneScarecrow, targetRectangleScarecrow, contentScarecrowEnglish, contentScarecrowGerman)
showPopupEnglishGerman(targetTriggerZoneSignOverview, targetRectangleSignOverview, contentSignOverviewEnglish, contentSignOverviewGerman)

// did not work as expected but could be a starting point for future $team

// function showGerman(target_rectangle, popup_content_english, popup_content_german)
// {
	// var popUpInstance = undefined;
	// popUpInstance = WA.openPopup(target_rectangle, popup_content_german,
			// [{
				// label: "English",
				// className: "primary",
				// callback: (popup) => {
					// // Close the popup when the "Close" button is pressed.
					// popup.close();
					// isEnglish = true;
					// popUpInstance = showEnglish(target_rectangle, popup_content_english, popup_content_german);
				// }
			// }]);
			// return popUpInstance;
// }

// function showEnglish(target_rectangle, popup_content_english, popup_content_german)
// {
	// var popUpInstance = undefined;
	// popUpInstance = WA.openPopup(target_rectangle, popup_content_english,
			// [{
				// label: "German",
				// className: "primary",
				// callback: (popup) => {
					// // Close the popup when the "Close" button is pressed.
					// popup.close();
					// isEnglish = false;
					// popUpInstance = showGerman(target_rectangle, popup_content_english, popup_content_german);
				// }
			// }]);
			// return popUpInstance;
// }

// function showPopupEnglishGerman2(target_zone, target_rectangle, popup_content_english, popup_content_german){
	// var popUpInstance = undefined;
	// WA.onEnterZone(target_zone, () => {
		// // get language
		// if(isEnglish)
		// {
			// popUpInstance = showEnglish(target_rectangle, popup_content_english, popup_content_german);
		// }
		// else
		// {
			// popUpInstance = showGerman(target_rectangle, popup_content_english, popup_content_german);
		// }
	// });
	// WA.onLeaveZone(target_zone, () => {
		// if (popUpInstance !== undefined) popUpInstance.close();
	// })
// }
