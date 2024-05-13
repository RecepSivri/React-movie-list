import React, { useState } from 'react';
import { Select } from 'antd';

const { Option } = Select;

interface IPropsSelect {
  onChange: (value: string) => void
  value: string
}

const LanguageSelector = ( props: IPropsSelect ) => {
  const {onChange, value} =  props;
  const [selectedLanguage, setSelectedLanguage] = useState(value);


  const handleLanguageChange = (value: any) => {
    setSelectedLanguage(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Select
      style={{ width: 80, cursor: 'pointer'}}
      placeholder="Select a language"
      onChange={handleLanguageChange}
      value={selectedLanguage}
    >
      <Option value="tr">TR 🇹🇷</Option>
      <Option value="en">En 🇺🇸</Option>
    </Select>
  );
};

export default LanguageSelector;
