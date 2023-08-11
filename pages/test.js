// import 'antd/dist/antd.css';
import { DatePicker } from 'antd';
import { useState } from 'react';
import moment from 'moment';
const { RangePicker } = DatePicker;


const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  values: [10, 25, 30, 15, 50],
};

function App2() {

  const [dates, setDates] = useState([])
  console.log(dates)


  return (
    <div style={{ margin: 20 }}>
      < RangePicker
        onChange={(values) => {
         
          setDates(values.map(item=>{
            return  moment(item).format('YYYY-DD-MM')
          }))
        }}

      />
    
    </div>
  );
}

export default App2;