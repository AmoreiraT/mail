import React from 'react';
import { connect } from 'react-redux';
import CardDepContainer from '../components/CardDepContainer';

import NaoResponda from '../components/NaoResponda';
import {
	AreaDeGente,
	CardContainer,
	ColaboradorNome,
	Container,
	CorpoEmail,
	EmailBody,
	FrameDadosLegais,
	GenteComBr,
	HttpWwwPortoseguroComBr,
	InformamosQueSuaSolicitacaoFoiEncam,
	LogoFrame,
	PrezadoaSra,
	ReferenteAoTitular,
	ReferenteAPula,
	ReferenteASolicitacaoDeIngresso,
	SolicitacaoEnviadaContainer,
	SolicitacaoStack,
	StyledLeegaLogoSvg,
	StyledFMapLogo,
	VoceJaPodeSeCadastrarNoSite,
} from './styles';

const MailPresentation = ({ colaboradorNome, dataSolicita, isLeega }) => {
	const arrayName = colaboradorNome.split(' ');
	const primeiroNome = arrayName[0];

	return (
		<Container>
			<LogoFrame>
				{isLeega === true ? <StyledFMapLogo /> : <StyledLeegaLogoSvg />}
				{/* <StyledLeegaLogoSvg />
				<StyledFMapLogo /> */}
			</LogoFrame>
			<EmailBody>
				<CorpoEmail>
					{/* Init */}
					<PrezadoaSra>
						Caro prestador.
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
					{/* DADOS LEGAIS  */}
					<FrameDadosLegais>
						<ReferenteASolicitacaoDeIngresso>
							<ReferenteAPula>Referente a: </ReferenteAPula>
							Solicitação de ingresso de colaborador da empresa LEEGA
						</ReferenteASolicitacaoDeIngresso>
						<ReferenteAoTitular>
							<ReferenteAPula>Referente ao titular: </ReferenteAPula>
							{colaboradorNome}
						</ReferenteAoTitular>
						<ReferenteASolicitacaoDeIngresso>
							<ReferenteAPula> Data da solicitação: </ReferenteAPula>
							{dataSolicita}
						</ReferenteASolicitacaoDeIngresso>
					</FrameDadosLegais>
					{/* Cartao e Dependentes  */}
					<CardContainer>
						<CardDepContainer nomeColab={colaboradorNome} />
					</CardContainer>
					{/* Maiores infos */}
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
				{/* Nao Responda Container */}
				<NaoResponda />
			</EmailBody>
		</Container>
	);
};

const mapStateToProps = state => ({
	colaboradorNome: state.mail.nameColab,
	dataSolicita: state.mail.dataSolicita,
	isLeega: state.mail.isLeega,
});

export default connect(mapStateToProps)(MailPresentation);
