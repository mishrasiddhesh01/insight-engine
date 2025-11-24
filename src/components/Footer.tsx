const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Siddhesh Mishra. 
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Made with love, logic, and mild existential dread.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
