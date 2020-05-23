var express = require('express');
var router = express.Router();
var users = require('../users.json');
var cart = require('../carts.json');
var products = require('../products.json');
const _ = require('underscore');
/* GET users listing. */
router.get('/', function(req, res) {
  res.json(users);
});
router.post('/', function(req, res)
{
  var {id,name,orders,email}=req.body;
  if(name&&orders&&email){
    var id = users.length+1;
    var newUser ={id, ...req.body}
    users.push(newUser)
    res.json(users)
  } else {
    res.status(500).json('Wrong Request');
  }
  res.send('received');
});
router.get('/:id/cart ', function(req,res){
  var{id}=req.params
  
  if(user.id==id){
    res.json(cart);
  } else{
    res.status(500).json('All is requested');
  }
});
router.put('/:id/cart/items/:pid', function(req,res){//añadir producto
  var{id}=req.params
  var{pid}=req.params
  var {id,name,orders,email}=req.body;
  if(user.id==id){
    if(products.id==id){
      products.id = products.id;
      products.cantidad = cantidad + 1;
      products.name = products.name;
      products.push(newCart)
      res.json(cart)
    }
  } else{
    res.status(500).json('All is requested');
  }
});
router.delete('/:id/cart/items/:pid',function(req,res){
  var{id}=req.params
  _.each(users,function(user,i) {
    if (user.id==id){
      if(products.id==id){
        products.splice(i,1);

      }
    }
  });
});
router.delete('/:id/cart/items/:pid/lower', function(req,res){//añadir producto
  var{id}=req.params
  var{pid}=req.params
  if(user.id==id){
    if(products.id==id){
      products.id = products.id;
      products.cantidad = cantidad - 1;
      products.name = products.name;
      products.push(newCart)
      res.json(cart)
    }
  } else{
    res.status(500).json('All is requested');
  }
});
router.delete('/:id',function(req,res){
  var{id}=req.params
  _.each(users,function(user,i) {
    if (user.id==id){
      user.splice(i,1);
    }
  });
});
/*Lo que pide en la practica*/
router.post('/sign-in',(req,res) => {
  req.session.email = req.body.email;
  res.end('done');
});

router.get('/sign-out',(req,res) => {
  req.session.destroy((err) => {
      if(err) {
          return console.log(err);
      }
      res.redirect('/');
  });

});
/*Fin de la */

//Orders

router.get('/:id/orders', function(req, res) {
  res.json(orders);
});
/* GET products listing by id. */

router.get('/:id/orders', function(req, res) {
  var{id}=req.params
  _.each(users,function(user,i) {
    if (user.id==id){
      //aquí faltaría poner que sean los ids de el pedido etc
      res.json(orders);
    } else{
      res.status(500).json('Don´t exist this id');
    }
  res.json(products);
  });
});

router.put('/:id/orders', function(req,res){//añadir producto
  var{id}=req.params
  var {id,name,orders,email}=req.body;
  if(user.id==id){//definir como va a ser el pedido
    if(products.id==id){
      products.id = products.id;
      products.cantidad = cantidad + 1;
      products.name = products.name;
      orders.push(newOrder)
      res.json(cart)
    }
  } else{
    res.status(500).json('All is requested');
  }
});
router.get('/:id/orders/:idp/items', function(req, res) {
  var{id}=req.params
  var{idp}=req.params
  _.each(users,function(user,i) {
    if (user.id==id){
      if (orders.id==id){
      //aquí faltaría poner que sean los ids de el pedido etc
        
        res.json(products);
      }
    } else{
      res.status(500).json('Don´t exist this id');
    }
  res.json(products);
  });
});
module.exports = router;
