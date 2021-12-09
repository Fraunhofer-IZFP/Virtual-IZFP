var targetRectangleSignOfficeWest = 'PopupSignOfficeWest'
var targetRectangleSignOfficeEast = 'PopupSignOfficeEast'
var targetRectangleSignFunArea = 'PopupSignFunArea'
var targetRectangleSignForum = 'PopupSignForum'
var targetRectangleSignBeach = 'PopupSignBeach'

var targetTriggerZoneSignOfficeWest = 'popup_sign_office_west'
var targetTriggerZoneSignOfficeEast = 'popup_sign_office_east'
var targetTriggerZoneSignFunArea = 'popup_sign_fun_area'
var targetTriggerZoneSignForum = 'popup_sign_forum'
var targetTriggerZoneSignBeach = 'popup_sign_beach'

var contentSignOfficeWestEnglish = ['To the western offices']
var contentSignOfficeWestGerman = ['Zu den westlichen Büros']
var contentSignOfficeEastEnglish = ['To the eastern offices']
var contentSignOfficeEastGerman = ['Zu den östlichen Büros']
var contentSignFunAreaEnglish = ['Danger! You will now enter the IZFP "fun" area. Still under construction!']
var contentSignFunAreaGerman = ['Gefahr! Sie betreten nun die IZFP-"Spaß"-Ecke. Betreten der Baustelle weder sinnvoll noch empfohlen!']
var contentSignForumEnglish = ['To the Forum. You will find the meeting rooms there']
var contentSignForumGerman = ['Zum Forum. Dort gibt es Besprechungsräume.']
var contentSignBeachEnglish = ['To the silent beach. Trust me, it is relaxing.']
var contentSignBeachGerman = ['Zum ruhigen Strand. Man sagt, es sei erholsam.']

var isEnglish = false

function showPopup(target_zone, target_rectangle, popup_content){
	WA.onEnterZone(target_zone, () => {
	var popUpInstance = undefined;
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

showPopupEnglishGerman(targetTriggerZoneSignOfficeWest, targetRectangleSignOfficeWest, contentSignOfficeWestEnglish, contentSignOfficeWestGerman)
showPopupEnglishGerman(targetTriggerZoneSignOfficeEast, targetRectangleSignOfficeEast, contentSignOfficeEastEnglish, contentSignOfficeEastGerman)
showPopupEnglishGerman(targetTriggerZoneSignFunArea, targetRectangleSignFunArea, contentSignFunAreaEnglish, contentSignFunAreaGerman)
showPopupEnglishGerman(targetTriggerZoneSignForum, targetRectangleSignForum, contentSignForumEnglish, contentSignForumGerman)
showPopupEnglishGerman(targetTriggerZoneSignBeach, targetRectangleSignBeach, contentSignBeachEnglish, contentSignBeachGerman)
