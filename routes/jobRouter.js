const {Router}  = require("express");
const JobRouter = Router();
const { addJob, modify, getAll, getOne, deleteJob} = require("../controller/jobsController");

JobRouter.post("/add",async(req,res) => {
    try {
        if(!req.isAuth && req.access !== "admin" && req.access!== "associate"  && req.access!== "recruitor" && req.access!== "editor" ) throw new Error("Unauthenticated");
        const data = await addJob(req);
        res.send(data);
    } catch (error) {
        res.send({Err : error.message})
    }
})

JobRouter.get("/getAll",async(req,res) => {
    try {
       
        const data = await getAll(req);
        res.send(data);
    } catch (error) {
        res.send({Err : error.message})
    }
})
JobRouter.get("/get/:jobId",async(req,res) => {

    try {
      
        const data = await getOne(req);
        res.send(data);
    } catch (error) {
        res.send({Err : error.message})
    }
})

JobRouter.patch("/modify/:jobId",async(req,res) => {
    try {
        if(!req.isAuth && req.access !== "admin") throw new Error("Unauthenticated");
        const data = await modify(req);
        res.send(data);
    } catch (error) {
        res.send({Err : error.message})
    }
})

JobRouter.delete("/delete/:jobId",async(req,res) => {
    try {
        if(!req.isAuth && req.access !== "admin") throw new Error("Unauthenticated");
        const data = await deleteJob(req);
        res.send(data);
    } catch (error) {
        res.send({Err : error.message})
    }
})

module.exports = JobRouter;