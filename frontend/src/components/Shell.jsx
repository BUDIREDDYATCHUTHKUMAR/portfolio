import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Overview" },
  { to: "/projects", label: "Projects" }
];

export function Shell({ children }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Link to="/" className="brand">
          <span className="brand-mark">AK</span>
          <div>
            <strong>Budireddy Atchuth Kumar</strong>
            <span>Software Engineer</span>
          </div>
        </Link>

        <nav className="sidebar-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <p className="eyebrow">Target roles</p>
          <p>Software Engineer</p>
          <p>Python Developer</p>
          <p>AI / ML Engineer</p>
        </div>
      </aside>

      <main className="main-content">{children}</main>
    </div>
  );
}

