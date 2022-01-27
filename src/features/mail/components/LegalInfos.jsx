import React from 'react';

import styled from 'styled-components';
import { Theme } from '../../../shared/constants/colors';

export const Frame3Seven = styled.div`
	padding: 0 0 2px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: relative;
	left: 0;
	bottom: 0;
`;
export const Frame3Five = styled.div`
	margin-bottom: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	align-self: stretch;
`;
export const NumeroDoCartaoSaude = styled.p`
	font-family: 'Roboto';
	font-size: 14px;
	font-weight: 300;
	line-height: 17px;
	color: rgba(0, 0, 0, 1);
	align-self: stretch;
	margin-bottom: 8px;
	letter-spacing: -0.14px;
`;
export const Num35966120211203023536Two = styled.p`
	width: 159px;
	font-family: 'Roboto';
	font-size: 14px;
	font-weight: 700;
	line-height: 17px;
	color: ${Theme.colors.darkSlateGray};
	text-align: center;
	letter-spacing: -0.14px;
`;
export const Frame4Two = styled.div`
	padding: 0 0 2px;
	display: flex;
	align-items: flex-start;
	align-self: stretch;
`;
export const Dependentes = styled.p`
	font-family: 'Roboto';
	font-size: 14px;
	font-weight: 300;
	line-height: 17px;
	color: rgba(0, 0, 0, 1);
	text-align: center;
	margin-right: 10px;
	letter-spacing: -0.14px;
`;
export const Frame3Six = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex: 1;
`;
export const JoseCarlosFerreira = styled.p`
	width: 221px;
	font-family: 'Roboto';
	font-size: 14px;
	font-weight: 700;
	line-height: 17px;
	color: ${Theme.colors.darkSlateGray};
	letter-spacing: -0.14px;
	&:not(:last-of-type) {
		margin-bottom: 4px;
	}
`;

const LegalInfos = ({ cartao }) => {
	console.log(cartao);
	return (
		<Frame3Seven>
			<Frame3Five>
				<NumeroDoCartaoSaude>Número do cartão saúde: </NumeroDoCartaoSaude>
				<Num35966120211203023536Two>
					{cartao.cardNum}
				</Num35966120211203023536Two>
			</Frame3Five>
			<Frame4Two>
				<Dependentes>Dependentes:</Dependentes>
				<Frame3Six>
					{cartao.dependentes.map(dependente => (
						<Frame3Five key={dependente.id}>
							<JoseCarlosFerreira>{dependente.name}</JoseCarlosFerreira>
							{/* <NumeroDoCartaoSaude>
								Número do cartão saúde:{' '}
							</NumeroDoCartaoSaude> */}
							<Num35966120211203023536Two>
								{dependente.cardNum}
							</Num35966120211203023536Two>
						</Frame3Five>
					))}
				</Frame3Six>
			</Frame4Two>
		</Frame3Seven>
	);
};

export default LegalInfos;
