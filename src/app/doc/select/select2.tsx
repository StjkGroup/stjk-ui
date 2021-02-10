import React from 'react';
import Select, {OptionType} from '@/../components/Select';
import FavoriteIcon from '@/../components/icons/Favorite';

const data: OptionType[] = [{
  label: "无",
  value: "",
  startIcon: <FavoriteIcon/>
},{
  label: "财务基本户",
  value: 0,
  startIcon: <FavoriteIcon/>
},{
  label: "A账户",
  value: 1,
  startIcon: <FavoriteIcon/>
},{
  label: "B账户",
  value: 2,
  startIcon: <FavoriteIcon/>
},{
  label: "C账户",
  value: 3,
  startIcon: <FavoriteIcon/>
},{
  label: "D账户",
  value: 4,
  startIcon: <FavoriteIcon/>
}]

const Select1App = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
  };

  return (
    <Select label={'付款钱包'} options={data} value={value} onChange={handleChange} defaultValue={2}/>
  )
}

export default Select1App;
