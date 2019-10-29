var mongoose =require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
  {
    name: "Sky's Rest",
    image: "https://images.unsplash.com/photo-1449628275652-6a7d8df8951b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
    description: "Doggo ipsum what a nice floof blep puggorino heckin good boys and girls, thicc fluffer. Aqua doggo lotsa pats mlem porgo heck, the neighborhood pupper heckin good boys tungg."
  },
  {
    name: "Pooch Lakeview",
    image: "https://images.unsplash.com/photo-1505623776320-7edecf5f0771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
    description: " Such treat thicc boofers the neighborhood pupper vvv long water shoob, shibe lotsa pats woofer heckin good boys and girls smol borking doggo with a long snoot for pats, borking doggo borkf maximum borkdrive yapper."
  },
  {
    name: "Wagger's Window",
    image: "https://images.unsplash.com/photo-1516383074327-ac4841225abf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
    description: "Heckin good boys puggorino smol borking doggo with a long snoot for pats heckin angery woofer, doge waggy wags. Puggo long bois vvv, heckin good boys and girls."
  }
]

function seedDB(){
  //Remove all campgrounds
  Campground.remove({}, function(err){
    // if(err){
    //     console.log(err);
    // }
    // console.log("removed campgrounds!");
    // //Add a few campgrounds
    // data.forEach(function(seed){
    //   Campground.create(seed, function(err, campground){
    //     if(err){
    //       console.log(err);
    //     } else{
    //       console.log("added a campground!");
    //       Comment.create(
    //         {
    //           text: "This place is great, no wifi though",
    //           author: "Horatio"
    //         }, function(err, comment){
    //           if (err){
    //             console.log(err);
    //           } else {
    //               campground.comments.push(comment);
    //               campground.save();
    //               console.log("New comment created!");
    //           }
    //         });
    //     }
    //   });
    // });
  });
  //Add a few comments

}

module.exports = seedDB;
