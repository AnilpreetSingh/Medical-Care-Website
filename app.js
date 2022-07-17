const express=require('express');
const expressLayouts=require('express-ejs-layouts');

const app=express();

//EJS
app.use(expressLayouts);
app.set('view engine','ejs');

//Middleware to show requests
function logger(req,res,next){
    console.log(`Request Type: ${req.method} from ${req.originalUrl}`);
    next();
}
app.use(logger);

//Body Parser Miidleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Static folder
app.use(express.static(__dirname ));

//Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));

const port=process.env.PORT || 3000;
app.listen(port,console.log(`Server is running on port ${port}`));