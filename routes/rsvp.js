var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(req, res){
  res.render('rsvp', data);
};

exports.addRSVP = function(req, res) {
  var rsvpEmail = req.body.rsvpEmail;
  //this will print in terminal when post is made
  console.log(rsvpEmail);
  //add to current data
  data.rsvp.push(rsvpEmail);
  //send task name back to the browser
  res.send(rsvpEmail);
}
