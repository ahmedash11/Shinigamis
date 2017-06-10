const Award = require('../models/award');
const jwt = require('../auth/jwt');


const awardController = {

    // adding to awards options of the system
    addAward(req, res) {


        const token = req.headers['jwt-token'];
        jwt.verify(token, (decoded) => {
            if (decoded.type === 1) {
                

                // creating a new historyProjects instance and saving it
                const newAward = new Award({
                    title: req.body.title,
                    
                    image: req.body.image
                });
                newAward.save();
                res.status(200).json({
                    status: 'success',
                    data: {
                        newAward
                    },
                });
            } else {
                res.status(500).json({
                    err: 'unauthorized access',
                });
            }
        });

    },

    

    findAllAwards(req, res) { // viewing all awards

        Award.find((err, awards) => {
            if (err) { // if error occurred
                res.status(500).json({
                    status: 'error',
                    message: err.message,
                });
            } else {
                ////console.log(historyProjects);
                res.status(200).json({
                    status: 'success',
                    data: {
                        awards,
                    },
                });
            }
        });
    }


};
module.exports = awardController;
