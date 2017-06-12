const Client = require('../models/client');
const jwt = require('../auth/jwt');


const clientController = {
    // adding to clients options of the system
    addClient(req, res) {
        const token = req.headers['jwt-token'];
        jwt.verify(token, (decoded) => {
            if (decoded.type === 1) {
                // creating a new historyProjects instance and saving it
                const newClient = new Client({
                    name: req.body.name,
                    description: req.body.description,
                    image: req.body.image
                });
                newClient.save();
                res.status(200).json({
                    status: 'success',
                    data: {
                        newClient
                    },
                });
            } else {
                res.status(500).json({
                    err: 'unauthorized access',
                });
            }
        });

    },

    //Delete Client
    deleteClient(req, res) {

        Client.remove({ _id: req.body.id }

            function(err) {
                if (!err) {
                    message.type = 'notification!';
                } else {
                    message.type = 'error';
                }
            });
    },

    findAllClients(req, res) { // viewing all Clients
        Client.find((err, clients) => {
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
                        clients,
                    },
                });
            }
        });
    },
    findProjects(req, res) { //viewing Projects related to this client
        const query = {
            _id: req.params.id, // Recently Changed to Params
        };
        var array = [];

        client.findOne(query, (err, client) => {
            historyProject.find((err, historyProject) => {
                for (var i = 0, i < historyProject.length; i++) {
                    if (historyProject[i].clientName === client.name) {
                        array.push(historyProject[i]);
                    }
                }

                if (err) {
                    res.status(500).json({
                        status: 'error',
                        message: err.message,
                    });
                } else {
                    res.status(200).json({
                        status: 'success',
                        data: {
                            array,
                            client
                        },
                    });
                }

            });

        });

    }
};
module.exports = clientController;
