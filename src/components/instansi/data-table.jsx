'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFacetedRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table';
import axios from 'axios';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Icons } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import { DocumentPlusIcon } from '@heroicons/react/24/outline';
import { DataTablePagination } from '@/components/instansi/data-table-pagination';
import { DataTableToolbar } from '@/components/instansi/data-table-toolbar';
import { EditAndDeleteButton } from './editAndDeleteButton';

const API_URI = process.env.NEXT_PUBLIC_BACKEND_URI;

export function DataTable({ columns }) {
	const router = useRouter();
	const [data, setData] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		try {
			axios.get(`${API_URI}/api/instansi`).then(function (response) {
				setData(response.data.instansi.data);
				setIsLoading(false);
			});
		} catch (error) {
			console.log(error);
		}
	}, []);

	const [rowSelection, setRowSelection] = React.useState({});
	const [columnVisibility, setColumnVisibility] = React.useState({});
	const [columnFilters, setColumnFilters] = React.useState([]);
	const [sorting, setSorting] = React.useState([]);

	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
			columnVisibility,
			rowSelection,
			columnFilters,
		},
		enableRowSelection: true,
		onRowSelectionChange: setRowSelection,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		onColumnVisibilityChange: setColumnVisibility,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFacetedRowModel: getFacetedRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
	});

	function updateTable() {
		setIsLoading(true);
		try {
			axios.get(`${API_URI}/api/instansi`).then(function (response) {
				setData(response.data.instansi.data);
				setIsLoading(false);
			});
		} catch (error) {
			console.log(error);
		}
	}

	const handleClick = () => {
		router.push('/audit/instansi/tambah-instansi');
	};

	return (
		<>
			{isLoading ? (
				<>
					<div className="grid grid-cols-1 gap-4 place-items-center h-56 ...">
						<Icons.spinner className=" text-orange-500 mr-2 h-20 w-20 animate-spin" />{' '}
					</div>
				</>
			) : (
				<div className="space-y-4">
					<div className="flex justify-between">
						<div>
							<Button className="mr-1" variant="outline">
								Excel
							</Button>
							<Button variant="outline">pdf</Button>
						</div>
					</div>
					<DataTableToolbar table={table} />
					<div className="rounded-md border">
						<Table>
							<TableHeader>
								{table.getHeaderGroups().map((headerGroup) => (
									<TableRow key={headerGroup.id}>
										{headerGroup.headers.map((header) => {
											return (
												<TableHead key={header.id}>
													{header.isPlaceholder
														? null
														: flexRender(
																header.column.columnDef.header,
																header.getContext()
														  )}
												</TableHead>
											);
										})}
										<TableHead key="header-post">
											<div className="place-items-end">
												<Button
													variant="outline"
													onClick={handleClick}
												>
													<DocumentPlusIcon className="h-5 w-5 text-white-500" />
													Tambah data
												</Button>
											</div>
										</TableHead>
									</TableRow>
								))}
							</TableHeader>
							<TableBody>
								{table.getRowModel().rows?.length ? (
									table.getRowModel().rows.map((row) => (
										<>
											<TableRow
												key={row.id}
												data-state={
													row.getIsSelected() && 'selected'
												}
											>
												{row.getVisibleCells().map((cell) => (
													<TableCell key={cell.id}>
														{flexRender(
															cell.column.columnDef.cell,
															cell.getContext()
														)}
													</TableCell>
												))}
												<TableCell key="edit-delete">
													<EditAndDeleteButton
														update={updateTable}
														data={row}
													/>
												</TableCell>
											</TableRow>
										</>
									))
								) : (
									<TableRow key="no-result-cell">
										<TableCell
											colSpan={columns.length}
											className="h-24 text-center"
										>
											No results.
										</TableCell>
									</TableRow>
								)}
							</TableBody>
						</Table>
					</div>
					<DataTablePagination table={table} />
				</div>
			)}
		</>
	);
}
