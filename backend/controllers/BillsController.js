const Bills = require("../models/bills");

//Get user bills, route GET /bills
const fetchBills = async (req, res) => {
  try {
    const bills = await Bills.find({ user: req.user.id });
    res.status(200).json(bills);
  } catch (error) {
    res.status(400).json({ message: "Can't find bills" });
  }
};

//Create bills, route Post /bills
const createBills = async (req, res) => {
  try {
    const bills = await Bills.create({
      user: req.user.id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      address: req.body.address,
      state: req.body.state,
      city: req.body.city,
      zipcode: req.body.zipcode,
      hospital: req.body.hospital,
      servicedate: req.body.servicedate,
      billamount: req.body.billamount,
      image: req.body.image,
    });
    res.status(200).json(bills);
  } catch (error) {
    res.status(400).json({ message: "Can't create bill" });
  }
};

//Delete bills, route Delete /bills/:id
const deleteBills = async (req, res) => {
  try {
    const deleteBills = await Bills.findByIdAndRemove(req.params.id);
    res.status(200).json({ id: req.params.id });
  } catch (error) {
    res.status(400).json({ message: "Can't find bill" });
  }
};
module.exports = {
  fetchBills,
  createBills,
  deleteBills,
};
