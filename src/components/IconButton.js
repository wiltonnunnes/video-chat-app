import React from 'react';
import styles from './IconButton.module.css';
import Icon from './Icon';

export default class IconButton extends React.Component {
  render() {
    return (
      <button className={styles.button}>
        <Icon 
          path={this.props.path} 
          size={30}
        />
      </button>
    );
  }
}