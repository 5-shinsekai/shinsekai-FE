'use client';
import React from 'react';
import { useState } from 'react';
export default function SignUpStep1() {
  const [Data, setData] = useState({
    input1: '',
    input2: '',
    input3: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <input
        name="input1"
        value={Data.input1}
        onChange={handleChange}
        type="text"
        className=" border-2"
      />
      <input
        name="input2"
        value={Data.input2}
        onChange={handleChange}
        type="text"
        className=" border-2"
      />
      <input
        name="input3"
        value={Data.input3}
        type="text"
        onChange={handleChange}
        className=" border-2"
      />
    </div>
  );
}
