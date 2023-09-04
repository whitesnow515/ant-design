import * as React from 'react';

import { useWarning } from '../_util/warning';

export interface PropWarningProps {
  dropdownMatchSelectWidth?: boolean;
}

/**
 * Warning for ConfigProviderProps.
 * This will be empty function in production.
 */
const PropWarning = React.memo(({ dropdownMatchSelectWidth }: PropWarningProps) => {
  const warning = useWarning();

  warning(
    dropdownMatchSelectWidth === undefined,
    'deprecated',
    'ConfigProvider',
    '`dropdownMatchSelectWidth` is deprecated. Please use `popupMatchSelectWidth` instead.',
  );

  return null;
});

if (process.env.NODE_ENV !== 'production') {
  PropWarning.displayName = 'PropWarning';
}

export default process.env.NODE_ENV !== 'production' ? PropWarning : () => null;