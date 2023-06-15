import { Button } from "@mui/material"
import React from "react"
import baseButtonStyles from "./styles"

const BaseButton = ({props, label = "undefined", styles, onClickAction }) => {
	return (
		<>
			<Button
				variant='contained'
				sx={{ ...styles, ...baseButtonStyles }}
				onClick={onClickAction}
				{...props}
			>
				{label}
			</Button>
		</>
	)
}

export default BaseButton
