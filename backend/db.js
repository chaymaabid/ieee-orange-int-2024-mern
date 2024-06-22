const {MongoClient}=require('mongodb')

let dbConnection
module.exports={
    connectToDb:(callbackfun)=>{
        MongoClient.connect('mongodb://localhost:27017/ToDoTasks').then((client)=>{
            dbConnection=client.db()
            return callbackfun()
        })
        .catch(err=>{console.log(err)
                    return callbackfun(err)
                    })
    },
    getDb:()=>dbConnection
}