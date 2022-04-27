const express=require("express");
const bodyParser =require("body-parser");
const https= require("https");
const _=require("lodash");
//db
const mongoose = require("mongoose");
const { intersection } = require("lodash");
mongoose.connect("mongodb://localhost:27017/pbl");
 // schems
 const Sscema = mongoose.Schema({
     _id:String,
     SymptomName:String,
     DiseaseID:[],
     SymptomQ:String
 });

const Symptoms = mongoose.model("Symptoms1",Sscema);

const Dschema = mongoose.Schema({
    _id:Number,
    DiseaseName:String,
    Precautions:[],
    SymptomID:[]
});

const Disease = mongoose.model("Disease1",Dschema);

//imp
const app= express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');


// req decleration
const schema ={
    Disease:String,
    length:Number,
    matched:Number
}
var mainsymp=[];
let Dlist=[];

// get request

app.get("/",function(req,res)
{
    res.render("single-ques-page");//start1
    app.post("/start1",function(req,res)
    {
        res.render("form1");
    });
    app.post("/form1",function(req,res)
    {
        res.render("start");
    });
    app.post("/",function(req,res){
        var list = req.body.list;
        setTimeout(myFunction, 500);
        // console.log(typeof list);
        mainsymp=list.split(',');
        console.log(mainsymp);
        mainsymp.forEach(function(symp)
        {
            Symptoms.findOne({_id:symp},function(err,found){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    var item= found.DiseaseID;
                    //  console.log(item);
                    item.forEach(function(i){
                        if(!Dlist.includes(i))
                        {
                             Dlist.push(i);
                             //console.log(Dlist);
                        }
                    });
                }
            });
        });
        
        function myFunction()
        {

            console.log(Dlist);
            Dlist.forEach(function(i){
                Disease.findOne({_id:i},function(err,fou){
                    if(err)
                    {
                        console.log(err);
                    }
                    else
                    {
                        
                        
                    }
                });
            });

        }
    });
    
    
});


// server
app.listen(3000,function()
{
    console.log("server started at 3000");
});