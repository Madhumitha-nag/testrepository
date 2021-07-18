const fs= require('fs');
const prompt = require('prompt-sync')({sigint: true});
try{
    
    const JsonData=fs.readFileSync('./BMI.json','utf-8');
    const BmiDetails=JSON.parse(JsonData);
    let UWCount=0;
    let NWCount=0;
    let OWCount=0;
    let MOCount=0;
    let SOCount=0;
    let VSOCount=0;

    BmiDetails.forEach(function(data){
        
        let weight=data.WeightKg;
        let height=data.HeightCm;
        let bmi = (weight / ((height * height)/ 10000)).toFixed(2);
        if(bmi<=18.4){
            console.log(bmi+"  "+"Malnutrition risk"+"   "+"Under Weight");
            UWCount=UWCount+1;
        }else if(bmi>=18.5 && bmi<=24.9){
            console.log(bmi+"  "+"Low risk"+"     "+"Normal Weight");
            NWCount=NWCount+1;
        }else if(bmi>=25 && bmi<=29.9){
            console.log(bmi+"  "+"Enhanced risk"+"  "+"Over Weight");
            OWCount=OWCount+1;
        }else if(bmi>=30 && bmi<=34.9){
            console.log(bmi+"  "+"Medium risk"+"  "+"Moderately obese");
            MOCount=MOCount+1;
        }else if(bmi>=35 && bmi<=39.9){
            console.log(bmi+"  "+"High risk"+"  "+"Severely obese");
            SOCount=SOCount+1;
        }else if(bmi>=40){
            console.log(bmi+"  "+"Very high risk"+"  "+"Very severely obese");
            VSOCount=VSOCount+1;
        }  
    })
    const BMIcategory = prompt('What BMI category do u want to sort?');
    if(BMIcategory=='Under Weight'){
        console.log(`Hey there ${BMIcategory} `+UWCount);
    }else if(BMIcategory=='Normal Weight'){
        console.log(`Hey there ${BMIcategory} `+NWCount);
    }else if(BMIcategory=='Severely obese'){
        console.log(`Hey there ${BMIcategory} `+SOCount);
    }else if(BMIcategory=='Over Weight'){
        console.log(`Hey there ${BMIcategory} `+OWCount);
    }else if(BMIcategory=='Moderately obese'){
        console.log(`Hey there ${BMIcategory} `+MOCount);
    }else if(BMIcategory=='Very severely obese'){
        console.log(`Hey there ${BMIcategory} `+VSOCount);
    }else{
        console.log(`Hey there ${BMIcategory} is invalid category`);
    }
    
}catch(err){
    console.log('Error parsing in JSON objects',err);
}
