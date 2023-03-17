type Props = {
  children: React.ReactNode;
};

const Heading = ({ children }: Props) => {
  return (
    <h1 className="text-3xl font-bold text-center text-indigo-500">
      {children}
    </h1>
  );
};

export default Heading;
