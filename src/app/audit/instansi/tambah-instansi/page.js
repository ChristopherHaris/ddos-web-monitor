import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import FormTambahInstansi from '@/components/instansi/formTambahInstansi';
export default function TambahInstansi() {
	return (
		<div className="flex-1 space-y-4 p-8 pt-6">
			<div className="flex items-center justify-between space-y-2">
				<h2 className="text-3xl font-bold tracking-tight">Instansi</h2>
			</div>
			<div className="flex justify-between">
				<h3 className="font-semibold">Tambah Instansi</h3>
			</div>
			<Card>
				<FormTambahInstansi />
			</Card>
		</div>
	);
}
