import React from 'react';

import styled from 'styled-components';
import { Theme } from '../../../shared/constants/colors';

export const GlassMorphismStyle = styled.div`
	position: relative;
	width: fit-content;
	height: fit-content;

	background: linear-gradient(
		95deg,
		rgb(255, 166, 0) 0%,
		rgba(255, 255, 255, 0.4) 100%,
		rgba(255, 255, 255, 0) 100%
	);
	overflow: hidden;
	border-radius: 20px;
	padding: 2px 2px 2px 2px;
	backdrop-filter: blur(50px);
`;
export const Frame1 = styled.div`
	background-size: cover;
	background-position: center;
	background-image: url('https://static.overlay-tech.com/assets/a132ce96-6a0e-4222-b26a-31d846c762d4.png');
	padding: 20px 14px 14px 20px;
	display: flex;
	align-items: flex-start;
	justify-content: start;
`;
export const Frame6 = styled.div`
	flex: 1;
	padding: 20px 4px 4px 4px;
	display: flex;
	align-items: flex-start;
	justify-content: start;
`;
export const Frame5 = styled.div`
	position: relative;
	display: relative;
	padding: 4px 0px 0px 0px;

	align-items: left;
	justify-content: left;
`;
export const VerivanMagalhaesFerreira = styled.p`
	font-family: 'Cousine';
	font-size: 14px;
	font-weight: 200;
	text-align: left;
	line-height: normal;
	color: rgb(100, 66, 2);
	text-transform: uppercase;
	position: flex;
	letter-spacing: 0.84px;
`;
export const Num35966120211203023536 = styled.p`
	color: rgb(104, 74, 17);
	position: relative;
	left: 0px;
	align-items: left;
	font-family: ${Theme.fonts.cousine18Regular.family};
	font-size: ${Theme.fonts.cousine18Regular.size};
	font-weight: ${Theme.fonts.cousine18Regular.weight};
	line-height: ${Theme.fonts.cousine18Regular.lineHeight};
`;
export const Frame4 = styled.div`
	padding: 0 0 2px;
	display: flex;
	flex-direction: column;
	align-items: left;
	justify-content: space-between;
	position: absolute;
	left: 0;
	top: 0;
`;
export const IconMapHealth = styled.img`
	flex: 1;
	margin-top: 10px;
	margin-left: 10px;
	align-self: left;
	object-fit: cover;
`;
export const Unimedica = styled.p`
	font-family: 'Cousine';
	font-size: 12px;
	font-weight: 800;
	line-height: normal;
	color: rgb(150, 102, 14);
	text-transform: uppercase;
	position: absolute;
	margin-top: 10px;
	margin-right: 10px;
	right: -252px;
	top: 1px;
`;

export default function GlassMorphCard({ name, num, nomePlano, iconCard }) {
	return (
		<GlassMorphismStyle>
			<Frame1>
				<Frame6>
					<Frame5>
						<Num35966120211203023536>{num}</Num35966120211203023536>
						<VerivanMagalhaesFerreira>{name}</VerivanMagalhaesFerreira>
					</Frame5>
					<Frame4>
						<IconMapHealth alt="" src={iconCard} />
						<Unimedica>{nomePlano}</Unimedica>
					</Frame4>
				</Frame6>
			</Frame1>
		</GlassMorphismStyle>
	);
}
