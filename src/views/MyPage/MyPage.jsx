import React, { useState, useEffect } from 'react';
import { BreadcrumbBack, FormInput, SingleDetail } from 'components';
import useStyles from './style';
import { Grid } from '@material-ui/core';
import { useToasts } from 'react-toast-notifications';
import measurement_unit from 'apis/measurement_unit';
import ReactTable from "react-table";
import "react-table/react-table.css";

const MeasureUnitEdit = props => {
	const { children, history } = props;
	const classes = useStyles();
	const { addToast } = useToasts();
	const breadcrumb = [
		'Monitorowanie poziomu zapasów',
		'Jednostki miary',
		'Dodaj nowy/Edytuj'
	];
	const id = props.match.params.id;

	const [setData] = useState({});

	const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' }];
	const columns = [
		{
			name: 'Title',
			selector: 'title',
			sortable: true
		},
		{
			name: 'Year',
			selector: 'year',
			sortable: true,
			right: true
		}
	];

	useEffect(() => {}, []);

	return (
		<>
			<BreadcrumbBack list={breadcrumb} back_url="#" />
      <DataTable
        title="Arnold Movies"
        columns={columns}
        data={data}
      />
		</>
	);
};

export default MeasureUnitEdit;
