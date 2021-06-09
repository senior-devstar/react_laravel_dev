import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  check_icon: {
    color: theme.palette.green,
    display: 'flex',
    margin: 'auto'
  },
  close_icon: {
    color: theme.palette.pink,
    display: 'flex',
    margin: 'auto'
  },
  plus_minus_icon: {
    color: theme.palette.green,
  }
}));

export default useStyles;