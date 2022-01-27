import { Container, TextField } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';

const theme = createTheme();
export default function Simulation() {
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
