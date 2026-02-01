export default function Navbar(){
    return(
        <header className="navbar">
            <div className="navbar-inner">
                {/* Brand */}
                <div className="navbar-brand">
                    <span className="brand-text">Void Matrix</span>
                </div>
                {/* links */}
                <nav className="navbar-links">
                    <a href="#home">Home</a>
                    <a href="#solutions">Solutions</a>
                    <a href="#platforms">Platfroms</a>
                    <a href="#company">Company</a>
                    <a href="#conact">Contact</a>
                </nav>
                {/* right cta */}
                <div className="navbar-cta">
                    <button className="btn btn-primary">Estimate Cost</button>
                </div>
            </div>
        </header>
    )
}