import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayIcon from '@mui/icons-material/PlayCircleOutline';

const HeroButtons = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <>
      <Box
        display='flex'
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
        justifyContent='center'
        marginTop={4}
      >
        <Button
          variant='contained'
          size='large'
          fullWidth={isMd ? false : true}
          href='#about'
          endIcon={<ArrowForwardIcon />}
          disableElevation={true}
          sx={{
            color:
              theme.palette.mode === 'dark'
                ? theme.palette.common.black
                : theme.palette.common.white,
            bgcolor:
              theme.palette.mode === 'dark'
                ? theme.palette.primary.main
                : theme.palette.success.dark,
            padding: '15px 30px',
            marginRight: '15px',
            fontSize: '16px',
            textTransform: 'uppercase',
            border: '2px solid',
            borderColor:
              theme.palette.mode === 'dark'
                ? theme.palette.primary.main
                : theme.palette.success.dark,
            '&:hover': {
              backgroundColor: 'transparent',
              color:
                theme.palette.mode === 'dark'
                  ? theme.palette.primary.main
                  : theme.palette.success.dark,
              border: '2px solid',
              borderColor:
                theme.palette.mode === 'dark'
                  ? theme.palette.primary.main
                  : theme.palette.success.dark,
            },
          }}
        >
          Learn More
        </Button>
        <Box
          marginTop={{ xs: 2, sm: 0 }}
          marginLeft={{ sm: 1 }}
          width={{ xs: '100%', md: 'auto' }}
        >
          <Button
            variant='outlined'
            size='large'
            fullWidth={isMd ? false : true}
            href='#'
            endIcon={<PlayIcon />}
            disableElevation={true}
            sx={{
              color:
                theme.palette.mode === 'dark'
                  ? theme.palette.primary.main
                  : theme.palette.success.dark,
              padding: '15px 30px',
              marginRight: '15px',
              fontSize: '16px',
              textTransform: 'uppercase',
              border: '2px solid',
              borderColor:
                theme.palette.mode === 'dark'
                  ? theme.palette.primary.main
                  : theme.palette.success.dark,
              whiteSpace: 'nowrap',
              minWidth: 'auto',
              '&:hover': {
                backgroundColor:
                  theme.palette.mode === 'dark'
                    ? theme.palette.primary.main
                    : theme.palette.success.dark,
                color:
                  theme.palette.mode === 'dark'
                    ? theme.palette.common.black
                    : theme.palette.common.white,
                border: '2px solid',
                borderColor:
                  theme.palette.mode === 'dark'
                    ? theme.palette.primary.main
                    : theme.palette.success.dark,
              },
            }}
          >
            Watch Demo
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default HeroButtons;
