import fs from "fs";

export const deleteUploadedFile = (req, res, next) => {
    //console.log("deleteUploadedFile middleware triggered");
  if (req.file) {
    try {
      if (fs.existsSync(req.file.path)) {
        fs.unlinkSync(req.file.path);
        console.log("Deleted uploaded file:", req.file.path);
      }
    } catch (err) {
      console.error("Error deleting file:", err);
    }
  }
  next();
};
