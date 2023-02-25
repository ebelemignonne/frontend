import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  hero: {
    backgroundColor: '#f8f8f8',
    padding: theme.spacing(8, 0, 6),
  },
  heroButton: {
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: '#f8f8f8',
    padding: theme.spacing(6),
  },
}));

function AccueilleSculpture() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.hero}>
        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            Bienvenue sur Elat Zame Sculpture
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Nous fournissons les meilleurs produits et services à nos clients. Découvrez nos dernières offres ci-dessous.
        </Typography>
        <Button variant="contained" color="primary" className={classes.heroButton}>
        Voir nos produits
        </Button>
      </div>

    </div>
  );
}

export default AccueilleSculpture;
