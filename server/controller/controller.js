var Userdb = require('../model/model');

//create and save new user
exports.create = (req,res)=>{

    //validate request
    if(!req.body){
        res.status(400).send({ message: "Content cannot be empty"});
        return;
    }
    // new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status:  req.body.status,
        ID:  req.body.ID,
        phone:  req.body.phone

    })

    //save user in statbase
    user 
        .save(user)
        .then(data=>{
            // res.send(data)
            res.redirect("/add-user")
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "some error occured"
            })
        })
}

//retrieve and return all users/retrive and return a single user
exports.find = (req,res)=>{

    if(req.query.id){
        const id =req.query.id;
        Userdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"Not found user id "+id})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({ message: "Error retrieving user with id "+id})
        })
    }else{
        Userdb.find()
        .then(user=>{
            res.send(user)
        })
        .catch(err=>{
            res.status(500).send({message: err.message || "error occured"})
        })
    }
}
 
//Update a new identified user by user id
exports.update = (req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message: "update data cannot be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body, {useFindAndModify: false})
    .then(data=>{
        if(!data){
            res.status(404).send({ message: `Cannot update user with id ${id}`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({ message: "Error update user info"})
    })
}

exports.delete = (req,res)=>{
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({ message: "Cannot Delete"})
        }else{
            res.send({
                message: "del succesfully"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            message: "can't delete user with id= " +id
        });
    });
    
}