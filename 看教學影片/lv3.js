console.log("lv3導入成功");
let bmiHistoryData =[];
    function bmiStatesText(state){
        console.log(`您的體重${bmiStatesData[state].state}，健康指數為${bmiStatesData[state].color}`)
    };

    function addData(bmi,state,color){
        let obj={};
        obj.bmi=bmi;
        obj.state=state;
        obj.color = color;
        bmiHistoryData.push(obj);
    }
    addData();
    function printBmi(height,weight){
        let bmi =(weight/((height/100))**2).toFixed(2);
        console.log(bmi);
        if (bmi<18.5){
            let obj={};
            obj.bmi=bmi;
            obj.state="overThin";
            obj.color="藍色";
            bmiHistoryData.push(obj);
            addData(bmi,"overThin");
            console.log(bmiHistoryData);
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
    function showHistoryData(){
        const totalNum = bmiHistoryData.length;
        const lastNum = totalNum -1;
        const lastBmi = bmiHistoryData[lastNum].bmi;
        const lastState = bmiHistoryData[lastNum].state;
        const lastColor = bmiHistoryData[lastNum].color;
        console.log(lastColor);
        console.log(
            `您總共計算 ${totalNum}次 BMI 紀錄，
            最後一次 BMI 指數為 ${lastBmi}，
            體重${lastState}！
            健康指數為${lastColor}！`);
    };
    // "overThin": {
    //     "state": "過輕",
    //     "color": "藍色"
    // },
    
printBmi(178,20);
printBmi(178,70);
printBmi(178,85);
printBmi(178,90);
showHistoryData();
// printBmi(178,90);
// printBmi(178,110);
// printBmi(178,130);
// printBmi("身高","體重");
