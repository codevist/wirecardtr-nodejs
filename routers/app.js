const express = require("express");

const axios = require("axios");
const parseString = require('xml2js').parseString;
const Guid = require("guid");

const helpers = require("../helpers/index");
const settings = require("../settings");
const wirecard = require("../wirecard/index");

exports.app = express.Router();

exports.app
.get('/', (req, res) => {
    res.render("index")
})
.get('/MarketPlaceDeactiveSubPartner', (req, res) => {
    res.render("MarketPlaceDeactiveSubPartner")
})

.get("/SendInformationSmsService", (req, res)=>{
    res.render("SendInformationSmsService", {
    
    })
})
.get("/ProApi", (req, res)=>{
    res.render("ProApi", {
    
    })
})
.get("/ApiPlus", (req, res)=>{
    res.render("ApiPlus", {
    
    })
})
.get("/SelectSubscriber", (req, res)=>{
    res.render("SelectSubscriber", {
    
    })
})
.get("/SelectSubscriberDetail", (req, res)=>{
    res.render("SelectSubscriberDetail", {
    
    })
})
.get("/DeactivateSubscriber", (req, res)=>{
    res.render("DeactivateSubscriber", {
    
    })
})
.get("/CCProxySale", (req, res)=>{
    res.render("CCProxySale", {
    
    })
})
.get("/MarketPlaceAddSubPartner", (req, res)=>{
    res.render("MarketPlaceAddSubPartner", {
    
    })
})
.get("/MarketPlaceUpdateSubPartner", (req, res)=>{
    res.render("MarketPlaceUpdateSubPartner", {
    
    })
})
.get("/MarketPlaceSale3DSec", (req, res)=>{
    res.render("MarketPlaceSale3DSec", {
    
    })
})
.get("/MarketPlaceMpSale", (req, res)=>{
    res.render("MarketPlaceMpSale", {
    
    })
})
.get("/MarketPlaceReleasePayment", (req, res)=>{
    res.render("MarketPlaceReleasePayment", {
    
    })
})
.get("/WDTicketSale3DURLProxy", (req, res)=>{
    res.render("WDTicketSale3DURLProxy", {
    
    })
})
.get("/WDTicketSaleURLProxy", (req, res)=>{
    res.render("WDTicketSaleURLProxy", {
    
    })
})
.get("/Success", (req, res)=>{
    res.render("Success", {
    
    })
})
.get("/Fail", (req, res)=>{
    res.render("Fail", {
    
    })
})

