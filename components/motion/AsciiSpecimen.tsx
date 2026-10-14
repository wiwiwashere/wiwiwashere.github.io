import { asciiSpecimens, type AsciiSpecimenVariant } from "./ascii-specimens";

type AsciiSpecimenProps = {
  className?: string;
  state?: "static" | "assemble" | "dissolve" | "shimmer";
  variant: AsciiSpecimenVariant;
};

export function AsciiSpecimen({
  className = "",
  state = "static",
  variant,
}: AsciiSpecimenProps) {
  const specimen = asciiSpecimens[variant];

  return (
    <div
      className={`ascii-specimen ascii-specimen-${variant} ascii-specimen-${state} ${className}`.trim()}
      aria-hidden="true"
    >
      <pre className="ascii-specimen-desktop">{specimen.desktop}</pre>
      <pre className="ascii-specimen-mobile">{specimen.mobile}</pre>
    </div>
  );
}
