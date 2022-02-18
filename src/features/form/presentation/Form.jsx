// import CssBaseline from '@mui/material/CssBaseline';
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { doLogin } from '../../../core/store/redux/fetchActions';
import {
	Container,
	FormBody,
	CorpoForm,
	LogoFrame,
	StyledFMapLogo,
	StyledLeegaLogoSvg,
} from './styles';

function FormPresentation({ isLeega }) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(doLogin());
	}, [dispatch]);

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
});
export default connect(mapStateToProps)(FormPresentation);
