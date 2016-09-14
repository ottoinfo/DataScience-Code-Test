"use strict"

import express from "express"
import bodyParser from "body-parser"
import compression from "compression"
import fs from "fs"
import path from "path"

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(compression())
app.listen(3000, function() {
  const host = this.address().address
  const port = this.address().port
  console.log("ADMIN_API Server listening on http://%s:%s", host, port)
})

// API Recipes
app.get("/api/recipes", function(req, res) {
  fs.readFile("./recipes.json", function(err, data) {
    if (err) throw err
    res.json(JSON.parse(data))
  })
})

// ROUTES - Catch All
app.use(express.static(__dirname + "/dist"))
app.get("*", function response(req, res) {
  res.sendFile(path.join(__dirname, "dist/index.html"))
})