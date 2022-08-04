import { extname } from 'path';

export const editFileName = (
  req: any,
  file: Express.Multer.File,
  callback: any,
) => {
  const timeStamp = Date.now();
  const randomName = Array(4)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
  const fileExtName = extname(file.originalname);

  callback(null, `${timeStamp}-${randomName}${fileExtName}`);
};
