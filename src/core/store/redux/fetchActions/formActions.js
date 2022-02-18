import queryString from 'query-string';

// ////////////////////
// ////////////////////

// FORM PHASE

export const loginGuest = () => {
	return async dispatch => {
		await fetch('https://apps.blueprojects.com.br/arturos_mr/Security/login', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: 'leega_admin',
				password: 'leega@mr',
			}),
		})
			.then(response => response.json())
			.then(responseJson => {
				console.log(responseJson);

				// var token;

				const token = responseJson.data.auth_ticket;
				dispatch(this.getDomains(token));
			});
	};
};

export const getDomains = token => {
	return dispatch => {
		const value = queryString.parse(window.location.search);
		console.log(value.id);

		dispatch(this.getSolicitacoes(token, value.id));
		dispatch(this.setState({ token }));
		dispatch(this.getSexo(token));
		dispatch(this.getEstadoCivil(token));
		dispatch(this.getTipoDependente(token));
		dispatch(this.getTermos(token));
	};
};

export const getSolicitacoes = (token, ID) => {
	return dispatch => {
		try {
			const obj = {
				qid: 'MINHAS_SOLICITACOES:MINHAS_SOLICITACOES',
				conditions: [
					{
						filterid: 'HASH',
						values: [ID],
					},
				],
			};

			fetch('https://apps.blueprojects.com.br/arturos_mr/Integration/Query', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					auth: token,
				},
				body: JSON.stringify(obj),
			})
				.then(response => response.json())
				.then(responseJson => {
					console.log(responseJson);

					if (responseJson.list.length > 0) {
						dispatch(this.getOperadora(token, responseJson.list[0].FK_EMPRESA));

						dispatch(
							this.setState({
								loadingInicial: false,
								email: responseJson.list[0].EMail,
								whatsapp: responseJson.list[0].WhatsApp,
								solicitacao_empresa: responseJson.list[0].Empresa,
								nome: responseJson.list[0].Titular,
								id_solicitacao: responseJson.list[0].ID,
								cpf: responseJson.list[0].CPF,
								url_imagem: responseJson.list[0].Arquivo,
								cargo: responseJson.list[0].CARGO,
								dataAdmissao:
									responseJson.list[0].DATA_ADMISSAO != null
										? responseJson.list[0].DATA_ADMISSAO
										: null,
								regime: responseJson.list[0].REGIME,
								fk_cargo: responseJson.list[0].ID_CARGO,
							}),
						);
					}
				});
		} catch (err) {
			console.log(err);
		}
	};
};

export const getSexo = token => {
	return dispatch => {
		try {
			const obj = {
				qid: 'DOMINIOS:SEXO',
				conditions: [],
			};

			fetch('https://apps.blueprojects.com.br/arturos_mr/Integration/Query', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					auth: token,
				},
				body: JSON.stringify(obj),
			})
				.then(response => response.json())
				.then(responseJson => {
					console.log(responseJson);

					dispatch(this.setState({ domainSexo: responseJson.list }));
				});
		} catch (err) {
			console.log(err);
		}
	};
};

export const getTermos = token => {
	return dispatch => {
		try {
			const obj = {
				qid: 'LGPD:LGPD',
				conditions: [],
			};

			fetch('https://apps.blueprojects.com.br/arturos_mr/Integration/Query', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					auth: token,
				},
				body: JSON.stringify(obj),
			})
				.then(response => response.json())
				.then(responseJson => {
					console.log(responseJson);

					if (!responseJson.error) {
						if (responseJson.list.length > 0) {
							dispatch(this.setState({ urlPDF: responseJson.list[0].Arquivo }));
						}
					}
				});
		} catch (err) {
			console.log(err);
		}
	};
};

