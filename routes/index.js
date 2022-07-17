const express=require('express');
const members=require('../Members');
const router=express.Router();
router.get('/:id',(req,res)=>{   
    // res.json(members);
    // console.log('id='+req.params.id);
    const id=req.params.id;
    const index=members.findIndex(member=>member.id==id);
    if (index!=-1){

        res.render('homepage',{title:'Homepage',css:'homepage.css',
        fname:members[index].fname,
        lname:members[index].lname,
        gender:members[index].gender,
        age:members[index].age,
        bloodGroup:members[index].bloodGroup,
        heightFeet:members[index].heightFeet,
        heightInches:members[index].heightInches});
    }
    else{
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }
});


router.get('/',(req,res)=>{   

    // console.log(req);
        res.redirect('/1');
  
});

module.exports=router;