import { columns } from '@/components/instansi/columns';
import { DataTable } from '@/components/instansi/data-table';

export default function InstansiPage() {
	return (
		<>
			<div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
				<div className="flex items-center justify-between space-y-2">
					<div>
						<h2 className="text-2xl font-bold tracking-tight">
							Daftar Instansi
						</h2>
					</div>
				</div>
				<DataTable columns={columns} />
			</div>
		</>
	);
}
