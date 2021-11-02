import React from 'react';
import "./Footer.css";
import Box from '@mui/material/Box';
import { Grid, GridItem } from "@chakra-ui/react"

function Footer(){
	return(
		<Box sx={{
			width: "100% ",
			height: "5vh",
			backgroundColor: "black",
			alignContent: "center",
			marginBottom:"auto",
			marginTop:"auto",
			// '&:hover': {
			// 	backgroundColor: 'gray',
			// 	opacity: [0.9, 0.8, 0.7],
			//   },
		}}>
			<Grid h="100%" templateColumns="repeat(3, 1fr)" padding="5.5px" gap={2} textAlign="center" textColor="White" verticalAlign="middle">
				<GridItem colSpan={1}>
					GitHub
				</GridItem>
				<GridItem colSpan={1}>
					FeedBack
				</GridItem>
				<GridItem colSpan={1}>
					Contact Us
				</GridItem>
				</Grid>

		</Box>
	)
}

export default Footer