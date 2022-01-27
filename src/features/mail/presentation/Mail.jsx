import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import LeegaLogoSvg from '../../../shared/assets/svg/LeegaLogoSvg';
import { Theme } from '../../../shared/constants/colors';
import CardDepContainer from '../components/CardDepContainer';
import NaoResponda from '../components/NaoResponda';

export const Container = styled.div`
	background-color: rgba(255, 164, 0, 0.6);
	padding: 16px 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const CardContainer = styled.div`
	width: 100%;
	height: 650px;
	position: relative;
	padding: 16px 32px;
	/* overflow: visible; */
	/* display: relative; */
	align-content: center;
	align-items: center;
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
export const EmailBody = styled.div`
	background-color: rgba(255, 255, 255, 1);
	overflow: hidden;
	border-radius: 35px 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	align-self: stretch;
	border: 2px solid ${Theme.colors.leegaYellow};
`;

export const CorpoEmail = styled.div`
	position: relative;
	margin-bottom: 40px;
	padding: 30px 30px 32px;
	display: flex;
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
`;

export const ColaboradorNome = styled.strong`
	position: relative;
	margin-left: 10px;
	font-family: 'Roboto';
	font-size: 22px;
	font-weight: 700;
	line-height: 26px;
	color: ${Theme.colors.leegaYellow};
	letter-spacing: 2.4px;
`;

export const SolicitacaoEnviadaContainer = styled.div`
	margin-bottom: 20px;
	padding: 0 0 2px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	align-self: stretch;
`;
export const SolicitacaoStack = styled.div`
	padding: 0 2px 0 0;
	display: flex;
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
	height: 100%;
	margin-bottom: 20px;
	padding: 0 2px 2px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const ReferenteASolicitacaoDeIngresso = styled.p`
	width: 900px;
	margin-bottom: 16px;
	font-family: 'Roboto';
	font-size: 18px;
	font-weight: 400;
	line-height: 22px;
	color: rgba(0, 0, 0, 1);
`;
export const ReferenteAPula = styled.strong`
	font-family: 'Roboto';
	font-size: 14px;
	font-weight: 300;
	line-height: 17px;
	color: rgba(0, 0, 0, 1);
	letter-spacing: -0.14px;
`;
export const ReferenteAoTitular = styled.p`
	width: 900px;
	margin-bottom: 16px;
	font-family: 'Roboto';
	font-size: 18px;
	font-weight: 700;
	line-height: 22px;
	color: rgba(0, 0, 0, 1);
`;
export const DataDaSolicitacao = styled.p`
	width: 900px;
	font-family: 'Roboto';
	font-size: 14px;
	font-weight: 300;
	line-height: 17px;
	color: rgba(0, 0, 0, 1);
`;
export const DataDaSolicitacaoPula = styled.strong`
	font-family: 'Roboto';
	font-size: 18px;
	font-weight: 400;
	line-height: 22px;
	color: rgba(0, 0, 0, 1);
	letter-spacing: -0.18px;
`;

export const AreaDeGente = styled.p`
	position: relative;

	width: 900px;
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
	width: 900px;
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

const MailPresentation = ({ colaboradorNome, dataSolicita }) => {
	const arrayName = colaboradorNome.split(' ');
	const primeiroNome = arrayName[0];

	return (
		<Container>
			<LogoFrame>
				<StyledLeegaLogoSvg />
			</LogoFrame>
			<EmailBody>
				<CorpoEmail>
					<PrezadoaSra>
						Caro(a) colaborador(a).
						<ColaboradorNome>{primeiroNome}</ColaboradorNome>
					</PrezadoaSra>
					<SolicitacaoEnviadaContainer>
						<SolicitacaoStack>
							<InformamosQueSuaSolicitacaoFoiEncam>
								Informamos que sua solicitação foi encaminhada com sucesso.
							</InformamosQueSuaSolicitacaoFoiEncam>
							<VoceJaPodeSeCadastrarNoSite>
								Você já pode se cadastrar no site da Porto Seguro e aguardar 72
								horas para efetivação em sistema, <br />
								em seguida baixe o App para ter acesso a sua carteirinha digital
								e mais informações. <br /> Após a conclusão desta etapa, você
								poderá utilizar seu plano em 12 horas.
							</VoceJaPodeSeCadastrarNoSite>
						</SolicitacaoStack>
					</SolicitacaoEnviadaContainer>

					<FrameDadosLegais>
						<ReferenteASolicitacaoDeIngresso>
							<ReferenteAPula>Referente a: </ReferenteAPula>
							Solicitação de ingresso de colaborador da empresa LEEGA
						</ReferenteASolicitacaoDeIngresso>
						<ReferenteAoTitular>
							<ReferenteAPula>Referente ao titular: </ReferenteAPula>
							{colaboradorNome}
						</ReferenteAoTitular>
						<DataDaSolicitacao>
							Data da solicitação:{' '}
							<DataDaSolicitacaoPula>{dataSolicita}</DataDaSolicitacaoPula>
						</DataDaSolicitacao>
					</FrameDadosLegais>
					<CardContainer>
						<CardDepContainer nomeColab={colaboradorNome} />
					</CardContainer>

					<FrameDadosLegais>
						<AreaDeGente>
							Maiores informações procure à área de gentE
						</AreaDeGente>
						<GenteComBr>gente&#64;leega.com.br</GenteComBr>
					</FrameDadosLegais>
					<HttpWwwPortoseguroComBr>
						http://www.portoseguro.com.br/
					</HttpWwwPortoseguroComBr>
				</CorpoEmail>
				<NaoResponda />
			</EmailBody>
		</Container>
	);
};

const mapStateToProps = state => ({
	colaboradorNome: state.mail.nameColab,
	dataSolicita: state.mail.dataSolicita,
});

export default connect(mapStateToProps)(MailPresentation);
