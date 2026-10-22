import { CelestialParticles } from "@/components/home/ButterflyParticles";

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
  showCelestial?: boolean;
};

export function PageContainer({ children, className = "", showCelestial = true }: PageContainerProps) {
  return (
    <>
      {showCelestial ? (
        <div className="global-butterfly global-celestial" aria-hidden="true">
          <div className="butterfly-field">
            <CelestialParticles />
          </div>
        </div>
      ) : null}
      <div className={`page-container ${className}`}>{children}</div>
    </>
  );
}
