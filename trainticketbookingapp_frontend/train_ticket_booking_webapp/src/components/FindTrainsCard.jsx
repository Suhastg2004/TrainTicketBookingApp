const classOptions = ['All Classes', 'AC 1 Tier', 'AC 2 Tier', 'Sleeper'];

function FindTrainsCard() {
  return (
    <section className="panel">
      <h2>Find Trains</h2>

      <div className="field-group">
        <label>From</label>
        <p>New Delhi (NDLS)</p>
      </div>

      <div className="field-group">
        <label>To</label>
        <p>Mumbai (BCT)</p>
      </div>

      <div className="field-row">
        <div className="field-group compact">
          <label>Journey Date</label>
          <p>25 May 2024</p>
        </div>

        <div className="field-group compact">
          <label>Class</label>
          <select defaultValue="All Classes" aria-label="Travel class">
            {classOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button type="button" className="search-button">
        Search Trains
      </button>
    </section>
  );
}

export default FindTrainsCard;