export const getEstadoCivil = token => {
	return dispatch => {
		try {
			const obj = {
				qid: 'DOMINIOS:ESTADO_CIVIL',
				conditions: [],
			};

			fetch('https://apps.blueprojects.com.br/arturos_mr/Integration/Query', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					auth: token,
				},
				body: JSON.stringify(obj),
			})
				.then(response => response.json())
				.then(responseJson => {
					console.log(responseJson);

					dispatch(this.setState({ domainEstadoCivil: responseJson.list }));
				});
		} catch (err) {
			console.log(err);
		}
	};
};
export const getCEP = (token, cep) => {
	return dispatch => {
		try {
			const obj = {
				qid: 'DOMINIOS:CEP',
				conditions: [
					{
						filterid: 'CEP',
						values: [cep],
					},
				],
			};

			fetch('https://apps.blueprojects.com.br/arturos_mr/Integration/Query', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					auth: token,
				},
				body: JSON.stringify(obj),
			})
				.then(response => response.json())
				.then(responseJson => {
					console.log(responseJson);

					if (!responseJson.error) {
						if (responseJson.list.length > 0) {
							dispatch(
								this.setState({
									endereco: responseJson.list[0].ENDERECO,
									bairro: responseJson.list[0].BAIRRO,
									cidade: responseJson.list[0].CIDADE,
								}),
							);
						}
					}
				});
		} catch (err) {
			console.log(err);
		}
	};
};

export const getValores = (token, ID_PLANO) => {
	return dispatch => {
		try {
			const obj = {
				qid: 'DOMINIOS:VALORES_PLANO',
				conditions: [
					{
						filterid: 'ID_PLANO',
						values: [ID_PLANO],
					},
				],
			};

			fetch('https://apps.blueprojects.com.br/arturos_mr/Integration/Query', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					auth: token,
				},
				body: JSON.stringify(obj),
			})
				.then(response => response.json())
				.then(responseJson => {
					console.log(responseJson);

					if (responseJson.list.length > 0) {
						dispatch(
							this.setState({
								valor_pagar: responseJson.list[0].VALOR_PAGAR.toFixed(2),
								valor_plano: responseJson.list[0].VALOR_PLANO.toFixed(2),
								valor_participacao:
									responseJson.list[0].VALOR_PARTICIPACAO.toFixed(2),
							}),
						);
					}
				});
		} catch (err) {
			console.log(err);
		}
	};
};

