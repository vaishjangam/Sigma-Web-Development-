//Qs3.Writeaswitchstatementtoprintthemonthsinaquarter.MonthsinQuarter1:January,February,MarchMonthsinQuarter2:April,May,JuneMonthsinQuarter3:July,August,SeptemberMonthsinQuarter4:October,November,December
let month = "quarter_1"
switch(month){
    case "quarter_1":
        console.log("January, February, March, April");
    break;

    case "quarter_2":
        console.log("May, June, July, August");
    break;

    case "quarter_3":
        console.log("September, October, November, December");
    break;

    default:
        console.log("Wrong quarter!!!!!!!");

}