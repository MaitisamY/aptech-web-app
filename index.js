import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended : true }));

const student = "nawab";
const teacher = "zarnab";
const admin = "hisham";
const password = "aptech";

app.get("/", (req, res) => {
    res.render("index.ejs");
});

// Temperory routs -->    //

app.get("/student", (req, res) => {
    res.render("student/index.ejs");
});

app.get("/teacher", (req, res) => {
    res.render("teacher/index.ejs");
});

app.get("/admin", (req, res) => {
    res.render("admin/index.ejs");
});

// <-- Temperory routs     //

// app.post("/studentLogin", (req, res) => {
//     if(req.body.username !== '' && req.body.password !== '') {
//         console.log("Username: " + req.body.username + " Password: " + req.body.password);
//         if(req.body.username == student && req.body.password == password)
//             res.render("student/index.ejs", {
//                 welcome : "Welcome to Students portal!",
//                 username : req.body.username,
//                 password : req.body.password
//         });
//         else {
//             console.log("Invalid credentials!");
//             res.render("index.ejs", {
//             error : "Invalid username or password!"
//         });
//         }
//     } else {
//         console.log("Bad form request!");
//         res.render("index.ejs", {
//             error : "Both fields should be filled"
//         });
//     }
// });

// app.post("/teacherLogin", (req, res) => {
//     if(req.body.username !== '' && req.body.password !== '') {
//         console.log("Username: " + req.body.username + " Password: " + req.body.password);
//         if(req.body.username == teacher && req.body.password == password)
//             res.render("teacher/index.ejs", {
//                 welcome : "Welcome to Teachers portal!",
//                 username : req.body.username,
//                 password : req.body.password
//         });
//         else {
//             console.log("Invalid credentials!");
//             res.render("index.ejs", {
//             error : "Invalid username or password!"
//         });
//         }
//     } else {
//         console.log("Bad form request!");
//         res.render("index.ejs", {
//             error : "Both fields should be filled"
//         });
//     }
// });

// app.post("/adminLogin", (req, res) => {
//     if(req.body.username !== '' && req.body.password !== '') {
//         console.log("Username: " + req.body.username + " Password: " + req.body.password);
//         if(req.body.username == admin && req.body.password == password)
//             res.render("admin/index.ejs", {
//                 welcome : "Welcome to Admin portal!",
//                 username : req.body.username,
//                 password : req.body.password
//         });
//         else {
//             console.log("Invalid credentials!");
//             res.render("index.ejs", {
//             error : "Invalid username or password!"
//         });
//         }
//     } else {
//         console.log("Bad form request!");
//         res.render("index.ejs", {
//             error : "Both fields should be filled"
//         });
//     }
// });

app.listen(port, (req, res) => {
    console.log(`Listening at: ${port}`);
});