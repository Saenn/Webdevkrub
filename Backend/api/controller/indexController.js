const bcrypt = require('bcryptjs')
const indexModel = require('../model/indexModel')

exports.createMember = function(req, res) {

    const salt = bcrypt.genSaltSync(10);
    let data = req.body.member;
    data.password = bcrypt.hashSync(data.password, salt);    

    indexModel.createMember(data, (error, databack) => {
        if (error) throw error;        
        if (databack != null) {
            res.json({ message: 'Already have this username' });
        } else {
            res.json({ message: 'Registered successfully' });
        } 
    });
};

exports.announceCard = function(req, res) {       

    indexModel.announceCard(req.body.card, (error, databack) => {
        if (error) throw error;
        else{
            res.json({ message: 'Announced Successfully' });
        }       
    });
};

exports.getUser = function(req, res) {   

    console.log("daslhdail")
    indexModel.getUser(req, (error, databack) => {
        if (error) throw error;
        else{
            console.log(databack)
            res.json(databack)
        }
    });
};

exports.getAllCard = function(req, res) {   
    
    indexModel.getAllCard(req,(error, databack) => {
        if (error) throw error;
        else{
            res.json(databack)
        }
    });
};