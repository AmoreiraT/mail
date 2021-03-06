import React from 'react';

import styled from 'styled-components';
import { Theme } from '../../../shared/constants/colors';

export const CartaoNoCentro = styled.div`
	position: relative;
	width: 100%;
`;

export const GlassMorphismStyle = styled.div`
	position: relative;
	width: max-content;
	min-width: 280px;
	min-height: 173px;
	height: fit-content;
	background-size: cover;
	background-position: center;
	background-image: url('https://static.overlay-tech.com/assets/9b92558e-7e4a-4613-b1df-2b6a3a544664.png');
	background: 180deg rgba(28, 27, 27, 0.85) 0% rgba(41, 41, 41, 0.1) 100%
		#828181 100%;

	overflow: hidden;
	border-radius: 20px;
	border: 2px solid rgba(63, 63, 63, 0.186);
	padding: 2px 2px 2px 2px;
	backdrop-filter: blur(50px);
	filter: drop-shadow(0 1mm 2mm rgba(119, 137, 157, 0.549));
`;
export const Frame1 = styled.div`
	position: relative;
	width: max-content;
	min-width: 280px;
	min-height: 173px;
	background-size: cover;
	background-position: center;
	background-image: url('https://static.overlay-tech.com/assets/a132ce96-6a0e-4222-b26a-31d846c762d4.png');
	padding: 20px 14px 14px 20px;
	display: relative;
`;
export const Frame6 = styled.div`
	flex: 1;
	padding: 20px 4px 4px 4px;
	display: flex;
	align-items: stretch;
`;
export const Frame5 = styled.div`
	position: relative;
	padding: 30px 0px 0px 0px;
	align-items: left;
	justify-content: left;
	align-self: stretch;
`;
export const VerivanMagalhaesFerreira = styled.p`
	font-family: 'Cousine';
	font-size: 14px;
	font-weight: 400;
	text-align: left;
	line-height: normal;
	color: #221f20;
	text-transform: uppercase;
	position: flex;
	letter-spacing: 0.84px;
`;
export const Num35966120211203023536 = styled.p`
	color: #221f20;
	position: relative;
	left: 0px;
	align-items: left;
	font-family: ${Theme.fonts.cousine18Regular.family};
	font-size: ${Theme.fonts.cousine18Regular.size};
	font-weight: ${Theme.fonts.cousine18Regular.weight};
	line-height: ${Theme.fonts.cousine18Regular.lineHeight};
`;
export const Frame4 = styled.div`
	position: absolute;
	width: 100%;
	padding: 0 0 2px;
	display: flexbox;
	flex-direction: row;
	justify-content: space-between;
	left: 0;
	top: 0;
`;
export const IconMapHealth = styled.img`
	position: flex;
	filter: drop-shadow(0 1mm 2mm rgb(235, 235, 235));

	width: max-content;
	flex: 1;
	margin-top: 10px;
	margin-left: 10px;
	align-self: left;
	object-fit: cover;
`;
export const Unimedica = styled.p`
	width: max-content;
	font-family: 'Myriad Pro', Myriad, 'Liberation Sans', 'Nimbus Sans L',
		'Helvetica Neue', Helvetica, Arial, sans-serif;
	font-size: 18px;
	font-weight: 600;
	line-height: normal;
	font-style: italic;
	color: #045d7e;
	filter: drop-shadow(0 1mm 2mm rgb(235, 235, 235));

	/* text-transform: uppercase; */
	position: relative;
	margin-top: 10px;
	margin-right: 10px;
	/* left: 50px; */
	/* right: 2px; */
	top: 1px;
`;

export default function GlassMorphCard({ name, num, nomePlano }) {
	return (
		<GlassMorphismStyle>
			<Frame1>
				<Frame6>
					<Frame5>
						<Num35966120211203023536>{num}</Num35966120211203023536>
						<VerivanMagalhaesFerreira>{name}</VerivanMagalhaesFerreira>
					</Frame5>
					<Frame4>
						<IconMapHealth
							alt=""
							src="https://static.overlay-tech.com/assets/a2445a6e-0ea9-49f4-ac5d-36e50c62108f.png"
						/>
						<Unimedica>{nomePlano}</Unimedica>
					</Frame4>
				</Frame6>
			</Frame1>
		</GlassMorphismStyle>
	);
}
