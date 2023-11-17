import leo from "../images/leo_logo.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerFlex fixedMargin">
        <img src={leo} alt="Leo Pharma logo" />
        <p>
          © Copyright LEO Pharma 2020 <br />
          LEO and the LEO Lion Design are registered trademarks of LEO Pharma{" "}
          <br />
          All rights reserved
          <br />
          <br />
          LEO Pharma corporate website
        </p>
      </div>
      <div className="footerLinks">
        <a href="#">Contact</a>
        <span className="divider">|</span>
        <a href="#">Imprint</a>
        <span className="divider">|</span>
        <a href="#">Conditions</a>
        <span className="divider">|</span>
        <a href="#">Terms of use</a>
        <span className="divider">|</span>
        <a href="#">Privacy</a>
        <span className="divider">|</span>
        <a href="#">Cookie content</a>
      </div>
    </div>
  );
}
