type FooterProps = {
  isTop?: boolean;
};

export const Footer: React.FC<FooterProps> = ({ isTop = false }) => {
  return (
    <footer className="px-8">
      <div className="relative w-full max-w-3xl mx-auto flex items-center justify-center h-12">
        {isTop && (
          <div className="absolute top-0 left-0 w-[3px] h-full bg-slate-600"></div>
        )}
        <small>© 2022 YEND</small>
      </div>
    </footer>
  );
};
