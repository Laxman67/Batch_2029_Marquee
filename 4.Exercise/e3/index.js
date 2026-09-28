const path = require('path')
const fs = require('fs')

// const Input = "config/app.tmp"

// if(fs.existsSync(Input)){
//     console.log("Path is valid/absolute : YES")
//     const filePath = path.dirname(Input)
//     const fileName = path.basename(Input , ".tmp");
//     fs.writeFileSync(`${filePath}/${fileName}.json`,'')
//     fs.rmSync(Input)
// }


const Input = "config/app.tmp"

if(fs.existsSync(Input)){
    const parsedInput = path.parse(Input)
    console.log(parsedInput);
    if(parsedInput.ext == ".tmp"){
        fs.rmSync(Input);
        fs.writeFileSync(`${parsedInput.dir}/${parsedInput.name}.json` , '');
    }
}