import React from "react";
import "./styles.css";
import moment from "moment";
import dayjs from "dayjs";
import { sprintf } from "sprintf-js";

moment.locale("ja");
dayjs.locale("ja");
const COUNT = 10000;

const benchmark = func => {
  const start = new Date().valueOf();
  func();
  return new Date().valueOf() - start;
};

export default function App() {
  const date = "2020-03-26";

  const momentResult = moment(date).valueOf();
  const d = new Date(date);
  // タイムゾーンを合わせる
  const dateResult = d.getTime() + d.getTimezoneOffset() * 60 * 1000;
  const dayjsResult = dayjs(date).valueOf();

  // 一応結果検証
  console.assert(momentResult === dateResult && dateResult && dayjsResult, {
    momentResult,
    dateResult,
    dayjsResult
  });

  const momentTime = benchmark(() => {
    for (let i = 0; i <= COUNT; i++) moment(date).format("MM/DD");
  });
  const dateTime = benchmark(() => {
    for (let i = 0; i <= COUNT; i++) {
      const d = new Date(date);
      sprintf("%02d/%02d", d.getMonth() + 1, d.getDate());
    }
  });
  const dayjsTime = benchmark(() => {
    for (let i = 0; i <= COUNT; i++) dayjs(date).format("MM/DD");
  });

  return (
    <div className="App">
      <h1>moment vs Date vs dayjs performance comparison</h1>
      <div>Time for parse and format {COUNT} times.</div>
      <br />
      <div>moment: {momentTime} ms</div>
      <div>Date: {dateTime} ms</div>
      <div>dayjs: {dayjsTime} ms</div>
      <br />
      <strong>
        dayjs is {(momentTime / dayjsTime).toFixed(1)}x faster than moment
        <br />
        Date is {(momentTime / dateTime).toFixed(1)}x faster than moment
      </strong>
    </div>
  );
}
