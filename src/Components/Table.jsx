import React from "react"
import {DataGrid } from "@mui/x-data-grid"
function Table() {
    const [items,setItems] = React.useState([])
  React.useEffect(() => {
      fetch("https://reqres.in/api/products")
      .then(res => res.json())
      .then(
        (result) => {
            setItems(result.data)
        })
          
  }, [])
  console.log(items)
  const columns = [
    { field: "id" },
    { field: "name", headerName: "Name", width: 150 },
    { field: "pantone_value", headerName: "Pantone Value", width: 150 },
    { field: "year", headerName: "Year", width: 150 },
    { field: "color", headerName: "Color", width: 150 },
  ]
  
  return (
    <DataGrid
      rows={items}
      pageSize={9}
      columns={columns}
      sx={{ height: "40rem", width: "auto", mr: 5, ml: 5 }}
    />
  )
}

export default Table
