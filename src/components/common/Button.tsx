interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

export default function Button({ children, fullWidth, ...props }: ButtonProps) {
  return (
    <button
      className={`group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${fullWidth ? 'w-full' : ''}`}
      {...props}
    >
      {children}
    </button>
  );
}