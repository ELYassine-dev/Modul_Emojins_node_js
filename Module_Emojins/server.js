//create server with express

const express=require('express');
const app=express();
const url=require('url');
const port=3333;
const students=[
    {id:1,name:"moda"},
    {id:2,name:"mourad"},
    {id:3,name:"noura"},
    {id:4,name:"anouar"},
    {id:5,name:"hoda"},
    ]



app.get('/:ids',(req,res)=>{
    const {ids}=req.params;
   const arr=students.find((item)=>item.id===Number(ids))
    res.status(200).json({
        message:"data found",
        data:arr,
    })
})

app.delete('/:idst',(req,res)=>{
 const {idst}=req.params;
 const deletestudent=students.find((item)=>item.id===Number(idst))
// res.send(deletestudent);
if(!deletestudent){
    res.status(500).json({message: `student at id ${idst} not found`})
}
else{
    const deletestdnt=students.filter((item)=>item.id!==Number(idst))

    res.status(200).json({
        message:`student at id ${idst} has deleted susseccfly`,
        data:deletestdnt,
    })
}

})
app.use(express.json())

app.post('/create',(req,res)=>{
    let {newstudent}=req.body;
    newstudent={
        id:students.length+1,
        ...newstudent,
    }
    students.push(newstudent)

res.status(200).json({message:"student inserted ",
    data:students
})
})

app.put('/update/:up',(req,res)=>{
    const {up}=req.params;
    let stdfound=students.find((item)=>item.id===Number(up))
    let index=students.indexOf(stdfound);
    // console.log(index)
    
    students[index]={
        ...stdfound,
        name:"yassine"
    }
res.status(200).json(students)




})


app.get('/home',(req,res)=>{
    const urls=url.parse(req.url,true);
    res.send(urls);
})
app.get('/help',(req,res)=>{
    const {name,age}=req.query;
    res.send(name+""+age);
})
app.get('/setting/:id',(req,res)=>{
    const ids= req.params.id;
    res.send("your id is: "+ids);
})



.listen(port,()=>{
    console.log(`server running at: http://localhost:${port}`);
})