import { footerList } from "./footerList";

export const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="copy-right">
        <i className="fal fa-copyright"></i> 2022 UI Inc. All rights reserved.
      </div>
      <div className="icon-container">
        {footerList.map((item) => 
        <a key={item.id} className="footer-icon" href={item.profileLink} target="_blank">
          <i className={item.icon}></i>
        </a>
        )}
      </div>
    </footer>
  );
};