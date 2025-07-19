'use client';

import { useState, useEffect, JSX } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaBars, FaAngleDoubleRight, FaChevronDown } from 'react-icons/fa';
import './header.css';

const CustomNavbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    products: false,
    resources: false
  });
  const pathname = usePathname();

  const toggle = (): void => setIsOpen(!isOpen);

  const toggleMobileDropdown = (dropdown: 'products' | 'resources') => {
    setMobileDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 700; // Changed from 992 to 1200 for laptop compatibility
      setIsMobile(mobile);
      
      // Close mobile menu if screen becomes desktop size
      if (!mobile) {
        setIsOpen(false);
        setMobileDropdowns({ products: false, resources: false });
      }
    };

    // Check on mount
    checkScreenSize();
    
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setMobileDropdowns({ products: false, resources: false });
    }
  }, [isOpen]);

  const isActive = (href: string) => pathname === href;

  const isDropdownActive = (basePath: string) => pathname.startsWith(basePath);

  const handleMobileNavClick = () => {
    setMobileDropdowns({ products: false, resources: false });
    toggle();
  };

  return (
    <>
      <Navbar
        fixed="top"
        className={`custom-navbar ${scrolled ? 'scrolled' : ''} ${isOpen && isMobile ? 'navbar-hidden' : ''}`}
        bg="transparent"
        variant="dark"
        style={{fontFamily:"inter"}}
      >
        <Container fluid>
          {/* Logo (Left) */}
          <Navbar.Brand as={Link} href="/">
            <Image
              src="/navbarlogo.svg"
              alt="Immerse AI Logo"
              width={150}
              height={40}
              className="d-inline-block align-top"
              priority
            />
          </Navbar.Brand>

          {/* Mobile Toggle Button - Only show on mobile */}
          {isMobile && (
            <div className="ms-auto">
              <button onClick={toggle} className="navbar-toggler-icon">
                <FaBars />
              </button>
            </div>
          )}
          
          {/* Centered Navigation Links (Desktop/Laptop Only) */}
          {!isMobile && (
            <Nav className="mx-auto">
              <Nav.Link 
                as={Link} 
                href="/" 
                className={`nav-item-link ${isActive('/') ? 'active' : ''}`}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                href="/about" 
                className={`nav-item-link ${isActive('/about') ? 'active' : ''}`}
              >
                MasterClasses
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                href="/careers" 
                className={`nav-item-link ${isActive('/careers') ? 'active' : ''}`}
              >
                AI Challenge
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                href="/contact" 
                className={`nav-item-link ${isActive('/contact') ? 'active' : ''}`}
              >
                AI Playground
              </Nav.Link>
            </Nav>
          )}

          {/* Right-aligned Buttons (Desktop/Laptop Only) */}
          {!isMobile && (
            <Nav className="align-items-center">
              <Button className="signup mx-2">Sign up</Button>
              <Button className="login mx-2">Log in</Button>
            </Nav>
          )}
        </Container>
      </Navbar>

      {/* --- MOBILE SIDEBAR --- Only render on mobile */}
      {isMobile && (
        <div className={`sidebar-container ${isOpen ? 'open' : ''}`} style={{fontFamily:"inter"}}>
          <div className="sidebar-header">
            <Navbar.Brand as={Link} href="/">
              <Image
                src="/navbarlogo.svg"
                alt="Immerse AI Logo"
                width={130}
                height={40}
                className="d-inline-block align-top align-left me-4"
                priority
              />
            </Navbar.Brand>
            <button onClick={toggle} className="close-btn">
              <FaAngleDoubleRight />
            </button>
          </div>
          
          <Nav className="main-nav" style={{fontFamily:"inter"}}>
            <Nav.Link 
              as={Link} 
              href="/" 
              className={isActive('/') ? 'active' : ''} 
              onClick={handleMobileNavClick}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              href="/about" 
              className={isActive('/about') ? 'active' : ''} 
              onClick={handleMobileNavClick}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              href="/careers" 
              className={isActive('/careers') ? 'active' : ''} 
              onClick={handleMobileNavClick}
            >
              Careers
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              href="/contact" 
              className={isActive('/contact') ? 'active' : ''} 
              onClick={handleMobileNavClick}
            >
              Contact Us
            </Nav.Link>
            <div className="sidebar-buttons">
              <Button className="signup">Sign up</Button>
              <Button className="login">Log in</Button>
            </div>
          </Nav>
        </div>
      )}
    </>
  );
};

export default CustomNavbar;