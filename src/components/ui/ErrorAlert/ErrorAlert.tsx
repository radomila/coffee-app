import { TriangleAlert, X } from 'lucide-react';
import { Button } from '../Button/Button.tsx';
import { LinkButton } from '../LinkButton/LinkButton.tsx';
import { useState } from 'react';

interface Props {
  error: string | null;
}

export function ErrorAlert({ error }: Props) {
  const [isAlertOpened, setIsAlerOpened] = useState(true);

  const handleCloseAlert = () => {
    setIsAlerOpened(false);
  };

  return (
    <>
      {isAlertOpened && (
        <div className="flex flex-col justify-center items-center gap-3 border-1 border-solid border-red rounded-md p-5 w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <Button
            onClick={handleCloseAlert}
            styles="flex justify-end w-full"
          >
            <X />
          </Button>
          <div className="flex gap-2">
            <TriangleAlert className="text-red" />
            <div className="text-xl font-semibold">An error has occured</div>
          </div>
          <div>{error}</div>
          <div className="flex gap-5">
            <LinkButton
              path="/"
              name="Home"
              className="text-white bg-red rounded-md px-6 py-2"
            />
            <Button
              onClick={handleCloseAlert}
              styles="text-red border-1 border-solid border-red rounded-md px-5 py-2"
            >
              Dismiss
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
