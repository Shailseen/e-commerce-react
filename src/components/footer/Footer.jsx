const footerList = [
  {
    icon: "fab fa-github",
    profileLink: "https://github.com/Shailseen"
  },
  {
    icon: "fab fa-twitter",
    profileLink: "https://twitter.com/Shailes62273951"
  },
  {
    icon: "fab fa-linkedin-in",
    profileLink: "https://www.linkedin.com/in/shailesh-kumar-840b28220/"
  }

]

export const Footer = () => {
  return (
    <footer class="footer-main">
      <div class="copy-right">
        <i class="fal fa-copyright"></i> 2022 UI Inc. All rights reserved.
      </div>
      <div class="icon-container">
        {footerList.map((item) => 
        <a class="footer-icon" href={item.profileLink} target="_blank">
          <i class={item.icon}></i>
        </a>
        )}
      </div>
    </footer>
  );
};