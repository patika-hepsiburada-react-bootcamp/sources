import React from 'react';
import { FormattedMessage } from 'react-intl';

function Child() {
  return (
    <div>
      <FormattedMessage id="childText" />
    </div>
  );
}

export default Child;
