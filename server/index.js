const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./models/Users');

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

app.use(cors());
app.use(express.json());

mongoose.connect(
    "mongodb+srv://makeyourguess:xKiiLdwECEYWr9Zi@cluster0.txzcl.mongodb.net/mec-reports?retryWrites=true&w=majority"
);


    // old way
// app.post("/createUser", async (req, res) => {
//     const user = req.body;
//     const newUser = new UserModel(user);
//     await newUser.save();

//     res.json(user)
// });


app.post('/createUser', async (req, res) => {
    console.log(req.body)
    // const user = req.body;
    // const newUser = new UserModel(user);
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10)
        await UserModel.create({
            userId: req.body.userId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: newPassword,
        })
        res.json({ status: 'ok' })
    } catch (err) {
        res.json({ status: 'error', error: 'Duplicate email' })
    }
})

    // old way
// app.post('/api/login', async (req, res) => {
//     const user = await UserModel.findOne({
//         email: req.body.email,
//         password: req.body.password,
//     })
//     if (user) {
//         return res.json({ status: 'ok', user: true })
//     } else {
//         return res.json({ status: 'error', user: false })
//     }
// })


app.post('/api/login', async (req, res) => {
    const user = await UserModel.findOne({
        email: req.body.email,
        // password: req.body.password,
    })
    if (!user) {
        return { status: 'error', error: 'Invalid login' }
    }
    const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user.password
    )
    if (isPasswordValid) {
        const token = jwt.sign(
            {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            },
            'secret123'
        )
        return res.json({ status: 'ok', user: token })
    } else {
        return res.json({ status: 'error', user: false })
    }
})

    // not functional yet
// app.delete("/deleteUser", (req, res) => {
//     const user = req.body;
//     UserModel.deleteOne(user, (err, result) => {
//         if (err) {
//             res.json(err)
//         } else {
//             res.json(result)
//         }
//     })
// })

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.listen(3001, () =>
    console.log('Server is running on port (3001)')
);