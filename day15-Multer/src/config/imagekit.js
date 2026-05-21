let Imagekit  = require('imagekit')


storageInstance  =  new Imagekit({
    urlEndpoint:"https://ik.imagekit.io/s3jq0tngk",
    privateKey:"private_QdsQ/oPcNvGGzEfI5AQH2bnTSXw=",
    publicKey: 'public_j8Deiwfwg8qpDs6sFrpnaHCgYqg='
})

let sendFiles  = async (file,fileName)=>{
    let option = {
        file,
        fileName
    }
    return await storageInstance.upload(option)
}

module.exports = sendFiles