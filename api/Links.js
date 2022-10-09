const express = require("express");
const router = express.Router();

const asyncHandler = require("express-async-handler");
const LinkTypeModel = require("../models/LinkTypeModel");

// router.get(
//   "/get",
//   asyncHandler(async (req, res) => {
//     try {
//       const linkType = await LinkTypeModel.get();
//       res.json({ status: 1, message: "Done", response: linkType });
//     } catch (e) {
//       res.json({ status: 0, message: e, response: [] });
//     }
//   })
// );

router.get(
  "/create",
  asyncHandler(async (req, res) => {
     try {
    //   await Services.create({
    //     name: req.query.name,
    //     description: req.query.description,
    //     detailOrSubService: req.query.detailOrSubService, // here 0 for not assign, 1 for detail & 2 for SubService
    //     parentId: req.query.parentId,
    //   });
    //   const Service = await Services.find();
      res.json({ status: 1, message: "Done", response: req.query.data });
    } catch (e) {
      res.json({ status: 0, message: e, serviceResponse: [] });
    }
  })
);


// router.get(
//   "/update",
//   asyncHandler(async (req, res) => {
//     try {
//       await Services.updateOne(
//         { _id: req.query.id },
//         {
//           name: req.query.name,
//           description: req.query.description,
//           detailOrSubService: req.query.detailOrSubService,
//           parentId: req.query.parentId,
//         }
//       );
//       const Service = await Services.find();

//       res.json({ status: 1, message: "Done", serviceResponse: Service });
//     } catch (e) {
//       res.json({ status: 0, message: e, serviceResponse: [] });
//     }
//   })
// );

// router.get(
//   "/delete",
//   asyncHandler(async (req, res) => {
//     try {
//       await Services.deleteOne({ _id: req.query.id });
//       const Service = await Services.find();
//       res.json({ status: 1, message: "Done", serviceResponse: Service });
//     } catch (e) {
//       res.json({ status: 0, message: e, serviceResponse: [] });
//     }
//   })
// );

// router.get(
//   "/find",
//   asyncHandler(async (req, res) => {
//     try {
//       const Service = await Services.findById({ _id: req.query.id });
//       res.json({ status: 1, message: "Done", serviceResponse: Service });
//     } catch (e) {
//       res.json({ status: 0, message: e, serviceResponse: [] });
//     }
//   })
// );

// router.get(
//   "/update",
//   asyncHandler(async (req, res) => {
//     try {
//       await Services.updateOne(
//         { _id: req.query.id },
//         {
//           Name: req.query.Name,
//           Description: req.query.Description,
//           ParentId: req.query.ParentId,
//         }
//       );
//       const Service = await Services.find();
//       res.json({ status: 1, message: "Done", serviceResponse: Service });
//     } catch (e) {
//       res.json({ status: 0, message: e, serviceResponse: [] });
//     }
//   })
// );

module.exports = router;