const weightTitle="您的體重";
const colorTitle="健康指數為";
let bmiHistoryData=[];
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


function addData(bmi,state){
    let record={bmi,state};
    bmiHistoryData.push(record);
}

function calcBmi(height,weight){
    let bmi=parseFloat((weight/(height/100)**2).toFixed(2));    
    console.log(bmi);
    return bmi;
}

function printBmiState(height,weight){
    let state="";
    let bmi=calcBmi(height,weight);
    if(isNaN(bmi)||bmi<=0){
        console.log("您的數值輸入錯誤，請重新輸入");
        return;
    }if(bmi<18.5){
        state="overThin";
        addData(bmi,state);
        console.log(weightTitle+`${bmiStatesData[state].state}`+"，"+colorTitle+`${bmiStatesData[state].color}`);
    }else if(bmi<24){
        state="normal";

        console.log(weightTitle+`${bmiStatesData[state].state}`+"，"+colorTitle+`${bmiStatesData[state].color}`);
    }else if(bmi<27){
        state="overWeight";
        addData(bmi,state);
        console.log(weightTitle+`${bmiStatesData[state].state}`+"，"+colorTitle+`${bmiStatesData[state].color}`);
    }else if(bmi<30){
        state="mildFat";
        addData(bmi,state);
        console.log(weightTitle+`${bmiStatesData[state].state}`+"，"+colorTitle+`${bmiStatesData[state].color}`);
    }else if(bmi<35){
        state="moderateFat";
        addData(bmi,state);
        console.log(weightTitle+`${bmiStatesData[state].state}`+"，"+colorTitle+`${bmiStatesData[state].color}`);
    }else if(bmi>=35){
        state="severeFat";
        addData(bmi,state);
        console.log(weightTitle+`${bmiStatesData[state].state}`+"，"+colorTitle+`${bmiStatesData[state].color}`);
    };
}

function showHistoryData(){
    const totalRecord = bmiHistoryData.length;
    const lastRecord  = totalRecord -1;
    const lastBmi     = bmiHistoryData[lastRecord].bmi;
    const lastState   = bmiHistoryData[lastRecord].state;  
    console.log(
        `您總共計算 ${totalRecord} 次 BMI 紀錄，
        最後一次 BMI 指數為 ${lastBmi}，
        體重${bmiStatesData[lastState].state}！
        健康指數為${bmiStatesData[lastState].color}！`);
}

printBmiState(178, 20);  
printBmiState(178, 70);   
printBmiState(178, 85);  
printBmiState(178, 90);  
printBmiState(178, 110);  
printBmiState(178, 130);
printBmiState("身高","體重");
showHistoryData(); 
