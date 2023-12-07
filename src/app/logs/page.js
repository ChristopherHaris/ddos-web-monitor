import supabase from "@/utils/supabase";
import RealtimeLogs from "./realtime-logs";

export default async function Logs() {
  const { data } = await supabase.from("hasil_klasifikasi").select("*");

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Logs</h2>
      </div>
      <div className="container mx-auto py-10">
        <RealtimeLogs serverLogs={data} />
      </div>
    </div>
  );
}
