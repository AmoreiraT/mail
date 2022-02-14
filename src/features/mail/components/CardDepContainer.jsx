import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
// import { Theme } from '../../../shared/constants/colors';
import GlassMorphCard from './GlassMorphCard';
import LegalInfos from './LegalInfos';

export const CardLegalContainer = styled.div`
	height: max-content;
	position: relative;
	margin-bottom: 40px;
	display: flex;
	justify-content: center;
	justify-items: center;
	@media (max-width: 800px) {
		flex-direction: column;
		position: relative;
		align-items: center;
	}
`;
export const CardLegalDivider = styled.div`
	width: fit-content;
	height: auto;
	position: relative;
	margin-bottom: 20px;
	&:not(:last-of-type) {
		margin-right: 80px;
	}
	&:not(:last-of-type) {
		@media (max-width: 800px) {
			margin-right: 0px;
		}
	}
`;

const CardDepContainer = ({ cartoes, nomeColab }) => {
	return (
		<CardLegalContainer>
			{cartoes.map(cartao => (
				<CardLegalDivider key={cartao.id}>
					<GlassMorphCard
						name={nomeColab}
						num={cartao.cardNum}
						nomePlano={cartao.nomePlano}
						iconCard={cartao.icon}
					/>
					<LegalInfos cartao={cartao} />
				</CardLegalDivider>
			))}
		</CardLegalContainer>
	);
};

const mapStateToProps = state => ({ cartoes: state.mail.cartoes });

export default connect(mapStateToProps)(CardDepContainer);
