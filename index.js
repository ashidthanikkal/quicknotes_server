const jsonServer=require('json-server')

const noteServer=jsonServer.create()

const cors=require('cors')

noteServer.use(cors())

const middleware=jsonServer.defaults()

noteServer.use(middleware)

const router=jsonServer.router('db.json')

noteServer.use(router)

const PORT=8008

noteServer.listen(PORT,()=>{
    console.log(`_________ Server starts at port.....${PORT}`);
})