export const updateDadosTitular = () => {
	return dispatch => {
		if (this.state.email === '') {
			dispatch(
				this.setState({
					showError: true,
					erroMessage: 'Preencha o campo e-mail',
				}),
			);
			return;
		}

		if (this.state.whatsapp === '') {
			dispatch(
				this.setState({
					showError: true,
					erroMessage: 'Preencha o campo Whatsapp',
				}),
			);
			return;
		}

		if (this.state.cpf === '') {
			dispatch(
				this.setState({ showError: true, erroMessage: 'Preencha o campo CPF' }),
			);
			return;
		}

		if (this.state.rg === '') {
			this.setState({ showError: true, erroMessage: 'Preencha o campo RG' });
			return;
		}

		if (this.state.nomeMae === '') {
			this.setState({
				showError: true,
				erroMessage: 'Preencha o campo nome da mãe',
			});
			return;
		}

		if (this.state.cep === '') {
			this.setState({ showError: true, erroMessage: 'Preencha o campo cep' });
			return;
		}

		if (this.state.endereco === '') {
			this.setState({
				showError: true,
				erroMessage: 'Preencha o campo endereço',
			});
			return;
		}

		if (this.state.bairro === '') {
			this.setState({
				showError: true,
				erroMessage: 'Preencha o campo bairro',
			});
			return;
		}

		if (this.state.cidade === '') {
			this.setState({
				showError: true,
				erroMessage: 'Preencha o campo cidade',
			});
			return;
		}

		if (this.state.peso === '') {
			this.setState({ showError: true, erroMessage: 'Preencha o campo peso' });
			return;
		}

		if (this.state.altura === '') {
			this.setState({
				showError: true,
				erroMessage: 'Preencha o campo altura',
			});
			return;
		}

		if (this.state.selectedTemPlanoSaude === '') {
			this.setState({
				showError: true,
				erroMessage: 'Preencha o campo Plano Saúde',
			});
			return;
		}

		if (this.state.selectedTemOdonto === '') {
			this.setState({
				showError: true,
				erroMessage: 'Preencha o campo Plano Odonto',
			});
			return;
		}

		if (this.state.selectedTemPlanoSaude === 100) {
			if (this.state.selectedOperadora === '') {
				this.setState({
					showError: true,
					erroMessage: 'Preencha o campo Operadora',
				});
				return;
			}

			if (this.state.selectedPlano === '') {
				this.setState({
					showError: true,
					erroMessage: 'Preencha o campo Plano',
				});
				return;
			}
		}

		if (this.state.selectedTemOdonto === 100) {
			if (this.state.selectedOperadoraOdonto === '') {
				this.setState({
					showError: true,
					erroMessage: 'Preencha o campo Operadora',
				});
				return;
			}

			if (this.state.selectedPlanoOdonto === '') {
				this.setState({
					showError: true,
					erroMessage: 'Preencha o campo Plano',
				});
				return;
			}
		}

		if (this.state.outroBeneficio === 100) {
			if (this.state.selectedOperadoraOutroBeneificio == null) {
				this.setState({
					showError: true,
					erroMessage: 'Preencha o campo Operadora',
				});
				return;
			}

			if (this.state.selectedBeneficio == null) {
				this.setState({
					showError: true,
					erroMessage: 'Preencha o campo Benefício',
				});
				return;
			}
		}

		this.setState({ loading: true });

		const obj = {
			tid: 'VF9NUl9USVRVTEFSOjA5ODI5Mw==',
			fid: 100,
			data: {
				DATA_ADMISSAO: new Date(this.state.dataAdmissao),
				FK_SEXO: this.state.selectedSexo,
				FK_ESTADO_CIVIL: this.state.selectedEstadoCivil,
				CEP: this.state.cep,
				ENDERECO: this.state.endereco,
				BAIRRO: this.state.bairro,
				CPF: this.state.cpf,
				RG: this.state.rg,
				PESO: parseInt(this.state.peso, 10),
				ALTURA: parseFloat(this.state.altura.replace(',', '.')),
				DATA_NASCIMENTO: new Date(this.state.dataNascimento),
				EMAIL: this.state.email,
				NOME_MAE: this.state.nomeMae,
				FK_PLANO_SAUDE: this.state.selectedTemPlanoSaude,
				FK_ODONTO: this.state.selectedTemOdonto,
				FK_OPERADORA_ODONTO: this.state.selectedOperadoraOdonto,
				FK_PLANO_ODONTO: this.state.selectedPlanoOdonto,
				IDADE: this.state.idade,
				CIDADE: this.state.cidade,
				FK_PLANO: this.state.selectedPlano,
				FK_OPERADORA_SAUDE: this.state.selectedOperadora,
				WHATSAPP: this.state.whatsapp,
				FLG_SEGURO_VIDA: this.state.seguroVida,
				// PERGUNTA_1: this.state.pergunta_1,
				RESPOSTA_1: this.state.resposta_1,
				ESCLARECIMENTO_1: this.state.esclarecimento_1,

				// PERGUNTA_2: this.state.pergunta_2,
				RESPOSTA_2: this.state.resposta_2,
				ESCLARECIMENTO_2: this.state.esclarecimento_2,

				// PERGUNTA_3: this.state.pergunta_3,
				RESPOSTA_3: this.state.resposta_3,
				ESCLARECIMENTO_3: this.state.esclarecimento_3,

				// PERGUNTA_4: this.state.pergunta_4,
				RESPOSTA_4: this.state.resposta_4,
				ESCLARECIMENTO_4: this.state.esclarecimento_4,

				// PERGUNTA_5: this.state.pergunta_5,
				RESPOSTA_5: this.state.resposta_5,
				ESCLARECIMENTO_5: this.state.esclarecimento_5,

				// PERGUNTA_6: this.state.pergunta_6,
				RESPOSTA_6: this.state.resposta_6,
				ESCLARECIMENTO_6: this.state.esclarecimento_6,

				// PERGUNTA_7: this.state.pergunta_7,
				RESPOSTA_7: this.state.resposta_7,
				ESCLARECIMENTO_7: this.state.esclarecimento_7,

				FLG_OUTRO_BENEFICIO: this.state.outroBeneficio,
				FK_OPERADORA_BENEFICIOS: this.state.selectedOperadoraOutroBeneificio,
				FK_OUTRO_BENEFICIO: this.state.selectedBeneficio,

				VALOR_PLANO: this.state.valor_plano,
				VALOR_PARTICIPACAO: this.state.valor_participacao,
				FLG_TERMO_ACEITE: this.state.aceitoPagar,
				// VALOR_PAGAR: this.state.valor_pagar,
			},
			key: {
				id: this.state.id_solicitacao,
			},
		};

		fetch('https://apps.blueprojects.com.br/arturos_mr/Integration/Save', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				auth: this.state.token,
			},
			body: JSON.stringify(obj),
		})
			.then(response => response.json())
			.then(responseJson => {
				console.log(responseJson);

				dispatch(this.setState({ loading: false }));

				if (responseJson.error) {
					dispatch(
						this.setState({
							erroMessage: responseJson.error.message,
							showError: true,
						}),
					);
				} else {
					dispatch(this.setState({ showSuccess: true, selectedStep: 1 }));
				}
			});
	};
};

