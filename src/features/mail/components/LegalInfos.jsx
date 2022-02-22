import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import { Theme } from '../../../shared/constants/colors';

export const Frame3Seven = styled.div`
	position: relative;
	width: 100%;
	padding: 0 0 2px;
	display: relative;
	flex-direction: column;
	align-items: center;
	left: 0;
	bottom: 0;
`;
export const Frame3Five = styled.div`
	position: relative;
	width: 100%;
	margin-bottom: 10px;
	flex-direction: column;
	align-items: center;
	align-self: stretch;
`;
export const NumeroDoCartaoSaude = styled.p`
	position: relative;
	width: 100%;
	font-family: 'Roboto';
	font-size: 14px;
	font-weight: 300;
	line-height: 17px;
	color: rgba(0, 0, 0, 1);
	align-self: center;
	margin-bottom: 8px;
	letter-spacing: -0.14px;
`;
export const Num35966120211203023536Two = styled.p`
	position: relative;
	width: 100%;
	/* width: 159px; */
	font-family: 'Roboto';
	font-size: 14px;
	font-weight: 700;
	line-height: 17px;
	color: ${Theme.colors.darkSlateGray};
	text-align: center;
	letter-spacing: -0.14px;
`;
export const Frame4Two = styled.div`
	width: 100%;
	position: relative;
	padding: 0 0 2px;
	display: relative;
	align-items: center;
	align-self: center;
`;
export const Dependentes = styled.p`
	width: 100%;
	position: relative;
	font-family: 'Roboto';
	font-size: 14px;
	font-weight: 300;
	line-height: 17px;
	color: rgba(0, 0, 0, 1);
	text-align: left;
	margin-right: 10px;
	letter-spacing: -0.14px;
`;
export const Frame3Six = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
`;
export const JoseCarlosFerreira = styled.p`
	width: 100%;
	position: relative;
	font-family: 'Roboto';
	font-size: 14px;
	text-align: center;

	font-weight: 500;
	line-height: 17px;
	color: ${Theme.colors.darkSlateGray};
	letter-spacing: -0.14px;
	&:not(:last-of-type) {
		margin-bottom: 4px;
	}
`;

const LegalInfos = ({ cartao, dependentes, cards }) => {
	console.log(cartao);
	console.log(dependentes);
	console.log(cards);

	return (
		<Frame3Seven>
			<Frame3Five>
				<NumeroDoCartaoSaude>Número do cartão saúde: </NumeroDoCartaoSaude>
				<Num35966120211203023536Two>
					{cartao.cardNum}
				</Num35966120211203023536Two>
			</Frame3Five>
			{cartao.dependentes.length > 0 ? (
				<Frame4Two>
					<Dependentes>Dependentes:</Dependentes>
					<Frame3Six>
						{cartao.dependentes.map(dependente => (
							<Frame3Five key={dependente.ID}>
								<JoseCarlosFerreira>
									{dependente.NOME_DEPENDENTE}
								</JoseCarlosFerreira>

								<Num35966120211203023536Two>
									{dependente.num}
								</Num35966120211203023536Two>
							</Frame3Five>
						))}
					</Frame3Six>
				</Frame4Two>
			) : (
				<> </>
			)}
		</Frame3Seven>
	);
};

const mapStateToProps = state => ({
	dependentes: state.mail.dependentes,
	cards: state.mail.cartoes,
});

export default connect(mapStateToProps)(LegalInfos);

// {
// 	/* <Frame3Five>
//     <JoseCarlosFerreira>
//         {cartao.dependentes.NOME_DEPENDENTE}
//     </JoseCarlosFerreira>

//     <Num35966120211203023536Two>
//         {cartao.dependentes.NRO_SEGURO}
//     </Num35966120211203023536Two>
// </Frame3Five> */
// }
// {
// 	/* {cartao.dependentes.map(dependente => (
//     <Frame3Five key={dependente.ID}>
//         <JoseCarlosFerreira>
//             {dependente.NOME_DEPENDENTE}
//         </JoseCarlosFerreira>

//         <Num35966120211203023536Two>
//             {dependente.NRO_SEGURO}
//         </Num35966120211203023536Two>
//     </Frame3Five>
// ))} */
// }
