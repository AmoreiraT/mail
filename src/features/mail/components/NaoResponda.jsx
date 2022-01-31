import React from 'react';

import styled from 'styled-components';
import { Theme } from '../../../shared/constants/colors';

export const Frame3Eleven = styled.div`
	position: relative;
	width: 100%;
	background-color: ${Theme.colors.leegaYellow};
	padding: 20px 32px 38px;

	flex-direction: column;
	align-items: center;
	align-self: stretch;
`;
export const AtencaoNaoRespondaEsseEMailEleE = styled.p`
	width: 100%;
	font-family: 'Roboto';
	font-size: 18px;
	font-weight: 500;
	line-height: 22px;
	color: rgba(0, 0, 0, 1);
	text-align: center;
	margin-bottom: 20px;
	letter-spacing: -0.18px;
`;
export const Frame3Ten = styled.div`
	display: flex;
	align-items: flex-start;
	align-self: stretch;
`;
export const NotaEstaMensagemContemInformacoesC = styled.p`
	font-family: 'Roboto';
	font-size: 14px;
	font-weight: 400;
	line-height: 17px;
	color: rgba(255, 255, 255, 1);
	flex: 1;
	margin-right: 40px;
	letter-spacing: -0.14px;
`;
export const NoteThisMessageContainsConfidential = styled.p`
	font-family: 'Roboto';
	font-size: 14px;
	font-weight: 400;
	line-height: 17px;
	color: rgba(255, 255, 255, 1);
	font-style: italic;
	flex: 1;
	letter-spacing: -0.14px;
`;

export default function NaoResponda() {
	return (
		<Frame3Eleven>
			<AtencaoNaoRespondaEsseEMailEleE>
				Atenção: não responda esse e-mail, ele é enviado automaticamente através
				do site.
			</AtencaoNaoRespondaEsseEMailEleE>
			<Frame3Ten>
				<NotaEstaMensagemContemInformacoesC>
					Nota: Esta mensagem contém informações confidenciais e os direitos são
					reservados à Porto Seguro S.A. e ao seu cliente.
					<br />
					Se você não é o receptor pretendido desta mensagem por favor não gere
					cópias e destrua a original imediatamente. Se você é o receptor
					pretendido desta mensagem você não deve divulgar ou distribuir a
					informação contida nele a terceiros sem o consentimento da Porto
					Seguro S.A.
				</NotaEstaMensagemContemInformacoesC>
				<NoteThisMessageContainsConfidential>
					Note: This message contains confidential information and the rights
					are reserved exclusively to the Porto Seguro S.A. and to his client.
					<br />
					If you are not the receiver intended of this message, please, does not
					manage copies and destroy the original immediately. If you are the
					receiver intended of this message you should not copy or distribute
					that information to others without the consent of the Porto Seguro
					S.A.
				</NoteThisMessageContainsConfidential>
			</Frame3Ten>
		</Frame3Eleven>
	);
}
