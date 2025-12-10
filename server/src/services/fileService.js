import fs from 'fs';
import File from '../models/File.js';


class FileService {
  createDir(file) {
    return new Promise((resolve, reject) => {
      try {

      } catch(error) {
        return reject(error);
      }
    })
  }
}

export default FileService;