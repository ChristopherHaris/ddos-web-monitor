'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';

const API_URI = process.env.NEXT_PUBLIC_BACKEND_URI;

export default function FormEditInstansi({ params }) {
	const [isLoading, setIsLoading] = useState(false);
	const [dataAwal, setDataAwal] = useState({
		nama_instansi: '',
		jenis_instansi: 'Perusahaan',
		sosial_media: '',
		pic_name: '',
		kontak_pic: '',
		logo: null,
	});
	const [formData, setFormData] = useState({
		nama_instansi: '',
		jenis_instansi: 'Perusahaan',
		sosial_media: '',
		pic_name: '',
		kontak_pic: '',
		logo: null,
	});
	const router = useRouter();

	useEffect(() => {
		try {
			axios.get(`${API_URI}/api/instansi`).then(function (response) {
				setDataAwal(
					response.data.instansi.data.find(
						(instansi) => instansi.id_instansi == params.id
					)
				);
				setFormData(
					response.data.instansi.data.find(
						(instansi) => instansi.id_instansi == params.id
					)
				);
			});
		} catch (error) {
			console.log(error);
		}
	}, []);

	const handleBack = () => {
		setFormData({
			nama_instansi: '',
			jenis_instansi: 'Perusahaan',
			sosial_media: '',
			pic_name: '',
			kontak_pic: '',
			logo: null,
		});
		router.push('/audit/instansi');
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (formData.nama_instansi == '' || formData.nama_instansi == ' ' || formData == dataAwal) {
			return console.log('Data tidak bisa disimpan.');
		}
		setIsLoading(true);

		try {
			axios
				.put(`${API_URI}/api/instansi/${params.id}`, formData)
				.then(function (response) {
					setIsLoading(false);
					alert('Data berhasil diupdate.');
					router.push('/audit/instansi');
				});
		} catch (error) {
			console.log(error);
			router.push('/audit/instansi');
		}
	};
	return (
		<>
			{formData.nama_instansi == '' || dataAwal.nama_instansi == '' ? (
				<>
					<div className="grid grid-cols-1 gap-4 place-items-center h-56 ...">
						<Icons.spinner className=" text-orange-500 mr-2 h-20 w-20 animate-spin" />{' '}
					</div>
				</>
			) : (
				<>
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
												value={formData.jenis_instansi}
												onChange={handleInputChange}
												id="jenis_instansi"
												name="jenis_instansi"
												className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
											>
												<option value="Perusahaan">
													Perusahaan
												</option>
												<option value="Organisasi">
													Organisasi
												</option>
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
						</div>
					</form>
				</>
			)}
		</>
	);
}
