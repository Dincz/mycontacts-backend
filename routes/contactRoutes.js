const express = require('express')
const router = express.Router()

router.route("/").get((req , res)=>{
    res.status(200).json({message:"Getting all contacts"});
})

router.route("/").post((req , res)=>{
    res.status(200).json({message:"Create contact"});
})

router.route("/:id").get((req , res)=>{
    res.status(200).json({message:`Get Contact for ${req.params.id}`});
})

router.route("/:id").put((req , res)=>{
    res.status(200).json({message:`Updating Contact for ${req.params.id}`});
})

router.route("/:id").delete((req , res)=>{
    res.status(200).json({message:`Deleting Contact for ${req.params.id}`});
})

module.exports = router;