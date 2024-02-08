import { Layout } from '../../components/layout';
import { Providers } from '../../redux/providers';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode
}

const App = (props: Props) => {
  return (
    <>
      <Providers>
        <Layout />
      </Providers>
    </>
  )
}

export default App


// crear todo 
// poner estado ToDo en complete o pending
// editar Todo
// Eliminar Todo
// vista con todo listado (filtro por texto, y filtro por estado)