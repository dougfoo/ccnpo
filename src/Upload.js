import React, {useState} from "react";
import AWS from 'aws-sdk'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
//    let newArr = fileInput.current.files;  // event.target.files[0];
    let file = event.target.files[0];
    console.log('upload: '+file);
    handleUpload(file);
  };

  const handleUpload = (file) => {
    console.log(file)
    uploadFile(file);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }));
  
  const classes = useStyles();

  return (
        <div className={classes.root}>
            <center>
            <form className='upload-steps' onSubmit={handleClick}>
                <input
                    accept="image/*"
                    id="xxxx"
                    multiple
                    className={classes.input}
                    type="file"
                    onChange={handleClick}
                />
                <label htmlFor="xxxx">
                    <Button variant="contained" color="primary" component="span">
                    Upload Resume
                    </Button>
                </label>
            </form>
            {uploaded 
            ?
            <b> &nbsp; Upload Complete!</b>
            :
            <i> &nbsp; </i>
            }
            </center>
        </div>
  );
}
export default Upload;