import techexecLogo from "@/assets/techexec-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <a href="#home">
          <img src={techexecLogo} alt="TechExec Solutions" className="h-8" />
        </a>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} TechExec Solutions. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Home", "Services", "About", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
