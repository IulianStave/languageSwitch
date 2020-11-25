import React from 'react';
import LanguageContext from '../contexts/LanguageContext';


class Field extends React.Component {
  //link the class Field to context object LanguageContext
  static contextType = LanguageContext;
  render() {
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return (
      <div className="ui field">
        <label>{text}</label>
        <input/>
      </div>
    )
  }
}

export default Field;