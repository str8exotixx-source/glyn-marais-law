import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { attorneys, practiceAreas } from "@/lib/firm-data";
import logo from "@/assets/glyn-marais-logo.png.asset.json";
import richard from "@/assets/richard-glyn.jpg.asset.json";
import francois from "@/assets/francois-marais.jpg.asset.json";
import brian from "@/assets/brian-frank.jpg.asset.json";
import willem from "@/assets/willem-de-villiers.jpg.asset.json";
import riaan from "@/assets/riaan-du-plessis.jpg.asset.json";
import tamara from "@/assets/tamara-gerwel.jpg.asset.json";
import robert from "@/assets/robert-january.jpg.asset.json";

const portraits = [richard.url, francois.url, brian.url, willem.url, riaan.url, tamara.url, robert.url];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glyn Marais Inc | Corporate & Commercial Attorneys, Cape Town" },
      {
        name: "description",
        content:
          "Glyn Marais Inc is a Cape Town law firm at the V&A Waterfront, advising on corporate, commercial, banking, finance, property and dispute matters.",
      },
      {
        property: "og:title",
        content: "Glyn Marais Inc | Corporate & Commercial Attorneys, Cape Town",
      },
      {
        property: "og:description",
        content:
          "South African corporate and commercial counsel, based at Cape Town’s V&A Waterfront.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <div className="topline">
          <div className="site-shell topline-inner">
            <p>Strategic legal counsel · Cape Town</p>
            <a href="tel:+27214173300" className="topline-phone">
              <Phone aria-hidden="true" /> +27 (0)21 417 3300
            </a>
          </div>
        </div>
        <div className="site-shell navigation">
          <a className="brand-mark" href="#top" aria-label="Glyn Marais Inc home" onClick={closeMenu}>
            <img src={logo.url} alt="Glyn Marais Inc." width={538} height={115} />
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#expertise">Expertise</a>
            <a href="#firm">Our firm</a>
            <a href="#people">Our people</a>
            <a href="#contact">Contact</a>
          </nav>
          <Button asChild className="navigation-cta">
            <a href="#contact">Speak with our team <ArrowUpRight aria-hidden="true" /></a>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
        {menuOpen && (
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
            <a href="#expertise" onClick={closeMenu}>Expertise <ArrowUpRight aria-hidden="true" /></a>
            <a href="#firm" onClick={closeMenu}>Our firm <ArrowUpRight aria-hidden="true" /></a>
            <a href="#people" onClick={closeMenu}>Our people <ArrowUpRight aria-hidden="true" /></a>
            <a href="#contact" onClick={closeMenu}>Contact <ArrowUpRight aria-hidden="true" /></a>
          </nav>
        )}
      </header>

      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="hero-shade" />
        <div className="site-shell hero-content">
          <p className="eyebrow eyebrow-light"><span /> Corporate & commercial law · Cape Town</p>
          <h1 id="hero-title">Counsel for the decisions<br className="hero-break" /> that shape business.</h1>
          <p className="hero-summary">
            Clear-eyed legal advice for complex commercial matters, from a firm rooted at the V&A Waterfront.
          </p>
          <div className="hero-actions">
            <Button asChild className="button-light">
              <a href="#expertise">Explore our expertise <ArrowRight aria-hidden="true" /></a>
            </Button>
            <a className="hero-text-link" href="#people">Meet the attorneys <ArrowUpRight aria-hidden="true" /></a>
          </div>
          <a href="#firm" className="hero-scroll" aria-label="Scroll to firm introduction">
            <span>V&A Waterfront, South Africa</span><ArrowDown aria-hidden="true" />
          </a>
        </div>
      </section>

      <div className="proof-strip" aria-label="Firm at a glance">
        <div className="site-shell proof-inner">
          <div><span>01 / Established</span><strong>At the forefront since 1990</strong></div>
          <div><span>02 / Practice</span><strong>Corporate & commercial law</strong></div>
          <div><span>03 / Location</span><strong>V&A Waterfront, Cape Town</strong></div>
          <a href="#contact" className="proof-link">Start a conversation <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>

      <section id="firm" className="firm-section section-pad">
        <div className="site-shell firm-grid">
          <div className="firm-photo-wrap">
            <img
              className="firm-photo"
              src={"/__l5e/assets-v1/668afe64-dd8b-49ff-ab61-e026a27bb808/glyn-marais-west-quay-office.jpg"}
              alt="7 West Quay, the Cape Town address listed for Glyn Marais Inc."
              width={450}
              height={600}
              loading="lazy"
            />
            <div className="photo-caption"><span>WEST QUAY, CAPE TOWN</span><span>33°54'39.5&quot;S · 18°25'18.8&quot;E</span></div>
          </div>
          <div className="firm-copy">
            <p className="eyebrow"><span /> Independent perspective. Informed advice.</p>
            <h2>A long view.<br /><em>A sharper focus.</em></h2>
            <p className="body-lead">
              Glyn Marais Inc has been at the forefront of its practice areas in South Africa since 1990.
            </p>
            <p>
              From its Cape Town base, the firm serves businesses navigating important transactions,
              sophisticated financing and high-stakes disputes. A close-knit, specialised team brings
              commercial understanding to every brief.
            </p>
            <a className="inline-link" href="#people">Discover our attorneys <ArrowDownRight aria-hidden="true" /></a>
            <div className="firm-signature"><span>G.M.</span><span>Legal insight. Commercial perspective.</span></div>
          </div>
        </div>
      </section>

      <section id="expertise" className="expertise-section section-pad">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span /> How we advise</p>
              <h2>Depth where<br /><em>it matters.</em></h2>
            </div>
            <p className="section-intro">
              Specialist legal thinking across the commercial matters shaping business in South Africa and beyond.
            </p>
          </div>
          <div className="practice-grid">
            {practiceAreas.map((area) => (
              <article className="practice-item" key={area.number}>
                <span className="practice-number">{area.number}</span>
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.detail}</p>
                </div>
                <ArrowUpRight className="practice-arrow" aria-hidden="true" />
              </article>
            ))}
          </div>
          <p className="practice-note">Also advising across competition, employment, intellectual property, tax, telecommunications, trusts and related fields.</p>
        </div>
      </section>

      <section className="quote-band" aria-label="Firm philosophy">
        <div className="site-shell quote-inner">
          <span className="quote-mark" aria-hidden="true">“</span>
          <blockquote>
            The best legal advice begins<br className="quote-break" /> with understanding the business.
          </blockquote>
          <p>COMMERCIAL THINKING, WITH THE LAW IN FOCUS.</p>
        </div>
      </section>

      <section id="people" className="people-section section-pad">
        <div className="site-shell">
          <div className="section-heading people-heading">
            <div>
              <p className="eyebrow"><span /> Meet the team</p>
              <h2>Experience<br /><em>with perspective.</em></h2>
            </div>
            <p className="section-intro">
              Seven listed practitioners. A breadth of commercial experience. A thoughtful team around the table.
            </p>
          </div>
          <div className="people-grid">
            {attorneys.map((attorney, index) => (
              <article className="person" key={attorney.name}>
                <div className="person-photo-wrap">
                  <img
                    src={portraits[index]}
                    alt={attorney.name}
                    width={560}
                    height={680}
                    loading="lazy"
                  />
                  <span className="person-index">0{index + 1}</span>
                </div>
                <div className="person-details">
                  <p>{attorney.position}</p>
                  <h3>{attorney.name}</h3>
                  <span className="person-focus">{attorney.focus}</span>
                  <details className="person-bio">
                    <summary>Profile <ArrowDown aria-hidden="true" /></summary>
                    <p>{attorney.biography}</p>
                  </details>
                </div>
              </article>
            ))}
          </div>
          <p className="profiles-note">
            Attorney profiles are concise summaries of public listings. For current credentials and availability, please contact the firm.
            <a href="https://www.attorneys.co.za/AttorneyResultsPage.asp?CompanyID=1398" target="_blank" rel="noreferrer"> View source listings <ArrowUpRight aria-hidden="true" /></a>
          </p>
        </div>
      </section>

      <section id="contact" className="contact-section section-pad">
        <div className="site-shell contact-grid">
          <div className="contact-heading">
            <p className="eyebrow eyebrow-light"><span /> Get in touch</p>
            <h2>Start with<br /><em>a conversation.</em></h2>
            <p>For enquiries, contact the Cape Town office directly.</p>
          </div>
          <div className="contact-details">
            <a className="contact-method" href="tel:+27214173300">
              <span className="contact-icon"><Phone aria-hidden="true" /></span>
              <span><small>Cape Town · V&A Waterfront</small><strong>+27 (0)21 417 3300</strong></span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="contact-method" href="mailto:inlaw@glynmarais.co.za">
              <span className="contact-icon"><Mail aria-hidden="true" /></span>
              <span><small>Email the firm</small><strong>inlaw@glynmarais.co.za</strong></span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="contact-method contact-address" href="https://www.google.com/maps/search/?api=1&query=-33.91098,18.42189" target="_blank" rel="noreferrer">
              <span className="contact-icon"><MapPin aria-hidden="true" /></span>
              <span><small>Visit our office</small><strong>Suite 301, 3rd Floor, 7 West Quay<br />West Quay Road, V&A Waterfront<br />Cape Town, South Africa</strong></span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-shell footer-main">
          <a href="#top" className="footer-brand" aria-label="Glyn Marais Inc, back to top">
            <img src={logo.url} alt="Glyn Marais Inc." width={538} height={115} loading="lazy" />
          </a>
          <p>Corporate & commercial law<br />V&A Waterfront · Cape Town</p>
          <a className="footer-top" href="#top">Back to top <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="site-shell footer-bottom">
          <span>© {new Date().getFullYear()} Glyn Marais Inc.</span>
          <span>Legal insight. Commercial perspective.</span>
          <a href="tel:+27112863700">Johannesburg · +27 11 286 3700</a>
        </div>
      </footer>
    </main>
  );
}