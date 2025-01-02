const CustomError = ({ statusCode }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{statusCode ? `Error ${statusCode}` : 'An error occurred'}</h1>
      <p>Something went wrong. Please try again later.</p>
      <a href="/">Go back to Home</a>
    </div>
  );
};

CustomError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomError;