export const clearModal = () => {
	return dispatch => {
		dispatch(
			this.setState({
				dependente_nome: '',
				selectedTipoDependente: null,
				dependente_dataNascimento: null,
				dependente_nome_mae: '',
				dependente_cpf: '',
				dependente_rg: '',
				selectedDependenteSaude: null,
				selectedDependenteOdonto: null,
				dependente_peso: '',
				dependente_altura: '',
			}),
		);
		dispatch(
			this.setState({
				dependente_esclarecimento_1: '',
				dependente_esclarecimento_2: '',
				dependente_esclarecimento_3: '',
				dependente_esclarecimento_4: '',
				dependente_esclarecimento_5: '',
				dependente_esclarecimento_6: '',
				dependente_esclarecimento_7: '',
				dependente_nome: '',
				dependente_nome_mae: '',
				dependente_peso: '',
				dependente_cpf: '',
				dependente_altura: '',
				termoAceiteOdonto: 101,
			}),
		);
	};
};

export const saveDependente = () => {
	return dispatch => {
		const array = this.state.arrayDependentes;

		if (this.state.dependente_cpf === '') {
			this.setState({ showError: true, erroMessage: 'Preencha o campo CPF' });
			return;
		}

		if (this.state.dependente_rg === '') {
			this.setState({ showError: true, erroMessage: 'Preencha o campo RG' });
			return;
		}

		if (this.state.dependente_nome_mae === '') {
			this.setState({
				showError: true,
				erroMessage: 'Preencha o campo nome da mãe',
			});
			return;
		}

		this.setState({ loading: true });

		const obj = {
			tid: 'VF9NUl9ERVBFTkRFTlRFOjExNjUwOQ==',
			fid: 110,
			data: {
				FK_TITULAR: this.state.id_solicitacao,
				NOME_DEPENDENTE: this.state.dependente_nome,
				FK_TIPO_DEPENDENTE: this.state.selectedTipoDependente,
				DATA_NASCIMENTO: this.state.dependente_dataNascimento,
				NOME_MAE: this.state.dependente_nome_mae,
				CPF: this.state.dependente_cpf,
				RG: this.state.dependente_rg,
				FLG_DEPENDE_SAUDE: this.state.selectedDependenteSaude,
				FLG_DEPENDE_ODONTO: this.state.selectedDependenteOdonto,
				PESO: this.state.dependente_peso,
				ALTURA: this.state.dependente_altura,
				FLG_ACEITE_DIFERENCA: this.state.termoAceiteOdonto,
			},
		};

		fetch('https://apps.blueprojects.com.br/arturos_mr/Integration/Save', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				auth: this.state.token,
			},
			body: JSON.stringify(obj),
		})
			.then(response => response.json())
			.then(responseJson => {
				console.log(responseJson);

				dispatch(this.setState({ loading: false }));

				if (responseJson.error) {
					dispatch(
						this.setState({
							erroMessage: responseJson.error.message,
							showError: true,
						}),
					);
				} else {
					dispatch(this.setState({ showSuccess: true, openModal: false }));

					const data = {
						FK_TITULAR: this.state.id_solicitacao,
						NOME_DEPENDENTE: this.state.dependente_nome,
						FK_TIPO_DEPENDENTE: this.state.selectedTipoDependente,
						DATA_NASCIMENTO: this.state.dependente_dataNascimento,
						NOME_MAE: this.state.dependente_nome_mae,
						CPF: this.state.dependente_cpf,
						RG: this.state.dependente_rg,
						FLG_DEPENDE_SAUDE: this.state.selectedDependenteSaude,
						FLG_DEPENDE_ODONTO: this.state.selectedDependenteOdonto,
						PESO: this.state.dependente_peso,
						ALTURA: this.state.dependente_altura,
						FLG_ACEITE_DIFERENCA: this.state.termoAceiteOdonto,
					};

					array.push(data);

					dispatch(this.setState({ arrayDependentes: array }));
				}
			});
	};
};

