var targetRectangleSignOfficeWest = 'PopupSignOfficeWest'
var targetRectangleSignOfficeEast = 'PopupSignOfficeEast'
var targetRectangleSignFunArea = 'PopupSignFunArea'
var targetRectangleSignForum = 'PopupSignForum'
var targetRectangleSignBeach = 'PopupSignBeach'
var targetRectangleScarecrow = 'PopupScarecrow'

var targetTriggerZoneSignOfficeWest = 'popup_sign_office_west'
var targetTriggerZoneSignOfficeEast = 'popup_sign_office_east'
var targetTriggerZoneSignFunArea = 'popup_sign_fun_area'
var targetTriggerZoneSignForum = 'popup_sign_forum'
var targetTriggerZoneSignBeach = 'popup_sign_beach'
var targetTriggerZoneScarecrow = 'popup_scarecrow'

var contentSignOfficeWestEnglish = ['To the western offices']
var contentSignOfficeWestGerman = ['Zu den westlichen Büros']
var contentSignOfficeEastEnglish = ['To the eastern offices']
var contentSignOfficeEastGerman = ['Zu den östlichen Büros']
var contentSignFunAreaEnglish = ['Danger!\nYou will now enter the IZFP "fun" area.\nStill under construction!']
var contentSignFunAreaGerman = ['Gefahr!\nSie betreten nun die IZFP-"Spaß"-Ecke.\nBetreten der Baustelle weder sinnvoll noch empfohlen!']
var contentSignForumEnglish = ['To the Forum.\nYou will find the meeting rooms there']
var contentSignForumGerman = ['Zum Forum.\nDort gibt es Besprechungsräume.']
var contentSignBeachEnglish = ['To the silent beach.\nTrust me, it is relaxing.']
var contentSignBeachGerman = ['Zum ruhigen Strand.\nMan sagt, es sei erholsam.']
var contentScarecrowEnglish = ['Some people without brains do an awful lot of talking, don\'t you think?']
var contentScarecrowGerman = ['Manche Leute ohne Hirn reden furchtbar viel, finden Sie nicht auch?']

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

function showGerman(target_rectangle, popup_content_english, popup_content_german) 
{
	popUpInstance = WA.openPopup(target_rectangle, popup_content_german, 
			[{
				label: "English",
				className: "primary",
				callback: (popup) => {
					// Close the popup when the "Close" button is pressed.
					popup.close();
					isEnglish = true;
					showEnglish(target_rectangle, popup_content_english, popup_content_german);
				}
			}]);
			return popUpInstance;
}	

function showEnglish(target_rectangle, popup_content_english, popup_content_german) 
{
	popUpInstance = WA.openPopup(target_rectangle, popup_content_english, 
			[{
				label: "German",
				className: "primary",
				callback: (popup) => {
					// Close the popup when the "Close" button is pressed.
					popup.close();
					isEnglish = false;
					showGerman(target_rectangle, popup_content_english, popup_content_german);
				}
			}]);
			return popUpInstance;
}	

function showPopupEnglishGerman2(target_zone, target_rectangle, popup_content_english, popup_content_german){
	var popUpInstance = undefined;
	WA.onEnterZone(target_zone, () => {
		// get language
		if(isEnglish)
		{
			popUpInstance = showEnglish(target_rectangle, popup_content_english, popup_content_german);
		}
		else 
		{
			popUpInstance = showGerman(target_rectangle, popup_content_english, popup_content_german); 
		}
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

showPopupEnglishGerman2(targetTriggerZoneSignOfficeWest, targetRectangleSignOfficeWest, contentSignOfficeWestEnglish, contentSignOfficeWestGerman)
showPopupEnglishGerman2(targetTriggerZoneSignOfficeEast, targetRectangleSignOfficeEast, contentSignOfficeEastEnglish, contentSignOfficeEastGerman)
showPopupEnglishGerman2(targetTriggerZoneSignFunArea, targetRectangleSignFunArea, contentSignFunAreaEnglish, contentSignFunAreaGerman)
showPopupEnglishGerman2(targetTriggerZoneSignForum, targetRectangleSignForum, contentSignForumEnglish, contentSignForumGerman)
showPopupEnglishGerman2(targetTriggerZoneSignBeach, targetRectangleSignBeach, contentSignBeachEnglish, contentSignBeachGerman)
showPopupEnglishGerman2(targetTriggerZoneScarecrow, targetRectangleScarecrow, contentScarecrowEnglish, contentScarecrowGerman)
