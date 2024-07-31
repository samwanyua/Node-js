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
    res.status(200).json({message: "Get a single contact"});
}


//@desc Create new contact
//@route POST /api/v1/contacts
//@access public
const createContact = (req,res) =>{
    res.status(201).json({message: "Create new contact"});
}

//@desc Update a contact
//@route POST /api/v1/contact/:id
//@access public
const updateContact = (req,res) =>{
    res.status(200).json({message: "Update a contact"});
}

//@desc Create new contact
//@route POST /api/v1/contacts
//@access public
const deleteContact = (req,res) =>{
    res.status(200).json({message: "Delete a contact"});
}



module.exports = {getContacts,getContact,createContact, updateContact, deleteContact}