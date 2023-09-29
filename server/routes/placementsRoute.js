const router = require("express").Router();
const Placements = require("../models/placementsYearWise");

// ROUTE 1: Placements Year Wise -> POST request "admin/placements/yearWise/create"
router.post("/yearWise/create", async (request, response) => {
    try{
        // creating a new document for every year record
        const usr =await Placements.create({
            Year: request.body.Year,
            BTechOnRoll:request.body.BTechOnRoll,
            BTechPlaced:request.body.BTechPlaced,
            MTechOnRoll:request.body.MTechOnRoll,
            MTechPlaced:request.body.MTechPlaced,
            TotalPlaced:request.body.TotalPlaced,
            AveragePackage:request.body.AveragePackage,
            PackageRange:request.body.PackageRange,
        });

        response.status(200).json({usr});
    }
    catch(err){
        response.status(400).send("Internal Error Occured");
    }
});

// ROUTE 2: Placements Year Wise -> GET request "admin/placements/yearWise/getAll"
router.get("/yearWise/getAll", async (request, response) => {
    try{
        // creating a new document for every year record
        const usr =await Placements.create({
            Year: request.body.Year,
            BTechOnRoll:request.body.BTechOnRoll,
            BTechPlaced:request.body.BTechPlaced,
            MTechOnRoll:request.body.MTechOnRoll,
            MTechPlaced:request.body.MTechPlaced,
            TotalPlaced:request.body.TotalPlaced,
            AveragePackage:request.body.AveragePackage,
            PackageRange:request.body.PackageRange,
        });

        response.status(200).json({usr});
    }
    catch(err){
        response.status(400).send("Internal Error Occured");
    }
});

// ROUTE 3: Placements Year Wise -> DELETE request "admin/placements/yearWise/getAll"
router.delete("/yearWise/delete", async (request, response) => {
    try{
        // creating a new document for every year record
        const usr =await Placements.create({
            Year: request.body.Year,
            BTechOnRoll:request.body.BTechOnRoll,
            BTechPlaced:request.body.BTechPlaced,
            MTechOnRoll:request.body.MTechOnRoll,
            MTechPlaced:request.body.MTechPlaced,
            TotalPlaced:request.body.TotalPlaced,
            AveragePackage:request.body.AveragePackage,
            PackageRange:request.body.PackageRange,
        });

        response.status(200).json({usr});
    }
    catch(err){
        response.status(400).send("Internal Error Occured");
    }
});

// ROUTE 4: Placements Year Wise -> GET request "admin/placements//yearWise/edit"
router.put("/yearWise/edit", async (request, response) => {
    try{
        // creating a new document for every year record
        const usr =await Placements.create({
            Year: request.body.Year,
            BTechOnRoll:request.body.BTechOnRoll,
            BTechPlaced:request.body.BTechPlaced,
            MTechOnRoll:request.body.MTechOnRoll,
            MTechPlaced:request.body.MTechPlaced,
            TotalPlaced:request.body.TotalPlaced,
            AveragePackage:request.body.AveragePackage,
            PackageRange:request.body.PackageRange,
        });

        response.status(200).json({usr});
    }
    catch(err){
        response.status(400).send("Internal Error Occured");
    }
});


module.exports = router;
