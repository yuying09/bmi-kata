

function printBmi(height,weight)//跟函數說第一個參數值是height,第二個參數值是weight
{
    let bmi =(weight/((height/100))**2).toFixed(2);
    console.log(bmi);
    if (bmi<18.5){
        console.log("體重過輕");
    }else if (bmi>= 18.5 && bmi<24){
        console.log("體重正常");
    }else if (bmi>=24 && bmi<27){
        console.log("過重");
    }else if (bmi>=27 &&bmi<30){
        console.log("輕度肥胖");
    }else if (bmi>=30 && bmi<35){
        console.log("中度肥胖");
    }else if (bmi>=35){
        console.log("重度肥胖");
    }else {
        console.log("您輸入的數值錯誤");
    }

}

// printBmi(178,20);

// printBmi(178,70);

// printBmi(178,85);

// printBmi(178,90);

// printBmi(178,110);

// printBmi(178,130);

// printBmi("身高","體重");
