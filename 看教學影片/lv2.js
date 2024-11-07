console.log("lv2導入成功");
//六角提供的變數資料
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
        console.log(`您的體重${bmiStatesData[state].state}，健康指數為${bmiStatesData[state].color}`)
    };


    function printBmi(height,weight){
        let bmi =(weight/((height/100))**2).toFixed(2);
        console.log(bmi);
        if (bmi<18.5){
            //overThin
            bmiStatesText("overThin"); 
        }else if (bmi>= 18.5 && bmi<24){
            //normal
            bmiStatesText("normal");
        }else if (bmi>=24 && bmi<27){
            //overWeight
            bmiStatesText("overWeight");
        }else if (bmi>=27 &&bmi<30){
            //mildFat
            bmiStatesText("mildFat");
        }else if (bmi>=30 && bmi<35){
            //moderateFat
            bmiStatesText("moderateFat");
        }else if (bmi>=35){
            //severeFat
            bmiStatesText("severeFat");
        }else {
            console.log("您輸入的數值錯誤");
        }
    };
printBmi(178,20);
printBmi(178,70);
printBmi(178,85);
printBmi(178,90);
printBmi(178,110);
printBmi(178,130);
printBmi("身高","體重");
