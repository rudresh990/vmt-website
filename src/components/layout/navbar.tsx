"use client"
import { useState, useRef, useEffect, use } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

    const [open, setOpen] = useState(false);
    // pathname for making links active
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
    // menuref for closing menu while not in use
    const menuRef = useRef<HTMLDivElement | null>(null);
    const toggleRef = useRef<HTMLButtonElement | null>(null);

    //close if clicked outside 
    useEffect(() => {
        if (!open) return;

        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Node;

            if (
                menuRef.current &&
                !menuRef.current.contains(target) &&
                toggleRef.current &&
                !toggleRef.current.contains(target)
            ) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]
    )
    // close menu on route change 
    useEffect(() => {
        setOpen(false);
    }, [pathname]);
    // body scroll lock 
    useEffect(()=>{
        if(!open) return;

        //lock scroll
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () =>{
            document.body.style.overflow = "";
        };
    },[open]);

    //scroll lock might cause bug by mounting overflow settings on component load only
    //setting scroll lock to nothing while first load 

    useEffect(()=>{
        return()=>{
            document.body.style.overflow="";
        }
    },[])

    
    return (
        <header className="navbar">
            <div className="navbar-inner">
                {/* Brand */}
                <div className="navbar-brand">
                    <span className="brand-text"><Link href={"/"}> <span className="braces">{` {  } `}</span>  VOID MATRIX TECHNOLOGY</Link></span>
                </div>
                {/* links */}
                <nav className="navbar-links">
                    <Link href="/" className={isActive("/") ? "nav-link active" : "nav-link"}>Home</Link>
                    <Link href="services" className={isActive("/services") ? "nav-link active" : "nav-link"}>Services</Link>
                    <Link href="platforms" className={isActive("/platforms") ? "nav-link active" : "nav-link"}>Platfroms</Link>
                    <Link href="company" className={isActive("/company") ? "nav-link active" : "nav-link"}>Company</Link>
                    <Link href="contact" className={isActive("/contact") ? "nav-link active" : "nav-link"}>Contact</Link>
                </nav>
                {/* right cta */}
                <div className="navbar-right">
                    {/* <button className="btn btn-primary navbar-cta">Estimate Cost</button> */}
                    {/* hamburger btn */}
                    <button className="navbar-menu-btn" ref={toggleRef} onClick={() => setOpen(!open)} aria-label="Open menu" aria-expanded={open}>☰</button>
                </div>
            </div>
            {/* Mobile menu */}
            {open && (
                <div className="mobile-nav" ref={menuRef}>
                    <Link href="/" className={isActive("/") ? "nav-link active" : "nav-link"}>Home</Link>
                    <Link href="services" className={isActive("/services") ? "nav-link active" : "nav-link"}>Services</Link>
                    <Link href="platforms" className={isActive("/platforms") ? "nav-link active" : "nav-link"}>Platfroms</Link>
                    <Link href="company" className={isActive("/company") ? "nav-link active" : "nav-link"}>Company</Link>
                    <Link href="contact" className={isActive("/contact") ? "nav-link active" : "nav-link"}>Contact</Link>
                    {/* cta-btn */}
                    {/* <button className="btn btn-primary">
                        Estimate Cost
                    </button> */}
                </div>
            )

            }
        </header>
    )
}