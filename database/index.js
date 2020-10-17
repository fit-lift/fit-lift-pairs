const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'meals',
    insecureAuth: true
});

const getAllFood = (callback)=>{
    let syntax = `SELECT * FROM food`;
    connection.query(syntax,(err,result)=>{
        if(err){
            callback(err,null)
        }else{
            callback(null,result)
        }
    })
};
const getAllusers = (username,callback) =>{
    let syntax = `SELECT name FROM users WHERE name= '${username}' `;
    connection.query(syntax,(err,result)=>{
        if(err){
            callback(err,null)
        }else{
            callback(null,result)
        }
    })
}
const addNewUser =(username,email,password,callback)=>{
    let syntax = `INSERT INTO users(name,email,password) VALUES('${username}','${email}','${password}')`;
    connection.query(syntax,username,(err,result)=>{
        if(err){
            callback(err,null)
        }else{
            callback(null,result)
        }
    })
}
const getUserAndPassword = (username,password,callback) =>{
    let syntax = `SELECT * FROM users WHERE name= '${username}' AND password = '${password}' `;
    connection.query(syntax,(err,result)=>{
        if(err){
            callback(err,null)
        }else{
            callback(null,result)
        }
    })
}
const insertInfo = (weight,bmi,date,name,callback) =>{
        let syntax = `INSERT INTO informations(weight,bmi,date,user_id) VALUES(${weight},${bmi},'${date}',(SELECT id FROM users WHERE name= '${name}'))`;
        connection.query(syntax,(err,result)=>{
            if(err){
                callback(err,null)
            }else{
                callback(null,result)
            }
        })
}
const getProgress = (name,callback) =>{
    let syntax = `Select * from informations WHERE user_id = (SELECT id FROM users WHERE name = '${name}')`;
    connection.query(syntax,(err,result)=>{
        if(err){
            callback(err,null)
        }else{
            callback(null,result)
        }
    })
}
const getMealPlan = (table,callback) =>{
    let syntax = `SELECT * FROM ${table}`;
    connection.query(syntax,(err,result)=>{
        if(err){
            callback(err,null)
        }else{
            callback(null,result)
        }
    })
}

module.exports.getAllFood = getAllFood;
module.exports.getAllusers = getAllusers;
module.exports.addNewUser = addNewUser;
module.exports.getUserAndPassword = getUserAndPassword;
module.exports.insertInfo = insertInfo;
module.exports.getProgress = getProgress;
module.exports.getMealPlan = getMealPlan;
