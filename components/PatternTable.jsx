"use client";
import React, { useState, useRef, useEffect } from 'react';

const PatternTable = () => {
  const rawPattern = `
    16    8   30    62
    58   55   54   
    65   46   74   
    86   40   61   
    41   81   20   
     35   22   73   
    56   76   80   9
    69   19    1   3
   `;

  const tbl = useRef(null);
  const [inputValues, setInputValues] = useState(Array(45).fill(''));
  const [analyticsData, setAnalyticsData] = useState([]);

  const [patternValue, setPatternValue] = useState(rawPattern);
  const [row, setRow] = useState([]);

  useEffect(() => {
    const parsedRow = patternValue.trim().split('\n').map(row => row.trim().split(/\s+/));
    setRow(parsedRow);
  }, [patternValue]);

  const tableRows = row.map((row, index) => (
    <tr key={index}>
      {row.map((num, index) => {
        const colSpan = index < row.length && row[index];
        return <td className="text-xs text-center bg-g p-0" key={index} >{colSpan}</td>;
      })}
    </tr>
  ));

  //Handle ResultChecker
  const handleResultCheck = () => {
    const newInputValues = [...inputValues];
    const tableCells = tbl.current.querySelectorAll('td');
    const analytics = {};

    for (let i = 0; i < inputValues.length; i++) {
      const inputValue = inputValues[i];

      if (inputValue !== '') {
        for (let j = 0; j < tableCells.length; j++) {
          if (parseInt(tableCells[j].innerText) === parseInt(inputValue)) {
            tableCells[j].classList.add('bg-green-400', 'text-white');

            if (analytics[inputValue]) {
              analytics[inputValue] += 1;
            } else {
              analytics[inputValue] = 1;
            }
          }
        }
      }
    }
    setInputValues(newInputValues);
    setAnalyticsData(Object.entries(analytics));
  };

  return (
    <section className="w-full flex justify-between space-x-2 mx-auto m-5">
      <div className="w-full flex flex-col">
      <h3 className="text-center my-2 font-semibold">Paste Randomised Generated Number and get it back Table</h3>

        <div className="w-full h-56 input-field p-5 border border-gray-200 bg-gray-100 rounded-md shadow-lg">
          <textarea id="pattern" className="w-full max-h-fit text-xs border border-gray-300" value={patternValue} onChange={(e) => setPatternValue(e.target.value)} />
        </div>
      
        <div className="flex">
          <div className="w-3/5 flex flex-col space-y-4 p-5">
            <table className="py-5">
              <tbody ref={tbl} className="border border-gray-200  rounded-md shadow-lg" >{tableRows}</tbody>
            </table>
          </div>

          <div className=" w-2/5 flex flex-col space-y-4  p-5">
            <div className="w-full mx-auto flex flex-col result-checker">
              <h2 className="animate-pulse w- p-2 m-2 text-xs text-center font-bold "> Number Pool 🎱🎱 </h2>
              <hr className="border-2 mx-auto w-3/4" />
              <p className="text-xs mx-auto p-2 m-2 font-light text-center">Fill 45 inputs and click <span className="bg-green-400 ">"Pick Number "</span> to highlight matching numbers in the table.</p>

              <button className="mx-auto text-xs p-1 bg-slate-700 text-white rounded "
                onClick={handleResultCheck} >Pick Number</button>

              <div className="flex space-between">
                <div className="w-[55%] pool-numbers m-0 rounded">
                  <div className="check-inputs mx-auto bg-white p-2 flex justify-evenly flex-wrap gap-3 rounded-lg ">
                    {Array.from({ length: 45 }).map((_, index) => (
                      <input
                        key={index}
                        className="rounded-full text-xs"
                        type="number"
                        value={inputValues[index]}
                        onChange={(e) => setInputValues(prevState => {
                          const newState = [...prevState];
                          newState[index] = e.target.value;
                          return newState;
                        })}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[45%] p-1" id="analytics">
                  <p className="w-full bg-slate-200 p-1 mb-1 text-center text-[10px] sm:text-xs">Analytics Pairs</p>
                  <div className="w-full h-full mx-auto text-center border border-black bg-transparent shadow-lg" id="analytics-content">
                    <ul className="mx-auto text-xs">
                      {analyticsData.map(([key, value]) => (
                        <li key={key} className="w-full border-b border-black last:border-none py-2">
                          <b className="">{key}</b> {' - '} <span className="italic">{value} pairs</span>
                        </li>
                      ))
                      }
                    </ul>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default PatternTable;