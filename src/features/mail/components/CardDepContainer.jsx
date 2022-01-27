import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
// import { Theme } from '../../../shared/constants/colors';
import GlassMorphCard from './GlassMorphCard';
import LegalInfos from './LegalInfos';

export const CardLegalContainer = styled.div`
	width: 100%;
	/* height: auto; */
	margin-bottom: 40px;
	/* padding: 0 40px 2px; */
	display: flex;

	justify-content: center;
`;
export const CardLegalDivider = styled.div`
	width: 290px;
	height: 450px;
	/* padding: 0 00px 0px 00px; */
	position: relative;
	&:not(:last-of-type) {
		margin-right: 80px;
	}
`;

const CardDepContainer = ({ cartoes, nomeColab }) => {
	console.log(cartoes);
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
