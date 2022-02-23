export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  // console.log(diasSemana, horarioSemana);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  // console.log(semanaAberto);

  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);
  console.log(horarioAberto);

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
  // console.log(diaAgora);
  // console.log(horarioAgora);

  /* const agora = new Date();
  const futuro = new Date('Dec 24 2021 23:59');

  console.log(agora.getMonth());
  console.log(futuro);

  console.log(agora.getTime());
  console.log(futuro.getTime());

  function transformarDias(tempo) {
    return tempo / (24 * 60 * 60 * 1000);
  }

  const diasAgora = transformarDias(agora.getTime());
  const diasFuturo = transformarDias(futuro.getTime());

  console.log(diasFuturo - diasAgora); */
}
