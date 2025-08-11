import { Coffee } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2 text-lg">
      <Coffee className="text-orange" />
      <div>Coffee Library</div>
    </div>
  );
}
