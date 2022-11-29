const express = require("express")
const router = express.Router()
const Vegetable = require("../models/vegetables")

// ===== VEGETABLE ROUTES ===== //


//VEG INDEX
router.get("/vegetables", (req, res) => {
    Vegetable.find({}, (error, allVegetables) => {
      if (!error) {
        res.status(200).render("vegetables/VegIndex", {vegetables: allVegetables})
      } else {
        res.status(400).send(error)
      }
    })
  })

//VEG NEW
router.get("/vegetables/new", (req, res) => {
res.render("./vegetables/VegNew")
})

//VEG CREATE
router.post("/vegetables", (req, res) => {
console.log("2. controller")
if (req.body.readyToEat === "on") {
    req.body.readyToEat = true
} else {
    req.body.readyToEat = false
}
Vegetable.create(req.body, (error, createdVegetable) => {
    if (!error) {
    console.log(createdVegetable)
    res.status(200).redirect("/vegetables")
    } else {
    res.status(400).send(error)
    }
})
})
  
//VEG SHOW
router.get("/vegetables/:id", (req, res) => {
Vegetable.findById(req.params.id, (error, foundVegetable) => {
    if (!error) {
    res.status(200).render("vegetables/VegShow", {
        vegetable: foundVegetable
    })
    } else {
    res.status(400).send(error)
    }
})
})

module.exports = router