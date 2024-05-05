const path = require("path")
const fs = require("fs")

const deleteImageFile =(req ,deleteImage) => {

    const rootDir = path.dirname(require.main.filename) 

    filePath = path.join( rootDir,`/public/storyImages/${deleteImage}`)
    
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    } else {
        console.log('File does not exist');
    }
    
}


module.exports = deleteImageFile