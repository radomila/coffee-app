import { Link } from 'react-router-dom';

interface Props {
  path: string;
  name: string;
  className?: string;
}

export function LinkButton({ path, name, className }: Props) {
  return (
    <Link
      to={path}
      className={className}
    >
      {name}
    </Link>
  );
}
