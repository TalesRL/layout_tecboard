import { Botao } from "../Botao";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDoFormulario } from "../CampoDoFormulario";
import { Label } from "../Label";
import { ListaSuspensa } from "../ListaSuspensa";

import { TituloFormulario } from "../TituloFormulario";
import './formulario.estilo.css'

export function Formulario({temas, aoSubmerter}) {

  function aoFormSubmetido (formData) {
    console.log('novo evento', formData)
    const evento = {
      capa: formData.get('capa'),
      tema: temas.find(function (item) {
        return item.id == formData.get ('tema')
      }),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nome')
    }
    aoSubmeter(evento)
  }

  return (
    <form className='form' action={aoFormSubmetido}>
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
          <Label htmlFor="capa">
            Qual o endereço da imagem de capa?
          </Label>
          <CampoDeEntrada type="text" id='capa' placeholder='http://...' />
        </CampoDoFormulario>
        <CampoDoFormulario>
          <Label htmlFor="dataEvento">
            Data do evento
          </Label>
          <CampoDeEntrada type="date" 
          id='dataEvento' 
          name='XX/XX/XXXX' />
        </CampoDoFormulario>
        <CampoDoFormulario>
          <Label htmlFor="tema">
            Tema do evento
          </Label>
          <ListaSuspensa id="tema" name="tema" itens={temas}/>
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