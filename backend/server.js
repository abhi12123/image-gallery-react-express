const express = require('express')
const app = express()
const axios = require('axios');
const port = 5000;

//listening to port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//image array logic
const keyword = ['Cat','Dog','Car','Tree','Snow'];
const sizeArray = [200, 250, 300, 350, 400];
let arrayOfImages = [];
let arrayOfPromises = [];

//calls loremFlicker API
const promise = (width, height,keyword) => {
    return new Promise((resolve, reject,)=> {
        resolve(
            axios.get(`https://loremflickr.com/json/${width}/${height}/${keyword}`)
        );
        reject(new Error("…"));
    })
}

//creates an Array of promise objects
const promiseArray = () => {
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            let width = sizeArray[Math.floor(Math.random() * sizeArray.length)];
            let height = sizeArray[Math.floor(Math.random() * sizeArray.length)];
            arrayOfPromises.push(promise(width,height,keyword[i]))
        }
    }
}
promiseArray();

//executing promise array
const imageListApi =()=>{
  Promise.all(arrayOfPromises).
       then(value=>Promise.all(value.map(x=>x.data)).
       then(data => data.map(json=>arrayOfImages.push({
         file : json.file,
         owner : json.owner,
         width : json.width,
         height : json.height,
         keyword : json.tags
       }))))
}
imageListApi();

//to serve new API
app.get('/api/v1/image-list',(req,res)=>{
    res.status(200).json(arrayOfImages)
})
