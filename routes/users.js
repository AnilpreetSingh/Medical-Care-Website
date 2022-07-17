const express=require('express');
const members=require('../Members');
const uuid=require('uuid');
const router=express.Router();
const idFilter = req => member => member.id === parseInt(req.params.id);

//login
router.get('/login',(req,res)=>{res.render('login',{ title:'Login',css:'login.css'});});
router.post('/login',(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    console.log(`Login request from ${email} and ${password} `)
    const index=members.findIndex(member=>member.email===email && member.password===password);
    if (index!=-1){
        res.redirect('/'+members[index].id);
    }
    else 
        res.status(400).json({ msg: `No member with the email of ${req.body.email}` });
});


//register
router.get('/register',(req,res)=>{res.render('register',{ title:'Signup',css:'Signup.css'});});
router.post('/register',(req,res)=>{
    const NewMember={
        id:uuid.v4(),
        email:req.body.email,
        password:req.body.password,
    }
    members.push(NewMember);

    // res.json(members);
    res.redirect('/users/edit/'+NewMember.id);
});


//edit Profile
router.get('/edit/:id',(req,res)=>{
    const id=req.params.id;
    const index=members.findIndex(member=>member.id==id);
    if (index!=-1){    
    res.render('editprofile',{ title:'Edit Profile',css:'editprofile.css',
        fname:members[index].fname,
        lname:members[index].lname,
        gender:members[index].gender,
        age:members[index].age,
        bloodGroup:members[index].bloodGroup,
        heightFeet:members[index].heightFeet,
        heightInches:members[index].heightInches  });
    }
    else
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` }); 
});
router.post('/edit/:id',(req,res)=>{
    const id=req.params.id;
    const index=members.findIndex(member=>member.id===id);

    if (index!=-1){
    const id=req.params.id;
    const index=members.findIndex(member=>member.id===id);
    members[index].fname=req.body.fname;
    members[index].lname=req.body.lname;
    members[index].age=req.body.age;
    members[index].bloodGroup=req.body.bloodGroup;
    members[index].heightFeet=req.body.feet;
    members[index].heightInches=req.body.inches;
    members[index].gender=req.body.gender;
    res.redirect(`/${id}`);
}
    else 
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
});

//Get data of Members
router.get('/getdata',(req,res)=>{res.json(members);});

module.exports=router;