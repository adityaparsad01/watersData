import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./water/Header";
import "./styles.css";
import Main from "./water/Main";
import Chart from "./water/Chart";
import { Counter } from "./Counter";

const URL =
  "https://script.googleusercontent.com/macros/echo?user_content_key=HCKikqvr61BZ7640uNjAxVOutUiQS8-jrylyKVKr1F7hOSaeiaASIeU6tJMTmOcyH3SweMU-6Jq0sVIGkTI_A5S0sUQb5qhNm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLZZ2bHU7rBOl0JBAPqro-BBz0rjb8AH4wlfZwxlUZ11VCBHzlFuX595tHpUI1j6HHcc8R8jxPIfbf9n-twQAsO4QUzm43tnENz9Jw9Md8uu&lib=MUtTPjOAPkq5JRfLx-CjaJqsJ1pxaJPgw";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then(function (response) {
        // handle success
        setData(response.data[0].records);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const time = data.map((item) => {
    const time1 = new Date(item.Date);
    const mnth = ("0" + (time1.getMonth() + 1)).slice(-2);
    const day = ("0" + time1.getDate()).slice(-2);
    return [day, mnth, time1.getFullYear()].join("-");
  });

  return (
    <>
      <Header data={time} />
      <Main time={time} />
      <Chart datas={data} />
    </>
  );
};

export default App;
