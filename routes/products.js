var express = require('express');
var router = express.Router();
var products = require('../products.json');
const _ = require('underscore');

/* GET products listing. */
router.get('/', function(req, res) {
  res.json(products);
});
/* GET products listing by id. */

router.get('/:id', function(req, res) {
  var{id}=req.params
  _.each(users,function(user,i) {
    if (user.id==id){
      res.json(user);
    } else{
      res.status(500).json('Don´t exist this id');
    }
  res.json(products);
  });
});
module.exports = router;
