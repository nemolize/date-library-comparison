import React from "react";
import "./styles.css";
import moment from "moment";
import dayjs from "dayjs";
import { sprintf } from "sprintf-js";
import _ from "lodash";

moment.locale("ja");
dayjs.locale("ja");
const COUNT = 10000;
const MS_OF_HOUR = 1000 * 60 * 60;
const MS_OF_DAY = MS_OF_HOUR * 24;

const benchmark = func => {
  const start = new Date().valueOf();
  for (let i = 0; i < COUNT; i++) func();
  return new Date().valueOf() - start;
};

const benchmarks = obj => _.mapValues(obj, func => benchmark(() => func()));

export default function App() {
  const date = "2020-03-26";

  const parse = benchmarks({
    moment: () => moment(date),
    date: () => new Date(date),
    dayjs: () => dayjs(date)
  });

  const m = moment(date);
  const d = new Date(date);
  const djs = dayjs(date);

  const format = benchmarks({
    moment: () => m.format("MM/DD"),
    date: () => sprintf("%02d/%02d", d.getMonth() + 1, d.getDate()),
    dayjs: () => djs.format("MM/DD")
  });

  const addSubtract = benchmarks({
    moment: () =>
      m
        .clone()
        .add(1, "h")
        .subtract(1, "d"),
    date: () => new Date(d.valueOf() + MS_OF_HOUR - MS_OF_DAY),
    dayjs: () => djs.add(1, "h").subtract(1, "d")
  });

  const Result = ({ title, input }) => (
    <div style={{ marginTop: 8 }}>
      <strong>{title}</strong>
      {Object.keys(input).map(k => {
        return (
          <div key={k}>
            {k}: {input[k]}ms
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="App">
      <h1>moment vs Date vs dayjs performance comparison</h1>
      <div>Time for parse and format {COUNT} times.</div>
      <br />
      <Result title={"parse"} input={parse} />
      <Result title={"format"} input={format} />
      <Result title={"add/subtract"} input={addSubtract} />
    </div>
  );
}
