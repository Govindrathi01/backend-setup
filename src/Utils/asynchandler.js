const asynhandler =(requesthandler) =>{
    return (req,res,next)=>{
        Promise.resolve(requesthandler(req,res,next)).
        catch((err) =>next(err))
    }
}

export {asynhandler}







// const asynchandler = (fn)=> asyn (req,res,next)
// {
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message 
//         })
//     }
// }