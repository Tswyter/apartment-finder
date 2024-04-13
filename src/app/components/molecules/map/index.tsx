interface MapProps {
  address: string;
}


const Map = ({ address }: MapProps) => {
  const formattedAddress = address.split(' ').join('+');

  
  return (
    <div>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://cartes.io/api/maps/search?q=${formattedAddress}`} 
        allowFullScreen
      />
    </div>
  );
};

export default Map;