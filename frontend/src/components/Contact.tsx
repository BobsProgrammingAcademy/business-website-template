import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import axios from 'axios';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LocationIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { useTheme } from '@mui/material/styles';

import Map from './Map';

interface ContactProps {
  address: string;
  email: string;
  phone: string;
  latitude: number;
  longitude: number;
}

const Contact = (): JSX.Element => {
  const theme = useTheme();

  const [contact, setContact] = useState<ContactProps[]>([]);

  const fetchContact = () => {
    axios
      .get<ContactProps[]>('http://127.0.0.1:8000/contact', {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        setContact(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchContact();
  }, []);

  return (
    <div id='contact'>
      <Box
        sx={{
          paddingTop: 5,
          paddingBottom: 10,
          paddingX: 2,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Box marginBottom={4}>
          <Typography
            variant='h5'
            align='center'
            fontWeight={700}
            marginTop={theme.spacing(1)}
            gutterBottom
            sx={{
              color: theme.palette.text.primary,
              textTransform: 'uppercase',
            }}
          >
            Contact
          </Typography>
          <Typography
            variant='subtitle1'
            align='center'
            marginTop={theme.spacing(1)}
            gutterBottom
            color={theme.palette.text.secondary}
          >
            We would love to hear from you
          </Typography>
        </Box>
        {contact.slice(0, 1).map((item, i) => (
          <Container key={i}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'brightness(0.9)',
                  }}
                >
                  <Map
                    coordinates={[item.latitude, item.longitude]}
                    zoom={13}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  display='flex'
                  flexDirection='column'
                  justifyContent='center'
                  marginTop={15}
                  marginBottom={6}
                >
                  <Box
                    component={ListItem}
                    disableGutters
                    width='auto'
                    padding={0}
                    marginLeft={5}
                    marginBottom={2}
                  >
                    <PhoneIcon
                      sx={{
                        color:
                          theme.palette.mode === 'dark'
                            ? theme.palette.primary.main
                            : theme.palette.success.dark,
                        width: 25,
                        height: 25,
                        marginRight: 1,
                      }}
                    />
                    <ListItemText primary={item.phone} />
                  </Box>
                  <Box
                    component={ListItem}
                    disableGutters
                    width='auto'
                    padding={0}
                    marginLeft={5}
                    marginBottom={2}
                  >
                    <EmailIcon
                      sx={{
                        color:
                          theme.palette.mode === 'dark'
                            ? theme.palette.primary.main
                            : theme.palette.success.dark,
                        width: 25,
                        height: 25,
                        marginRight: 1,
                      }}
                    />
                    <ListItemText primary={item.email} />
                  </Box>
                  <Box
                    component={ListItem}
                    width='auto'
                    padding={0}
                    marginLeft={5}
                    marginBottom={1}
                    disableGutters
                  >
                    <LocationIcon
                      sx={{
                        color:
                          theme.palette.mode === 'dark'
                            ? theme.palette.primary.main
                            : theme.palette.success.dark,
                        width: 25,
                        height: 25,
                        marginRight: 1,
                      }}
                    />
                    <ListItemText primary={item.address} />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        ))}
      </Box>
    </div>
  );
};

export default Contact;
