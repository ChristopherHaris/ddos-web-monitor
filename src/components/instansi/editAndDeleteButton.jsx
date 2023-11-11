'use client';
import { Button } from '@/components/ui/button';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { DialogHapus } from '@/components/instansi/dialogHapus';

function EditAndDeleteButton({ update, data }) {
	const router = useRouter();

	function handleClickEdit() {
		router.push(`/audit/instansi/edit-instansi/${data.original.id_instansi}`);
	}
	return (
		<>
			<Button key={data.original.id_instansi} onClick={handleClickEdit} variant="secondary" className="mr-1">
				<PencilSquareIcon className="h-5 w-5 text-white-500" />
				Edit
			</Button>
			<DialogHapus update={update} data={data} />
		</>
	);
}
export { EditAndDeleteButton };
