"use client";

import React, { useState, useEffect } from "react";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { nanoid } from "nanoid";

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIpAddress() {
  return Array.from({ length: 4 }, () => getRandomNumber(0, 255)).join(".");
}

const getRandomDate = () => {
  const year = 2023;
  const month = getRandomNumber(1, 12);
  const day = getRandomNumber(1, 28);
  return `${month}/${day}/${year}`;
};

const getRandomTime = () => {
  const hours = getRandomNumber(0, 23).toString().padStart(2, "0");
  const minutes = getRandomNumber(0, 59).toString().padStart(2, "0");
  const seconds = getRandomNumber(0, 59).toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

const getRandomProtocol = () => {
  const protocols = ["http", "https"];
  return protocols[getRandomNumber(0, 1)];
};

const getRandomAttackType = () => {
  const attackTypes = ["Brute Force", "DDoS", "SQL Injection", "XSS"];
  return attackTypes[getRandomNumber(0, 3)];
};

const generateRandomData = () => {
  return {
    id: nanoid(),
    date: getRandomDate(),
    time: getRandomTime(),
    port: getRandomNumber(100, 999).toString(),
    protocol: getRandomProtocol(),
    ip: getRandomIpAddress(),
    attacktype: getRandomAttackType(),
  };
};

export default function Logs() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = generateRandomData();
      setData((prevData) => [...prevData, result]);
      setLoading(false);
    };
    for (let i = 0; i < 50; i++) {
      fetchData();
    }
  }, [])


  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Logs</h2>
      </div>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} isLoading={loading} />
      </div>
    </div>
  );
}
