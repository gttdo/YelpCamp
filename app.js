var express       = require("express"),
    app           = express(),
    bodyParser    = require("body-parser"),
    mongoose      = require("mongoose"),
    flash         = require("connect-flash"),
    passport      = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride= require("method-override"),
    Campground    = require("./models/campground"),
    Comment       = require("./models/comment"),
    User          = require("./models/user"),
    seedDB        = require("./seeds")

var port = process.env.PORT || 3000;
var localDatabaseURL = "mongodb://localhost/yelp_camp";
var databaseURL = process.env.DATABASEURL || localDatabaseURL;

//Requiring routes
var commentRoutes = require("./routes/comments"),
    campgroundsRoutes = require("./routes/campgrounds"),
    authRoutes = require("./routes/auth")

//Connect DB locally to Mongodb
mongoose.set('useNewUrlParser', true);
// mongoose.connect("mongodb://localhost/yelp_camp");
mongoose.connect(databaseURL);

//Connect DB to mLabs
// mongoose.set('useNewUrlParser', true);
// mongoose.connect("mongodb://gvinces:sora112@ds049150.mlab.com:49150/heroku_b07m9f6r");




app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB();

//Passport Config
app.use(require("express-session")({
  secret: "Once againg Autumn is the cutest!",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

app.use("/", authRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campgroundsRoutes);

app.listen(port, function(){
  console.log("Server has started!");

});
