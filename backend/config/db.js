const mongoose = require("mongoose")

//Suppress the warning of Deprecating Warning
mongoose.set('strictQuery', true)

//connection
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const idCluster = process.env.ID_CLUSTER

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.${idCluster}.mongodb.net/?retryWrites=true&w=majority`)
        console.log("Conectou ao banco de dados.")
        return dbConn
    } catch (error) {
        console.log(error)
    }
}

conn()

module.export = conn