export const finalizarAceite = () => {
	return dispatch => {
		const obj = {
			tid: 'VF9NUl9USVRVTEFSOjA5ODI5Mw==',
			fid: 100,
			data: {
				DATA_ACEITE: new Date(),
				FLG_VALIDADO: this.state.termoAceito,
				DATA_ADMISSAO: new Date(this.state.dataAdmissao),
				FK_SEXO: this.state.selectedSexo,
				FK_ESTADO_CIVIL: this.state.selectedEstadoCivil,
				CEP: this.state.cep,
				ENDERECO: this.state.endereco,
				BAIRRO: this.state.bairro,
				CPF: this.state.cpf,
				RG: this.state.rg,
				PESO: parseInt(this.state.peso, 10),
				ALTURA: parseFloat(this.state.altura.replace(',', '.')),
				DATA_NASCIMENTO: new Date(this.state.dataNascimento),
				EMAIL: this.state.email,
				NOME_MAE: this.state.nomeMae,
				FK_PLANO_SAUDE: this.state.selectedTemPlanoSaude,
				FK_ODONTO: this.state.selectedTemOdonto,
				FK_OPERADORA_ODONTO: this.state.selectedOperadoraOdonto,
				FK_PLANO_ODONTO: this.state.selectedPlanoOdonto,
				IDADE: this.state.idade,
				FK_PLANO: this.state.selectedPlano,
				FK_OPERADORA_SAUDE: this.state.selectedOperadora,
				WHATSAPP: this.state.whatsapp,
				FLG_SEGURO_VIDA: this.state.seguroVida,
				// PERGUNTA_1: this.state.pergunta_1,
				RESPOSTA_1: this.state.resposta_1,
				ESCLARECIMENTO_1: this.state.esclarecimento_1,

				// PERGUNTA_2: this.state.pergunta_2,
				RESPOSTA_2: this.state.resposta_2,
				ESCLARECIMENTO_2: this.state.esclarecimento_2,

				// PERGUNTA_3: this.state.pergunta_3,
				RESPOSTA_3: this.state.resposta_3,
				ESCLARECIMENTO_3: this.state.esclarecimento_3,

				// PERGUNTA_4: this.state.pergunta_4,
				RESPOSTA_4: this.state.resposta_4,
				ESCLARECIMENTO_4: this.state.esclarecimento_4,

				// PERGUNTA_5: this.state.pergunta_5,
				RESPOSTA_5: this.state.resposta_5,
				ESCLARECIMENTO_5: this.state.esclarecimento_5,

				// PERGUNTA_6: this.state.pergunta_6,
				RESPOSTA_6: this.state.resposta_6,
				ESCLARECIMENTO_6: this.state.esclarecimento_6,

				// PERGUNTA_7: this.state.pergunta_7,
				RESPOSTA_7: this.state.resposta_7,
				ESCLARECIMENTO_7: this.state.esclarecimento_7,

				FLG_OUTRO_BENEFICIO: this.state.outroBeneficio,
				FK_OPERADORA_BENEFICIOS: this.state.selectedOperadoraOutroBeneificio,
				FK_OUTRO_BENEFICIO: this.state.selectedBeneficio,
			},
			key: {
				id: this.state.id_solicitacao,
			},
		};

		fetch('https://apps.blueprojects.com.br/arturos_mr/Integration/Save', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				auth: this.state.token,
			},
			body: JSON.stringify(obj),
		})
			.then(response => response.json())
			.then(responseJson => {
				console.log(responseJson);

				dispatch(this.setState({ concluido: true }));
			});
	};
};

export const handleChangeSexo = event => {
	return dispatch => {
		dispatch(this.setState({ selectedSexo: event.target.value }));
	};
};

// export const handleChangeData = event => {};

export const handleClose = () => {
	this.setState({ showSuccess: false, showError: false });
};

export const renderContainers = () => {
	return dispatch => {
		if (this.state.selectedStep === 0) {
			dispatch(this.renderTitular());
		}
		if (this.state.selectedStep === 1) {
			dispatch(this.renderDependente());
		}
		if (this.state.selectedStep === 2) {
			dispatch(this.renderConcluido());
		}
	};
};
