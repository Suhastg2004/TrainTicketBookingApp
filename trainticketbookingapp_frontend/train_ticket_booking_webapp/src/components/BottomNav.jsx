const navItems = [
  { label: 'Home', active: true },
  { label: 'My Bookings', active: false },
  { label: 'PNR Status', active: false },
  { label: 'Profile', active: false },
];

function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Primary">
      {navItems.map((item) => (
        <button key={item.label} type="button" className={item.active ? 'nav-item active' : 'nav-item'}>
          {item.label}
        </button>
      ))}
    </nav>
  );
}

export default BottomNav;
