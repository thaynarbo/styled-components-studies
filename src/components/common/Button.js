import styled, { css } from 'styled-components';

export const Button = styled.button`
	color: white;
	background: ${(p) => (p.secondary ? '#fdd54f' : '#f8049c')};
	font-weight: bold;
	width: 100%;
	border: none;
	${(p) =>
		p.large
			? css`
					padding: 10px;
					border-radius: 5px;
					font-size: 1.5em;
			  `
			: css`
					padding: 8px;
					border-radius: 4px;
					font-size: 1em;
			  `}

	&:disabled {
		background: #eee;
		color: #666;
	}
`;
// css-helper
// ${p=> p.large? css`
// padding:10px`:css`
//padding:8px `}
