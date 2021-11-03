import React , {useState} from 'react';
import "./Footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import TabScrollButton from '@mui/material/TabScrollButton';


function Footer(){
	return(
		<>
			<div className="grid">
				<IconButton color="primary">
				<a href="https://github.com/PEC-Programmers-Arena/Wonder4Kids"><GitHubIcon fontSize="small"/></a>
				</IconButton>

				<IconButton color="primary">
					Contact Us
				</IconButton>

				<IconButton color="primary">
					<TabScrollButton orientation="vertical" direction="left"/>
				</IconButton>
			</div>

		</>
	)
};

export default Footer