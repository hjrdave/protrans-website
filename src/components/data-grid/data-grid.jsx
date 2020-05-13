import React, { useEffect } from 'react';
import { withTreble, updateStore } from 'treble-gsm';
import { Table } from 'react-bootstrap';
import HeaderFields from './header-fields';
import RowData from './row-data';
import { Store, useDataGridTreble } from './Store';
import './_data-grid.scss';

export function Grid({ columns, rowData }) {

  //connects to DataGrid Store
  const [{ columnsState, rowDataState }, dispatch] = useDataGridTreble();

  //put prop data in DataGrid Store
  useEffect(() => {
    updateStore('updateColumns', columns, dispatch);
    updateStore('updateRowData', rowData, dispatch);
  }, []);

  //test
  useEffect(() => {
    console.log(columnsState);

  }, [columnsState]);
  useEffect(() => {
    console.log(rowDataState);
  }, [rowDataState])

  return (
    <>
      <div className='data-grid mb-4'>
        <Table striped bordered hover>
          <HeaderFields />
          <RowData />
        </Table>
      </div>
    </>
  )
}
const DataGrid = withTreble(Grid, { store: Store })
export default DataGrid;