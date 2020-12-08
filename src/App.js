import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { BrowserRouter, Route } from 'react-router-dom';
import CustomizedTimeline from './timeline';
import Upload from "./Upload";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/about/">
        evolve.foostack.ai
      </Link>{' '}
      {new Date().getFullYear()}
      {'. Built with '}
      <Link color="inherit" href="https://material-ui.com/">
        React and Material-UI.
      </Link>
    </Typography>
  );
}
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },  
  content: {
    flex: '1 0 auto',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(2),
    cursor: 'pointer',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  card2: {
    display: 'flex',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial'
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  media: {
    height: 140,
  },
  media2: {
    height: 140,
    width: 140,
    paddingLeft: '25%',
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));



export default function FooStack() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const dialogHeader = "Contact Placeholder";
  const dialogBody = "Placeholder for Contact Form w/ Captcha";

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <BrowserRouter >

    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <ThreeSixtyIcon className={classes.icon} onClick={() => { document.location.href = '/'; }}>
          </ThreeSixtyIcon>
          <Link variant="h6" className={classes.title} color="inherit" href="/">
            evolve.foostack.ai
          </Link>
          <Button color="inherit" onClick={handleClickOpen}>Contact</Button>
        </Toolbar>
      </AppBar>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
        fullWidth={true}
        PaperProps={{
          style: {
            backgroundColor: '#d4d7dd',
            boxShadow: '3',
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{dialogHeader}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogBody}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Send
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Hero unit */}
        <Route exact path="/about" render={() => (
          <div className={classes.heroContent}>
            <Container maxWidth="md">
              <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
                evolve.foostack.ai Origins and History
              </Typography>
              <CardMedia
                  className={classes.media}
                  image='https://live.staticflickr.com/3560/3798751206_726243b057_b.jpg'
              />
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                The word "Foo" has a storied history in computer science from the 50's at MIT and the 70's with origins of C and Unix 
                (K&apos;R).   Foo and bar are common first variables used -- bit of a tech/geek history and play on words.
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>              
                 This site is to document exploration of a "full stack" data science platform mixing tech like React/JS,
                 backend in Java/Python/C++, SQL and NoSQL databases, Machine Learning Models,
                 using best practice Agile &apos; DevOps CI/CD Pipelines.
              </Typography>
              <Card className={classes.card2} >
                <CardMedia
                    className={classes.media2}
                    image='https://lh3.googleusercontent.com/-US0eQeXNjRU/AAAAAAAAAAI/AAAAAAAAAAA/fiUEyuIc0us/photo.jpg?sz=328'
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography align="center" variant="h6" component="h6">
                      About Doug Foo
                    </Typography>
                    <Typography variant="body2" align="center" color="textSecondary" paragraph>              
                      Doug started coding in Jr High on the Apple II and TRS 80, writing his first adventure games.
                      Since then he has been a DevOps engineer (before they called it DevOps), DBA and designer,
                      Software developer, System architect, Data Scientist (Financial Quant), Development and Program manager, and a Sr Executive.
                      Doug prides himself with being able to develop across a full stack of technologies.  Check out his articles on <a href="https://medium.com/@doug.foo">medium.com</a>
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </Container>
          </div>
        )} />
        <Route exact path="/" render={() => (
          <main>
            <div className={classes.heroContent}>
              <Container maxWidth="md">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                  evolve.foostack.ai
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                 Evolve is a non profit that focuses on helping people become the best they can,
                 starting with helping them find new career opportunties by way of:  Resume review and advice,
                 target focus on companies and roles, interview strategy, interview prep and negotiation tips.
                </Typography>

                <Typography variant="h4" align="center" gutterBottom>
                    How it works
                </Typography>
                <CustomizedTimeline/>
              </Container>
            </div>
            <div>
              <Upload />
            </div>
          </main>   
        )}/>   
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
        FooStack         
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          FooStack AI, architecture and design
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
    </BrowserRouter>

  );
}

