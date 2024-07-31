//@desc Get all contacts
//@route GET /api/v1/contacts
//@access public
const getContacts = (req,res) =>{
    res.status(200).json({message: "Get all contacts"});
}

//@desc Get a single contact
//@route GET /api/v1/contact/:id
//@access public
const getContact = (req,res) =>{
    res.status(200).json({message: "Get all contacts"});
}


//@desc Create new contact
//@route POST /api/v1/contacts
//@access public
const createContact = (req,res) =>{
    res.status(210).json({message: "Create new contact"});
}



module.exports = {getContacts, createContact}