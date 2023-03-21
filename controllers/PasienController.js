const { Pasien } = require("../models/pasien");

class PasienController {
  static async getAllPasiens(req, res) {
    //
    try {
      let pasiens = await Pasien.findAll();

      res.status(200).json(pasiens);
    } catch (err) {
      res.status(500), json(err);
    }
  }
  
  static async register(req, res) {
    //
    try {
      const { nama, no_hp } = req.body;
      let result = await Pasien.create({
       nama,
       no_hp
      });

      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  
  
  
}

module.exports = PasienController;
