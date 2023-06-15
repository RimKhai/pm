import { TextField } from "@mui/material"
import React from "react"
import { useState } from "react"
import InputFieldStyles from "./styles"

const CustomInputfield = ({ label = "undefine", styles, getData, type }) => {
	const [data, setData] = useState("")

	const changeHandler = (event) => {
		setData(event.target.value)
		getData(event.target.value)
	}

	return (
		<>
			<TextField
				id='outlined'
				label={label}
				sx={{ ...styles, ...InputFieldStyles }}
				value={data}
				onChange={changeHandler}
				type={type}
			/>
		</>
	)
}

export default CustomInputfield
