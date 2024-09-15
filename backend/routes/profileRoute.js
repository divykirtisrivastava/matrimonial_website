const express=require('express')
const router=express.Router()
const profileController=require('../controllers/profileController')
const uploads=require('../multerConfig.js')

router.post('/profileSave',uploads.single('image'),profileController.profileSave)
router.get('/getProfile',profileController.getProfile)
router.delete('/deleteProfile/:id',profileController.deleteProfile)
router.get('/viewProfile/:id',profileController.viewProfile)

router.put('/updateProfile/:id', profileController.updateProfile)

module.exports=router