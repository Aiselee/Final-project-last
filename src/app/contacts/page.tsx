import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="w-full bg-[#f4e7db] py-20 flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-semibold text-gray-800">Our contacts</h1>
          <p className="mt-2 text-sm text-gray-600">Home &gt; Contacts</p>
        </div>
      </section>

      {/* Contact Form + Image Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Form */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Send Us Message</h2>
              <p className="text-gray-600 mb-6">
                Have a question or suggestion? Send us a message — we’re happy to help.<br/>
                Our team responds quickly and with care.<br/>
                Just fill out the form below and we’ll get back to you as soon as possible.
              </p>
            </div>
            <form className="space-y-4 mt-auto">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-3 rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-3 rounded"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full border border-gray-300 p-3 rounded"
              />
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="save-info" />
                <label htmlFor="save-info" className="text-sm text-gray-600">
                  Save my name and email in this website for future
                </label>
              </div>
              <button
                type="submit"
                className="bg-[#6c4a3f] text-white py-3 px-8 rounded uppercase tracking-wide text-sm"
              >
                Send
              </button>
            </form>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/pics/contacts.webp"
              alt="Contact"
              className="w-full h-full object-cover rounded shadow-md max-h-[600px]"
            />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Map */}
          <div className="w-full h-[400px] mb-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.177418364514!2d76.99538317597602!3d11.013325192173133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8583e065daacb%3A0x47e7de3ec9be059c!2sWeDesignTech!5e0!3m2!1sen!2s!4v1688473834846!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-[#6c4a3f] mb-2" />
              <p className="text-gray-700">
                No: 58 A, East Madison Street, Baltimore, MD, USA 4508
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-[#6c4a3f] mb-2" />
              <p className="text-gray-700">contact@example.com</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-[#6c4a3f] mb-2" />
              <p className="text-gray-700">+000 123 456789</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
