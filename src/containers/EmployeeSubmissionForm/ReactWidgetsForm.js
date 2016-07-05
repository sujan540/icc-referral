import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList';
import SelectList from 'react-widgets/lib/SelectList';
import Multiselect from 'react-widgets/lib/Multiselect';

const colors = [{ color: 'Red', value: 'ff0000' },
  { color: 'Green', value: '00ff00' },
  { color: 'Blue', value: '0000ff' }];

const reduxFormConfig = {
  form: 'ladoForm'
};

export class ReactWidgetsForm extends Component {
    render() {
      const { handleSubmit } = this.props;

      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Favorite Color</label>
            <Field name="favoriteColor" component={DropdownList} data={colors} valueField="value" textField="color"/>
          </div>
          <div>
            <label>Hobbies</label>
            <Field name="hobbies" component={Multiselect} defaultValue={[]} onBlur={() => this.props.onBlur()} data={['Guitar', 'Cycling', 'Hiking']}/>
          </div>
          <div>
            <label>Sex</label>
            <Field name="sex" component={SelectList} onBlur={() => this.props.onBlur()} data={['male', 'female']}/>
          </div>
          <div>
            <button type="submit">Submit</button>
            <button type="button">Reset Values</button>
          </div>
        </form>
      );
    }

}

ReactWidgetsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};
export default reduxForm(reduxFormConfig)(ReactWidgetsForm);
