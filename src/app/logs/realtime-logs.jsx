"use client";
import { useEffect, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import supabase from "@/utils/supabase";

export default function RealtimeLogs({ serverLogs }) {
  const [logs, setLogs] = useState(serverLogs);
  useEffect(() => {
    const channel = supabase
      .channel("realtime logs")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "hasil_klasifikasi" },
        (payload) => {
          setLogs([...logs, payload.new]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, logs, setLogs]);

  console.log(logs)
  return <DataTable columns={columns} data={logs} />;
}
