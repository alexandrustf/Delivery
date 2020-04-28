const PackageModel = require("../models/PackageModel");

module.exports = {
  create: (req, res) => {
    let package = new PackageModel(req.body);
    package
      .save()
      .then((result) => {
        res.json({ success: true, result: result });
      })
      .catch((err) => {
        res.json({ success: false, result: err });
      });
  },

  retrive: (req, res) => {
    PackageModel.find()
      .then((result) => {
        if (!result) res.json({ success: false, result: "No results found" });

        res.json({ success: true, result: result });
      })
      .catch((err) => res.json({ success: false, result: result }));
  },

  delete: (req, res) => {
    PackageModel.remove({ _id: req.body._id })
      .then((result) => {
        if (!result)
          res.json({
            success: false,
            result: "No package was found with this id",
          });
        res.json({ success: true, result: result });
      })
      .catch((err) => res.json({ success: false, result: err }));
  },
};
