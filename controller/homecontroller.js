const record = require('../models/record')

module.exports.home = async (req,res)=>{
    var record_data = await record.find({});
    return res.render('home',{
        fetch_data : record_data
    }) 
}
module.exports.insert_record = async (req,res)=>{

    var des = req.body.description;
    var des = des.toLowerCase();

    var str = des.split(' ');
    var sort_str = str.sort();

    var data = sort_str.join(' ');
   
    console.log(data);
    record.create({
        name : req.body.name,
        description : data
    },(err,document)=>{
        if(err){
            console.log('Data Not Inserted');
            return false;
        }
        console.log('data inserted successfully');
        return res.redirect('back');
    });

   
   
}