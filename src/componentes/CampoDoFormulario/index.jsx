import './campo-do-formulario.estilo.css'

export function CampoDoFormulario(props) {
  return (
    <fieldset className='input'>
      {props.children}
    </fieldset>
  )
}