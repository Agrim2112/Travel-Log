const searchHelper = (query, req) => {
    if (req.query.search) {
        const regex = new RegExp(req.query.search, "i");
        query = query.where({ $or: [{ title: regex }, { destination: regex }] });
    }
    return query;
}


const paginateHelper = async (model ,query ,req)=> {

    const page = parseInt( req.query.page ) || 1 ; 
    const pageSize = parseInt( req.query.limit ) || 6 ; 
    const skip  = (page-1 ) * pageSize ; 
   
    const regex = new RegExp(req.query.search, "i")    

    const total = await model.countDocuments({"title" : regex})
  
    const pages = Math.ceil(total / pageSize )  ;

    query = query.skip(skip).limit(pageSize) ; 

    return {
        query : query  ,
        page : page ,
        pages : pages  
    }

}


module.exports ={
    searchHelper,
    paginateHelper
}