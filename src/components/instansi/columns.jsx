'use client';

// import { ColumnDef } from '@tanstack/react-table';
// import { Badge } from '@/components/ui/badge';
// import { Checkbox } from '@/components/ui/checkbox';
// import { labels, priorities, statuses } from '../data/data';
// //import { Task } from '../data/schema';
// // import { DataTableRowActions } from './data-table-row-actions';
import { DataTableColumnHeader } from '@/components/instansi/data-table-column-header';

export const columns = [
	{
		accessorKey: 'nama_instansi',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Nama" />
		),
		cell: ({ row }) => {
			return (
				<div key={row.original.id_instansi} className="flex space-x-2">
					<span className="max-w-[500px] truncate font-medium">
						{row.getValue('nama_instansi')}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: 'jenis_instansi',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Jenis" />
		),
		cell: ({ row }) => {
			return (
				<div key={row.original.id_instansi} className="flex space-x-2">
					<span className="max-w-[500px] truncate font-medium">
						{row.getValue('jenis_instansi')}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: 'sosial_media',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Sosial Media" />
		),
		cell: ({ row }) => {
			return (
				<div key={row.original.id_instansi} className="flex space-x-2">
					<span className="max-w-[500px] truncate font-medium">
						{row.getValue('sosial_media')}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: 'pic_name',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="PIC" />
		),
		cell: ({ row }) => {
			return (
				<div key={row.original.id_instansi} className="flex space-x-2">
					<span className="max-w-[500px] truncate font-medium">
						{row.getValue('pic_name')}
					</span>
				</div>
			);
		},
	},
	// {
	// 	id: 'actions',
	// 	cell: ({ row }) => <DataTableRowActions row={row} />,
	// },
];
