'use client';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import {
	Dialog,
	DialogContent,
	DialogClose,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Icons } from '@/components/ui/icons';

const API_URI = process.env.NEXT_PUBLIC_BACKEND_URI;

export function DialogHapus({ update, data }) {
	const [isLoading, setIsLoading] = useState(false);

	function handleClickHapus() {
		setIsLoading(true);
		try {
			axios
				.delete(`${API_URI}/api/instansi/${data.original.id_instansi}`)
				.then(function (response) {
					setIsLoading(false);
					update();
				});
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Dialog key={data.original.id_instansi}>
			<DialogTrigger asChild>
				<Button variant="destructive">
					<TrashIcon className="h-5 w-5 text-white-500" />
					Hapus
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Konfirmasi</DialogTitle>
					<DialogDescription>
						Anda yakin menghapus {data.original.nama_instansi} dari daftar?
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant="secondary">Batal</Button>
					</DialogClose>
					<DialogClose asChild>
						<Button
							disabled={isLoading}
							onClick={handleClickHapus}
							variant="destructive"
						>
							{isLoading && (
								<Icons.spinner className="text-white-500 mr-2 h-4 w-4 animate-spin" />
							)}
							Hapus
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
