import React, {useState} from "react";
import AWS from 'aws-sdk'

function Upload() {
  const fileInput = React.useRef();
  const [uploaded, setUploaded] = useState(0);

  const config = {
    bucketName: process.env.REACT_APP_BUCKET_NAME,
    dirName: process.env.REACT_APP_DIR_NAME /* optional */,
    region: process.env.REACT_APP_REGION,
    accessKeyId: process.env.REACT_APP_ACCESS_ID,
    secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
  };

  // for AWS sdk lib
  AWS.config.update({
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey
  });

  var myBucket = new AWS.S3({
    params: { Bucket: config.bucketName},
    region: config.region,
  })

  const uploadFile = (file) => {
    const params = {
      ACL: 'public-read',
      Key: config.dirName + '/' + file.name,
      ContentType: file.type,
      Body: file,
    };
    myBucket.putObject(params)
      .on('httpUploadProgress', (evt) => {
        setUploaded(true);
        console.log('putted?');
      })
      .send((err) => {
         if (err) {
            console.log('error blah');
            console.log(err);
         }
      }
    );
    console.log('done !');

  }

  // for react-aws-s3 lib
  const handleClick = (event) => {
    event.preventDefault();
    let newArr = fileInput.current.files;
    for (let i = 0; i < newArr.length; i++) {
      handleUpload(newArr[i]);
    }
  };

  const handleUpload = (file) => {
    console.log(file)
    uploadFile(file);
  };
  return (
    <>
      <form className='upload-steps' onSubmit={handleClick}>
        <label>
          Upload file:
          <input type='file' multiple ref={fileInput} />
        </label>
        <br />
        <button type='submit'>Upload</button>
      </form>
      {uploaded 
      ?
      <b>Upload Complete!</b>
      :
      <i>Pending Upload</i>
      }
    </>
  );
}
export default Upload;