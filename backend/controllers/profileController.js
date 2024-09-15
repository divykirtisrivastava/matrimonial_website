const db= require('../dataBaseConfig.js')

exports.profileSave=(req,res)=>{
    let  first_name=req.body.first_name
    let  last_name=req.body.last_name
    let  gotra=req.body.gotra
    let  birth_time=req.body.birth_time
    let  marital_status=req.body.marital_status
    let  body_height=req.body.body_height
    let  working_profile=req.body. working_profile
    let  Father_occupation=req.body.Father_occupation
    let  mother_occupation=req.body. mother_occupation
    let  no_of_sister=req.body.no_of_sister
    let  whatsapp_number=req.body. whatsapp_number
    let  email=req.body.email
    let  about_myself=req.body.about_myself
    let  caste=req.body.caste
    let  sub_caste=req.body.sub_caste
    let  gender=req.body.gender
    let  date_of_birth=req.body.date_of_birth
    let  manglik=req.body.manglik
    let education=req.body.education
    let  color=req.body.color
    let  father_name=req.body.father_name
    let mother_name =req.body.mother_name
    let  no_of_brother=req.body.no_of_brother
    let  phone_no=req.body.phone_no
    let  password=req.body.password
    let  address =req.body.address 
    let  country=req.body.country
    let image=req.file.filename
   
    let value=[[first_name,last_name,gotra,birth_time,marital_status,body_height,working_profile, Father_occupation, mother_occupation, no_of_sister, whatsapp_number, email,about_myself, caste,sub_caste, gender,date_of_birth,manglik,education, color,father_name, mother_name,  no_of_brother, phone_no,password, address,country,image]]

    let sql=`insert into create_profile(first_name,last_name,gotra,birth_time,marital_status,body_height,working_profile, Father_occupation, mother_occupation, no_of_sister, whatsapp_number, email,about_myself, caste,sub_caste, gender,date_of_birth,manglik,education, color,father_name, mother_name,  no_of_brother, phone_no,password, address,country,image) values ?`

    db.query(sql,[value],(err,result)=>{
        if(err) throw err
        else{
            res.send("profil table details submitted")
        }
    })

    
}
exports.getProfile=(req,res)=>{
    let sql='Select * from create_profile'
    db.query(sql,(err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}


exports.deleteProfile = (req, res)=>{
    let id = req.params.id
    let sql = 'delete from create_profile where id = ?'

    db.query(sql, [id], (err, result)=>{
        if(err) throw err
        else{
            res.send('profile deleted')
        }
    })
}

exports.viewProfile = (req,res)=>{
    let id = req.params.id
    let sql = "select * from create_profile where id = ?"
    db.query(sql, [id], (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}

exports.updateProfile = (req, res)=>{
    let id = req.params.id
    let newData = req.body
    // console.log(newData)
    let sql = 'update create_profile set ? where id = ?'
    db.query(sql, [newData, id], (err, result)=>{
        if(err) throw err
        else{
            res.send('profile updated')
        }
    })
}