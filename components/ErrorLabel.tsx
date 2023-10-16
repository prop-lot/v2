import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

const ErrorLabel = ({ message }: { message: string }) => {
  return (
    <span className="flex flex-row items-center mt-1">
      <ExclamationCircleIcon className="h-4 w-4 text-red-500" />
      <p className="text-red-500 text-sm">{message}</p>
    </span>
  );
};

export default ErrorLabel;
