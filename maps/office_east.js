// message texts

var msg_orient = ['Orientation:\n\nNorthwest: Orchard\nNortheast: Forest Lodge, Meeting Area\nEast: Forest Camp\nSoutheast: Cliffs\nSouthwest: Castle Music Room\nWest: Castle Red Table Room\nCenter: silent area']
var msg_silent_area = ['Bridge to silent area']
var msg_forest_lodge = ['Forest Lodge']
var msg_music_room = ['Music room']
var msg_throne_room = ['The Red Table Room']
var msg_storage = ['Storage']
var msg_castle_garden = ['The Orchard']
var msg_picknick = ['The Forest Workspace']
var msg_coworking = ['Co-working and chill-out areas']
var msg_cliff = ['The Cliffs']
var msg_office_west = ['To the Western Offices']


var msg_orient_de = ['Orientierung:\n\nNordwest: Obstgarten\nNordost: Waldhütte, Meetings\nOst: Waldplatz\nSüdost: Die Klippen\nSüdwest: Musikzimmer Schloss\nWesten: Roter Tisch Schloss\nZentrum: Stille']
var msg_silent_area_de = ['Brücke zum Ruhebereich']
var msg_forest_lodge_de = ['Waldhütte']
var msg_music_room_de = ['Musikzimmer im Schloss']
var msg_throne_room_de = ['Roter Tisch im Schloss']
var msg_storage_de = ['Lagerraum']
var msg_castle_garden_de = ['Obstgarten hinterm Schloss']
var msg_picknick_de = ['Arbeitsbereich Waldplatz']
var msg_coworking_de = ['Co-working und chill-out Bereiche auf dem Berg']
var msg_cliff_de = ['Die Klippen']
var msg_office_west_de = ['Zu den westlichen Büros']


var quotes_goethe = [
	'Die beste Bildung findet ein gescheiter Mensch auf Reisen.\n\nJohann Wolfgang von Goethe',
	'Es hört doch nur jeder, was er versteht.\n\nJohann Wolfgang von Goethe',
	'Mit dem Wissen wächst der Zweifel.\nJohann Wolfgang von Goethe',
	'Auch aus Steinen, die einem in den Weg gelegt werden, kann man Schönes bauen.\n\nJohann Wolfgang von Goethe',
	'Man reist nicht um anzukommen, sondern um zu reisen.\n\nJohann Wolfgang von Goethe',
	'Wer nicht neugierig ist, erfährt nichts.\n\nJohann Wolfgang von Goethe',
	'Jede Lösung eines Problems ist ein neues Problem.\n\nJohann Wolfgang von Goethe',
	'Das Gleiche lässt uns in Ruhe, aber der Widerspruch ist es, der uns produktiv macht.\n\nJohann Wolfgang von Goethe',	
	]

// further variables
var isEnglish = false // map language (for user)


// helper scripts

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


// pop-up-generation
showPopupEnglishGerman('pop_orientation_0', 'rect_orientation_0', msg_orient, msg_orient_de)
showPopupEnglishGerman('pop_orientation_1', 'rect_orientation_1', msg_orient, msg_orient_de)
showPopupEnglishGerman('pop_orientation_2', 'rect_orientation_2', msg_orient, msg_orient_de)
showPopupEnglishGerman('pop_orientation_3', 'rect_orientation_3', msg_orient, msg_orient_de)
showPopupEnglishGerman('pop_orientation_4', 'rect_orientation_4', msg_orient, msg_orient_de)
showPopupEnglishGerman('pop_orientation_5', 'rect_orientation_5', msg_orient, msg_orient_de)


showPopupEnglishGerman('silent_zone_pop_bottom', 'tutoExplanation', msg_silent_area, msg_silent_area_de)
showPopupEnglishGerman('silent_zone_pop_left', 'rect_silent_left', msg_silent_area, msg_silent_area_de)
showPopupEnglishGerman('silent_zone_pop_right', 'rect_silent_right', msg_silent_area, msg_silent_area_de)

showPopupEnglishGerman('pop_forest_house_left', 'pop_forest_lodge_left', msg_forest_lodge,msg_forest_lodge_de)
showPopupEnglishGerman('pop_forest_house_right', 'pop_forest_lodge_right', msg_forest_lodge,msg_forest_lodge_de)

showPopupEnglishGerman('pop_music_room', 'rect_music_room', msg_music_room,msg_music_room_de)

showPopupEnglishGerman('pop_throne_room', 'rect_throne_room', msg_throne_room,msg_throne_room_de)
showPopupEnglishGerman('pop_throne_room_2', 'rect_throne_room_2', msg_throne_room,msg_throne_room_de)

showPopupEnglishGerman('pop_storage', 'rect_storage', msg_storage,msg_storage_de)

showPopupEnglishGerman('pop_castle_garden_right', 'rect_castle_garden_right', msg_castle_garden,msg_castle_garden_de)
showPopupEnglishGerman('pop_castle_garden_left', 'rect_castle_garden_left', msg_castle_garden,msg_castle_garden_de)

showPopupEnglishGerman('zone_picknick_top', 'rect_picknick_top', msg_picknick,msg_picknick_de)
showPopupEnglishGerman('zone_picknick_bottom', 'rect_picknick_bottom', msg_picknick,msg_picknick_de)

showPopupEnglishGerman('pop_cliff_0', 'rect_cliff_0', msg_cliff,msg_cliff_de)
showPopupEnglishGerman('pop_cliff_1', 'rect_cliff_1', msg_cliff,msg_cliff_de)

showPopupEnglishGerman('pop_cowork', 'rect_meeting', msg_coworking,msg_coworking_de)

showPopupEnglishGerman('pop_office_west', 'rect_office_west', msg_office_west,msg_office_west_de)
showPopupEnglishGerman('pop_office_west2', 'rect_office_west2', msg_office_west,msg_office_west_de)


showPopupEnglishGerman('zone_goethe_2', 'rect_goethe_2', ["The tiny sign says: Goethe has (never) been here."], ["Auf dem kleinen Schild steht: Goethe war (nie) hier."])

showPopupEnglishGerman('zone_goethe', 'rect_goethe_quotes', quotes_goethe, quotes_goethe)

