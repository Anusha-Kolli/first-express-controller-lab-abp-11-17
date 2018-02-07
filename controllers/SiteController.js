let SiteController ={}

SiteController.index = function(req,resp){
  resp.render('site/index');
}
SiteController.about = function(req,resp){
  resp.render('site/about');
}
SiteController.contact = function(req,resp){
  resp.render('site/contact');
}
+ module.exports = SiteController 

