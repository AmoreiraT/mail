/* eslint-disable react/destructuring-assignment */
import {
	Container,
	FormGroup,
	Stack,
	Switch,
	// TextField,
	Typography,
} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import styled from '@emotion/styled';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MailAction from '../../../core/store/redux/actions/userset';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
	width: 62,
	height: 34,
	padding: 7,
	'& .MuiSwitch-switchBase': {
		margin: 1,
		padding: 0,
		transform: 'translateX(6px)',
		'&.Mui-checked': {
			color: '#fff',
			overflow: 'hidden',
			transform: 'translateX(22px)',
			'& .MuiSwitch-thumb:before': {
				backgroundColor: '#3441f3',
				backgroundSize: '30px',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundClip: 'fill',
				backgroundImage: `url(https://static.overlay-tech.com/assets/98937904-03a1-4369-a006-fb4e22a12b35.png)`,
			},
			'& + .MuiSwitch-track': {
				opacity: 1,
				backgroundColor: theme.palette.mode === 'dark' ? '#0b5aa8' : '#5964ff',
			},
		},
	},
	'& .MuiSwitch-thumb': {
		backgroundColor: '#fccd32',
		width: 32,
		height: 32,
		'&:before': {
			content: "''",
			position: 'absolute',
			width: '100%',
			height: '100%',
			left: 0,
			top: 0,
			backgroundSize: '30px',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundClip: 'fill',
			backgroundImage: `url(https://static.overlay-tech.com/assets/2790ac44-aa80-4472-a094-4945e05a775f.png)`,
		},
	},
	'& .MuiSwitch-track': {
		opacity: 1,
		backgroundColor: theme.palette.mode === 'dark' ? '#0b5aa8' : '#f3b817',

		borderRadius: 20 / 2,
	},
}));
const AntSwitch = styled(Switch)(({ theme }) => ({
	width: 28,
	height: 16,
	padding: 0,
	display: 'flex',
	'&:active': {
		'& .MuiSwitch-thumb': {
			width: 15,
		},
		'& .MuiSwitch-switchBase.Mui-checked': {
			transform: 'translateX(9px)',
		},
	},
	'& .MuiSwitch-switchBase': {
		padding: 0,
		'&.Mui-checked': {
			transform: 'translateX(12px)',
			color: '#ff7575',
			'& + .MuiSwitch-track': {
				opacity: 1,
				backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
			},
		},
	},
	'& .MuiSwitch-thumb': {
		boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
		width: 14,
		height: 14,
		borderRadius: 20,
		backgroundColor: '#3441f3',
		transition: theme.transitions.create(['width'], {
			duration: 200,
		}),
	},
	'& .MuiSwitch-track': {
		borderRadius: 16 / 2,
		opacity: 1,
		backgroundColor:
			theme.palette.mode === 'dark'
				? 'rgba(255,255,255,.35)'
				: 'rgba(0,0,0,.25)',
		boxSizing: 'border-box',
	},
}));

function Simulation({ isLeega, toggleTheme, themeSet, isCnpj, cnpj, empresa }) {
	const theme = createTheme();
	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 4,
						marginBottom: 4,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<FormGroup>
						<Stack direction="row" spacing={1} alignItems="center">
							<Typography>Leega</Typography>
							<MaterialUISwitch
								sx={{ m: 1 }}
								onClick={() => toggleTheme(isLeega, themeSet, empresa)}
							/>

							<Typography>4MapIt</Typography>
						</Stack>
						<Stack direction="row" spacing={1} alignItems="center">
							<Typography>cpf</Typography>
							<AntSwitch onClick={() => isCnpj(cnpj)} />
							<Typography>cnpj</Typography>
						</Stack>
					</FormGroup>
				</Box>
			</Container>
		</ThemeProvider>
	);
}

const mapStateToProps = state => ({
	isLeega: state.mail.isLeega,
	themeSet: state.mail.theme,
	cnpj: state.mail.cnpj,
	empresa: state.mail.empresa,
});

const mapDispatchToProps = dispatch => bindActionCreators(MailAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Simulation);
