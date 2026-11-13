import React, { FC, PropsWithChildren } from 'react';

interface AlertType extends PropsWithChildren {
  type?: string;
}

const Alert: FC<AlertType> = ({ type = 'info', children }) => {
  const styles = {
    padding: '12px 16px',
    borderRadius: '6px',
    margin: '16px 0',
    backgroundColor: type === 'warning' ? '#fef3c7' : '#e0f2fe',
    borderLeft: `4px solid ${type === 'warning' ? '#f59e0b' : '#0284c7'}`
  };

  return <div style={styles}>{children}</div>;
};

export default Alert;
