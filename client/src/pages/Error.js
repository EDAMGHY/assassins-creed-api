import React from 'react';

const Error = () => {
  React.useEffect(() => {
    document.title = 'Error | Assassins Creed API';
  }, []);
  return <div>Not Found</div>;
};

export default Error;
