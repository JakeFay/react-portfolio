import React, { useState } from "react";
import ProjectList from "./components/Portfolio";
import Nav from "./components/Nav";
import ContactForm from "./components/Contact";
import About from "./components/About";
import Resume from "./components/Resume";

function App() {


  const [currentPage, setCurrentPage] = useState();

  return (
    <>
      <Nav
        setCurrentPage={setCurrentPage}
        currentPage={currentPage} />
      
      {currentPage === 'about' ? <h1><About /></h1> : currentPage === "contact" ? <ContactForm /> : currentPage === 'portfolio' ? <ProjectList /> : currentPage === 'resume' ? <h1><Resume /></h1>:<h1><About /></h1>}

    </>
  );
}

export default App;
