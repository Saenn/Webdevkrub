const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const adminModel = require('../model/adminModel');

exports.createAdmin = function(req, res) {
    const salt = bcrypt.genSaltSync(10);
    let data = req.body;

    data.password = bcrypt.hashSync(data.password, salt);
    console.log('kuy')

    adminModel.createAdmin(data, (error, data) => {
        if (error) throw error;
        
        if (data != null) {
            res.status(400).send({ message: 'Already have this username' });
        } else {
            res.json({ message: 'Created admin successfully' });
        } 
    });
};

exports.login = function(req, res) {
    adminModel.getUserByUsername(req.body, (error, data) => {
        if (error) throw error;

        if (data.length == 0) {
            res.status(401).send({ message: 'ไม่มีชื่อผู้ใช้นี้ในระบบ' })
        } else {
            var admin = data;

            bcrypt.compare(req.body.password, admin.password, function(err, match) {
                if (match) {
                    const token = jwt.sign({ adminid: admin.id, username: admin.username }, secretKey);

                    res.json({ token: token });
                } else {
                    res.status(401).send({ message: 'รหัสผ่านไม่ถูกต้อง' })
                }
            });
        }
    });
};

exports.verifyToken = function(req, res, next) {
    if (req.headers.authorization) {
        const token = req.headers.authorization;
        const decoded = jwt.decode(token, { complete: true });

        if (decoded) {
            adminModel.getUserByUserId(decoded.payload.adminid, function(error, data) {
                if (error) throw error;
                if (data != null) {
                    req.adminid = data.id;
                    
                    return next();
                }
                else { res.status(401).send('Invalid userid'); }
            });
        }
        else { res.status(401).send('Invalid token'); }
    }
    else { res.status(401).send('Cannot get header'); }
}