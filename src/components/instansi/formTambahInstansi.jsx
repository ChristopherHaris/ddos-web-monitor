'use client';
import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';

const API_URI = process.env.NEXT_PUBLIC_BACKEND_URI;

export default function FormTambahInstansi() {
	const router = useRouter();
	const handleBack = () => {
		router.push('/audit/instansi');
	};

	const [formData, setFormData] = useState({
		nama_instansi: '',
		jenis_instansi: 'Perusahaan',
		sosial_media: '',
		pic_name: '',
		kontak_pic: '',
		logo: null,
	});

	const [isLoading, setIsLoading] = useState(false);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (formData.nama_instansi == '' || formData.nama_instansi == ' ') {
			return;
		}
		setIsLoading(true);

		try {
			axios
				.post(`${API_URI}/api/instansi`, formData)
				.then(function (response) {
					console.log(response);

					setIsLoading(false);

					setFormData({
						nama_instansi: '',
						jenis_instansi: 'Perusahaan',
						sosial_media: '',
						pic_name: '',
						kontak_pic: '',
						logo: null,
					});
					router.push('/audit/instansi');
				});
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	};

	return (
		<form className="mx-11" onSubmit={handleSubmit}>
			<div className="space-y-10">
				<div className="border-b border-gray-900/10 pb-12">
					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="sm:col-span-3">
							<label
								htmlFor="nama"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Nama
								<span className="ml-1 text-red-600">*</span>
							</label>
							<div className="mt-2">
								<input
									required={true}
									disabled={isLoading}
									value={formData.nama_instansi}
									onChange={handleInputChange}
									type="text"
									name="nama_instansi"
									id="nama_instansi"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="jenis"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Jenis
								<span className="ml-1 text-red-600">*</span>
							</label>
							<div className="mt-2">
								<select
									onChange={handleInputChange}
									id="jenis_instansi"
									name="jenis_instansi"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
								>
									<option value="Perusahaan">Perusahaan</option>
									<option value="Organisasi">Organisasi</option>
								</select>
							</div>
						</div>
						<div className="sm:col-span-3">
							<label
								htmlFor="sosial_media"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Sosial Media
							</label>
							<div className="mt-2">
								<input
									value={formData.sosial_media}
									onChange={handleInputChange}
									disabled={isLoading}
									type="text"
									name="sosial_media"
									id="sosial_media"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="sm:col-span-3">
							<label
								htmlFor="pic"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								PIC
							</label>
							<div className="mt-2">
								<input
									value={formData.pic_name}
									onChange={handleInputChange}
									disabled={isLoading}
									type="text"
									name="pic_name"
									id="pic_name"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="sm:col-span-3">
							<label
								htmlFor="kontak-pic"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Kontak PIC
							</label>
							<div className="mt-2">
								<input
									value={formData.kontak_pic}
									onChange={handleInputChange}
									disabled={isLoading}
									type="text"
									name="kontak_pic"
									id="kontak_pic"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="my-2 flex justify-center gap-x-5">
				<Button onClick={handleBack} variant="destructive">
					Kembali
				</Button>
				<Button disabled={isLoading} type="submit">
					{isLoading && (
						<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
					)}
					Simpan
				</Button>
				{/* <button
					type="button"
					className="text-sm font-semibold leading-6 text-gray-900"
				>
					Cancel
				</button>
				<button
					type="submit"
					className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Save
				</button> */}
			</div>
		</form>
	);
}
