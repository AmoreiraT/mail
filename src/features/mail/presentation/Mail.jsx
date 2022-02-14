import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
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

import { doLogin } from '../../../core/store/redux/fetchActions/index';

const MailPresentation = ({
	colaboradorNome,
	dataSolicita,
	isLeega,
	cnpj,
	empresa,
}) => {
	// login();
	// console.log(fetchEpm);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(doLogin());
	}, [dispatch]);

	const formatData = dataSolicita.replace('T', ' às ').replaceAll('-', '/');
	// formatData = formatData.replace('-', '/');
	console.log(formatData);

	const arrayName = colaboradorNome.split(' ');
	const primeiroNome = arrayName[0];

	return (
		<Container>
			<LogoFrame>
				{isLeega === false ? <StyledFMapLogo /> : <StyledLeegaLogoSvg />}
			</LogoFrame>
			<EmailBody>
				<CorpoEmail>
					{/* Init */}
					<PrezadoaSra>
						{cnpj === true ? 'Caro(a) prestador(a)' : ' Prezado(a) Sr(a).'}

						<ColaboradorNome>{primeiroNome}</ColaboradorNome>
					</PrezadoaSra>
					<SolicitacaoEnviadaContainer>
						<SolicitacaoStack>
							<InformamosQueSuaSolicitacaoFoiEncam>
								Informamos que sua solicitação foi encaminhada com sucesso.
							</InformamosQueSuaSolicitacaoFoiEncam>
							{/* {isLeega === false || cnpj === true ? (
								'oi'
							) : (
								<VoceJaPodeSeCadastrarNoSite>
									Você já pode se cadastrar no site da Porto Seguro e aguardar
									72 horas para efetivação em sistema, <br />
									em seguida baixe o App para ter acesso a sua carteirinha
									digital e mais informações. <br /> Após a conclusão desta
									etapa, você poderá utilizar seu plano em 12 horas.
								</VoceJaPodeSeCadastrarNoSite>
							)} */}
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
							{cnpj === true
								? 'Solicitação de ingresso de subestipulante'
								: `Solicitação de ingresso de colaborador da empresa ${empresa}`}
						</ReferenteASolicitacaoDeIngresso>
						<ReferenteAoTitular>
							<ReferenteAPula>Referente ao titular: </ReferenteAPula>
							{colaboradorNome}
						</ReferenteAoTitular>
						<ReferenteASolicitacaoDeIngresso>
							<ReferenteAPula> Data da solicitação: </ReferenteAPula>
							{formatData}
						</ReferenteASolicitacaoDeIngresso>
					</FrameDadosLegais>
					{/* Cartao e Dependentes  */}
					<CardContainer>
						<CardDepContainer nomeColab={colaboradorNome} />
					</CardContainer>
					{/* Maiores infos */}
					<FrameDadosLegais>
						<AreaDeGente>
							Maiores informações procure à área de gente
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
	cnpj: state.mail.cnpj,
	empresa: state.mail.empresa,
});

// const mapDispatchToProps = dispatch => bindActionCreators(MailAction, dispatch);

export default connect(mapStateToProps)(MailPresentation);
