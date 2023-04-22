const {AuthService} = require('../services');

module.exports = {
    sigIn: async function(req, res){
        try {
            const auth = await AuthService.sigIn(req.body);
            req.session.token = auth.token;
            res.status(200).send(auth.user);
        } catch (error) {
            res.status(401).json({error});
        }

    },
    logOut: function(req, res) {
        res.status(200).json({
            succes: 'Cerró sesión con exito!'
          });
    }
}