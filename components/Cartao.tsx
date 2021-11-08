/** @format */

import React, { ReactChild } from 'react';
import styles from '../styles/Cartao.module.css';

interface CartaoProps {
	bgColor?: string;
	children?: ReactChild;
}

export default function Cartao({ bgColor, children }: CartaoProps) {
	return (
		<div
			className={styles.cartao}
			style={{
				backgroundColor: bgColor ?? '#fff',
			}}>
			{children}
		</div>
	);
}
