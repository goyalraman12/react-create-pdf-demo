import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyPdf from "./MyPdf";
import { PDFDownloadLink } from "@react-pdf/renderer";

function App() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const nameFromUrl = urlSearchParams.get("name");
  const name = nameFromUrl || "James";

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
    <div className="App">
      <header className="App-header">
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

        <div className="buttons-container">{pdfDownloadLink()}</div>
      </header>
    </div>
  );
}

export default App;
