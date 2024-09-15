const express= require('express')
const db= require('./dataBaseConfig.js')
const cors=require('cors')
const dotenv= require('dotenv')
dotenv.config()
const contactRoute=require('./routes/contactRoute.js')
const enquiryRoute=require('./routes/enquiryRoute.js')
const profileRoute=require('./routes/profileRoute.js')
const signRoute=require('./routes/signRoute.js')
const adminRoute=require('./routes/adminRoute.js')
const statusRoute=require('./routes/statusRoute.js')



let app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('uploads'))

db.connect((err)=>{
if(err) throw err
else{
    console.log("database connected")
}
})

let contactTableQuery=`
CREATE TABLE IF NOT EXISTS contact_table(
  id INT NOT NULL AUTO_INCREMENT,
  Name VARCHAR(255) NULL,
  Email VARCHAR(255) NULL,
  Message VARCHAR(255) NULL,
  PRIMARY KEY (id));
`
db.query(contactTableQuery, (err, result)=>{
    if(err) throw err
    else{
        console.log("contact table created successfull")
    }
})

let enquiryTableQuery=`
CREATE TABLE IF NOT EXISTS enquiry_table(
  id INT NOT NULL AUTO_INCREMENT,
  First_Name VARCHAR(255) NULL,
  Email_Address VARCHAR(255) NULL,
  Phone_Number VARCHAR(255) NULL, 
  Message VARCHAR(255) NULL,
  PRIMARY KEY (id));
`
db.query(enquiryTableQuery, (err, result)=>{
    if(err) throw err
    else{
        console.log("ENQUIRY table created successfull")
    }
})

let createTableQuery =`
CREATE TABLE IF NOT EXISTS create_profile(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255) NULL,
    last_name VARCHAR(255) NULL,
    gotra VARCHAR(255) NULL,
    birth_time VARCHAR(255) NULL,
    marital_status VARCHAR(255) NULL,
    body_height FLOAT NULL,
    working_profile VARCHAR(255) NULL,
    Father_occupation VARCHAR(255) NULL,
    mother_occupation VARCHAR(255) NULL,
    no_of_sister VARCHAR(255) NULL,
    whatsapp_number VARCHAR(255) NULL,
    email VARCHAR(255) NULL,
    about_myself VARCHAR(255) NULL,
    caste VARCHAR(255) NULL,
    sub_caste VARCHAR(255) NULL,
    gender VARCHAR(255) NULL,
    date_of_birth DATE NULL,
    manglik VARCHAR(255) NULL,
    education VARCHAR(255) NULL,
    color VARCHAR(255) NULL,
    father_name VARCHAR(255) NULL,
    mother_name VARCHAR(255) NULL,
    no_of_brother VARCHAR(255) NULL,
    phone_no VARCHAR(255) NULL,
    password VARCHAR(255) NULL,
    address VARCHAR(255) NULL,
    country VARCHAR(255) NULL,
    image VARCHAR(255) NULL,
    status VARCHAR(255) default 'pending',
    PRIMARY KEY (id));
`
db.query(createTableQuery, (err, result)=>{
    if(err) throw err
    else{
        console.log("create Profile table created successfull")
    }
})


let signTableQuery=`
CREATE TABLE IF NOT EXISTS sign_up(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NULL,
  email VARCHAR(255) NULL unique,
  password VARCHAR(255) NULL, 
  paymen_status VARCHAR(255) default 'pending', 
  view_limit VARCHAR(255) default '0', 
  current_limit VARCHAR(255) default '0', 
  PRIMARY KEY (id));
`
db.query(signTableQuery, (err, result)=>{
    if(err) throw err
    else{
        console.log("signup table created successfull")
    }
})

let adminTableQuery=`
CREATE TABLE IF NOT EXISTS admin_table(
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(255) NULL,
  password VARCHAR(255) NULL, 
  PRIMARY KEY (id));
`
db.query(adminTableQuery, (err, result)=>{
    if(err) throw err
    else{
        console.log("admin table created successfull")
    }
})

let statusTableQuery=`
CREATE TABLE IF NOT EXISTS status_table(
id INT NOT NULL AUTO_INCREMENT,
message VARCHAR(255) NULL,
PRIMARY KEY (id));
`
db.query(statusTableQuery, (err, result)=>{
    if(err) throw err
    else{
        console.log("status table created successfull")
    }
})
let paymentTable=`
CREATE TABLE IF NOT EXISTS payment_table(
id INT NOT NULL AUTO_INCREMENT,
upi VARCHAR(255) NULL,
email VARCHAR(255) NULL,
amount VARCHAR(255) NULL,
PRIMARY KEY (id));
`
db.query(paymentTable, (err, result)=>{
    if(err) throw err
    else{
        console.log("payment table created successfull")
    }
})


app.use('/api',contactRoute)
app.use('/api',enquiryRoute)
app.use('/api',profileRoute)
app.use('/api',signRoute)
app.use('/api',adminRoute)
app.use('/api',statusRoute)
app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`)
})





