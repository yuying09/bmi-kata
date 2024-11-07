let weightTitle ="您的體重";
let colorTitle ="健康指數為";
let bmiHistoryData =[];
//六角提供的變數
const bmiStatesData = {
    "overThin": {
        "state": "過輕",
        "color": "藍色"
    },
    "normal": {
        "state": "正常",
        "color": "紅色"
    },
    "overWeight": {
        "state": "過重",
        "color": "澄色"
    },
    "mildFat": {
        "state": "輕度肥胖",
        "color": "黃色"
    },
    "moderateFat": {
        "state": "中度肥胖",
        "color": "黑色"
    },
    "severeFat": {
        "state": "重度肥胖",
        "color": "綠色"
    },
    }

    function bmiStatesText(state){
        console.log(weightTitle+`${bmiStatesData[state].state}，`+colorTitle+`${bmiStatesData[state].color}`);
    }

    function addData(bmi,state,color){
        let obj={};
        obj.bmi =bmi;
        obj.state =state;
        obj.color=color;
        bmiHistoryData.push(obj);
        console.log(bmiHistoryData);
    }

function printBmi(height,weight){
    let bmi = (weight/((height/100)**2)).toFixed(2);
    //console.log(bmi);
    if(bmi<18.5){
        addData(bmi,"overThin");
        //"overThin"
        bmiStatesText("overThin");
    }else if(bmi>=18.5 && bmi<24){
        //"normal"
        addData(bmi,"normal" );
        bmiStatesText("normal");
    }else if(bmi>=24 && bmi<27){
        //"overWeight"
        addData(bmi, "overWeight");
        bmiStatesText("overWeight");
    }else if(bmi>=27 && bmi<30){
        //"mildFat"
        addData(bmi, "mildFat");
        bmiStatesText("mildFat");
    }else if(bmi>=30 && bmi<35){
        // "moderateFat"
        addData(bmi,"moderateFat");
        bmiStatesText("moderateFat");
    }else if(bmi>=35){
        //"severeFat"
        addData(bmi,  "severeFat");
        bmiStatesText("severeFat");
    }else{
        console.log("您的數值輸入錯誤，請重新輸入");
    }
}
function showHistoryData(){
    const totalNum = bmiHistoryData.length;
    const lastNum =bmiHistoryData.length - 1;
    const lastBmi =bmiHistoryData[lastNum].bmi;
    const lastState =bmiHistoryData[lastNum].state;
    console.log(`
        您總共計算 ${totalNum} 次 BMI 紀錄，
        最後一次 BMI 指數為 ${lastBmi}，體重${bmiStatesData[lastState].state}！
        健康指數為${bmiStatesData[lastState].color}！`)
}
printBmi(178,20);
printBmi(178,70);
printBmi(178,85);
showHistoryData();
// printBmi(178,90);
// printBmi(178,110);
// printBmi(178,130);
printBmi("身高","體重");

//lv2步驟
//將欲顯示的資料直接複製到console.log查看是否能正常顯示
//設定bmiStatesText函數，並丟進printBmi的"overThin"中測試 !要放在console.log前面!
//bmiStatesData取值方式:bmiStatesData[state].state;bmiStatesData[state].color [參數用中括號] .裡面屬性用點
//將顯示方式使用console.log寫在bmiStatesText函數中


//lv3步驟
//設定showHistoryData函數，並將欲顯示的文字使用console.log加入函數中
//因為只需要前面幾筆資料，故後面幾筆可先註解，並將showHistoryData函數寫在第三筆printBmi函數後方
//使用let宣告變數bmiHistoryData，並賦予空陣列
//在if,else if條件中 設定變數obj並賦予空物件，並將bmi、state、color等值加入obj再console.log(obj)
//因為上面步驟會不斷重複，將其抽出為addData函數 addData(bmi,state,color)
//先在 "overThin"的if條件中測試函數並將state,color帶入固定值 如:過輕、藍色
//測試成功後將obj步驟剪下貼入addData中 並console.log(bmiHistoryData)
//開始修改showHistoryData並將需顯示的變數填入其中
//總次數 const totalNum = bmiHistoryData.length
//上一筆資料 const lastNum =bmiHistoryData.length -1 (因陣列從0開始)
//const lastBmi= bmiHistoryData[lastNum].bmi
//const lastState = bmiHistoryData[lastNum].state 此時會取出英文的狀態 如"overThin"
//體重與顏色的顯示資料填入 bmiStatesData[lastState].state 會找到 bmiStatesData中的"overThin" 並取出裡面的state值(顏色同理)