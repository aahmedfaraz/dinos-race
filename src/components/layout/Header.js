import React, { useState } from 'react';
import icon from '../../assets/icon/ahmedfaraz-icon.png'
// Material Components
import { Container, Typography, IconButton, makeStyles, Modal, Fade, Card, CardContent, CardHeader } from '@material-ui/core';
// Material Icon
import { InfoOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Header = () => {

  const classes = useStyles();

  const [open, setOpen] = useState(false);

    return (
        <Container maxWidth="xs">
          <Typography align="center" variant="body2" component="p">Jurassic World</Typography>
          <Typography align="center" variant="h3" component="p">Isla Sorna Island</Typography>
          <Typography align="center" variant="body2" component="p">By Ahmed Faraz</Typography>
          <IconButton className="infoButton" onClick={() => setOpen(true)}>
            <InfoOutlined color="primary" />
          </IconButton>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            className={classes.modal}
            onClose={() => setOpen(false)}
            closeAfterTransition
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Card className={classes.paper}>
                <CardHeader component="div" title="About Dino's Race" subheader="Developed by Ahmed Faraz"/>
                <CardContent className="card-content">
                  <Typography variant="body2" component="p" gutterBottom>The Project is developed using Web Animation API</Typography>
                  <Typography variant="body1" component="p">TECH USED</Typography>
                  <ul>
                    <li><Typography variant="subtitle2" color="primary">React</Typography></li>
                    <li><Typography variant="subtitle2" color="primary">Web Animation API</Typography></li>
                    <li><Typography variant="subtitle2" color="primary">Context API</Typography></li>
                    <li><Typography variant="subtitle2" color="primary">Material UI</Typography></li>
                    <li><Typography variant="subtitle2" color="primary">GitHub</Typography></li>
                    <li><Typography variant="subtitle2" color="primary">GitHub Actions</Typography></li>
                    <li><Typography variant="subtitle2" color="primary">Surge</Typography></li>
                  </ul>
                  <Typography variant="body2" component="p" align="right">{<img src={icon} alt="icon" className="icon" />}</Typography>
                </CardContent>
              </Card>
            </Fade>
          </Modal>
        </Container>
    )
}

export default Header;
