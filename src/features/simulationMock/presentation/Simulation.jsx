import { Container, Stack, Switch, TextField, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import styled from '@emotion/styled';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
	width: 62,
	height: 34,
	padding: 7,
	'& .MuiSwitch-switchBase': {
		backgroundColor: '#1726f3',
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

export default function Simulation({ toggleTheme }) {
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
					<Stack direction="row" spacing={1} alignItems="center">
						<Typography>Leega</Typography>
						<MaterialUISwitch
							sx={{ m: 1 }}
							defaultChecked
							onChange={toggleTheme}
						/>

						<Typography>4MapIt</Typography>
					</Stack>

					<Box component="form">
						<TextField
							margin="normal"
							fullWidth
							required
							id="email"
							label="Email"
							name="email"
							autoComplete="email"
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							id="name"
							label="Nome Completo"
							name="name"
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							id="cartao"
							label="Número do Cartão"
							name="numCartao"
						/>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
