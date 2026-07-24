import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav-container">

        <Link to="/" className="logo">
          Jaishak J
        </Link>

        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#education">EDUCATION</a>
          <a href="#skills">SKILLS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </div>

        <div className="nav-actions">

          <Button asChild>
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </Button>

          <Button asChild variant="outline">
            <Link to="/payments">
              ❤️ Support
            </Link>
          </Button>

          <ThemeToggle />

        </div>

      </nav>
    </header>
  );
}
