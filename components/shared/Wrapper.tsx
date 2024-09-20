type WrapperProps = {
  title?: string;
  children?: React.ReactElement;
};

const Wrapper = ({ title, children }: WrapperProps): React.ReactElement => {
  return (
    <section className="container">
      <h1 className="text-center text-white text-xl mb-8">{title}</h1>
      {children}
    </section>
  );
};

export default Wrapper;
