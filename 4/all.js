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

function addData(bmi,state,color){
    let obj={};
    obj.bmi =bmi;
    obj.state = state;
    obj.color = color;
    bmiHistoryData.push(obj);
    //console.log(obj);
}

function showHistoryData(){
    const totalNum =bmiHistoryData.length;
    const lastNum =bmiHistoryData.length -1;
    const lastBmi =bmiHistoryData[lastNum].bmi;
    const lastState =bmiHistoryData[lastNum].state;
    //console.log(lastState);
        console.log(`
您總共計算 ${totalNum} 次 BMI 紀錄，
最後一次 BMI 指數為 ${lastBmi}，
體重 ${bmiStatesData[lastState].state}！
健康指數為${bmiStatesData[lastState].color}！`);
}

function bmiText(state){
    const weightText = bmiStatesData[state].state;
    const colorText = bmiStatesData[state].color;
    console.log(weightTitle+weightText+"，"+colorTitle+colorText);
}

function printBmi(height,weight){
    let bmi=(weight/(height/100)**2).toFixed(2);
    console.log(bmi);
    if(bmi<18.5){
        addData(bmi,"overThin");
        bmiText("overThin");
        //console.log(weightTitle+"過輕"); 
    }else if(bmi>=18.5 && bmi<24 ){
        addData(bmi,"normal");
        bmiText("normal");
        //console.log(weightTitle+"正常"); 
    }else if(bmi>=24 && bmi<27 ){
        addData(bmi,"overWeight");
        bmiText("overWeight");
        //console.log(weightTitle+"過重"); 
    }else if(bmi>=27 && bmi<30 ){
        addData(bmi,"mildFat");
        bmiText("mildFat");
        //console.log(weightTitle+"輕度肥胖"); 
    }
    else if(bmi>=30 && bmi<35 ){
        addData(bmi,"moderateFat");
        bmiText("moderateFat");
        //console.log(weightTitle+"中度肥胖"); 
    }
    else if(bmi>=35){
        addData(bmi,"severeFat");
        bmiText("severeFat");
        //console.log(weightTitle+"重度肥胖"); 
    }else{
        console.log("您的數值輸入錯誤，請重新輸入");
    }

}


printBmi(178,20);
printBmi(178,70);
printBmi(178,85);
printBmi(178,90);
printBmi(178,110);
printBmi(178,130);
printBmi("身高","體重");
showHistoryData();