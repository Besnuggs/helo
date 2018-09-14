module.exports={
    addUser: (req,res,next) => {
        const {username, password} = req.body
        const db = req.app.get('db');
        db.add_user({username,password}).then(users  => {
            res.status(200).send(users)
        }).catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
    },
    loginUser: (req,res,next) => {
        const {username, password} = req.body
    }
}