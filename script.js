const excelReader = require('read-excel-file/node');

let landingPage = '$("root > code").text().replace(/^(';
landingPageName = "31-wines-of-halloween";

excelReader('31-Wines-of-Halloween.xlsx').then((rows)=>{
    rows.forEach((row,index)=>{
        if(!isNaN(row[1])){
            if((rows.length - 1) != index){
                landingPage += `${row[1]}|`;
            }
            else{
                landingPage += `${row[1]}`;
            }
        }
    });
    landingPage += `)$/, "${landingPageName}"),`;
    console.log(landingPage);
});

