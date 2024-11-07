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

let bmiHistoryData=[];//lv3全域空陣列

function addBmiToHistory(bmi,state){
    let record={bmi,state};
    bmiHistoryData.push(record);
}//將記錄加入bmiHistoryData陣列中

function calcBmi(height,weight){
    let bmi=(weight/(height/100)**2).toFixed(2);
    console.log(bmi);
    return parseFloat(bmi);//回傳數字型態的bmi
}//用來計算bmi的函數



function printBmiState(height,weight){
    let bmi = calcBmi(height, weight); 
    let bmiState="";
    const weightTitle="您的體重";
    const colorTitle="健康指數為";
    
    if(isNaN(bmi) || bmi <= 0){console.log("您的數值輸入錯誤，請重新輸入");
        return;
    };//// 檢查 bmi 是否有效，並且為大於0的數字
    if(bmi<18.5){
        addBmiToHistory(bmi,"overThin");
        bmiState="overThin";
    }else if(bmi<24){
        addBmiToHistory(bmi,"normal");
        bmiState="normal";
    }else if(bmi<27){
        addBmiToHistory(bmi,"overWeight");
        bmiState="overWeight";
    }else if(bmi<30){
        addBmiToHistory(bmi,"mildFat");
        bmiState="mildFat";
    }else if(bmi<35){
        addBmiToHistory(bmi,"moderateFat");
        bmiState="moderateFat";
    }else if(bmi>=35){
        addBmiToHistory(bmi,"severeFat");
        bmiState="severeFat";
    }
    console.log(weightTitle+`${bmiStatesData[bmiState].state}`+"，"+colorTitle+`${bmiStatesData[bmiState].color}`)
}

function showHistoryData(){
    const recordNum =bmiHistoryData.length;
    const lastRecord =recordNum -1;
    const lastState =bmiHistoryData[lastRecord].state;
    console.log(`您總共計算 ${recordNum} 次 BMI 紀錄，
        最後一次 BMI 指數為 ${bmiHistoryData[lastRecord].bmi}，
        體重${bmiStatesData[lastState].state}！
        健康指數為${bmiStatesData[lastState].state}！`)
}

printBmiState(178, 20);
printBmiState(178, 70);
printBmiState(178, 85);
printBmiState(178, 90);
printBmiState(178, 110);
printBmiState(178, 130);
printBmiState("身高", "體重");

showHistoryData();