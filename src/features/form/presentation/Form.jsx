// import CssBaseline from '@mui/material/CssBaseline';
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { doLogin } from '../../../core/store/redux/fetchActions';
import { loginGuest } from '../../../core/store/redux/fetchActions/formActions';
import {
	Container,
	FormBody,
	CorpoForm,
	LogoFrame,
	StyledFMapLogo,
	StyledLeegaLogoSvg,
} from './styles';

function FormPresentation({ isLeega, titular }) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(doLogin());
		dispatch(loginGuest());
	}, [dispatch]);
	console.log(titular);
	return (
		<Container>
			<LogoFrame>
				{isLeega === false ? <StyledFMapLogo /> : <StyledLeegaLogoSvg />}
			</LogoFrame>
			<FormBody>
				<CorpoForm>
					<div>a</div>
				</CorpoForm>
			</FormBody>
		</Container>
	);
}

const mapStateToProps = state => ({
	isLeega: state.mail.isLeega,
	titular: state.titular,
});
export default connect(mapStateToProps)(FormPresentation);
