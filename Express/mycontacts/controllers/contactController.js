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
    res.status(200).json({message: `Get a single contact for ${req.param.id}`});
}


//@desc Create new contact
//@route POST /api/v1/contacts
//@access public
const createContact = (req,res) =>{
    res.status(201).json({message: `create a single contact for ${req.param.id}`});
}

//@desc Update a contact
//@route PUT /api/v1/contact/:id
//@access public
const updateContact = (req,res) =>{
    res.status(200).json({message: `Update a single contact for ${req.param.id}`});
}

//@desc Create new contact
//@route DELETE /api/v1/contacts
//@access public
const deleteContact = (req,res) =>{
    res.status(200).json({message: `Delete a single contact for ${req.param.id}`});
}



module.exports = {getContacts,getContact,createContact, updateContact, deleteContact}