const fs = require('fs').promises;
const path  = require('path');

const data = async () =>
{
    try
    {
        const read = await fs.readFile(path.join(__dirname,'files','ash.txt'),'utf-8')
        await fs.writeFile(path.join(__dirname,'files','new.txt'),"Writting a content for New file")
        await fs.appendFile(path.join(__dirname,'files','ash.txt'),'hai ashwin bro....!')
        await  fs.rename(path.join(__dirname,'files','ash.txt'),path.join(__dirname,'files','ashwin.txt'))
    }
    catch (err)
    {
        console.log(err.messege);
    }
        
}
data()

process.on('uncaughtException', (err) => {
    console.log(err);
})



// basic steps
// fs.readFile(path.join(__dirname,'files','sam.txt'),'utf-8',(err,data)=>{
//     if(err)throw err
//     console.log(data);
// })

// fs.writeFile(path.join(__dirname,'files','new.txt'),"Writting a content for New file",(err,data)=>{
//     if(err)throw err
//     console.log(data);
// })
// fs.appendFile(path.join(__dirname,'files','sam.txt'),'Ashika babe',(err,data)=>{
//     if(err)throw err
//     console.log("Append complete");
// })

// fs.rename(path.join(__dirname,'files','sam.txt'),path.join(__dirname,'files','ash.txt'),(err)=>{
//     if(err)throw err
// })
