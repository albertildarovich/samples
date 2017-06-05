import React from 'react';
import Button from 'components/Button';

export default function DeleteReportsComponent({ deleteReports, selectedIds }) {
  const handleClick = () => {
    deleteReports(selectedIds);
  };

  return (
    <Button
      onClick={handleClick}
      buttonClass='button button-red'
      iconClass='icon-delete'
      text='Удалить'
    />
  );
}
