const weightTitle ="您的體重";
const colorTitle  ="健康指數為";
const bmiHistoryData =[];
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
  };

function addRecord(bmi,state){
    let record={bmi,state};
    bmiHistoryData.push(record);
}

function calcBmi(height,weight){
    let bmi =parseFloat((weight/(height/100)**2).toFixed(2));
    return bmi;
};

function printBmi(height,weight){
    let bmi =calcBmi(height,weight);
    let state="";
    if (isNaN(bmi)||bmi<=0){
        console.log("您的數值輸入錯誤，請重新輸入");
    }if (bmi<18.5){
        state ="overThin";
        addRecord(bmi,state);
        console.log(weightTitle+`${bmiStatesData[state].state}`+"，"+colorTitle+`${bmiStatesData[state].color}`);
    }else if(bmi<24){
        state ="normal";
        addRecord(bmi,state);
        console.log(weightTitle+`${bmiStatesData[state].state}`+"，"+colorTitle+`${bmiStatesData[state].color}`);
    }else if(bmi<27){
        state ="overWeight";
        addRecord(bmi,state);
        console.log(weightTitle+`${bmiStatesData[state].state}`+"，"+colorTitle+`${bmiStatesData[state].color}`);
    }else if(bmi<30){
        state ="mildFat";
        addRecord(bmi,state);
        console.log(weightTitle+`${bmiStatesData[state].state}`+"，"+colorTitle+`${bmiStatesData[state].color}`);
    }else if(bmi<35){
        state ="moderateFat";
        addRecord(bmi,state);
        console.log(weightTitle+`${bmiStatesData[state].state}`+"，"+colorTitle+`${bmiStatesData[state].color}`);
    }else if(bmi>=35){
        state ="severeFat";
        addRecord(bmi,state);
        console.log(weightTitle+`${bmiStatesData[state].state}`+"，"+colorTitle+`${bmiStatesData[state].color}`);
    };
};

function showHistoryData(){
    const totalRecord =bmiHistoryData.length;
    const lastRecord=totalRecord-1;
    const lastBmi= bmiHistoryData[lastRecord].bmi;
    const lastState = bmiHistoryData[lastRecord].state;
    console.log(`
        您總共計算 ${totalRecord} 次 BMI 紀錄，
        最後一次 BMI 指數為 ${lastBmi}，
        體重${bmiStatesData[lastState].state}！
        健康指數為${bmiStatesData[lastState].state}！`);

}


printBmi(178, 20); 
printBmi(178, 70); 
printBmi(178, 85);
printBmi(178, 90);
printBmi(178, 110);
printBmi(178, 130);
printBmi("身高","體重");
console.log(bmiHistoryData);
showHistoryData()
