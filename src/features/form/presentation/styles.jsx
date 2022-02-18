import styled from 'styled-components';
import LeegaLogoSvg from '../../../shared/assets/svg/LeegaLogoSvg';
import FourMapItLogo from '../../../shared/assets/svg/FourMapItLogo';

export const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;

	background-color: ${props => props.theme.backgroundColor};
	padding: 16px 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const CardContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;

	padding: 16px 32px;
`;

export const LogoFrame = styled.div`
	margin-bottom: 10px;
	padding: 16px 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const StyledLeegaLogoSvg = styled(LeegaLogoSvg)`
	width: 238px;
	height: 50px;
`;
export const StyledFMapLogo = styled(FourMapItLogo)`
	width: 238px;
	height: 50px;
`;
export const FormBody = styled.div`
	background-color: rgba(255, 255, 255, 1);
	position: relative;
	width: 100%;
	height: 100vh;
	border-radius: ${props => props.theme.borderRadius};
	display: relative;
	flex-direction: column;
	align-items: left;
	justify-content: left;
	align-self: stretch;
	border: 2px solid ${props => props.theme.equivalentColor};
	overflow: hidden;
`;

export const CorpoForm = styled.div`
	position: relative;
	width: 100%;
	margin-bottom: 40px;
	padding: 30px 30px 32px;
	display: relative;
	flex-direction: column;
	align-items: flex-start;
`;
