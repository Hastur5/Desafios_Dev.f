import app from "./app"
//Se levanta el server.
const main = () =>{
    app.listen(app.get("port"));
    console.log("Server on port:", app.get("port"))
}

main()