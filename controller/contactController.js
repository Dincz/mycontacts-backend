// @desc get all contacts
//@route Get /api/contacts
//@access private
const getContacts = (req, res) => {
  res.status(200).json({ message: "Getting all contacts" });
};

// @desc Create new contact
//@route Post /api/contacts
//@access private
//201:when we create something we use this port
const createContact = (req, res) => {
    console.log("The request body is :", req.body);
    const {name , email , phone} = req.body;
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("ALL The flieds are mandatory");
    }
  res.status(201).json({ message: "Create contact" });
};
// @desc Get contact
//@route Get /api/contacts/:id
//@access private
const getContact = (req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}` });
};

// @desc Update contact
//@route Put /api/contacts/:id
//@access private
const updateContact = (req, res) => {
  res.status(200).json({ message: `Updating Contact for ${req.params.id}` });
};
// @desc Delete contact
//@route Delete /api/contacts
//@access private
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Deleting Contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  updateContact,
  getContact,
  deleteContact,
};
