import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const stationOptions = [
  'New Delhi (NDLS)',
  'Mumbai (BCT)',
  'Kolkata (HWH)',
  'Chennai (MAS)',
  'Bangalore (SBC)',
  'Pune (PUNE)',
];

const classOptions = ['General', 'Tatkal'];

const popularRoutes = [
  { from: 'New Delhi (NDLS)', to: 'Mumbai (BCT)', travelClass: 'General', label: 'Delhi to Mumbai' },
  { from: 'New Delhi (NDLS)', to: 'Kolkata (HWH)', travelClass: 'Tatkal', label: 'Delhi to Kolkata' },
  { from: 'Bangalore (SBC)', to: 'Chennai (MAS)', travelClass: 'General', label: 'Bangalore to Chennai' },
  { from: 'Mumbai (BCT)', to: 'Pune (PUNE)', travelClass: 'General', label: 'Mumbai to Pune' },
];

function HomePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    from: 'New Delhi (NDLS)',
    to: 'Mumbai (BCT)',
    journeyDate: '',
    travelClass: 'General',
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const applyPopularRoute = (route) => {
    setFormData((prev) => ({
      ...prev,
      from: route.from,
      to: route.to,
      travelClass: route.travelClass,
    }));
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (!formData.journeyDate) {
      return;
    }

    sessionStorage.setItem('trainSearch', JSON.stringify(formData));
    navigate('/available-trains', { state: formData });
  };

  return (
    <div className="page-wrap">
      <section className="hero">
        <h1>Welcome to Railway Booking</h1>
        <p>Plan your trip in a few clicks.</p>
      </section>

      <section className="content-card">
        <h2>Find Train</h2>

        <form onSubmit={handleSearch} className="search-form">
          <div className="field">
            <label htmlFor="fromStation">From</label>
            <select
              id="fromStation"
              value={formData.from}
              onChange={(event) => updateField('from', event.target.value)}
            >
              {stationOptions.map((station) => (
                <option key={station} value={station}>
                  {station}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="toStation">To</label>
            <select
              id="toStation"
              value={formData.to}
              onChange={(event) => updateField('to', event.target.value)}
            >
              {stationOptions.map((station) => (
                <option key={station} value={station}>
                  {station}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="journeyDate">Journey Date</label>
            <input
              id="journeyDate"
              type="date"
              value={formData.journeyDate}
              onChange={(event) => updateField('journeyDate', event.target.value)}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="travelClass">Class</label>
            <select
              id="travelClass"
              value={formData.travelClass}
              onChange={(event) => updateField('travelClass', event.target.value)}
            >
              {classOptions.map((travelClass) => (
                <option key={travelClass} value={travelClass}>
                  {travelClass}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="primary-btn">
            Search Trains
          </button>
        </form>

        <div className="popular-routes-block">
          <h3>Popular Routes</h3>
          <div className="route-list">
            {popularRoutes.map((route) => (
              <button key={route.label} type="button" className="route-btn" onClick={() => applyPopularRoute(route)}>
                {route.label}
              </button>
            ))}
          </div>
          <p className="hint">Selecting a popular route fills From, To and Class. Only date is left to enter.</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
