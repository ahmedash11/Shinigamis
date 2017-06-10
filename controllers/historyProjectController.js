
const historyProjects = require('../models/historyProject');
const jwt = require('../auth/jwt');


const historyProjectsController = {

  // adding to historyProjects options of the system
  addProject(req, res) {


        const token = req.headers['jwt-token'];
        jwt.verify(token, (decoded) => {
          if (decoded.type === 1) {
            const name = req.body.name;
  const unit= req.body.unit;
	const clientName = req.body.clientName;

            // creating a new historyProjects instance and saving it
            const newProject = new historyProject({
              name,
              unit,
              clientName
            });
            newProject.save();
            res.status(200).json({
              status: 'success',
              data: {
                name,
                unit,
                clientName
              },
            });
          } else {
            res.status(500).json({
              err: 'unauthorized access',
            });
          }
        });
      
    },

    //Delete Project

    deleteProject(req,res){

    	historyProjects.remove({_id:req.body.id}function(err) {
    if (!err) {
            message.type = 'notification!';
    }
    else {
            message.type = 'error';
    }
});

    },
    
    findAllProjects(req, res) { // viewing all historyProjects

      historyProject.find((err, historyProject) => {
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
              historyProjects,
            },
          });
        }
      });
    }


};
module.exports = historyProjectsController;
