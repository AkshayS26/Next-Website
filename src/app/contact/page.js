import ContactCard from "../components/contactcard";
import ContactForm from "../components/contactform";
import styles from "./contact.module.css";
const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />

        <section className={styles.contact_section}>
          <h2>
            We&apos;d love to hear <span> from you </span>
          </h2>

          <ContactForm />
        </section>
      </div>
    </>
  );
};

export default Contact;
