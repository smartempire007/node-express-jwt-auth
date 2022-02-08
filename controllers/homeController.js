const express = require('express');

 module.exports.home_get = (req, res) => {
     res.render('home');
};

module.exports.smoothies_get = (req, res) => {

    res.render('smoothies');
};







