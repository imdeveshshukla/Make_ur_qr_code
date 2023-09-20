import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs'
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
// var qr = require('qr-image');
// const usrInp = require('inquirer');
// const fs = require('node:fs/promises');
// const prompt = inquirer.createPromptModule();
await inquirer.prompt([
    {
        type : "input",
        message : "Enter Your URL :",
        name : "URL",
    },
]).then(inpUrl=>{
    console.log(inpUrl.URL);
    const res = inpUrl.URL;
    var qr_svg = qr.image(res.toString());
    qr_svg.pipe(fs.createWriteStream('qr_code.png'));

    fs.writeFile("URL.txt",res,()=>{
        console.log("This URL Has Been Saved in URL.txt");
    });
})
.catch(err=>{
    console.log(err);
});


// fs.readFile("URL.txt").then(res =>{
//     console.log(res.toString());
//     var qr_svg = qr.image(res.toString(), { type: 'svg' });
//     qr_svg.pipe(fs.createWriteStream('i_love_qr.svg'));
    
//     var svg_string = qr.imageSync(res.toString(), { type: 'svg' });
// })
// .catch(err=>{
//     console.log(err);
// });
