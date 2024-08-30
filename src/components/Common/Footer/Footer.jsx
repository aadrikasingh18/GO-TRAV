// toggleVisible Function: This function checks the scroll position of the document. If the user scrolls down more than 300 pixels, it sets visible to true, showing the "back to top" button. Otherwise, it hides the button.

// scrollTop Function: When called, it smoothly scrolls the page back to the top.

import React, { useState } from "react";
import "../Footer/footer.css"
import {Container} from "react-bootstrap";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible)
  }

  return (
    <>
      <footer className="p-2">
        <Container>
        <p className="quotation dancing-script-travel">To Travel is to Live </p>
        <p className="copy"> Copyright @ 2024 </p>
        </Container>
      </footer>

      <div id="back-top"
        onClick={scrollTop}
        className={visible ? "active" : ""}>
        <i className="bi bi-arrow-up"></i>
      </div>
    </>
  );
};

export default Footer;