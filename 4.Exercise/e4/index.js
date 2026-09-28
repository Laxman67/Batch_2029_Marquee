const path = require('path')
const fs = require('fs')

const Input = [
    "your/project/dir/../dir/temp/logs/../logs/archive/code.js",
    "me/project/dir/../dir/temp/logs/../logs/archive/code.js",
    "new/hello.java",
]


function solve(Input){
    const CleanPath = path.join(Input)
    const parsedInput = path.parse(CleanPath)
    console.log(parsedInput)
    fs.mkdirSync(parsedInput.dir , {recursive:true})
    console.log(`${parsedInput.dir}/${parsedInput.base}`)
    fs.writeFileSync(`${parsedInput.dir}/${parsedInput.base}`,'')
}


Input.forEach((i)=>{
    solve(i);
})
