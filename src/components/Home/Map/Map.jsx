// MapSection.jsx
import './Map.scss';

const MapSection = () => {
  return (
    <section className="map-section">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d111203.41123545064!2d-95.0557309727971!3d29.425680619801476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sTexas%20City%20restaurant!5e0!3m2!1sen!2sng!4v1730726146306!5m2!1sen!2sng"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Location Map"
      ></iframe>
    </section>
  );
};

export default MapSection;
