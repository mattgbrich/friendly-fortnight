import React from 'react';

import { titleCase } from '../utils';

function ListItem (props) {
  const { styles, label, data } = props;
  return (
    <li>
      <span style={styles.label}>{label}:</span> {titleCase(data)}
    </li>
  );
}

export default ListItem;
