module.exports = {
    getUsers:  (req,res,next) => {
        const db = req.app.get('db');
        db.get_users().then(users  => {
            res.status(200).send(users)
        }).catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
    },
    registerUser: (req,res,next) => {
        const {username, password} = req.body
        const db = req.app.get('db');
        db.register_user({username,password}).then(users  => {
            res.status(200).send(users)
        }).catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
    },
    loginUser: (req,res,next) => {
        const {username, password} = req.body
        const db = req.app.get('db');
        db.login_user({username,password}).then(users => {
            res.status(200).send('Success!',users)
        }).catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
        },
    getPosts: (req,res,next) => {
        
    },
        
}