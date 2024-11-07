console.log("導入成功");
let weightTitle ="您的體重";
let colorTitle  ="健康指數為";
let bmiHistoryData =[];
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
    
function bmiStatesText(state){
    console.log(weightTitle+`${bmiStatesData[state].state}，`+colorTitle+`${bmiStatesData[state].color}`);
}
function addData(bmi,state,color){
    let obj={};
        obj.bmi =bmi;
        obj.state =state;
        obj.color=color;
        bmiHistoryData.push(obj);
    console.log(obj);
}

function printBmi(height,weight){
    let bmi =(weight/((height/100))**2).toFixed(2);
    
    if(bmi<18.5){
        //overThin
        addData(bmi,"overThin","藍色");
        bmiStatesText("overThin");
    }else if(bmi >=18.5 && bmi<24){
        addData(bmi,"normal","紅色");
        bmiStatesText("normal");
    }else if(bmi >=24 && bmi<27){
        addData(bmi,"overWeight","澄色");
        bmiStatesText("overWeight");
    }else if(bmi >=27 && bmi<30){
        addData(bmi,"mildFat","黃色");
        bmiStatesText("mildFat");
    }else if(bmi >=30 && bmi<35){
        addData(bmi,"moderateFat","黑色");
        bmiStatesText("moderateFat");
    }else if(bmi >=35){
        addData(bmi,"severeFat","綠色");
        bmiStatesText("severeFat");
    }else{
        console.log("您的數值輸入錯誤，請重新輸入");
    }
}
function showHistoryData(){
    const totalNum =bmiHistoryData.length;
    const lastNum =totalNum - 1;
    const lastState =bmiHistoryData[lastNum].state;
    console.log(bmiHistoryData);
    console.log(lastState);
    console.log(lastNum);
    console.log(totalNum);
    console.log(`
        您總共計算 ${totalNum} 次 BMI 紀錄，
        最後一次 BMI 指數為 ${bmiHistoryData[lastNum].bmi}，
        體重${bmiStatesData[lastState].state}！
        健康指數為${bmiStatesData[lastState].color}！`);
}

printBmi(178,20);
printBmi(178,70);
printBmi(178,85);
showHistoryData();
// printBmi(178,90);
// printBmi(178,110);
// printBmi(178,130);
printBmi("身高","體重");

