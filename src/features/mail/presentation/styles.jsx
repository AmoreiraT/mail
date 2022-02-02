import styled from 'styled-components';
import LeegaLogoSvg from '../../../shared/assets/svg/LeegaLogoSvg';
import FourMapItLogo from '../../../shared/assets/svg/FourMapItLogo';
import { Theme } from '../../../shared/constants/colors';

export const Container = styled.div`
	position: relative;
	width: 100%;
	background-color: ${props => props.theme.backgroundColor};
	padding: 16px 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const CardContainer = styled.div`
	position: relative;
	width: 100%;
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
export const EmailBody = styled.div`
	background-color: rgba(255, 255, 255, 1);
	position: relative;
	width: 100%;
	border-radius: 35px 15px;
	display: relative;
	flex-direction: column;
	align-items: left;
	justify-content: left;
	align-self: stretch;
	border: 2px solid ${Theme.colors.leegaYellow};
	overflow: hidden;
`;

export const CorpoEmail = styled.div`
	position: relative;
	width: 100%;
	margin-bottom: 40px;
	padding: 30px 30px 32px;
	display: relative;
	flex-direction: column;
	align-items: flex-start;
`;

export const PrezadoaSra = styled.p`
	position: relative;
	width: 100%;
	margin-bottom: 20px;
	font-family: 'Roboto';
	font-size: 22px;
	font-weight: 200;
	line-height: 26px;
	color: rgba(0, 0, 0, 1);
	text-align: left;
`;

export const ColaboradorNome = styled.strong`
	position: relative;
	width: 100%;
	margin-left: 10px;
	font-family: 'Roboto';
	font-size: 22px;
	font-weight: 700;
	line-height: 26px;
	align-self: left;
	align-items: left;
	justify-content: left;
	color: ${Theme.colors.leegaYellow};
	letter-spacing: 2.4px;
`;

export const SolicitacaoEnviadaContainer = styled.div`
	position: relative;
	width: 100%;
	margin-bottom: 20px;
	padding: 0 0 2px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	align-self: center;
`;
export const SolicitacaoStack = styled.div`
	padding: 0 2px 0 0;
	position: relative;
	width: 100%;
	display: relative;
	flex-direction: column;
	align-items: flex-start;
`;
export const InformamosQueSuaSolicitacaoFoiEncam = styled.p`
	font-family: 'Roboto';
	font-size: 26px;
	font-weight: 400;
	line-height: 31px;
	color: ${Theme.colors.leegaYellow};
	text-align: center;
	margin-bottom: 10px;
	letter-spacing: -0.26px;
	align-items: center;
	justify-content: center;
	align-self: center;
`;
export const VoceJaPodeSeCadastrarNoSite = styled.p`
	font-family: 'Roboto';
	font-size: 16px;
	font-weight: 500;
	line-height: 19px;
	color: rgba(0, 0, 0, 1);
	align-self: stretch;
	text-align: center;
	letter-spacing: -0.16px;
`;

export const FrameDadosLegais = styled.div`
	position: relative;
	width: 100%;
	margin-bottom: 20px;
	padding: 0 2px 2px 0;
	display: relative;
	flex-direction: column;
	align-items: left;
	text-align: left;
`;
export const ReferenteASolicitacaoDeIngresso = styled.p`
	width: 100%;
	margin-bottom: 16px;
	font-family: 'Roboto';
	font-size: 18px;
	font-weight: 400;
	line-height: 22px;
	color: rgba(0, 0, 0, 1);
	align-items: left;
`;
export const ReferenteAPula = styled.strong`
	width: 100%;
	font-family: 'Roboto';
	padding-right: 10px;

	font-size: 14px;
	font-weight: 300;
	line-height: 17px;
	color: rgba(0, 0, 0, 1);
	letter-spacing: -0.14px;
`;
export const ReferenteAoTitular = styled.p`
	width: 100%;

	margin-bottom: 16px;
	font-family: 'Roboto';
	font-size: 18px;
	font-weight: 700;
	line-height: 22px;
	color: rgba(0, 0, 0, 1);
`;

export const AreaDeGente = styled.p`
	position: relative;

	width: 100%;
	font-family: 'Roboto';
	font-size: 18px;
	font-weight: 500;
	line-height: 22px;
	color: ${Theme.colors.leegaYellow};
	text-align: center;
	text-transform: uppercase;
	margin-bottom: 20px;
	letter-spacing: 3.6px;
`;
export const GenteComBr = styled.p`
	width: 100%;
	font-family: 'Roboto';
	font-size: 18px;
	font-weight: 500;
	line-height: 22px;
	color: ${Theme.colors.leegaYellow};
	text-align: center;
	text-transform: lowercase;
	text-decoration: underline;
	letter-spacing: 3.6px;
`;
export const HttpWwwPortoseguroComBr = styled.p`
	position: relative;
	width: 100%;

	font-family: 'Roboto';
	font-size: 24px;
	font-weight: 400;
	line-height: 29px;
	color: rgba(0, 0, 0, 1);
	align-self: stretch;
	text-align: center;
	text-decoration: underline;
	letter-spacing: -0.24px;
`;
