const routes = [
  'Delhi ↔ Mumbai',
  'Delhi ↔ Kolkata',
  'Bangalore ↔ Chennai',
  'Mumbai ↔ Pune',
];

function PopularRoutes() {
  return (
    <section className="popular-routes">
      <h3>Popular Routes</h3>
      <div className="route-list">
        {routes.map((route) => (
          <span key={route} className="route-chip">
            {route}
          </span>
        ))}
      </div>
    </section>
  );
}

export default PopularRoutes;
