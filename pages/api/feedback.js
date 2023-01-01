function handler(req,res){
    //function of api...
//server side code, never being exposed to the visitor of the webpage
//get static props, get serverside props would never be exposed
    res.status(200).json({message: 'this works'});

}
export default handler;