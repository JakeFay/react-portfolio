import React, { useState } from "react";
import ProjectList from "./components/Portfolio";
import Nav from "./components/Nav";
import ContactForm from "./components/Contact";

function App() {


  const [currentPage, setCurrentPage] = useState();

  return (
    <>
      <Nav
        setCurrentPage={setCurrentPage}
        currentPage={currentPage} />
      
      {currentPage === 'about' ? <h1>this is the about component</h1> : currentPage === "contact" ? <ContactForm /> : currentPage === 'portfolio' ? <ProjectList /> : currentPage === 'resume' ? <h1>this is the resume component</h1>:<h1>this is the home page component</h1>}

    </>
  );
}

export default App;
