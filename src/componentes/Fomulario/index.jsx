import { Botao } from "../Botao";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDoFormulario } from "../CampoDoFormulario";
import { Label } from "../Label";
import { ListaSuspensa } from "../ListaSuspensa";

import { TituloFormulario } from "../TituloFormulario";
import './formulario.estilo.css'

export function Formulario() {

  return (
    <form className='form'>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <div className="campo">
        <CampoDoFormulario>
          <Label htmlFor="nome">
            Qual o nome do evento?
          </Label>
          <CampoDeEntrada type="text" id='nome' placeholder='Summer Dev' />
        </CampoDoFormulario>
        <CampoDoFormulario>
          <Label htmlFor="dataEvento">
            Data do evento
          </Label>
          <CampoDeEntrada type="date" id='dataEvento' placeholder='XX/XX/XXXX' />
        </CampoDoFormulario>
        <CampoDoFormulario>
          <Label htmlFor="dataEvento">
            Tema do evento
          </Label>
          <ListaSuspensa />
        </CampoDoFormulario>
      </div>
      <div className="acoes">
       <Botao>
        Criar Evento
       </Botao>
      </div>


    </form>
  )
}