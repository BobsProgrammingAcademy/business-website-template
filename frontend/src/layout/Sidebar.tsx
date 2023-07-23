import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import StormIcon from '@mui/icons-material/Storm';
import { useTheme } from '@mui/material/styles';

import CustomButton from '../components/CustomButton';

interface Props {
  onClose: () => void;
  open: boolean;
}

const Sidebar = ({ open, onClose }: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <>
      <Drawer
        anchor='left'
        onClose={() => onClose()}
        open={open}
        variant='temporary'
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.background.default,
            width: 256,
          },
        }}
      >
        <Box height='100%'>
          <Box width={1}>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <IconButton size='large' disabled>
                <StormIcon
                  sx={{
                    color:
                      theme.palette.mode === 'dark'
                        ? theme.palette.primary.main
                        : theme.palette.success.dark,
                    height: 40,
                    width: 40,
                  }}
                />
                <Typography
                  variant='h6'
                  sx={{
                    flexGrow: 1,
                    color: theme.palette.text.primary,
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    marginLeft: 1,
                  }}
                >
                  Bob's Company
                </Typography>
              </IconButton>
            </Link>
          </Box>
          <Box padding={2}>
            <Box paddingY={2}>
              <CustomButton href='#products' text='Products' />
              <Box paddingY={1}>
                <CustomButton href='#services' text='Services' />
              </Box>
              <Box paddingY={1}>
                <CustomButton href='#pricing' text='Pricing' />
              </Box>
              <Box paddingY={1}>
                <CustomButton href='#about' text='About' />
              </Box>
              <Box paddingY={1}>
                <CustomButton href='#contact' text='Contact' />
              </Box>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
