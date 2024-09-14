import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is AG-Chain?",
    answer: "AG-Chain is a blockchain-based platform that revolutionizes the agricultural supply chain by providing transparency, traceability, and efficiency to farmers, distributors, and consumers."
  },
  {
    question: "How does AG-Chain benefit farmers?",
    answer: "AG-Chain empowers farmers by providing direct access to markets, fair pricing, and real-time data on crop demand. It also helps in verifying sustainable farming practices, potentially increasing the value of their produce."
  },
  {
    question: "Is AG-Chain environmentally friendly?",
    answer: "Yes, AG-Chain promotes sustainable agriculture by incentivizing and verifying eco-friendly farming practices. Our blockchain technology has a minimal carbon footprint compared to traditional systems."
  },
  {
    question: "How secure is the data on AG-Chain?",
    answer: "AG-Chain uses advanced blockchain technology to ensure that all data is secure, immutable, and transparent. Each transaction is cryptographically secured and distributed across a network of computers."
  },
  {
    question: "Can consumers trace their food using AG-Chain?",
    answer: "Consumers can scan a QR code on products to view the entire journey of their food from farm to table, including information about the farmer, farming practices, and distribution process."
  }
];

const FaqAndVideo = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#f9f9f9' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem' }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
          <div style={{ flex: '1', backgroundColor: '#ffffff', padding: '1rem' }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{ marginBottom: '1rem' }}>
                <button
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem',
                    width: '100%',
                    textAlign: 'left',
                    backgroundColor: openIndex === index ? '#dbe6be' : '#ffffff',
                    borderRadius: '0.5rem',
                    border: '1px solid #ced4da',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s, border-color 0.3s',
                    position: 'relative',
                  }}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openIndex === index}
                >
                  <span style={{ fontWeight: '600' }}>{faq.question}</span>
                  {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                <div
                  style={{
                    maxHeight: openIndex === index ? '200px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.5s ease-out, padding 0.3s ease',
                    padding: openIndex === index ? '1rem' : '0',
                    backgroundColor: '#ffffff',
                    borderBottomLeftRadius: '0.5rem',
                    borderBottomRightRadius: '0.5rem',
                    marginTop: openIndex === index ? '0.5rem' : '0',
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
          <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '100%', maxWidth: '600px' }}>
              <video
                controls
                src="/path/to/your/video.mp4" // Update with the path to your video file
                style={{ width: '100%', height: '380px', borderRadius: '0.5rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAndVideo;
