var targetRectangleRoom1Above = 'Rectangle_Room1_above'
var targetRectangleRoom1Below = 'Rectangle_Room1_below'
var targetRectangleRoom2Above = 'Rectangle_Room2_above'
var targetRectangleRoom2Below = 'Rectangle_Room2_below'
var targetRectangleRoom3Above = 'Rectangle_Room3_above'
var targetRectangleRoom3Below = 'Rectangle_Room3_below'
var targetRectangleRoom4Above = 'Rectangle_Room4_above'
var targetRectangleRoom4Below = 'Rectangle_Room4_below'

var targetTriggerZoneRoom1 = 'TriggerRoom1'
var targetTriggerZoneRoom2 = 'TriggerRoom2'
var targetTriggerZoneRoom3 = 'TriggerRoom3'
var targetTriggerZoneRoom4 = 'TriggerRoom4'

var ContentSignRoom1Above = 'Aristoteles'
var ContentSignRoom1Below = 'Archimedes'
var ContentSignRoom2Above = 'Fourier'
var ContentSignRoom2Below = 'Lagrange'
var ContentSignRoom3Above = 'Einstein'
var ContentSignRoom3Below = 'Kepler'
var ContentSignRoom4Above = 'Bernoulli'
var ContentSignRoom4Below = 'Euler'

function showPopups(target_zone, target_rectangle1, popup_content1, target_rectangle2, popup_content2){
	WA.onEnterZone(target_zone, () => {
		var popUpInstance1 = undefined;
		var popUpInstance2 = undefined;
		popUpInstance1 = WA.openPopup(target_rectangle1, popup_content1, []);
		popUpInstance2 = WA.openPopup(target_rectangle2, popup_content2, []);
	});
	WA.onLeaveZone(target_zone, () => {
		if (popUpInstance1 !== undefined) 
		{
			popUpInstance1.close();
		}
		if (popUpInstance2 !== undefined)
		{
			popUpInstance2.close();
		}
	})
}

showPopups(targetTriggerZoneRoom1, targetRectangleRoom1Above, ContentSignRoom1Above, targetRectangleRoom1Below, ContentSignRoom1Below)
showPopups(targetTriggerZoneRoom2, targetRectangleRoom2Above, ContentSignRoom2Above, targetRectangleRoom2Below, ContentSignRoom2Below)
showPopups(targetTriggerZoneRoom3, targetRectangleRoom3Above, ContentSignRoom3Above, targetRectangleRoom3Below, ContentSignRoom3Below)
showPopups(targetTriggerZoneRoom4, targetRectangleRoom4Above, ContentSignRoom4Above, targetRectangleRoom4Below, ContentSignRoom4Below)

