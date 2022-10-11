const express = require("express");
const router = express.Router();

const asyncHandler = require("express-async-handler");
const databaseVersion = require("../models/databaseVersion");
const rs100Schema = require("../models/rs100Schema");
const rs1500Schema = require("../models/rs1500Schema");
const rs200Schema = require("../models/rs200Schema");
const rs25000pSchema = require("../models/rs25000pSchema");
const rs25000Schema = require("../models/rs25000Schema");
const rs40000pSchema = require("../models/rs40000pSchema");
const rs40000Schema = require("../models/rs40000Schema");
const rs7500Schema = require("../models/rs7500Schema");
const rs750Schema = require("../models/rs750Schema");



router.get(
  "/version/get",
  asyncHandler(async (req, res) => {
     try {
      const data = await databaseVersion.findOne();
      res.json({ status: "1", message: "Done", response: data.versionNumber});
    } catch (e) {
      res.json({ status: "0", message: e});
    }
  })
);

router.get(
  "/100/get",
  asyncHandler(async (req, res) => {
     try {
      const data = await rs100Schema.find();
      res.json({ status: "1", message: "Done", response: data});
    } catch (e) {
      res.json({ status: "0", message: e, response:[]});
    }
  })
);


router.get(
  "/200/get",
  asyncHandler(async (req, res) => {
     try {
      const data = await rs200Schema.find();
      res.json({ status: "1", message: "Done", response: data});
    } catch (e) {
      res.json({ status: "0", message: e, response: [] });
    }
  })
);



router.get(
  "/750/get",
  asyncHandler(async (req, res) => {
     try {
      const data = await rs750Schema.find();
      res.json({ status: "1", message: "Done", response: data});
    } catch (e) {
      res.json({ status: "0", message: e, response: [] });
    }
  })
);



router.get(
  "/1500/get",
  asyncHandler(async (req, res) => {
     try {
      const data = await rs1500Schema.find();
      res.json({ status: "1", message: "Done", response: data});
    } catch (e) {
      res.json({ status: "0", message: e, response: [] });
    }
  })
);



router.get(
  "/7500/get",
  asyncHandler(async (req, res) => {
     try {
      const data = await rs7500Schema.find();
      res.json({ status: "1", message: "Done", response: data});
    } catch (e) {
      res.json({ status: "0", message: e, response: [] });
    }
  })
);



router.get(
  "/25000/get",
  asyncHandler(async (req, res) => {
     try {
      const data = await rs25000Schema.find();
      res.json({ status: "1", message: "Done", response: data});
    } catch (e) {
      res.json({ status: "0", message: e, response: [] });
    }
  })
);



router.get(
  "/25000p/get",
  asyncHandler(async (req, res) => {
     try {
      const data = await rs25000pSchema.find();
      res.json({ status: "1", message: "Done", response: data});
    } catch (e) {
      res.json({ status: "0", message: e, response: [] });
    }
  })
);



router.get(
  "/40000/get",
  asyncHandler(async (req, res) => {
     try {
      const data = await rs40000Schema.find();
      res.json({ status: "1", message: "Done", response: data});
    } catch (e) {
      res.json({ status: "0", message: e, response: [] });
    }
  })
);



router.get(
  "/40000p/get",
  asyncHandler(async (req, res) => {
     try {
      const data = await rs40000pSchema.find();
      res.json({ status: "1", message: "Done", response: data});
    } catch (e) {
      res.json({ status: "0", message: e, response: [] });
    }
  })
);




// router.get(
//   "/100/create",
//   asyncHandler(async (req, res) => {
//      try {
//       await rs100.create({
//         bondNumber:"test",
//         link: "test"  
//       });
//       const rs100s = await rs100.find();
//       res.json({ status: "1", message: "Done", response: rs100s});
//     } catch (e) {
//       res.json({ status: "0", message: e, serviceResponse: [] });
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
//           name: req.query.name,
//           description: req.query.description,
//           detailOrSubService: req.query.detailOrSubService,
//           parentId: req.query.parentId,
//         }
//       );
//       const Service = await Services.find();

//       res.json({ status: "1", message: "Done", serviceResponse: Service });
//     } catch (e) {
//       res.json({ status: "0", message: e, serviceResponse: [] });
//     }
//   })
// );

// router.get(
//   "/delete",
//   asyncHandler(async (req, res) => {
//     try {
//       await Services.deleteOne({ _id: req.query.id });
//       const Service = await Services.find();
//       res.json({ status: "1", message: "Done", serviceResponse: Service });
//     } catch (e) {
//       res.json({ status: "0", message: e, serviceResponse: [] });
//     }
//   })
// );

// router.get(
//   "/find",
//   asyncHandler(async (req, res) => {
//     try {
//       const Service = await Services.findById({ _id: req.query.id });
//       res.json({ status: "1", message: "Done", serviceResponse: Service });
//     } catch (e) {
//       res.json({ status: "0", message: e, serviceResponse: [] });
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
//       res.json({ status: "1", message: "Done", serviceResponse: Service });
//     } catch (e) {
//       res.json({ status: "0", message: e, serviceResponse: [] });
//     }
//   })
// );

module.exports = router;