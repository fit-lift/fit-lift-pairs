const express = require('express');
const db = require('../database/index.js')
const router = express.Router();


router.post('/', (req, res) => {
    console.log(req.body)
    const name = req.body.username;
    const email = req.body.email;
    const password = req.body.password
    db.getAllusers(name, (err, result) => {
        if (err) {
            console.log(err)
        }else{
            if(result.length ===0){
                db.addNewUser(name, email, password, (err, result) => {
                    if (err) {
                        console.log(err)
                    } else {
                        res.status(200).json('Nice')
                    }
                })
            }else{
                res.status(200).json('User or email already exists')
            }
        }

    })
});
router.post('/signin',(req,res)=>{
    const user = req.body.user;
    const userPassword = req.body.password;
     db.getUserAndPassword(user,userPassword,(err, result) => {
        if(err){
            console.log(err)
            // res.status(200).send('there is no User by that name')
        }else{
            if(result.length !==0 && userPassword === result[0].password && user === result[0].name){
                res.status(200).json('OK')
            }else{
                res.status(200).json('NO')
            }
        }
     })  
})
// route USER/INFO
router.post('/user/info',(req,res)=>{
    console.log(req.body)
    const currentUser = req.body.username;
    const weight = req.body.weight;
    const BMI = req.body.BMI;
    const date = req.body.date;
    db.insertInfo(weight,BMI,date,currentUser,(err,result)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).json('informations are merged to database')
        }
    })

});
// route USER/INFO
router.post('/user/info/track',(req,res)=>{
    const tag = req.body.username;
    db.getProgress(tag,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.status(200).json(result)
        }
    })
})
// router USER/MEAL
router.post('/user/info/meals',(req,res)=>{
    console.log(req.body)
    const table = req.body.msg;
    db.getMealPlan(table,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.status(200).json(result)
        }
    })
})


module.exports = router;