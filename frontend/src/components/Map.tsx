import { LatLngExpression } from 'leaflet';
import { useTheme } from '@mui/material/styles';
import { MapContainer, Circle, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface Props {
  coordinates: [number, number];
  zoom: number;
}

const Map = ({ coordinates, zoom }: Props): JSX.Element => {
  const theme = useTheme();
  const position: LatLngExpression = coordinates;
  const fillBlueOptions = {
    fillColor:
      theme.palette.mode === 'dark'
        ? theme.palette.primary.main
        : theme.palette.success.dark,
  };

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Circle center={position} pathOptions={fillBlueOptions} radius={50} />
    </MapContainer>
  );
};

export default Map;
