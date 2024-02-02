import React, { useState } from "react";
import Modal from "react-modal";
import logo from "./logo.svg";
import "./App.css";
import MyPdf from "./MyPdf";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const urlSearchParams = new URLSearchParams(window.location.search);
  const nameFromUrl = urlSearchParams.get("name");
  const name = nameFromUrl || "James";

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  /* Download button */
  const pdfDownloadLink = () => (
    <PDFDownloadLink document={<MyPdf name={name} />}>
      {({ loading }) =>
        loading ? (
          <button>Loading Document...</button>
        ) : (
          <button>Download</button>
        )
      }
    </PDFDownloadLink>
  );

  return (
    <div className="App-container">
      <h2>Hi {name}</h2>
      <img src={logo} className="App-logo" alt="logo" />
      <a
        className="App-link"
        href="https://www.npmjs.com/package/@react-pdf/renderer"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn more about ReactPdf
      </a>
      <p>Click the buttons below to preview or download your PDF</p>

      <div className="buttons-container">
        <button onClick={openModal}>Preview</button>

        {pdfDownloadLink()}
      </div>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="PDF Preview"
          style={{
            content: {
              height: "80vh",
              width: "70vw",
              margin: "auto",
              overflow: "hidden",
            },
          }}
        >
          <PDFViewer width="100%" height="550px">
            <MyPdf name={name} />
          </PDFViewer>
          <button onClick={closeModal} style={{ marginRight: "16px" }}>
            Close Preview
          </button>
          {pdfDownloadLink()}
        </Modal>
      )}
    </div>
  );
}

export default App;
