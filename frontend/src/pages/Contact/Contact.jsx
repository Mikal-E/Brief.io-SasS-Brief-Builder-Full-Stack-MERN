import "./Contact.css"
import "../../styles/hero.css"
import "../../styles/section-heading.css"
import landscape from "../../assets/landscape.jpg"
import headerMockupAlt1 from "../../assets/header-mockup-alt-1.jpg"
import ContactForm from "../../components/ContactForm/ContactForm"
import Faq from "../../components/Faq/Faq"

function ContactPage() {

    return (

        <div className="contact-page-background">

            <section className="hero" style={{ backgroundImage: `url(${headerMockupAlt1})` }}>

                <div className="hero-content hero-content-centered">

                    <h1 className="hero-headline">Talk to us!</h1>

                </div>

            </section>

            <section className="contact-intro">

                <h2 className="section-heading">Omnis iste natus enim ipsam luptatem</h2>

           </section>

           <ContactForm />

           <Faq />

        </div>

    )

}

export default ContactPage