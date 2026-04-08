import { Link, useLocation } from 'react-router-dom';

function AvailableTrainsPage() {
  const location = useLocation();
  const storedSearch = sessionStorage.getItem('trainSearch');

  const data = location.state || (storedSearch ? JSON.parse(storedSearch) : null);

  if (!data) {
    return (
      <div className="page-wrap">
        <section className="content-card">
          <h2>Available Trains</h2>
          <p>No search data found. Please search from Home page.</p>
          <Link to="/" className="text-link">
            Back to Home
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="page-wrap">
      <section className="content-card">
        <h2>Available Trains</h2>
        <p>This page receives the values entered on Home page.</p>

        <div className="summary-grid">
          <div>
            <strong>From:</strong> {data.from}
          </div>
          <div>
            <strong>To:</strong> {data.to}
          </div>
          <div>
            <strong>Journey Date:</strong> {data.journeyDate}
          </div>
          <div>
            <strong>Class:</strong> {data.travelClass}
          </div>
        </div>

        <Link to="/" className="text-link">
          Back to Home
        </Link>
      </section>
    </div>
  );
}

export default AvailableTrainsPage;
