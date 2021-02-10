import React from 'react';
import Select, {OptionType} from '@/../components/Select';

const data: OptionType[] = [{
  label: "无",
  value: "",
},{
  label: "财务基本户",
  value: 0,
},{
  label: "A账户",
  value: 1,
},{
  label: "B账户",
  value: 2,
},{
  label: "C账户",
  value: 3,
},{
  label: "D账户",
  value: 4,
}]

const Select1App = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as number);
  };

  return (
    <Select
      error
      label={'付款钱包'}
      options={data}
      value={value}
      onChange={handleChange}
      defaultValue={2}
      helperText={'error'}
    />
  )
}

export default Select1App;
