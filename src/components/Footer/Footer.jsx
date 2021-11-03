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
				<GitHubIcon fontSize="large"/>
				</IconButton>

				<IconButton color="primary">
					Contact Us
				</IconButton>

				<IconButton>
					<TabScrollButton orientation="vertical" direction="left"/>
				</IconButton>
			</div>

		</>
	)
};

export default Footer