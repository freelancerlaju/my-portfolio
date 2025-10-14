// import { SectionTitle } from "./ui/SectionTitle";
import { ProfessionalConnect } from "./ui/get-in-touch";

export function Contact() {
  return (
    <section id="contact" className=" bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        {/* <SectionTitle>Get In Touch</SectionTitle> */}

        <div>
          {/* Integrated Professional Connect with Contact Form */}
          <ProfessionalConnect />
        </div>
      </div>
    </section>
  );
}
