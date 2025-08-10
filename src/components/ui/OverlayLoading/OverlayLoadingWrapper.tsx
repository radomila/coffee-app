import OverlaySpinner from './OverlaySpinner.tsx';
import { OverlayBackground } from './OverlayBackground.tsx';

export function OverlayLoadingWrapper() {
  return (
    <OverlayBackground>
      <OverlaySpinner />
      <span className="sr-only">Loading...</span>
    </OverlayBackground>
  );
}
