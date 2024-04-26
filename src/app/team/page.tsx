import Associate from '@/components/team/Associate'
import Body from '@/components/template/Body'
import Layout from '@/components/template/Layout'
import { associates } from '../../../data/infos'

const page = (): React.JSX.Element => {
  return (
    <main>
      <Layout>
        <Body
          banner='bg-BannerTeam'
          title='Conheça nosso time'
        >
          <div className='w-full flex justify-center items-center my-5 flex-wrap gap-14'>
            {associates.map((associate, i) => (
              <Associate
              key={i}
              name={associate.nome}
              email={associate.email}
              training={associate.training}
              more={associate.more}
              />

            ))}
          </div>
        </Body>
      </Layout>
    </main>
  )
}

export default page