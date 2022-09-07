import express from "express";
import exphbs from 'express-handlebars';
import session from 'express-session';
import flash from 'express-flash';
// import routs from './routs/registration-routs.js'

const app = express();



import pgPromise from 'pg-promise';

const pgp = pgPromise({})

const local_database_url = 'postgres://assesment:siya@localhost:5432/plan';
const connectionString = process.env.DATABASE_URL || local_database_url;

const config = {
    connectionString
}
if (process.env.NODE_ENV == "production") {
    config.ssl = {
        rejectUnauthorized: false
    }
}

app.use(session({
    secret: 'codeforgeek',
    saveUninitialized: true,
    resave: true
}));


const db = pgp(config);


import regFF1 from "./price_planerDB.js"
// cosnst reg


app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'))

import fs from 'fs';
import handlebars from 'handlebars';
import { ppid } from 'process';

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.use(flash());

app.get('/', function (req, res) {

    res.render("index", {


    })


})

app.post("/plan", async function (req, res) {

    const name = req.body.names
    const plan = req.body.plan



    if (name && plan) {

       let names = await regFF1.selectplan(name)

    }

    res.render('alocated', {
        names
    })

})






const PORT = process.env.PORT || 3044;

app.listen(PORT, function () {
    console.log("App started at port:", PORT)
});