import { footerList } from "./footerList";

export const Footer = () => {
  return (
    <footer class="footer-main">
      <div class="copy-right">
        <i class="fal fa-copyright"></i> 2022 UI Inc. All rights reserved.
      </div>
      <div class="icon-container">
        {footerList.map((item) => 
        <a key={item.id} class="footer-icon" href={item.profileLink} target="_blank">
          <i class={item.icon}></i>
        </a>
        )}
      </div>
    </footer>
  );
};