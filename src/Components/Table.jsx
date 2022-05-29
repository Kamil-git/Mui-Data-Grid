import React from "react"
import { DataGrid } from "@mui/x-data-grid"
import styled from "styled-components"
import { insertStyles } from "@emotion/utils"

function Table() {
  const [items, setItems] = React.useState([])
  React.useEffect(() => {
    fetch("https://reqres.in/api/products")
      .then((res) => res.json())
      .then((result) => {
        setItems(result.data)
      })
  }, [])
  function getFullName(params) {
    return (params.row.style = `backgroundColor:${params.row.value}`)
  }
  console.log(items)
  const columns = [
    { field: "id" },
    { field: "name", headerName: "Name", width: 150 },
    { field: "pantone_value", headerName: "Pantone Value", width: 150 },
    { field: "year", headerName: "Year", width: 150 },
    {
      field: "color",
      headerName: "Color",
      width: 150,

      renderCell: (params) => (
        <div style={{ backgroundColor: `${params.value}`, width:"100%", height:"100%" }}></div>
      ),
    },
  ]

  return (
    <DataGrid
      rows={items}
      pageSize={5}
      columns={columns}
      sx={{ height: "40rem", width: "auto", mr: 5, ml: 5 }}
    />
  )
}

export default Table
