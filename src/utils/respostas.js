
export default function resposta(tipo) {

  var res

  console.log('tipo', tipo)

  if (tipo === 'impressora') {
    res =
      <div>
        <p style={{ textAlign: 'center' }}><span style={{ fontSize: '24px', textShadow: 'rgba(136, 136, 136, 0.5) 3px -2px 6px' }}>Detectamos que seu problema é com a IMPRESSORA.</span></p>
        <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '24px', textShadow: 'rgba(136, 136, 136, 0.5) 3px -2px 6px' }}>Para resolver este tipo de problema siga os seguintes passos:</span></p>
        <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '24px', textShadow: 'rgba(136, 136, 136, 0.5) 3px -2px 6px' }}>1. Se a impressora estiver conectada a uma rede verifique se o seu computador está conectada a mesma rede.</span></p>
        <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '24px', textShadow: 'rgba(136, 136, 136, 0.5) 3px -2px 6px' }}>2. Desconecte seu computador da rede e o reconecte novamente.</span></p>
        <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '24px', textShadow: 'rgba(136, 136, 136, 0.5) 3px -2px 6px' }}>3. Tente novamente enviar uma impressão para a impressora.</span></p>
        <p style={{ textAlign: 'justify' }}><br /></p>
      </div>
  }

  else if (tipo === 'senha') {
    res =
      <div>
        <p style={{ textAlign: 'center' }}><span style={{ fontSize: '24px', textShadow: 'rgba(136, 136, 136, 0.5) 3px -2px 6px' }}>Detectamos que seu problema é com a sua SENHA.</span></p>
        <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '24px', textShadow: 'rgba(136, 136, 136, 0.5) 3px -2px 6px' }}>Para resolver este tipo de problema siga os seguintes passos:</span></p>
        <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '24px', textShadow: 'rgba(136, 136, 136, 0.5) 3px -2px 6px' }}>1. Dê um click em recuperar senha que um email será disparado para o email digitado. Caso o email cadastrado for diferente do digitado será disparado um erro.</span></p>
        <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '24px', textShadow: 'rgba(136, 136, 136, 0.5) 3px -2px 6px' }}>2. Caso o email estiver correto. Será enviado um email para Você com todos os passos para recuperar sua senha</span></p>
        {/* <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '24px', textShadow: 'rgba(136, 136, 136, 0.5) 3px -2px 6px' }}>3. Caso não tenha dado erro por qualuqer motido, um técnico será destacado para resolver o seu problema.</span></p>
        <p style={{ textAlign: 'justify' }}><br /></p>
        <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '24px', textShadow: 'rgba(136, 136, 136, 0.5) 3px -2px 6px' }}>Um ticket foi aberto para o seu problema.&nbsp;</span></p>
      */} </div>
  }

  else if (tipo === 'computador') {
    res =
      <div>
        <p style={{ textAlign: 'center' }}><span style={{ fontSize: '24px', textShadow: 'rgba(136, 136, 136, 0.5) 3px -2px 6px' }}>Detectamos que seu problema é com seu COMPUTADOR.</span></p>
        <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '24px', textShadow: 'rgba(136, 136, 136, 0.5) 3px -2px 6px' }}>Para resolver este tipo de problema siga os seguintes passos:</span></p>
        <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '24px', textShadow: 'rgba(136, 136, 136, 0.5) 3px -2px 6px' }}>1. Se o seu computador está travado. Reinicie seu computador.</span></p>
        <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '24px', textShadow: 'rgba(136, 136, 136, 0.5) 3px -2px 6px' }}>2. Se ele apresenta lentidão. Salve seus documentos em aberto e reinicie seu computador</span></p>
        {/*  <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '24px', textShadow: 'rgba(136, 136, 136, 0.5) 3px -2px 6px' }}></span></p>
        <p style={{ textAlign: 'justify' }}><br /></p>
        <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '24px', textShadow: 'rgba(136, 136, 136, 0.5) 3px -2px 6px' }}>Um ticket foi aberto para o seu problema.&nbsp;</span></p>
     */}  </div>
  }

  else if (tipo === 'gru') {
    res =
      <div>
        <p style={{ textAlign: 'center' }}><span style={{ fontSize: '24px', textShadow: 'rgba(136, 136, 136, 0.5) 3px -2px 6px' }}>Detectamos que seu problema é com a GRU.</span></p>
        <p style={{ textAlign: 'justify' }}><br /></p>
        <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '24px', textShadow: 'rgba(136, 136, 136, 0.5) 3px -2px 6px' }}>Um ticket foi aberto para o seu problema. Logo um técnico irar encontado com o Você&nbsp;</span></p>
      </div>
  }

  else if (tipo === 'gsi') {
    res =
      <div>
        <p style={{ textAlign: 'center' }}><span style={{ fontSize: '24px', textShadow: 'rgba(136, 136, 136, 0.5) 3px -2px 6px' }}>Detectamos que seu problema é com a sua GSI.</span></p>
        <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '24px', textShadow: 'rgba(136, 136, 136, 0.5) 3px -2px 6px' }}>Para resolver este tipo de problema siga os seguintes passos:</span></p>
        <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '24px', textShadow: 'rgba(136, 136, 136, 0.5) 3px -2px 6px' }}>1.Ligue para o telefone 9999-9999, para resolver o seu problema</span></p>
        <p style={{ textAlign: 'justify' }}><br /></p>
        <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '24px', textShadow: 'rgba(136, 136, 136, 0.5) 3px -2px 6px' }}>Um ticket foi aberto para o seu problema.&nbsp;</span></p>
      </div>
  }

  else {
    res =
      <div>
        <p style={{ textAlign: 'center' }}><span style={{ fontSize: '24px', textShadow: 'rgba(136, 136, 136, 0.5) 3px -2px 6px' }}>Infelizmente ainda nao temos respostas para a seu problema.</span></p>
      </div>
  }

  return res
}