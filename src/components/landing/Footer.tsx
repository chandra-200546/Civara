import fiveuLogo from "@/assets/fiveu-logo.jpeg";
import logo from "@/assets/civara-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-3">
            <img src={logo} alt="Civara logo" className="h-14 w-auto rounded-xl object-contain" />
            <span className="text-xl font-bold">Civara</span>
          </div>

          <p className="mb-6 max-w-md text-sm text-muted-foreground">
            Your AI-powered companion for civil services preparation, from Prelims to Interview.
          </p>

          <div className="flex items-center gap-2">
            <p className="text-xs text-muted-foreground">Developed by</p>
            <img src={fiveuLogo} alt="FiveU Vector Technologies" className="h-6 rounded object-contain" />
          </div>

          <p className="mt-2 text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Civara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
