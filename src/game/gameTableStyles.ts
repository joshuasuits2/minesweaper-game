import {makeStyles} from '@mui/styles';

export const useGameTableStyles = makeStyles({
  cell: {
    width: 30,
    height: 30,
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: '0px !important',
  },
  text: {
    fontWeight: 'bold',
    margin: 0,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
