import React, {useState} from "react";
import AWS from 'aws-sdk'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Transition } from 'react-transition-group';
import anime from 'animejs';
import SwipeableTextMobileStepper from './Stepper';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  el: {
    height: '16px',
    width: '16px',
    backgroundColor: 'green',
  },
}));

function ProgressWindow() {
  const classes = useStyles();
  const animationRef = React.useRef(null);
  React.useEffect(() => {
    animationRef.current = anime({
      targets: '.el',
      translateX: 250,
      delay: function(el, i) {
        return i * 100;
      },
      loop: true,
      direction: "alternate",
      easing: "easeInOutSine"
    });
  }, []);
  return (
    <div className={classes.el}>
      <div className='el'>
        Thinking...
      </div>
    </div>
  );
}

function Upload() {
  const [uploaded, setUploaded] = useState(0);
  const [phase1, setPhase1] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const config = {
    bucketName: process.env.REACT_APP_BUCKET_NAME,
    dirName: process.env.REACT_APP_DIR_NAME,
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
        console.log('putted in S3');
      })
      .send((err) => {
         if (err) {
            console.log('error blah');
            console.log(err);
            console.log(myBucket);
         }
      }
    );
    console.log('done !');

  }

  // for react-aws-s3 lib
  const handleClick = (event) => {
    event.preventDefault();
    let file = event.target.files[0];
    console.log('upload: '+file);
    uploadFile(file);
    handleOpen();
  };
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
        <center>
        <form className='upload-steps' onSubmit={handleClick}>
            <input
              // accept=".pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document/*"
                id="uploadFormId"
                multiple
                className={classes.input}
                type="file"
                onChange={handleClick}
            />
            <label htmlFor="uploadFormId">
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
        <div>
          <button type="button" onClick={handleOpen}>
           test button (don't click)
          </button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            maxWidth='md'
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
            <div className={classes.paper}>
              <h3 id="transition-modal-title">Resume-AI Process!</h3>
              <p id="transition-modal-description">AI workflow under way...</p>
              <SwipeableTextMobileStepper/>
            </div>
            </Fade>
          </Modal>
        </div>
      </center>
    </div>
  );
}
export default Upload;