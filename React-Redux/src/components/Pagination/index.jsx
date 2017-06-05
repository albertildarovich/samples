import * as React from 'react';
import './pagination.less';

function Pagination({ currentPage, limit, onPageClick, count, countable }) {
  const showCount = currentPage * limit;
  const startCount = (showCount - limit) + 1;

  return (<div className='pagination-block'>
    <div className='buttons'>
      <div className='btn-toolbar' role='toolbar'>
        <div className='btn-group' role='group'>
          <button
            key={`prev`} type='button'
            className='btn btn-default'
            onClick={() => onPageClick((+currentPage - 1) || 1)}
            disabled={currentPage <= 1}
          ><span className='prev' />
          </button>
          <button
            key={`next`} type='button'
            className='btn btn-default'
            onClick={() => onPageClick(+currentPage + 1)}
            disabled={countable ? (showCount > count) : ((count && count.length) < limit)}
          ><span className='next' />
          </button>
        </div>
      </div>
    </div>
    <div className='info'>
      <strong>{ (startCount < showCount) && (countable ?
        (startCount + ` - ` + (showCount < count ? showCount : count) + ` из ` + count)
        : (startCount + ` - ` + showCount))
      }</strong>
    </div>
  </div>);
}
Pagination.defaultProps = {
  currentPage: 1,
  limit: 20,
};
export default Pagination;
