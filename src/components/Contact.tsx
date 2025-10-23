// import { SectionTitle } from "./ui/SectionTitle";
import { ProfessionalConnect } from "./ui/get-in-touch";

export function Contact() {
  return (
    <section id="contact" className="bg-background text-foreground w-full">
      <div className="w-full">
        {/* <SectionTitle>Get In Touch</SectionTitle> */}

        <div className="w-full">
          {/* Integrated Professional Connect with Contact Form */}
          <ProfessionalConnect />
        </div>
      </div>
    </section>
  );
}
