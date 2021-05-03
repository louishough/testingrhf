import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import FormDropDown from '../components/FormDropDown';

const Admin = ({ data }) => {
  const { languages } = data;
  const [isEditing, setIsEditing] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'all',
    reValidateMode: 'all'
  });

  return (
    <div className="admin">
      <>
        <form onSubmit={handleSubmit(console.log('test'))}>
          <fieldset>
            <ul className="c-form-list">
              <>
                <FormDropDown
                  text="Language"
                  name="language_id"
                  forLabel="adminSelectLanguage"
                  id="adminSelectLanguage"
                  placeholder="Please select a language"
                  dropDownData={languages}
                  defaultValue={'default'}
                  formMethod={register('languageInput', {
                    required: true
                  })}
                />
                {errors.languageInput && (
                  <div>
                    <p>ERROR!</p>
                  </div>
                )}
              </>
            </ul>
          </fieldset>
          <button>Submit</button>
        </form>
      </>
    </div>
  );
};

export default Admin;
