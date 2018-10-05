import React from 'react';

import buildStyles from './styles';
import ListItem from './components/ListItem';

function FormViewer (props) {
  const styles = buildStyles(); // make this a function so things like color palette and vars can be passed to it

  if(!props.form) return <div>Loading Form...</div>

  const { name, age, job } = props.form;
  return (
    <div>
      <h1 style={styles.title}>Form Viewer Component</h1>
      <ul style={styles.list}>
        <ListItem
          styles={styles}
          label={'Name'}
          data={name}
        />
        <ListItem
          styles={styles}
          label={'Age'}
          data={age}
        />
        <ListItem
          styles={styles}
          label={'Job'}
          data={job}
        />
      </ul>
    </div>
  )
}

export default FormViewer;
