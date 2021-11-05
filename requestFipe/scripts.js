const result = document.querySelector(`#result`);
const btn = document.querySelector(`#button`);
const log = document.querySelector(`#log`);
const tabela = document.querySelector(`#tabela-carros`);

const preencherTabela = (carro) => {
	if (!carro) {
		log.textContent = "Não existem registros a serem exibidos.";
		return;
	} else {
		return `
    <tr>
        <td>${carro.Valor}</td>
        <td>${carro.Marca}</td>
        <td>${carro.Modelo}</td>
        <td>${carro.AnoModelo}</td>
		<td>${carro.CodigoFipe}</td>
		<td>${carro.MesReferencia}</td>
		<td>${carro.TipoVeiculo}</td>
		<td>${carro.SiglaCombustivel}</td>
     </tr>
     `;
	}
};

btn.addEventListener("click", (evt) => {
	const options = {
		method: "GET",
		mode: "cors",
		cache: "default",
	};

	fetch(
		`https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos/2014-3`,
		options
	)
		.then(response => response.json())
		.then(data => preencherTabela(data))
		.then(data => (tabela.innerHTML = data));
});
